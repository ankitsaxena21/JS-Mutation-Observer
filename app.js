//import './sizer.js'
import './bears.js'

const observer = new MutationObserver(function (mutations) {
    console.log("changges", mutations)
  mutations.forEach(function (mutation) {
    if (mutation.attributeName === 'style') {
      centerModal()
    }
    if (mutation.addedNodes.length) {
      console.log('Added', mutation.addedNodes[0])
    }
    if (mutation.removedNodes.length) {
      console.log('Removed', mutation.removedNodes[0])
    }
  })
})

const bears = document.querySelector('ul.bears')
observer.observe(bears, {
  childList: true,
  attributes: true
})

function centerModal () {
  const width = parseInt(bears.offsetWidth, 10)
  const height = parseInt(bears.offsetHeight, 10)
  Object.assign(bears.style, {
    top: '50%',
    left: '50%',
    marginTop: -(height / 2) + 'px',
    marginLeft: -(width / 2) + 'px',
  })
}

// const poller = setInterval(function () {
//   const bear = document.querySelector('ul.bears li')
//   if (bear) {
//     console.log(bear)
//     clearInterval(poller)
//   }
// }, 1000)














// const mutationObserver = new MutationObserver(entries => {
//     console.log(entries);
// })

// const parent = document.querySelector('.parent');


// mutationObserver.observe(parent, {
//     characterData: true,
//     characterDataOldValue: true,
//     subtree: true
//     // attributes: true,
//     // attributeFilter: ['id']
//     //childList: true
// })

// //mutationObserver.disconnect(); - to stop mutation observer


// setTimeout(() => {
//     parent.appendChild(document.createElement('div'));
// }, 2000);
// parent.children[0].remove();

// //changin attributes
// parent.id = "new id"