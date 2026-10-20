const endpoints = [
  'http://localhost:3000/',
  'http://localhost:3000/logo/prathvi-logo-horizontal.png',
  'http://localhost:3000/favicon.ico',
  'http://localhost:3000/images/dr-vineet-hero.jpg',
  'http://localhost:3000/images/clinic-board.jpg',
  'http://localhost:3000/logo/Prathvi_Orthopedic_Logo_Brand_Specification.pdf'
];

async function checkAll() {
  for (const url of endpoints) {
    try {
      const res = await fetch(url);
      console.log(res.status, res.statusText, '->', url);
    } catch (e) {
      console.error('FAIL:', url, e.message);
    }
  }
}

checkAll();

