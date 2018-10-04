$(document).ready(function () {
    const $tabsList = $('.tabs__list');
    $tabsList.on('click', '.tabs__item a', function (event) {
        event.preventDefault();
        // Tabs
        const tabsItem = $(this).parent();
        const targetId = $(this).attr('href');
        const targetPanel = $(targetId);

        const $allTabsItems = $('.tabs__item.is-active');
        $allTabsItems.removeClass('is-active');
        tabsItem.addClass('is-active');
        // Panel
        const allActivePanels = $('.tabs__panel.is-active');
        allActivePanels.removeClass('is-active');
        targetPanel.addClass('is-active');
    })



    // Accordion
    const $accordion = $('.accordion');
    $accordion.on('click', '.accordion__header a ', ' .accordion__header a img', function (event) {
        event.preventDefault();
        const $targetHeader = $(this).closest('.accordion__header');
        const $targetPanel = $targetHeader.next();
        // Panels
        const allPanels = $('.accordion__panel');
        $targetPanel.toggleClass('is-active');
        // Headers
        const allHeaders = $('.accordion__header');
        $targetHeader.toggleClass('is-active');
    })


    // Loaders 

    const $button = $('button');
    $button.on('click', function (e) {
        $('html').addClass('is-loading', 'prevent-scroll');
    })

    function activateLoader() {
        $('html').addClass('is-loading', 'prevent-scroll');
    }

    function deactivateLoader() {
        $('html').removeClass('is-loading', 'prevent-scroll');
    }

    activateLoader();

    //Activate Loader
    setTimeout(() => {
        deactivateLoader();
    }, 1000);

    //Escape Keypress
    $(document).on('keydown', event => {
        if (event.key === 'Escape') {
            closeModal();
            deactivateLoader();
        }
    });
    $('.modal').on('click', closeModal);
    $('.modal__box').on('click', event => {
        event.stopPropagation();
    })
});
function openModal() {
    $('.modal__box').removeClass('is-leaving');
    $('.modal').addClass('is-active');
    $('html').addClass('prevent-scroll');
}

function closeModal() {
    $('.modal__box').addClass('is-leaving');
    $('.modal').addClass('is-active');
    setTimeout(() => {
        $('.modal').removeClass('is-active');
        $('html').removeClass('prevent-scroll');
    }, 350)
}