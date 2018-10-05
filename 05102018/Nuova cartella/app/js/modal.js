// Class Example

// class Animal {
//     constructor(name) {
//         this.name = name;
//         this.props = [];
//     }
//     get nickname() {
//         return this.name.split('').reverse().join('');
//     }
//     set nickname(nickname) {
//         this.props.push(nickname);

//     }
//     speak() {
//         console.log(`${this.name} makes a sound.`);
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//         super(name)
//     }
//     speak() {
//         super.speak();
//         console.log(`${this.name} barks`);
//     }
// }

// const animal = new Animal('Panda');
// animal.speak();

// const dog = new Dog('Fuffi');
// dog.speak();

class Modal {
    constructor(selector) {
        this.$modal = $(selector);
        this.$wrapper = this.$modal.closest('.modal');
        this.$loader = this.$modal.siblings('.modal__loader');
        this.isOpened = false;

        this.$wrapper.on('click', event => {
            event.preventDefault();
            this.close();
        });

        this.$modal.on('click', event => {
            event.stopPropagation();
        })

        this.$modal.find('.modal__close, .modal__button')
            .on('click', event => {
                event.preventDefault();
                this.close();
            })
    }
    open() {
        this.isOpened = true;
        this.$loader.hide();
        this.$modal.slideDown();
    }
    close() {
        if (this.isOpened) {
            this.$modal.slideUp();
            this.$loader.hide();
            this.$wrapper.fadeOut();
            this.isOpened = false;
        }
    }
    load() {
        this.$loader.show();
        this.$wrapper.fadeIn();
    }
}


// App    ---> $(function()) uguale a $(document).ready
$(function () {
    const modalInfo = new Modal('#modal__info');
    const modalWarning = new Modal('#modal__warning');

    $('#info').on('click', event => {
        event.preventDefault();
        $('.modal__loader').show();
        $('.modal').fadeIn();
        $.ajax('//www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=2000ms')
            .done(response => {
                modalInfo.open();
            })
            .fail(error => {
                console.log(error);
                modalWarning.open();
            })
            .always(() => {
                $('.modal__loader').hide();
            })
    });

    $('#warning').on('click', event => {
        event.preventDefault();
        modalWarning.load();
    });
})