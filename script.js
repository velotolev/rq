const quotes = [
  {
    text: 'Сложное — это просто не до конца понятное.',
    author: 'Альберт Эйнштейн',
  },
  {
    text: 'Лучшее время начать — сейчас.',
    author: 'Неизвестный автор',
  },
  {
    text: 'Опыт — это имя, которое каждый даёт своим ошибкам.',
    author: 'Оскар Уайльд',
  },
  {
    text: 'Действие — ключ к любому успеху.',
    author: 'Пабло Пикассо',
  },

  {
    text: 'Простота — высшая степень сложности.',
    author: 'Леонардо да Винчи',
  },
  {
    text: 'Если ты можешь это представить — ты можешь это сделать.',
    author: 'Уолт Дисней',
  },
  {
    text: 'Не бойся делать медленно, бойся стоять на месте.',
    author: 'Китайская пословица',
  },
];

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const { text, author } = randomQuote;
  // const quote = randomQuote.text;
  // const quoteAuthor = randomQuote.author;

  quoteElement.textContent = text;
  quoteAuthorElement.textContent = author;
});
