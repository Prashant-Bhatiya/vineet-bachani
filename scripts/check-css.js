const http = require('http');

fetch('http://localhost:3000')
  .then(res => res.text())
  .then(t => {
    const match = t.match(/href="(\/_next\/static\/css\/[^"]+)"/);
    if (match) {
      console.log('CSS URL:', match[1]);
      return fetch('http://localhost:3000' + match[1]);
    } else {
      console.log('NO CSS URL FOUND IN HTML!');
      return null;
    }
  })
  .then(res => res ? res.text() : null)
  .then(css => {
    if (css) {
      console.log('CSS character length:', css.length);
      console.log('Sample classes present in CSS:');
      ['bg-teal-600', 'flex', 'text-slate-900', 'max-w-7xl', 'grid'].forEach(c => {
        console.log('Has ' + c + '?', css.includes(c));
      });
    }
  })
  .catch(err => console.error('Error checking CSS:', err));

