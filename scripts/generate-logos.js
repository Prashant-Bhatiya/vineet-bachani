const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const PDFDocument = require('pdfkit');

const outDir = path.join(__dirname, '../public/logo');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Horizontal Big Logo SVG (1200 x 360)
const horizontalSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 360" width="1200" height="360">
  <defs>
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f766e"/>
      <stop offset="50%" stop-color="#0d9488"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
    <linearGradient id="accentGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#14b8a6"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
    <filter id="subtleDrop" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#0f766e" flood-opacity="0.15"/>
    </filter>
  </defs>

  <!-- Left: Circular Emblem -->
  <g transform="translate(180, 180)" filter="url(#subtleDrop)">
    <!-- Outer Ring Base -->
    <circle cx="0" cy="0" r="130" fill="#f0fdfa" stroke="#ccfbf1" stroke-width="3"/>
    
    <!-- Dynamic Mobility Swirl Arc 1 -->
    <path d="M -90 -40 A 105 105 0 0 1 80 -65" fill="none" stroke="url(#brandGrad)" stroke-width="16" stroke-linecap="round"/>
    <!-- Dynamic Mobility Swirl Arc 2 -->
    <path d="M 90 40 A 105 105 0 0 1 -80 65" fill="none" stroke="url(#accentGrad)" stroke-width="16" stroke-linecap="round"/>

    <!-- Central Bone / Joint Articulation (Upper Condyle & Lower Condyle) -->
    <!-- Upper Joint Condyle (Femur Head / Articulation) -->
    <path d="M -28 -70 C -45 -70 -52 -45 -38 -25 C -25 -10 -15 -5 -15 10 C -15 25 -25 30 -38 45 C -52 65 -45 90 -28 90 C -10 90 0 75 0 50 C 0 25 -10 15 0 0 C 10 15 0 25 0 50 C 0 75 10 90 28 90 C 45 90 52 65 38 45 C 25 30 15 25 15 10 C 15 -5 25 -10 38 -25 C 52 -45 45 -70 28 -70 C 10 -70 0 -55 0 -30 C 0 -5 10 0 0 0 C -10 0 0 -5 0 -30 C 0 -55 -10 -70 -28 -70 Z" fill="url(#brandGrad)"/>

    <!-- Joint Meniscus / Dynamic Disk Cushion in Center -->
    <ellipse cx="0" cy="5" rx="34" ry="9" fill="#ffffff" stroke="url(#accentGrad)" stroke-width="5"/>

    <!-- Medical Plus Badge (top right) -->
    <g transform="translate(75, -75)">
      <circle cx="0" cy="0" r="22" fill="#0d9488" stroke="#ffffff" stroke-width="4"/>
      <path d="M -10 0 L 10 0 M 0 -10 L 0 10" stroke="#ffffff" stroke-width="5" stroke-linecap="round"/>
    </g>
  </g>

  <!-- Right: Typography -->
  <g transform="translate(360, 0)">
    <!-- Primary Title: PRATHVI -->
    <text x="0" y="145" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="64" font-weight="900" fill="#0f172a" letter-spacing="4">
      PRATHVI
    </text>

    <!-- Highlight: ORTHOPEDIC CENTRE -->
    <text x="320" y="145" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="54" font-weight="800" fill="#0d9488" letter-spacing="3">
      ORTHOPEDIC
    </text>
    <text x="735" y="145" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="34" font-weight="700" fill="#0284c7" letter-spacing="6">
      CENTRE
    </text>

    <!-- Divider Bar -->
    <rect x="0" y="172" width="780" height="5" rx="2.5" fill="url(#brandGrad)" />

    <!-- Doctor Name & Qualifications -->
    <text x="0" y="222" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="28" font-weight="800" fill="#1e293b" letter-spacing="1">
      Dr. Vineet Bachani
    </text>
    <text x="270" y="222" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="22" font-weight="600" fill="#0d9488">
      •  MBBS, M.S. (Orthopedics)
    </text>
    <text x="590" y="222" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="19" font-weight="700" fill="#64748b">
      [Reg: G-82085]
    </text>

    <!-- Sub-tagline / Core Focus -->
    <text x="0" y="265" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="19" font-weight="600" fill="#475569" letter-spacing="1">
      Knee &amp; Hip Joint Replacement  |  Arthroscopy  |  Complex Trauma &amp; Spine
    </text>

    <!-- Location & Gujarati text badge -->
    <rect x="0" y="285" width="480" height="34" rx="10" fill="#f0fdfa" stroke="#ccfbf1" stroke-width="1.5"/>
    <text x="16" y="308" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="15" font-weight="700" fill="#0f766e">
      Sobo Center, South Bopal, Ahmedabad  •  હાડકા ના ડૉક્ટર
    </text>
  </g>
</svg>
`;

// 2. Square Logo SVG (800 x 800)
const squareSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
  <defs>
    <linearGradient id="brandGradSq" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f766e"/>
      <stop offset="50%" stop-color="#0d9488"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
    <linearGradient id="accentGradSq" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#14b8a6"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
  </defs>

  <!-- Central Emblem -->
  <g transform="translate(400, 310)">
    <!-- Outer Ring Base -->
    <circle cx="0" cy="0" r="190" fill="#f0fdfa" stroke="#ccfbf1" stroke-width="4"/>
    
    <!-- Dynamic Mobility Swirl Arcs -->
    <path d="M -135 -60 A 155 155 0 0 1 120 -95" fill="none" stroke="url(#brandGradSq)" stroke-width="24" stroke-linecap="round"/>
    <path d="M 135 60 A 155 155 0 0 1 -120 95" fill="none" stroke="url(#accentGradSq)" stroke-width="24" stroke-linecap="round"/>

    <!-- Joint Condyle Articulation -->
    <path d="M -42 -100 C -68 -100 -78 -65 -57 -35 C -38 -15 -22 -7 -22 15 C -22 37 -38 45 -57 65 C -78 95 -68 130 -42 130 C -15 130 0 110 0 75 C 0 37 -15 22 0 0 C 15 22 0 37 0 75 C 0 110 15 130 42 130 C 68 130 78 95 57 65 C 38 45 22 37 22 15 C 22 -7 38 -15 57 -35 C 78 -65 68 -100 42 -100 C 15 -100 0 -80 0 -45 C 0 -7 15 0 0 0 C -15 0 0 -7 0 -45 C 0 -80 -15 -100 -42 -100 Z" fill="url(#brandGradSq)"/>

    <!-- Meniscus Disk -->
    <ellipse cx="0" cy="7" rx="50" ry="13" fill="#ffffff" stroke="url(#accentGradSq)" stroke-width="7"/>

    <!-- Plus Badge -->
    <g transform="translate(110, -110)">
      <circle cx="0" cy="0" r="32" fill="#0d9488" stroke="#ffffff" stroke-width="5"/>
      <path d="M -14 0 L 14 0 M 0 -14 L 0 14" stroke="#ffffff" stroke-width="7" stroke-linecap="round"/>
    </g>
  </g>

  <!-- Typography Below Emblem -->
  <g transform="translate(400, 560)" text-anchor="middle">
    <text y="30" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="52" font-weight="900" fill="#0f172a" letter-spacing="4">
      PRATHVI
    </text>
    <text y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="34" font-weight="800" fill="#0d9488" letter-spacing="5">
      ORTHOPEDIC CENTRE
    </text>
    
    <rect x="-240" y="110" width="480" height="4" rx="2" fill="url(#brandGradSq)" />

    <text y="145" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
      Dr. Vineet Bachani  •  MBBS, M.S. (Ortho)
    </text>
    <text y="180" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="16" font-weight="600" fill="#64748b">
      South Bopal, Ahmedabad  •  Reg: G-82085
    </text>
  </g>
</svg>
`;

// 3. Small Favicon SVG (512 x 512)
const faviconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="favGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f766e"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
    <linearGradient id="favAccent" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#14b8a6"/>
      <stop offset="100%" stop-color="#10b981"/>
    </linearGradient>
  </defs>

  <!-- Background Rounded Shield / Icon Tile -->
  <rect x="16" y="16" width="480" height="480" rx="110" fill="url(#favGrad)"/>

  <!-- Inner Soft Container -->
  <circle cx="256" cy="256" r="185" fill="#ffffff" />

  <!-- Dynamic Mobility Swirl Arcs -->
  <path d="M 140 210 A 135 135 0 0 1 360 170" fill="none" stroke="url(#favGrad)" stroke-width="22" stroke-linecap="round"/>
  <path d="M 372 300 A 135 135 0 0 1 152 342" fill="none" stroke="url(#favAccent)" stroke-width="22" stroke-linecap="round"/>

  <!-- Joint Condyle Articulation (High Contrast for Tiny Sizes) -->
  <path d="M 220 175 C 195 175 185 205 205 230 C 220 248 234 255 234 275 C 234 295 220 302 205 320 C 185 345 195 375 220 375 C 245 375 256 355 256 325 C 256 295 245 280 256 260 C 267 280 256 295 256 325 C 256 355 267 375 292 375 C 317 375 327 345 307 320 C 292 302 278 295 278 275 C 278 255 292 248 307 230 C 327 205 317 175 292 175 C 267 175 256 195 256 225 C 256 250 267 255 256 255 C 245 255 256 250 256 225 C 256 195 245 175 220 175 Z" fill="url(#favGrad)"/>

  <!-- Meniscus Disk -->
  <ellipse cx="256" cy="265" rx="42" ry="11" fill="#ffffff" stroke="url(#favAccent)" stroke-width="6"/>

  <!-- Tiny Medical Plus Badge -->
  <circle cx="360" cy="150" r="28" fill="#0d9488" stroke="#ffffff" stroke-width="4"/>
  <path d="M 348 150 L 372 150 M 360 138 L 360 162" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
</svg>
`;

async function main() {
  console.log('Generating vector SVG files...');
  fs.writeFileSync(path.join(outDir, 'prathvi-logo-horizontal.svg'), horizontalSvg.trim());
  fs.writeFileSync(path.join(outDir, 'prathvi-logo-square.svg'), squareSvg.trim());
  fs.writeFileSync(path.join(outDir, 'prathvi-favicon.svg'), faviconSvg.trim());

  console.log('Converting to High-Res PNG and JPG via Sharp...');

  // 1. Horizontal Logo
  // PNG (transparent)
  await sharp(Buffer.from(horizontalSvg))
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'prathvi-logo-horizontal.png'));

  // JPG (crisp white background)
  await sharp(Buffer.from(horizontalSvg))
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'prathvi-logo-horizontal.jpg'));

  // 2. Square Logo
  // PNG
  await sharp(Buffer.from(squareSvg))
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'prathvi-logo-square.png'));

  // JPG
  await sharp(Buffer.from(squareSvg))
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'prathvi-logo-square.jpg'));

  // 3. Favicon (512x512, 192x192, 64x64, 32x32)
  await sharp(Buffer.from(faviconSvg))
    .resize(512, 512)
    .png()
    .toFile(path.join(outDir, 'prathvi-favicon-512.png'));

  await sharp(Buffer.from(faviconSvg))
    .resize(64, 64)
    .png()
    .toFile(path.join(outDir, 'prathvi-favicon-64.png'));

  await sharp(Buffer.from(faviconSvg))
    .resize(512, 512)
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 95 })
    .toFile(path.join(outDir, 'prathvi-favicon.jpg'));

  // Copy favicon to public root as well
  fs.copyFileSync(
    path.join(outDir, 'prathvi-favicon-64.png'),
    path.join(__dirname, '../public/favicon.ico')
  );

  console.log('Generating PDF Brand Presentation Sheet...');
  await generatePdfPresentation();

  console.log('ALL LOGO ASSETS CREATED SUCCESSFULLY!');
}

function generatePdfPresentation() {
  return new Promise((resolve, reject) => {
    const pdfPath = path.join(outDir, 'Prathvi_Orthopedic_Logo_Design.pdf');
    const doc = new PDFDocument({ size: 'A4', margin: 40 });
    const stream = fs.createWriteStream(pdfPath);
    doc.pipe(stream);

    // Header Band
    doc.rect(0, 0, 595.28, 70).fill('#0f766e');
    doc.fillColor('#ffffff').fontSize(20).font('Helvetica-Bold').text('PRATHVI ORTHOPEDIC CENTRE', 40, 20);
    doc.fontSize(11).font('Helvetica').text('Official Brand Logo & Identity Specification • Dr. Vineet Bachani', 40, 44);

    // Section 1: Primary Horizontal Logo
    doc.fillColor('#0f172a').fontSize(14).font('Helvetica-Bold').text('1. Primary Horizontal Logo (Web & Signage)', 40, 95);
    doc.fontSize(9).font('Helvetica').fillColor('#64748b').text('Usage: Website header, clinic signage, letterhead, prescription pads, billings.', 40, 112);

    const horizontalJpg = path.join(outDir, 'prathvi-logo-horizontal.jpg');
    doc.rect(40, 128, 515.28, 154).fillAndStroke('#f8fafc', '#e2e8f0');
    doc.image(horizontalJpg, 47, 135, { width: 501.28 });

    // Section 2: Square Emblem & App Icon / Favicon
    doc.fillColor('#0f172a').fontSize(14).font('Helvetica-Bold').text('2. Square Emblem & Small Favicon / App Icon', 40, 310);
    doc.fontSize(9).font('Helvetica').fillColor('#64748b').text('Usage: WhatsApp business profile, Google Maps listing, browser tab favicon, stamps.', 40, 327);

    const squareJpg = path.join(outDir, 'prathvi-logo-square.jpg');
    const faviconJpg = path.join(outDir, 'prathvi-favicon.jpg');

    // Square box
    doc.rect(40, 342, 245, 230).fillAndStroke('#f8fafc', '#e2e8f0');
    doc.image(squareJpg, 62, 352, { width: 200 });
    doc.fillColor('#0d9488').fontSize(9).font('Helvetica-Bold').text('Square Brand Badge (800x800)', 75, 555);

    // Favicon box
    doc.rect(310, 342, 245, 230).fillAndStroke('#f8fafc', '#e2e8f0');
    doc.image(faviconJpg, 355, 360, { width: 155 });
    doc.fillColor('#0d9488').fontSize(9).font('Helvetica-Bold').text('Browser Favicon / App Icon (512x512 & 64x64)', 320, 555);

    // Section 3: Brand Color Palette & Clinic Details
    doc.rect(40, 595, 515.28, 185).fillAndStroke('#ffffff', '#cbd5e1');

    doc.fillColor('#0f172a').fontSize(12).font('Helvetica-Bold').text('Brand Palette & Clinical Registration Details', 55, 610);

    // Color Swatches
    // Teal
    doc.rect(55, 630, 40, 22).fill('#0d9488');
    doc.fillColor('#1e293b').fontSize(8).font('Helvetica-Bold').text('Medical Teal', 102, 632);
    doc.fontSize(7).font('Helvetica').fillColor('#64748b').text('#0d9488 • Primary Healing', 102, 642);

    // Cyan
    doc.rect(215, 630, 40, 22).fill('#06b6d4');
    doc.fillColor('#1e293b').fontSize(8).font('Helvetica-Bold').text('Modern Cyan', 262, 632);
    doc.fontSize(7).font('Helvetica').fillColor('#64748b').text('#06b6d4 • Joint Fluid / Energy', 262, 642);

    // Slate Navy
    doc.rect(380, 630, 40, 22).fill('#0f172a');
    doc.fillColor('#1e293b').fontSize(8).font('Helvetica-Bold').text('Deep Slate', 427, 632);
    doc.fontSize(7).font('Helvetica').fillColor('#64748b').text('#0f172a • Stability & Trust', 427, 642);

    // Text Details
    doc.moveTo(55, 665).lineTo(540, 665).strokeColor('#e2e8f0').stroke();

    doc.fillColor('#0f172a').fontSize(9).font('Helvetica-Bold').text('Clinic Name:', 55, 678);
    doc.font('Helvetica').text('Prathvi Orthopedic Centre (હાડકા ના ડૉક્ટર)', 135, 678);

    doc.font('Helvetica-Bold').text('Practitioner:', 55, 693);
    doc.font('Helvetica').text('Dr. Vineet Bachani, MBBS, M.S. (Orthopedics)  |  Reg No: G-82085', 135, 693);

    doc.font('Helvetica-Bold').text('Address:', 55, 708);
    doc.font('Helvetica').text('C - 252, 253 Sobo Center, South Bopal, Ahmedabad - 380058', 135, 708);

    doc.font('Helvetica-Bold').text('Helpline:', 55, 723);
    doc.font('Helvetica').text('+91 7778901394  •  OPD: Mon-Sat 10:00AM - 1:00PM & 4:00PM - 8:00PM', 135, 723);

    // Footer
    doc.fontSize(8).fillColor('#94a3b8').text('Generated for Doctor Review and Approval • Prathvi Orthopedic Centre © ' + new Date().getFullYear(), 40, 800, { align: 'center', width: 515 });

    doc.end();
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
}

main().catch(err => {
  console.error('Error generating logos:', err);
  process.exit(1);
});

