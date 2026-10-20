const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const PDFDocument = require('pdfkit');

const outDir = path.join(__dirname, '../public/logo');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// ==========================================
// OPTION 1: "The Dynamic Clinic Signboard Evolution" (Colorful overlapping rings with Knee/Joint)
// Inspired directly by Dr. Vineet's Sobo Center clinic board
// ==========================================
const option1HorizontalSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 360" width="1200" height="360">
  <defs>
    <linearGradient id="opt1Teal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f766e"/>
      <stop offset="100%" stop-color="#14b8a6"/>
    </linearGradient>
    <linearGradient id="opt1Cyan" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
    <linearGradient id="opt1Coral" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e11d48"/>
      <stop offset="100%" stop-color="#f43f5e"/>
    </linearGradient>
    <linearGradient id="opt1Amber" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#d97706"/>
      <stop offset="100%" stop-color="#fbbf24"/>
    </linearGradient>
    <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#0f172a" flood-opacity="0.12"/>
    </filter>
  </defs>

  <!-- Left: Multi-Ring Orthopedic Joint Emblem -->
  <g transform="translate(180, 180)" filter="url(#softShadow)">
    <!-- Base Circular Capsule -->
    <circle cx="0" cy="0" r="135" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>

    <!-- Overlapping Chromatic Healing Rings (from Dr. Vineet's Signboard) -->
    <!-- Red/Coral Ring (Bottom Left) -->
    <circle cx="-35" cy="35" r="70" fill="url(#opt1Coral)" fill-opacity="0.22" stroke="url(#opt1Coral)" stroke-width="4"/>
    <!-- Amber/Gold Ring (Top Left) -->
    <circle cx="-30" cy="-35" r="65" fill="url(#opt1Amber)" fill-opacity="0.22" stroke="url(#opt1Amber)" stroke-width="4"/>
    <!-- Cyan Ring (Top Right) -->
    <circle cx="35" cy="-30" r="68" fill="url(#opt1Cyan)" fill-opacity="0.22" stroke="url(#opt1Cyan)" stroke-width="4"/>
    <!-- Teal Ring (Bottom Right) -->
    <circle cx="30" cy="35" r="70" fill="url(#opt1Teal)" fill-opacity="0.22" stroke="url(#opt1Teal)" stroke-width="4"/>

    <!-- Dynamic Motion Arcs -->
    <path d="M -95 -20 A 100 100 0 0 1 70 -75" fill="none" stroke="url(#opt1Teal)" stroke-width="12" stroke-linecap="round"/>
    <path d="M 95 20 A 100 100 0 0 1 -70 75" fill="none" stroke="url(#opt1Cyan)" stroke-width="12" stroke-linecap="round"/>

    <!-- Center Knee Joint Articulation Silhouette -->
    <!-- Femur Condyle (Upper Bone) -->
    <path d="M -30 -65 C -45 -65 -50 -45 -36 -25 C -25 -10 -15 -5 -15 8 L 15 8 C 15 -5 25 -10 36 -25 C 50 -45 45 -65 30 -65 C 15 -65 0 -50 0 -30 C 0 -50 -15 -65 -30 -65 Z" fill="#0f766e"/>
    
    <!-- Tibia Plateau (Lower Bone) -->
    <path d="M -35 65 C -48 65 -45 45 -30 25 C -20 12 -12 10 -12 8 L 12 8 C 12 10 20 12 30 25 C 45 45 48 65 35 65 C 20 65 0 52 0 35 C 0 52 -20 65 -35 65 Z" fill="#0284c7"/>

    <!-- Joint Meniscus Disk Cushion (Center) -->
    <ellipse cx="0" cy="8" rx="38" ry="8" fill="#ffffff" stroke="#10b981" stroke-width="4"/>

    <!-- Medical Plus Badge (top right) -->
    <g transform="translate(80, -78)">
      <circle cx="0" cy="0" r="22" fill="#0d9488" stroke="#ffffff" stroke-width="3"/>
      <path d="M -10 0 L 10 0 M 0 -10 L 0 10" stroke="#ffffff" stroke-width="4.5" stroke-linecap="round"/>
    </g>
  </g>

  <!-- Right: Balanced Typography -->
  <g transform="translate(365, 0)">
    <!-- Brand Title -->
    <text x="0" y="145" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="64" font-weight="900" fill="#0f172a" letter-spacing="3">
      PRATHVI
    </text>
    <text x="325" y="145" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="52" font-weight="800" fill="#0d9488" letter-spacing="2">
      ORTHOPEDIC
    </text>
    <text x="735" y="145" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="34" font-weight="700" fill="#0284c7" letter-spacing="5">
      CENTRE
    </text>

    <!-- Aesthetic Gradient Accent Line -->
    <rect x="0" y="172" width="775" height="4.5" rx="2.25" fill="url(#opt1Teal)"/>

    <!-- Doctor Credentials -->
    <text x="0" y="222" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="28" font-weight="800" fill="#1e293b">
      Dr. Vineet Bachani
    </text>
    <text x="270" y="222" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="22" font-weight="600" fill="#0d9488">
      •  MBBS, M.S. (Orthopedics)
    </text>
    <text x="590" y="222" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="19" font-weight="700" fill="#64748b">
      [Reg: G-82085]
    </text>

    <!-- Clinical Tagline -->
    <text x="0" y="265" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="18.5" font-weight="600" fill="#475569" letter-spacing="0.5">
      Knee &amp; Hip Joint Replacement  |  Arthroscopy  |  Complex Trauma &amp; Spine
    </text>

    <!-- Clinic Location Badge -->
    <rect x="0" y="286" width="510" height="34" rx="8" fill="#f0fdfa" stroke="#ccfbf1" stroke-width="1.5"/>
    <text x="14" y="309" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="15" font-weight="700" fill="#0f766e">
      Sobo Center, South Bopal, Ahmedabad  •  હાડકા ના ડૉક્ટર
    </text>
  </g>
</svg>
`;

// Option 1 Favicon (512x512)
const option1FaviconSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="fav1Teal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f766e"/>
      <stop offset="100%" stop-color="#14b8a6"/>
    </linearGradient>
    <linearGradient id="fav1Cyan" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
    <linearGradient id="fav1Coral" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e11d48"/>
      <stop offset="100%" stop-color="#f43f5e"/>
    </linearGradient>
  </defs>

  <!-- Outer Rounded Tile -->
  <rect x="16" y="16" width="480" height="480" rx="110" fill="url(#fav1Teal)"/>

  <!-- Inner Circle Canvas -->
  <circle cx="256" cy="256" r="195" fill="#ffffff"/>

  <!-- Chromatic Rings for High Contrast in Browser Tabs -->
  <circle cx="210" cy="295" r="85" fill="url(#fav1Coral)" fill-opacity="0.25" stroke="url(#fav1Coral)" stroke-width="5"/>
  <circle cx="295" cy="215" r="85" fill="url(#fav1Cyan)" fill-opacity="0.25" stroke="url(#fav1Cyan)" stroke-width="5"/>

  <!-- Motion Swirl -->
  <path d="M 140 215 A 130 130 0 0 1 355 160" fill="none" stroke="url(#fav1Teal)" stroke-width="20" stroke-linecap="round"/>
  <path d="M 370 300 A 130 130 0 0 1 155 350" fill="none" stroke="url(#fav1Cyan)" stroke-width="20" stroke-linecap="round"/>

  <!-- Joint Condyle Articulation -->
  <path d="M 215 185 C 195 185 188 210 205 235 C 220 250 232 256 232 270 C 232 284 220 290 205 305 C 188 330 195 355 215 355 C 240 355 256 338 256 315 C 256 295 244 285 256 265 C 268 285 256 295 256 315 C 256 338 272 355 297 355 C 317 355 324 330 307 305 C 292 290 280 284 280 270 C 280 256 292 250 307 235 C 324 210 317 185 297 185 C 272 185 256 202 256 225 C 256 245 268 250 256 250 C 244 250 256 245 256 225 C 256 202 240 185 215 185 Z" fill="#0f766e"/>

  <!-- Meniscus Cushion -->
  <ellipse cx="256" cy="270" rx="42" ry="11" fill="#ffffff" stroke="#10b981" stroke-width="6"/>

  <!-- Medical Cross Badge -->
  <circle cx="365" cy="145" r="28" fill="#0d9488" stroke="#ffffff" stroke-width="4"/>
  <path d="M 353 145 L 377 145 M 365 133 L 365 157" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
</svg>
`;

// Option 1 Square Emblem (800x800)
const option1SquareSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
  <defs>
    <linearGradient id="sqTeal" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f766e"/>
      <stop offset="100%" stop-color="#14b8a6"/>
    </linearGradient>
    <linearGradient id="sqCyan" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7"/>
      <stop offset="100%" stop-color="#38bdf8"/>
    </linearGradient>
    <linearGradient id="sqCoral" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#e11d48"/>
      <stop offset="100%" stop-color="#f43f5e"/>
    </linearGradient>
  </defs>

  <!-- Central Emblem -->
  <g transform="translate(400, 310)">
    <circle cx="0" cy="0" r="195" fill="#ffffff" stroke="#e2e8f0" stroke-width="3"/>

    <!-- Chromatic Rings -->
    <circle cx="-50" cy="50" r="100" fill="url(#sqCoral)" fill-opacity="0.22" stroke="url(#sqCoral)" stroke-width="5"/>
    <circle cx="50" cy="-50" r="100" fill="url(#sqCyan)" fill-opacity="0.22" stroke="url(#sqCyan)" stroke-width="5"/>

    <!-- Arcs -->
    <path d="M -135 -40 A 145 145 0 0 1 115 -105" fill="none" stroke="url(#sqTeal)" stroke-width="18" stroke-linecap="round"/>
    <path d="M 135 40 A 145 145 0 0 1 -115 105" fill="none" stroke="url(#sqCyan)" stroke-width="18" stroke-linecap="round"/>

    <!-- Knee Joint Articulation -->
    <path d="M -42 -90 C -65 -90 -72 -60 -52 -32 C -36 -12 -22 -6 -22 12 L 22 12 C 22 -6 36 -12 52 -32 C 72 -60 65 -90 42 -90 C 22 -90 0 -70 0 -42 C 0 -70 -22 -90 -42 -90 Z" fill="#0f766e"/>
    <path d="M -48 90 C -68 90 -62 62 -42 34 C -28 16 -16 14 -16 12 L 16 12 C 16 14 28 16 42 34 C 62 62 68 90 48 90 C 28 90 0 72 0 48 C 0 72 -28 90 -48 90 Z" fill="#0284c7"/>

    <ellipse cx="0" cy="12" rx="55" ry="12" fill="#ffffff" stroke="#10b981" stroke-width="5"/>

    <g transform="translate(115, -115)">
      <circle cx="0" cy="0" r="32" fill="#0d9488" stroke="#ffffff" stroke-width="4"/>
      <path d="M -14 0 L 14 0 M 0 -14 L 0 14" stroke="#ffffff" stroke-width="6" stroke-linecap="round"/>
    </g>
  </g>

  <!-- Typography Underneath -->
  <g transform="translate(400, 565)" text-anchor="middle">
    <text y="30" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="54" font-weight="900" fill="#0f172a" letter-spacing="4">
      PRATHVI
    </text>
    <text y="85" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="34" font-weight="800" fill="#0d9488" letter-spacing="5">
      ORTHOPEDIC CENTRE
    </text>
    <rect x="-250" y="112" width="500" height="4" rx="2" fill="url(#sqTeal)" />

    <text y="148" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="22" font-weight="700" fill="#1e293b">
      Dr. Vineet Bachani  •  MBBS, M.S. (Ortho)
    </text>
    <text y="182" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="16" font-weight="600" fill="#64748b">
      Sobo Center, South Bopal, Ahmedabad  •  Reg: G-82085
    </text>
  </g>
</svg>
`;

async function generateAll() {
  console.log('1. Writing SVG files...');
  fs.writeFileSync(path.join(outDir, 'prathvi-logo-horizontal.svg'), option1HorizontalSvg.trim());
  fs.writeFileSync(path.join(outDir, 'prathvi-logo-square.svg'), option1SquareSvg.trim());
  fs.writeFileSync(path.join(outDir, 'prathvi-favicon.svg'), option1FaviconSvg.trim());

  console.log('2. Rendering High-Resolution PNG & JPG formats via Sharp...');

  // High-Res Big Horizontal Logo
  // Transparent PNG (width 2400 for ultra-sharp 4K/retina display)
  await sharp(Buffer.from(option1HorizontalSvg), { density: 300 })
    .resize(2400, 720)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'prathvi-logo-horizontal.png'));

  // Crisp White Background JPG (width 2400)
  await sharp(Buffer.from(option1HorizontalSvg), { density: 300 })
    .resize(2400, 720)
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 98 })
    .toFile(path.join(outDir, 'prathvi-logo-horizontal.jpg'));

  // Square Emblem PNG (1600x1600)
  await sharp(Buffer.from(option1SquareSvg), { density: 300 })
    .resize(1600, 1600)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'prathvi-logo-square.png'));

  // Square Emblem JPG (1600x1600)
  await sharp(Buffer.from(option1SquareSvg), { density: 300 })
    .resize(1600, 1600)
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 98 })
    .toFile(path.join(outDir, 'prathvi-logo-square.jpg'));

  // Favicons
  // 512x512 PNG
  await sharp(Buffer.from(option1FaviconSvg), { density: 300 })
    .resize(512, 512)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'prathvi-favicon-512.png'));

  // 64x64 PNG
  await sharp(Buffer.from(option1FaviconSvg), { density: 300 })
    .resize(64, 64)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'prathvi-favicon-64.png'));

  // 32x32 PNG
  await sharp(Buffer.from(option1FaviconSvg), { density: 300 })
    .resize(32, 32)
    .png({ quality: 100 })
    .toFile(path.join(outDir, 'prathvi-favicon-32.png'));

  // Favicon JPG
  await sharp(Buffer.from(option1FaviconSvg), { density: 300 })
    .resize(512, 512)
    .flatten({ background: '#ffffff' })
    .jpeg({ quality: 98 })
    .toFile(path.join(outDir, 'prathvi-favicon.jpg'));

  // Copy favicon to public root for browser standard
  fs.copyFileSync(
    path.join(outDir, 'prathvi-favicon-64.png'),
    path.join(__dirname, '../public/favicon.ico')
  );

  console.log('3. Generating Doctor Presentation PDF Document...');
  await generatePdfSheet();

  console.log('ALL FORMATS (JPG, PNG, PDF, SVG) GENERATED SUCCESSFULLY!');
}

function generatePdfSheet() {
  return new Promise((resolve, reject) => {
    const pdfPath = path.join(outDir, 'Prathvi_Orthopedic_Logo_Brand_Specification.pdf');
    const doc = new PDFDocument({ size: 'A4', margin: 36 });
    const stream = fs.createWriteStream(pdfPath);
    doc.pipe(stream);

    // ===================================
    // PAGE 1: Brand Logo Presentation Sheet
    // ===================================
    // Top Hospital Banner Header
    doc.rect(0, 0, 595.28, 75).fill('#0f766e');
    doc.fillColor('#ffffff').fontSize(22).font('Helvetica-Bold').text('PRATHVI ORTHOPEDIC CENTRE', 36, 18);
    doc.fontSize(11).font('Helvetica').text('Official Brand Logo & Identity Specification • Dr. Vineet Bachani (MBBS, MS Ortho)', 36, 46);

    // Section 1: Main Horizontal Logo
    doc.fillColor('#0f172a').fontSize(13).font('Helvetica-Bold').text('1. Primary Horizontal Logo (Web, Signage & Letterhead)', 36, 95);
    doc.fontSize(9).font('Helvetica').fillColor('#64748b').text('Use this file for clinic outdoor hoardings, website navigation, prescriptions, and official stationary.', 36, 110);

    const horizontalJpg = path.join(outDir, 'prathvi-logo-horizontal.jpg');
    doc.rect(36, 126, 523.28, 155).fillAndStroke('#f8fafc', '#cbd5e1');
    doc.image(horizontalJpg, 44, 133, { width: 507.28 });

    // Section 2: Square Logo & Small Favicon
    doc.fillColor('#0f172a').fontSize(13).font('Helvetica-Bold').text('2. Square Emblem & Small Favicon / App Icon', 36, 305);
    doc.fontSize(9).font('Helvetica').fillColor('#64748b').text('Optimized for high visibility at tiny resolutions (browser tabs, WhatsApp Business DP, Google Maps profile).', 36, 320);

    const squareJpg = path.join(outDir, 'prathvi-logo-square.jpg');
    const faviconJpg = path.join(outDir, 'prathvi-favicon.jpg');

    // Square Emblem Box
    doc.rect(36, 335, 252, 230).fillAndStroke('#f8fafc', '#cbd5e1');
    doc.image(squareJpg, 62, 345, { width: 200 });
    doc.fillColor('#0d9488').fontSize(9).font('Helvetica-Bold').text('Square Profile Emblem (1600x1600)', 70, 550);

    // Favicon Box
    doc.rect(307, 335, 252, 230).fillAndStroke('#f8fafc', '#cbd5e1');
    doc.image(faviconJpg, 350, 355, { width: 165 });
    doc.fillColor('#0d9488').fontSize(9).font('Helvetica-Bold').text('Small Favicon & App Icon (512, 64 & 32px)', 330, 550);

    // Section 3: Brand Identity Specifications & Color Values
    doc.rect(36, 585, 523.28, 205).fillAndStroke('#ffffff', '#cbd5e1');
    doc.fillColor('#0f172a').fontSize(12).font('Helvetica-Bold').text('Brand Palette & Doctor Credentials', 50, 600);

    // Color Swatches
    // Teal
    doc.rect(50, 620, 36, 20).fill('#0d9488');
    doc.fillColor('#1e293b').fontSize(8).font('Helvetica-Bold').text('Medical Teal', 92, 622);
    doc.fontSize(7).font('Helvetica').fillColor('#64748b').text('#0d9488 (Healing & Care)', 92, 632);

    // Cyan
    doc.rect(175, 620, 36, 20).fill('#0284c7');
    doc.fillColor('#1e293b').fontSize(8).font('Helvetica-Bold').text('Dynamic Cyan', 217, 622);
    doc.fontSize(7).font('Helvetica').fillColor('#64748b').text('#0284c7 (Mobility & Joints)', 217, 632);

    // Coral
    doc.rect(300, 620, 36, 20).fill('#e11d48');
    doc.fillColor('#1e293b').fontSize(8).font('Helvetica-Bold').text('Vital Coral', 342, 622);
    doc.fontSize(7).font('Helvetica').fillColor('#64748b').text('#e11d48 (Signboard Touch)', 342, 632);

    // Navy
    doc.rect(425, 620, 36, 20).fill('#0f172a');
    doc.fillColor('#1e293b').fontSize(8).font('Helvetica-Bold').text('Deep Slate', 467, 622);
    doc.fontSize(7).font('Helvetica').fillColor('#64748b').text('#0f172a (Clinical Trust)', 467, 632);

    // Divider Line
    doc.moveTo(50, 652).lineTo(545, 652).strokeColor('#e2e8f0').stroke();

    // Doctor & Clinic Text
    doc.fillColor('#0f172a').fontSize(9).font('Helvetica-Bold').text('Clinic Name:', 50, 665);
    doc.font('Helvetica').text('Prathvi Orthopedic Centre (હાડકા ના ડૉક્ટર)', 135, 665);

    doc.font('Helvetica-Bold').text('Specialist:', 50, 680);
    doc.font('Helvetica').text('Dr. Vineet Bachani, MBBS, M.S. (Orthopedics)  |  Reg No: G-82085', 135, 680);

    doc.font('Helvetica-Bold').text('Location:', 50, 695);
    doc.font('Helvetica').text('C - 252, 253 Sobo Center, South Bopal, Ahmedabad - 380058', 135, 695);

    doc.font('Helvetica-Bold').text('Appointment:', 50, 710);
    doc.font('Helvetica').text('+91 7778901394  •  OPD: Mon-Sat 10:00 AM - 1:00 PM & 4:00 PM - 8:00 PM', 135, 710);

    doc.font('Helvetica-Bold').text('Core Specialties:', 50, 725);
    doc.font('Helvetica').text('Total Knee & Hip Replacement, Arthroscopy (ACL/Meniscus), Complex Trauma Fixation, Spine', 135, 725);

    // Footer note
    doc.fontSize(8).fillColor('#94a3b8').text('Designed for Dr. Vineet Bachani • Prathvi Orthopedic Centre © ' + new Date().getFullYear(), 36, 808, { align: 'center', width: 523 });

    doc.end();
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
}

generateAll().catch(err => {
  console.error(err);
  process.exit(1);
});

