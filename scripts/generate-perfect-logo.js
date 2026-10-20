const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const PDFDocument = require('pdfkit');

const outDir = path.join(__dirname, '../public/logo');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Perfect Horizontal Logo (viewBox: 0 0 800 150)
// ONLY: Emblem + "PRATHVI ORTHOPEDIC"
const horizontalSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 150" width="800" height="150">
  <defs>
    <linearGradient id="pTeal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f766e"/>
      <stop offset="60%" stop-color="#0d9488"/>
      <stop offset="100%" stop-color="#14b8a6"/>
    </linearGradient>
    <linearGradient id="pCyan" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
    <linearGradient id="pEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
  </defs>

  <!-- Left: Orthopedic Joint Emblem (Centered at x=75, y=75) -->
  <g transform="translate(75, 75)">
    <!-- Base Circle Container -->
    <circle cx="0" cy="0" r="62" fill="#f0fdfa" stroke="#ccfbf1" stroke-width="2"/>

    <!-- Mobility Arc Upper (Teal) -->
    <path d="M -42 -18 A 48 48 0 0 1 34 -34" fill="none" stroke="url(#pTeal)" stroke-width="7" stroke-linecap="round"/>
    
    <!-- Mobility Arc Lower (Cyan) -->
    <path d="M 42 18 A 48 48 0 0 1 -34 34" fill="none" stroke="url(#pCyan)" stroke-width="7" stroke-linecap="round"/>

    <!-- Upper Joint Condyle (Femur) -->
    <path d="M -16 -34 C -25 -34 -27 -23 -18 -12 C -12 -4 -7 -2 -7 4 L 7 4 C 7 -2 12 -4 18 -12 C 27 -23 25 -34 16 -34 C 7 -34 0 -25 0 -15 C 0 -25 -7 -34 -16 -34 Z" fill="url(#pTeal)"/>

    <!-- Lower Joint Plateau (Tibia) -->
    <path d="M -17 34 C -26 34 -24 23 -16 12 C -10 4 -6 4 -6 4 L 6 4 C 6 4 10 4 16 12 C 24 23 26 34 17 34 C 8 34 0 25 0 17 C 0 25 -8 34 -17 34 Z" fill="url(#pCyan)"/>

    <!-- Emerald Meniscus Cushion Disc -->
    <ellipse cx="0" cy="4" rx="20" ry="4.5" fill="#ffffff" stroke="url(#pEmerald)" stroke-width="2.5"/>

    <!-- Medical Plus Cross Badge -->
    <g transform="translate(38, -38)">
      <circle cx="0" cy="0" r="12" fill="#0d9488" stroke="#ffffff" stroke-width="2"/>
      <path d="M -5 0 L 5 0 M 0 -5 L 0 5" stroke="#ffffff" stroke-width="2.4" stroke-linecap="round"/>
    </g>
  </g>

  <!-- Right: Pure Brand Typography (x=165, y=92) -->
  <g transform="translate(165, 92)">
    <!-- PRATHVI -->
    <text x="0" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="52" font-weight="900" fill="#0f172a" letter-spacing="3">
      PRATHVI
    </text>

    <!-- ORTHOPEDIC -->
    <text x="270" y="0" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="48" font-weight="800" fill="#0d9488" letter-spacing="2">
      ORTHOPEDIC
    </text>
  </g>
</svg>
`;

// 2. Square Emblem (500 x 500)
const squareSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <defs>
    <linearGradient id="sqTeal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f766e"/>
      <stop offset="60%" stop-color="#0d9488"/>
      <stop offset="100%" stop-color="#14b8a6"/>
    </linearGradient>
    <linearGradient id="sqCyan" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
    <linearGradient id="sqEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
  </defs>

  <g transform="translate(250, 190)">
    <circle cx="0" cy="0" r="120" fill="#f0fdfa" stroke="#ccfbf1" stroke-width="2.5"/>
    <path d="M -85 -35 A 95 95 0 0 1 70 -68" fill="none" stroke="url(#sqTeal)" stroke-width="12" stroke-linecap="round"/>
    <path d="M 85 35 A 95 95 0 0 1 -70 68" fill="none" stroke="url(#sqCyan)" stroke-width="12" stroke-linecap="round"/>

    <path d="M -30 -65 C -45 -65 -50 -44 -32 -22 C -22 -6 -14 -4 -14 8 L 14 8 C 14 -4 22 -6 32 -22 C 50 -44 45 -65 30 -65 C 14 -65 0 -48 0 -28 C 0 -48 -14 -65 -30 -65 Z" fill="url(#sqTeal)"/>
    <path d="M -32 65 C -46 65 -44 44 -28 22 C -18 8 -10 8 -10 8 L 10 8 C 10 8 18 8 28 22 C 44 44 46 65 32 65 C 16 65 0 48 0 32 C 0 48 -16 65 -32 65 Z" fill="url(#sqCyan)"/>
    <ellipse cx="0" cy="8" rx="36" ry="8" fill="#ffffff" stroke="url(#sqEmerald)" stroke-width="4"/>

    <g transform="translate(75, -75)">
      <circle cx="0" cy="0" r="20" fill="#0d9488" stroke="#ffffff" stroke-width="3"/>
      <path d="M -8 0 L 8 0 M 0 -8 L 0 8" stroke="#ffffff" stroke-width="3.8" stroke-linecap="round"/>
    </g>
  </g>

  <g transform="translate(250, 365)" text-anchor="middle">
    <text y="15" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="38" font-weight="900" fill="#0f172a" letter-spacing="3">
      PRATHVI
    </text>
    <text y="58" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="26" font-weight="800" fill="#0d9488" letter-spacing="3">
      ORTHOPEDIC
    </text>
  </g>
</svg>
`;

// 3. Favicon (512 x 512)
const faviconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="favTeal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f766e"/>
      <stop offset="100%" stop-color="#14b8a6"/>
    </linearGradient>
    <linearGradient id="favCyan" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
    <linearGradient id="favEmerald" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
  </defs>

  <rect x="16" y="16" width="480" height="480" rx="120" fill="url(#favTeal)"/>
  <circle cx="256" cy="256" r="195" fill="#ffffff"/>

  <path d="M 135 210 A 135 135 0 0 1 360 160" fill="none" stroke="url(#favTeal)" stroke-width="22" stroke-linecap="round"/>
  <path d="M 377 302 A 135 135 0 0 1 152 352" fill="none" stroke="url(#favCyan)" stroke-width="22" stroke-linecap="round"/>

  <path d="M 216 182 C 196 182 188 208 206 232 C 220 248 232 254 232 268 C 232 282 220 288 206 304 C 188 328 196 354 216 354 C 238 354 256 336 256 312 C 256 292 244 282 256 262 C 268 282 256 292 256 312 C 256 336 274 354 296 354 C 316 354 324 328 306 304 C 292 288 280 282 280 268 C 280 254 292 248 306 232 C 324 208 316 182 296 182 C 274 182 256 200 256 222 C 256 242 268 248 256 248 C 244 248 256 242 256 222 C 256 200 238 182 216 182 Z" fill="#0f766e"/>
  <ellipse cx="256" cy="268" rx="44" ry="11" fill="#ffffff" stroke="url(#favEmerald)" stroke-width="6.5"/>

  <circle cx="365" cy="145" r="28" fill="#0d9488" stroke="#ffffff" stroke-width="4.5"/>
  <path d="M 353 145 L 377 145 M 365 133 L 365 157" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
</svg>
`;

async function generate() {
  console.log('Writing SVGs...');
  fs.writeFileSync(path.join(outDir, 'prathvi-logo-horizontal.svg'), horizontalSvg.trim());
  fs.writeFileSync(path.join(outDir, 'prathvi-logo-square.svg'), squareSvg.trim());
  fs.writeFileSync(path.join(outDir, 'prathvi-favicon.svg'), faviconSvg.trim());

  console.log('Generating high-res PNG & JPG formats...');

  // 1. Horizontal Logo
  // Transparent PNG (width 2000 for crystal-clear retina rendering)
  await sharp(Buffer.from(horizontalSvg), { density: 300 })
    .resize(2000, 375)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'prathvi-logo-horizontal.png'));

  // White Background JPG
  await sharp(Buffer.from(horizontalSvg), { density: 300 })
    .resize(2000, 375)
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 98 })
    .toFile(path.join(outDir, 'prathvi-logo-horizontal.jpg'));

  // 2. Square Logo
  await sharp(Buffer.from(squareSvg), { density: 300 })
    .resize(1000, 1000)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'prathvi-logo-square.png'));

  await sharp(Buffer.from(squareSvg), { density: 300 })
    .resize(1000, 1000)
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 98 })
    .toFile(path.join(outDir, 'prathvi-logo-square.jpg'));

  // 3. Favicon PNGs
  await sharp(Buffer.from(faviconSvg), { density: 300 })
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'prathvi-favicon-512.png'));

  await sharp(Buffer.from(faviconSvg), { density: 300 })
    .resize(64, 64)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'prathvi-favicon-64.png'));

  await sharp(Buffer.from(faviconSvg), { density: 300 })
    .resize(32, 32)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'prathvi-favicon-32.png'));

  await sharp(Buffer.from(faviconSvg), { density: 300 })
    .resize(512, 512)
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 98 })
    .toFile(path.join(outDir, 'prathvi-favicon.jpg'));

  // Generate true binary Windows ICO
  const png64 = fs.readFileSync(path.join(outDir, 'prathvi-favicon-64.png'));
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry.writeUInt8(64, 0);
  entry.writeUInt8(64, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(png64.length, 8);
  entry.writeUInt32LE(22, 12);
  const icoBuffer = Buffer.concat([header, entry, png64]);
  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(outDir, 'favicon.ico'), icoBuffer);

  console.log('Generating PDF...');
  await generatePdf();

  console.log('Done!');
}

function generatePdf() {
  return new Promise((resolve, reject) => {
    const pdfPath = path.join(outDir, 'Prathvi_Orthopedic_Logo_Design.pdf');
    const doc = new PDFDocument({ size: 'A4', margin: 40 });
    const stream = fs.createWriteStream(pdfPath);
    doc.pipe(stream);

    // Header Band
    doc.rect(0, 0, 595.28, 70).fill('#0f766e');
    doc.fillColor('#ffffff').fontSize(22).font('Helvetica-Bold').text('PRATHVI ORTHOPEDIC', 40, 20);
    doc.fontSize(11).font('Helvetica').text('Official Brand Logo Suite • Clean & Professional Design', 40, 46);

    // Horizontal Logo
    doc.fillColor('#0f172a').fontSize(14).font('Helvetica-Bold').text('1. Primary Horizontal Logo', 40, 95);
    doc.fontSize(9).font('Helvetica').fillColor('#64748b').text('Pure minimalist branding: Orthopedic Joint Emblem + "PRATHVI ORTHOPEDIC". Zero clutter.', 40, 112);

    const horizontalJpg = path.join(outDir, 'prathvi-logo-horizontal.jpg');
    doc.rect(40, 128, 515.28, 120).fillAndStroke('#f8fafc', '#e2e8f0');
    doc.image(horizontalJpg, 48, 134, { width: 499.28 });

    // Square Emblem & Favicon
    doc.fillColor('#0f172a').fontSize(14).font('Helvetica-Bold').text('2. Square Profile Emblem & Browser Favicon', 40, 275);

    const squareJpg = path.join(outDir, 'prathvi-logo-square.jpg');
    const faviconJpg = path.join(outDir, 'prathvi-favicon.jpg');

    doc.rect(40, 300, 245, 235).fillAndStroke('#f8fafc', '#e2e8f0');
    doc.image(squareJpg, 62, 310, { width: 200 });
    doc.fillColor('#0d9488').fontSize(10).font('Helvetica-Bold').text('Square Brand Emblem', 90, 515);

    doc.rect(310, 300, 245, 235).fillAndStroke('#f8fafc', '#e2e8f0');
    doc.image(faviconJpg, 355, 315, { width: 155 });
    doc.fillColor('#0d9488').fontSize(10).font('Helvetica-Bold').text('Browser Favicon & App Icon', 345, 515);

    // Color Swatches
    doc.rect(40, 560, 515.28, 190).fillAndStroke('#ffffff', '#cbd5e1');
    doc.fillColor('#0f172a').fontSize(13).font('Helvetica-Bold').text('Brand Colors & File Formats', 55, 575);

    doc.rect(55, 600, 40, 22).fill('#0d9488');
    doc.fillColor('#1e293b').fontSize(9).font('Helvetica-Bold').text('Medical Teal', 105, 602);
    doc.fontSize(8).font('Helvetica').fillColor('#64748b').text('#0d9488', 105, 613);

    doc.rect(215, 600, 40, 22).fill('#0284c7');
    doc.fillColor('#1e293b').fontSize(9).font('Helvetica-Bold').text('Dynamic Cyan', 265, 602);
    doc.fontSize(8).font('Helvetica').fillColor('#64748b').text('#0284c7', 265, 613);

    doc.rect(375, 600, 40, 22).fill('#0f172a');
    doc.fillColor('#1e293b').fontSize(9).font('Helvetica-Bold').text('Slate Navy', 425, 602);
    doc.fontSize(8).font('Helvetica').fillColor('#64748b').text('#0f172a', 425, 613);

    doc.moveTo(55, 638).lineTo(540, 638).strokeColor('#e2e8f0').stroke();

    doc.fillColor('#0f172a').fontSize(9).font('Helvetica-Bold').text('Formats Provided:', 55, 655);
    doc.font('Helvetica').text('• Transparent PNG  |  • High-Res JPG  |  • Scalable SVG  |  • Windows ICO  |  • Vector PDF', 55, 672);
    doc.text('• Favicon sizes: 512x512, 64x64, 32x32 for mobile & desktop browser tabs.', 55, 688);
    doc.text('• Designed exclusively for Prathvi Orthopedic (Dr. Vineet Bachani)', 55, 704);

    doc.fontSize(8).fillColor('#94a3b8').text('Prathvi Orthopedic © ' + new Date().getFullYear(), 40, 775, { align: 'center', width: 515 });

    doc.end();
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});

