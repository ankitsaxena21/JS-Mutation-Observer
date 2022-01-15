// animes.js - library that will add/remove random anime to the DOM

const randomAnimeList = ['Naruto', 'Bleach', 'Tokyo Ghoul', "One Piece", "MHA", "Noragami"];

setTimeout(() => {
  const animes = document.querySelector('ul.animes')
  const anime = document.createElement('li')
  anime.textContent = randomAnimeList[parseInt(Math.random() * randomAnimeList.length, 10)]
  animes.appendChild(anime)
}, Math.random() * 2000);

setTimeout(() => {
  const animes = document.querySelector('ul.animes')
  animes.removeChild(animes.querySelector('li'))
}, Math.random() * 2000 + 2000);