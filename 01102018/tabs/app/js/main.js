// Get <ul> with list of tab links
const tabsList = document.querySelector('.tabs__list');
//Add click listener to whole link list
tabsList.addEventListener('click', event => {
    // Event delegatoon
    if(event.target.matches('.tabs__item a')) {
        event.preventDefault();
        // Get clicked tab list item
        const tabsItem = event.target.parentNode;
        // Get corresponding panel's ID via hash
        const targetId = event.target.hash.slice(1);
        // Get correct panel by ID
        const targetPanel = document.getElementById(targetId);

        // Activate correct tabs menu item
        const allTabsItems = document.querySelectorAll('.tabs__item');
        // Remove active class from all items
        allTabsItems.forEach(item => {
            item.classList.remove('is-active');
        });
        // Add class active to clicked item
        tabsItem.classList.add('is-active');

        /*
        *Panels
        */

        const allActivePanels = document.querySelectorAll('.tabs__panel');
        // Remove active class from all items
        allActivePanels.forEach(panel => {
            panel.classList.remove('is-active');
        });
        // Add class active to clicked item
        targetPanel.classList.add('is-active');
    }
});


/*
*Accordion
*/

const accordion = document.querySelector('.accordion');

accordion.addEventListener('click', event => {
    if(event.target.matches('.accordion__header a, .accordion__header a svg ')) {
        event.preventDefault();
        const targetHeader = event.target.tagName.toLowerCase() =='a' ? event.target.parentNode : event.target.parentNode.parentNode;
        const targetPanel = targetHeader.nextElementSibling;
        // Panels
        const allPanels = document.querySelectorAll('.accordion__panel');
        targetPanel.classList.toggle('is-active');
       
        //Headers
        const allHeaders = document.querySelectorAll('.accordion__header');
         targetHeader.classList.toggle('is-active');

    }
})

/**
 * Loader
 */
const button = document.querySelector('button');

button.addEventListener('click', event => {
    document.querySelector('html').classList.add('is-loading','prevent-scroll');
});

function activateLoader() {
    document.querySelector('html').classList.add('is-loading','prevent-scroll');

}

function deactivateLoader() {
    document.querySelector('html').classList.remove('is-loading','prevent-scroll');

}

//activateLoader();

setTimeout(() => {
    deactivateLoader();
},1000);

/**
 * Modal
 */

 // Open Modal
 const modal = document.querySelector('.modal');
 const html = document.querySelector('html');
 


function openModal() {
    const modalBox = modal.querySelector('.modal__box');
    modalBox.classList.remove('is-leaving');
    modal.classList.add('is-active');
    html.classList.add('prevent-scroll');
    
}

 // Close Modal

 function closeModal() {
    const modalBox = modal.querySelector('.modal__box');
    modalBox.classList.add('is-leaving');
    setTimeout(() =>{
        modal.classList.remove('is-active');
        html.classList.remove('parent-scroll');

    },350)
    
 }
 document.addEventListener('keydown', event=> {
     if(event.key === 'Escape') {
         closeModal();
         deactivateLoader();
     }
 });

 modal.addEventListener('click', closeModal);

 modal.querySelector('.modal__box').addEventListener('click',event => {
    event.stopPropagation();
 });