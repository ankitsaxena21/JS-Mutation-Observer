import './animes.js'

const mutationObserver = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    if (mutation.type === 'characterData') {
      console.log('The characterData was modified.');
    }
    if (mutation.type === 'attributes') {
      console.log('The ' + mutation.attributeName + ' attribute was modified.');
    }
    if (mutation.addedNodes.length) {
      console.log('Added', mutation.addedNodes[0])
    }
    if (mutation.removedNodes.length) {
      console.log('Removed', mutation.removedNodes[0])
    }
  })
})

const parent = document.querySelector('.parent');

mutationObserver.observe(parent, {
  subtree: true,
  characterData: true,
  characterDataOldValue: true,
  attributes: true,
  childList: true
})

setTimeout(() => {
  const box5 = document.createElement('div');
  box5.classList.add('box');
  box5.appendChild(document.createTextNode('Box 5'))
  parent.children[0].appendChild(box5);
}, 1000);
parent.children[0].children[0].remove();


// //changin attributes
parent.id = "new id"

// //mutationObserver.disconnect(); - to stop mutation observer


// const poller = setInterval(function () {
//   const anime = document.querySelector('ul.animes li')
//   if (anime) {
//     console.log(anime)
//     clearInterval(poller)
//   }
// }, 1000)

