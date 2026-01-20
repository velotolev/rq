const quotes = [
  'Сложное — это просто не до конца понятное.',
  'Действие — ключ к любому успеху.',
  'Лучшее время начать — сейчас.',
  'Ошибки — часть роста.',
];

const quoteElement = document.getElementById('quote');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
});
