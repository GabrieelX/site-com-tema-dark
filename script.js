const chk = document.getElementById('chk');
const body = document.body;


const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  body.classList.add(savedTheme);
}

chk.addEventListener('change', () => {
  body.classList.toggle('dark');


  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    console.log('Tema escuro selecionado.');
  } else {
    localStorage.setItem('theme', 'light');
    console.log('Tema claro selecionado.');
  }
});