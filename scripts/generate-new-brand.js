const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const PDFDocument = require('pdfkit');

async function generateBrandAssets() {
  const logoDir = path.join(__dirname, '../public/logo');
  if (!fs.existsSync(logoDir)) fs.mkdirSync(logoDir, { recursive: true });

  const emblemPath = path.join(logoDir, 'prathvi-emblem-transparent.png');
  if (!fs.existsSync(emblemPath)) {
    throw new Error('prathvi-emblem-transparent.png not found');
  }

  console.log('1. Generating Square Emblem Logos...');
  // 512x512 square logo
  const squareEmblem512 = await sharp(emblemPath)
    .resize(460, 460, { fit: 'inside' })
    .toBuffer();

  const sqMeta = await sharp(squareEmblem512).metadata();

  // Transparent Square PNG
  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([{
    input: squareEmblem512,
    top: Math.round((512 - sqMeta.height) / 2),
    left: Math.round((512 - sqMeta.width) / 2)
  }])
  .png()
  .toFile(path.join(logoDir, 'prathvi-logo-square.png'));

  // White Background Square JPG
  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 3,
      background: { r: 255, g: 255, b: 255 }
    }
  })
  .composite([{
    input: squareEmblem512,
    top: Math.round((512 - sqMeta.height) / 2),
    left: Math.round((512 - sqMeta.width) / 2)
  }])
  .jpeg({ quality: 95 })
  .toFile(path.join(logoDir, 'prathvi-logo-square.jpg'));

  console.log('2. Generating Favicons (512, 64, 32, ico)...');
  // Favicon 512
  await sharp(path.join(logoDir, 'prathvi-logo-square.png'))
    .resize(512, 512)
    .png()
    .toFile(path.join(logoDir, 'prathvi-favicon-512.png'));

  // Favicon 64
  const fav64Buffer = await sharp(path.join(logoDir, 'prathvi-logo-square.png'))
    .resize(64, 64)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(logoDir, 'prathvi-favicon-64.png'), fav64Buffer);

  // Favicon 32
  await sharp(path.join(logoDir, 'prathvi-logo-square.png'))
    .resize(32, 32)
    .png()
    .toFile(path.join(logoDir, 'prathvi-favicon-32.png'));

  // Favicon JPG
  await sharp(path.join(logoDir, 'prathvi-logo-square.jpg'))
    .resize(512, 512)
    .jpeg({ quality: 95 })
    .toFile(path.join(logoDir, 'prathvi-favicon.jpg'));

  // True ICO container
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
  entry.writeUInt32LE(fav64Buffer.length, 8);
  entry.writeUInt32LE(22, 12);

  const icoBuffer = Buffer.concat([header, entry, fav64Buffer]);
  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(logoDir, 'favicon.ico'), icoBuffer);

  console.log('3. Generating Horizontal Brand Logo (Emblem + PRATHVI ORTHOPEDIC)...');
  // Scale emblem for horizontal bar
  const emblemHorizontal = await sharp(emblemPath)
    .resize({ height: 138, width: 138, fit: 'inside' })
    .toBuffer();
  const horizMeta = await sharp(emblemHorizontal).metadata();

  const canvasWidth = 820;
  const canvasHeight = 160;
  const emblemX = 16;
  const emblemY = Math.round((canvasHeight - horizMeta.height) / 2);
  const textX = emblemX + horizMeta.width + 24;

  const textSvg = Buffer.from(`
    <svg width="${canvasWidth}" height="${canvasHeight}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0f766e"/>
          <stop offset="100%" stop-color="#0d9488"/>
        </linearGradient>
      </defs>
      <!-- PRATHVI -->
      <text x="${textX}" y="104" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="54" font-weight="900" fill="#0f172a" letter-spacing="3">
        PRATHVI
      </text>
      <!-- ORTHOPEDIC -->
      <text x="${textX + 276}" y="104" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="50" font-weight="800" fill="url(#tealGrad)" letter-spacing="2">
        ORTHOPEDIC
      </text>
    </svg>
  `);

  // Transparent Horizontal PNG
  await sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  })
  .composite([
    { input: emblemHorizontal, top: emblemY, left: emblemX },
    { input: textSvg, top: 0, left: 0 }
  ])
  .png()
  .toFile(path.join(logoDir, 'prathvi-logo-horizontal.png'));

  // White Background Horizontal JPG
  await sharp({
    create: {
      width: canvasWidth,
      height: canvasHeight,
      channels: 3,
      background: { r: 255, g: 255, b: 255 }
    }
  })
  .composite([
    { input: emblemHorizontal, top: emblemY, left: emblemX },
    { input: textSvg, top: 0, left: 0 }
  ])
  .jpeg({ quality: 95 })
  .toFile(path.join(logoDir, 'prathvi-logo-horizontal.jpg'));

  // Create SVG version with base64 embedded emblem
  const emblemBase64 = emblemHorizontal.toString('base64');
  const fullSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${canvasWidth}" height="${canvasHeight}" viewBox="0 0 ${canvasWidth} ${canvasHeight}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="brandTeal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f766e"/>
      <stop offset="100%" stop-color="#0d9488"/>
    </linearGradient>
  </defs>
  <!-- Emblem Graphic -->
  <image href="data:image/png;base64,${emblemBase64}" x="${emblemX}" y="${emblemY}" width="${horizMeta.width}" height="${horizMeta.height}"/>
  <!-- PRATHVI -->
  <text x="${textX}" y="104" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="54" font-weight="900" fill="#0f172a" letter-spacing="3">
    PRATHVI
  </text>
  <!-- ORTHOPEDIC -->
  <text x="${textX + 276}" y="104" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" font-size="50" font-weight="800" fill="url(#brandTeal)" letter-spacing="2">
    ORTHOPEDIC
  </text>
</svg>`;
  fs.writeFileSync(path.join(logoDir, 'prathvi-logo-horizontal.svg'), fullSvg);

  console.log('4. Generating PDF Brand Document...');
  const doc = new PDFDocument({ size: 'A4', margin: 40 });
  const pdfStream = fs.createWriteStream(path.join(logoDir, 'Prathvi_Orthopedic_Logo_Design.pdf'));
  doc.pipe(pdfStream);

  // Header Banner
  doc.rect(0, 0, 595, 80).fill('#0f766e');
  doc.fillColor('#ffffff').fontSize(22).font('Helvetica-Bold').text('PRATHVI ORTHOPEDIC', 40, 26, { letterSpacing: 2 });
  doc.fontSize(11).font('Helvetica').text('Official Brand Identity & Logo Specifications', 40, 52);

  // Intro
  doc.moveDown(3);
  doc.fillColor('#0f172a').fontSize(14).font('Helvetica-Bold').text('1. Official Horizontal Logo', 40, 105);
  doc.fontSize(10).font('Helvetica').fillColor('#475569').text('Primary brand mark for web navigation header, documents, signage, and letterheads.', 40, 125);

  // Insert Horizontal Logo JPG
  const horizJpgPath = path.join(logoDir, 'prathvi-logo-horizontal.jpg');
  doc.rect(40, 145, 515, 110).lineWidth(1).strokeColor('#e2e8f0').stroke();
  doc.image(horizJpgPath, 50, 155, { width: 495, fit: [495, 90] });

  // Square Emblem
  doc.fillColor('#0f172a').fontSize(14).font('Helvetica-Bold').text('2. Square Brand Emblem & Icon', 40, 280);
  doc.fontSize(10).font('Helvetica').fillColor('#475569').text('Square mark for mobile icons, app favicons, social media profiles, and stamps.', 40, 300);

  const sqJpgPath = path.join(logoDir, 'prathvi-logo-square.jpg');
  doc.rect(40, 320, 200, 200).lineWidth(1).strokeColor('#e2e8f0').stroke();
  doc.image(sqJpgPath, 50, 330, { width: 180, height: 180 });

  // Color Palette Info
  doc.fillColor('#0f172a').fontSize(13).font('Helvetica-Bold').text('Brand Color Palette', 265, 325);

  const colors = [
    { name: 'Primary Slate (Brand Text)', hex: '#0F172A', rgb: '15, 23, 42' },
    { name: 'Medical Teal (Orthopedic)', hex: '#0D9488', rgb: '13, 148, 136' },
    { name: 'Oceanic Cyan (Joint Mobility)', hex: '#0284C7', rgb: '2, 132, 199' },
    { name: 'Vitality Violet (Cartilage Disc)', hex: '#9333EA', rgb: '147, 51, 234' },
    { name: 'Warm Amber & Coral', hex: '#F97316', rgb: '249, 115, 22' }
  ];

  let colorY = 350;
  for (const c of colors) {
    doc.rect(265, colorY, 20, 20).fill(c.hex);
    doc.fillColor('#0f172a').fontSize(10).font('Helvetica-Bold').text(c.name, 295, colorY + 2);
    doc.fillColor('#64748b').fontSize(9).font('Helvetica').text(`HEX: ${c.hex}  |  RGB: (${c.rgb})`, 295, colorY + 13);
    colorY += 32;
  }

  // Clinic Footer Details
  doc.rect(40, 680, 515, 80).fill('#f8fafc');
  doc.rect(40, 680, 515, 80).lineWidth(1).strokeColor('#cbd5e1').stroke();
  doc.fillColor('#0f172a').fontSize(11).font('Helvetica-Bold').text('Prathvi Orthopedic Centre', 55, 695);
  doc.fillColor('#475569').fontSize(9).font('Helvetica').text('Dr. Vineet Bachani | MBBS, M.S. (Orthopedics) | GMC Reg: G-82085', 55, 712);
  doc.text('C - 252, 253 Sobo Center, South Bopal, Ahmedabad - 380058 | Helpline: +91 7778901394', 55, 727);

  doc.end();

  await new Promise(resolve => pdfStream.on('finish', resolve));
  console.log('PDF generated successfully!');

  // Also copy PDF and logos to artifact directory so user can access directly
  const artifactDir = 'C:/Users/PRASHANT/.gemini/antigravity/brain/e7aeae9d-c25c-4174-a37b-a9f41023f285';
  fs.copyFileSync(path.join(logoDir, 'Prathvi_Orthopedic_Logo_Design.pdf'), path.join(artifactDir, 'Prathvi_Orthopedic_Logo_Design.pdf'));
  fs.copyFileSync(path.join(logoDir, 'prathvi-logo-horizontal.jpg'), path.join(artifactDir, 'prathvi-logo-horizontal.jpg'));
  fs.copyFileSync(path.join(logoDir, 'prathvi-logo-square.jpg'), path.join(artifactDir, 'prathvi-logo-square.jpg'));
  fs.copyFileSync(path.join(logoDir, 'prathvi-favicon.jpg'), path.join(artifactDir, 'prathvi-favicon.jpg'));

  console.log('All brand assets successfully built and synchronized!');
}

generateBrandAssets().catch(err => {
  console.error(err);
  process.exit(1);
});

