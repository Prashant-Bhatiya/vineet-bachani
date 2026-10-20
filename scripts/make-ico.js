const fs = require('fs');
const path = require('path');

const pngBuffer = fs.readFileSync(path.join(__dirname, '../public/logo/prathvi-favicon-64.png'));

// Construct true ICO container wrapping PNG
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // Reserved
header.writeUInt16LE(1, 2); // Type 1 (ICO)
header.writeUInt16LE(1, 4); // Number of images (1)

const entry = Buffer.alloc(16);
entry.writeUInt8(64, 0); // Width 64
entry.writeUInt8(64, 1); // Height 64
entry.writeUInt8(0, 2);  // Color count (0 = no palette)
entry.writeUInt8(0, 3);  // Reserved
entry.writeUInt16LE(1, 4); // Color planes
entry.writeUInt16LE(32, 6); // Bits per pixel
entry.writeUInt32LE(pngBuffer.length, 8); // Image size in bytes
entry.writeUInt32LE(22, 12); // Offset to image data (6 header + 16 entry = 22)

const icoBuffer = Buffer.concat([header, entry, pngBuffer]);

fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icoBuffer);
fs.writeFileSync(path.join(__dirname, '../public/logo/favicon.ico'), icoBuffer);

console.log('Valid ICO generated! Total size:', icoBuffer.length);

