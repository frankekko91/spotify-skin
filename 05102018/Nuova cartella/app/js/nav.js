$(function() {
    // When DOM is ready
    $('.top-bar a[href*="#"]').on('click', function(event){
        event.preventDefault();
        const $target = $(this.hash);
        $('html, body').animate({
            scrollTop:$target.offset().top - $('.top-bar').outerHeight(),
        },1000, function() {
            console.log('Finished animating',$(this));
        }).animate({
            scrollTop:'+=100',
        },1000)
        
        // ---->function() {
        //     console.log('Finished animating',$(this));
        // }).animate({
        //     opacity:0.5,
        // },{
        //     duration:300,
        //     queue:false,    // non segue l'animazione in coda 
        // })


    });
});
const my_array = [65,'a random string',null,387];
const my_objecy = {
    name:'John',
    surname:'Doe',
    age:23
};

$.each(my_array, (index,value) => {
    console.log(`l'elemento numero ${index} ha valore ${value}.`);
});

$.each(my_objecy,(key,value) => {
    console.log(`La chiave ${key} ha valore ${value}.`);

});

const squares = [{
    width:200,
    height:300,
    backgroundColor:'red',
},
{
    width:500,
    height:200,
    backgroundColor:'blue',
},{
    width:130,
    height:222,
    backgroundColor:'green',
}];

$.each(squares, (index,value) => {
    const elemnt = $('<div>').css(value).appendTo($('body'));
})