const burgerMenu = document.querySelector('.burger-icon')
const burgerNavLink = document.querySelectorAll('.nav__link')
const body = document.body
burgerMenu.addEventListener('click', () => {
  if (body.classList.contains('body--opened-menu')) {
      body.classList.remove('body--opened-menu')
  } else {
      body.classList.add('body--opened-menu')
  }
}) 
burgerNavLink.forEach((item) => {
  item.addEventListener('click', () => {
    if (body.classList.contains('body--opened-menu')) {
      body.classList.remove('body--opened-menu')
  }
  })
})
/////////////////////////////////////////////
const modal = document.querySelector('.modal')
const surprize = document.querySelector('.about__img-link')
const modalCancel = document.querySelector('.modal__cancel')
surprize.addEventListener('click', () => {
  if (!body.classList.contains('body--opened-modal')) {
    body.classList.add('body--opened-modal')
  }
})
// modal.addEventListener('click', (event) => {
//   const target = event.target
//   if (target.tagName !== 'modal__window' && body.classList.contains('body--opened-modal')) {
//     body.classList.remove('body--opened-modal')
//   }
// })
modalCancel.addEventListener('click', () => {
  if (body.classList.contains('body--opened-modal')) {
    body.classList.remove('body--opened-modal')
  }
})
///////////////////////////////
const tabControls = document.querySelector('.tab-conrols')

tabControls.addEventListener('click', toggleTab)

function toggleTab(e) {

    const tabControl = e.target.closest('.tab-conrols__link')

    if (!tabControl) return
    e.preventDefault()
    if (tabControl.classList.contains('tab-conrols__link--active')) return

    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tab-conrols__link--active')
    const activeContent = document.querySelector('.tab-content--show')

    if (activeControl) {
        activeControl.classList.remove('tab-conrols__link--active')
    }
    if (activeContent) {
        activeContent.classList.remove('tab-content--show')
    }

    tabControl.classList.add('tab-conrols__link--active')
    tabContent.classList.add('tab-content--show')

}

const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {
  el.addEventListener('click', (e) => {
    const accordionList = e.currentTarget
    const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
    const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')
    const accordionControl = e.target.closest('.accordion-list__control');
    if (!accordionControl) return
    const accordionItem = accordionControl.parentElement;
    const accordionContent = accordionControl.nextElementSibling
    if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
        accordionOpenedItem.classList.remove('accordion-list__item--opened');
        accordionOpenedContent.style.maxHeight = null;
    }
    accordionItem.classList.toggle('accordion-list__item--opened')
    if (accordionItem.classList.contains('accordion-list__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
        accordionContent.style.maxHeight = null;
    }
  });
});