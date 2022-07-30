
export function isBurger(){
$(function(){
let header = $('#header1');
let introH = $('#intro').innerHeight();
let scrollOffset =  $(window).scrollTop();

checkScroll(scrollOffset);

$(window).on ('scroll', function() {
    scrollOffset = $(this).scrollTop();

      checkScroll(scrollOffset);

});

function checkScroll(scrollOffset) {

    if(scrollOffset >= introH) {
        header.addClass('fixed');
    }else {
    header.removeClass('fixed')
}
}



// Активация бургера с крестиком
$('#nav__toggl').on('click', function(event){
    event.preventDefault();
    $(this).toggleClass('active')
    $('#nav').toggleClass('active')

});

// убирать бургер при нажатии ссылки
$('#nav').on('click', function(event){
    event.preventDefault();
    $(this).removeClass('active')
    $('#nav__toggl').removeClass('active');
});

});

}




