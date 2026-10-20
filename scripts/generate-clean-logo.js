const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const PDFDocument = require('pdfkit');

const outDir = path.join(__dirname, '../public/logo');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Clean, Minimalist, High-End Horizontal Logo (800 x 200)
// ONLY: Emblem + "PRATHVI ORTHOPEDIC"
const cleanHorizontalSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 840 220" width="840" height="220">
  <defs>
    <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f766e"/>
      <stop offset="60%" stop-color="#0d9488"/>
      <stop offset="100%" stop-color="#14b8a6"/>
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
    <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
  </defs>

  <!-- Left: Sleek Orthopedic Joint Emblem (Center at x=110, y=110) -->
  <g transform="translate(110, 110)">
    <!-- Base Glow Circle -->
    <circle cx="0" cy="0" r="88" fill="#f0fdfa" stroke="#ccfbf1" stroke-width="2.5"/>

    <!-- Mobility Arc Upper (Teal) -->
    <path d="M -60 -25 A 68 68 0 0 1 48 -48" fill="none" stroke="url(#tealGrad)" stroke-width="9" stroke-linecap="round"/>
    
    <!-- Mobility Arc Lower (Cyan) -->
    <path d="M 60 25 A 68 68 0 0 1 -48 48" fill="none" stroke="url(#cyanGrad)" stroke-width="9" stroke-linecap="round"/>

    <!-- Upper Joint Condyle (Femur) -->
    <path d="M -22 -48 C -35 -48 -38 -32 -26 -16 C -18 -5 -10 -2 -10 6 L 10 6 C 10 -2 18 -5 26 -16 C 38 -32 35 -48 22 -48 C 10 -48 0 -36 0 -22 C 0 -36 -10 -48 -22 -48 Z" fill="url(#tealGrad)"/>

    <!-- Lower Joint Plateau (Tibia) -->
    <path d="M -24 48 C -36 48 -34 32 -22 16 C -14 6 -8 6 -8 6 L 8 6 C 8 6 14 6 22 16 C 34 32 36 48 24 48 C 12 48 0 36 0 24 C 0 36 -12 48 -24 48 Z" fill="url(#cyanGrad)"/>

    <!-- Emerald Meniscus Cushion Disc (Center Joint Line) -->
    <ellipse cx="0" cy="6" rx="28" ry="6" fill="#ffffff" stroke="url(#emeraldGrad)" stroke-width="3.5"/>

    <!-- Subtle Cross Accent (Top Right) -->
    <g transform="translate(54, -54)">
      <circle cx="0" cy="0" r="16" fill="#0d9488" stroke="#ffffff" stroke-width="2.5"/>
      <path d="M -7 0 L 7 0 M 0 -7 L 0 7" stroke="#ffffff" stroke-width="3.2" stroke-linecap="round"/>
    </g>
  </g>

  <!-- Right: Bold, Pure Brand Typography -->
  <g transform="translate(235, 110)">
    <!-- PRATHVI -->
    <text x="0" y="8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="58" font-weight="900" fill="#0f172a" letter-spacing="4">
      PRATHVI
    </text>

    <!-- ORTHOPEDIC -->
    <text x="295" y="8" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="52" font-weight="800" fill="#0d9488" letter-spacing="3">
      ORTHOPEDIC
    </text>

    <!-- Minimal Sub-line: CENTRE -->
    <text x="3" y="44" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="16" font-weight="700" fill="#64748b" letter-spacing="7">
      CENTRE  •  SOUTH BOPAL
    </text>
  </g>
</svg>
`;

// 2. Square Brand Emblem (600 x 600)
const cleanSquareSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600" width="600" height="600">
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

  <!-- Center Emblem (x=300, y=240) -->
  <g transform="translate(300, 230)">
    <circle cx="0" cy="0" r="145" fill="#f0fdfa" stroke="#ccfbf1" stroke-width="3"/>

    <!-- Mobility Arcs -->
    <path d="M -105 -40 A 115 115 0 0 1 85 -80" fill="none" stroke="url(#sqTeal)" stroke-width="14" stroke-linecap="round"/>
    <path d="M 105 40 A 115 115 0 0 1 -85 80" fill="none" stroke="url(#sqCyan)" stroke-width="14" stroke-linecap="round"/>

    <!-- Upper Joint Condyle -->
    <path d="M -36 -78 C -55 -78 -60 -52 -40 -25 C -28 -8 -16 -4 -16 10 L 16 10 C 16 -4 28 -8 40 -25 C 60 -52 55 -78 36 -78 C 16 -78 0 -58 0 -35 C 0 -58 -16 -78 -36 -78 Z" fill="url(#sqTeal)"/>

    <!-- Lower Joint Plateau -->
    <path d="M -38 78 C -56 78 -52 52 -34 25 C -22 10 -12 10 -12 10 L 12 10 C 12 10 22 10 34 25 C 52 52 56 78 38 78 C 20 78 0 58 0 38 C 0 58 -20 78 -38 78 Z" fill="url(#sqCyan)"/>

    <!-- Meniscus Disc -->
    <ellipse cx="0" cy="10" rx="44" ry="10" fill="#ffffff" stroke="url(#sqEmerald)" stroke-width="5"/>

    <!-- Plus Badge -->
    <g transform="translate(90, -90)">
      <circle cx="0" cy="0" r="24" fill="#0d9488" stroke="#ffffff" stroke-width="3.5"/>
      <path d="M -10 0 L 10 0 M 0 -10 L 0 10" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round"/>
    </g>
  </g>

  <!-- Typography Underneath -->
  <g transform="translate(300, 440)" text-anchor="middle">
    <text y="20" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="44" font-weight="900" fill="#0f172a" letter-spacing="4">
      PRATHVI
    </text>
    <text y="68" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="28" font-weight="800" fill="#0d9488" letter-spacing="4">
      ORTHOPEDIC
    </text>
  </g>
</svg>
`;

// 3. Small Favicon (512 x 512)
const cleanFaviconSvg = `
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

  <!-- Outer Rounded Capsule Shield -->
  <rect x="16" y="16" width="480" height="480" rx="120" fill="url(#favTeal)"/>

  <!-- Inner Soft White Canvas -->
  <circle cx="256" cy="256" r="195" fill="#ffffff"/>

  <!-- High-Contrast Mobility Arcs -->
  <path d="M 135 210 A 135 135 0 0 1 360 160" fill="none" stroke="url(#favTeal)" stroke-width="22" stroke-linecap="round"/>
  <path d="M 377 302 A 135 135 0 0 1 152 352" fill="none" stroke="url(#favCyan)" stroke-width="22" stroke-linecap="round"/>

  <!-- Joint Condyles -->
  <path d="M 216 182 C 196 182 188 208 206 232 C 220 248 232 254 232 268 C 232 282 220 288 206 304 C 188 328 196 354 216 354 C 238 354 256 336 256 312 C 256 292 244 282 256 262 C 268 282 256 292 256 312 C 256 336 274 354 296 354 C 316 354 324 328 306 304 C 292 288 280 282 280 268 C 280 254 292 248 306 232 C 324 208 316 182 296 182 C 274 182 256 200 256 222 C 256 242 268 248 256 248 C 244 248 256 242 256 222 C 256 200 238 182 216 182 Z" fill="#0f766e"/>

  <!-- Meniscus Disc -->
  <ellipse cx="256" cy="268" rx="44" ry="11" fill="#ffffff" stroke="url(#favEmerald)" stroke-width="6.5"/>

  <!-- Medical Cross Badge -->
  <circle cx="365" cy="145" r="28" fill="#0d9488" stroke="#ffffff" stroke-width="4.5"/>
  <path d="M 353 145 L 377 145 M 365 133 L 365 157" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
</svg>
`;

async function main() {
  console.log('Writing clean SVG files...');
  fs.writeFileSync(path.join(outDir, 'prathvi-logo-horizontal.svg'), cleanHorizontalSvg.trim());
  fs.writeFileSync(path.join(outDir, 'prathvi-logo-square.svg'), cleanSquareSvg.trim());
  fs.writeFileSync(path.join(outDir, 'prathvi-favicon.svg'), cleanFaviconSvg.trim());

  console.log('Converting to PNG and JPG (High Resolution)...');

  // Horizontal Logo PNG (Transparent, width 1680)
  await sharp(Buffer.from(cleanHorizontalSvg), { density: 300 })
    .resize(1680, 440)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'prathvi-logo-horizontal.png'));

  // Horizontal Logo JPG (White Background, width 1680)
  await sharp(Buffer.from(cleanHorizontalSvg), { density: 300 })
    .resize(1680, 440)
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 98 })
    .toFile(path.join(outDir, 'prathvi-logo-horizontal.jpg'));

  // Square Logo PNG (1200x1200)
  await sharp(Buffer.from(cleanSquareSvg), { density: 300 })
    .resize(1200, 1200)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'prathvi-logo-square.png'));

  // Square Logo JPG (1200x1200)
  await sharp(Buffer.from(cleanSquareSvg), { density: 300 })
    .resize(1200, 1200)
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 98 })
    .toFile(path.join(outDir, 'prathvi-logo-square.jpg'));

  // Favicon PNG 512x512
  await sharp(Buffer.from(cleanFaviconSvg), { density: 300 })
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'prathvi-favicon-512.png'));

  // Favicon PNG 64x64
  await sharp(Buffer.from(cleanFaviconSvg), { density: 300 })
    .resize(64, 64)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'prathvi-favicon-64.png'));

  // Favicon PNG 32x32
  await sharp(Buffer.from(cleanFaviconSvg), { density: 300 })
    .resize(32, 32)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'prathvi-favicon-32.png'));

  // Favicon JPG
  await sharp(Buffer.from(cleanFaviconSvg), { density: 300 })
    .resize(512, 512)
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 98 })
    .toFile(path.join(outDir, 'prathvi-favicon.jpg'));

  // Generate valid binary Windows ICO for /favicon.ico
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

  console.log('Generating PDF presentation...');
  await generateCleanPdf();

  console.log('Clean logo suite generated successfully!');
}

function generateCleanPdf() {
  return new Promise((resolve, reject) => {
    const pdfPath = path.join(outDir, 'Prathvi_Orthopedic_Logo_Design.pdf');
    const doc = new PDFDocument({ size: 'A4', margin: 40 });
    const stream = fs.createWriteStream(pdfPath);
    doc.pipe(stream);

    // Top Header Banner
    doc.rect(0, 0, 595.28, 70).fill('#0f766e');
    doc.fillColor('#ffffff').fontSize(22).font('Helvetica-Bold').text('PRATHVI ORTHOPEDIC', 40, 20);
    doc.fontSize(11).font('Helvetica').text('Official Brand Logo Suite • Clean & Professional Design', 40, 46);

    // 1. Horizontal Logo
    doc.fillColor('#0f172a').fontSize(14).font('Helvetica-Bold').text('1. Primary Horizontal Logo', 40, 95);
    doc.fontSize(9).font('Helvetica').fillColor('#64748b').text('Pure minimalist branding: Emblem + "PRATHVI ORTHOPEDIC". No clutter.', 40, 112);

    const horizontalJpg = path.join(outDir, 'prathvi-logo-horizontal.jpg');
    doc.rect(40, 128, 515.28, 140).fillAndStroke('#f8fafc', '#e2e8f0');
    doc.image(horizontalJpg, 48, 134, { width: 499.28 });

    // 2. Square Emblem & Favicon
    doc.fillColor('#0f172a').fontSize(14).font('Helvetica-Bold').text('2. Square Profile Emblem & Browser Favicon', 40, 295);

    const squareJpg = path.join(outDir, 'prathvi-logo-square.jpg');
    const faviconJpg = path.join(outDir, 'prathvi-favicon.jpg');

    doc.rect(40, 320, 245, 235).fillAndStroke('#f8fafc', '#e2e8f0');
    doc.image(squareJpg, 62, 330, { width: 200 });
    doc.fillColor('#0d9488').fontSize(10).font('Helvetica-Bold').text('Square Brand Emblem', 90, 535);

    doc.rect(310, 320, 245, 235).fillAndStroke('#f8fafc', '#e2e8f0');
    doc.image(faviconJpg, 355, 335, { width: 155 });
    doc.fillColor('#0d9488').fontSize(10).font('Helvetica-Bold').text('Small Favicon & App Icon', 345, 535);

    // 3. Color Specs
    doc.rect(40, 580, 515.28, 180).fillAndStroke('#ffffff', '#cbd5e1');
    doc.fillColor('#0f172a').fontSize(13).font('Helvetica-Bold').text('Brand Colors & File Formats', 55, 595);

    doc.rect(55, 620, 40, 22).fill('#0d9488');
    doc.fillColor('#1e293b').fontSize(9).font('Helvetica-Bold').text('Medical Teal', 105, 622);
    doc.fontSize(8).font('Helvetica').fillColor('#64748b').text('#0d9488', 105, 633);

    doc.rect(215, 620, 40, 22).fill('#0284c7');
    doc.fillColor('#1e293b').fontSize(9).font('Helvetica-Bold').text('Dynamic Cyan', 265, 622);
    doc.fontSize(8).font('Helvetica').fillColor('#64748b').text('#0284c7', 265, 633);

    doc.rect(375, 620, 40, 22).fill('#0f172a');
    doc.fillColor('#1e293b').fontSize(9).font('Helvetica-Bold').text('Slate Navy', 425, 622);
    doc.fontSize(8).font('Helvetica').fillColor('#64748b').text('#0f172a', 425, 633);

    doc.moveTo(55, 658).lineTo(540, 658).strokeColor('#e2e8f0').stroke();

    doc.fillColor('#0f172a').fontSize(9).font('Helvetica-Bold').text('Formats Provided:', 55, 672);
    doc.font('Helvetica').text('• Transparent PNG  |  • High-Res JPG  |  • Scalable SVG  |  • Windows ICO  |  • Vector PDF', 55, 688);
    doc.text('• Small Favicon sizes: 512x512, 64x64, 32x32 for mobile & desktop browser tabs.', 55, 703);
    doc.text('• Designed exclusively for Prathvi Orthopedic (Dr. Vineet Bachani)', 55, 718);

    doc.fontSize(8).fillColor('#94a3b8').text('Prathvi Orthopedic © ' + new Date().getFullYear(), 40, 800, { align: 'center', width: 515 });

    doc.end();
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

