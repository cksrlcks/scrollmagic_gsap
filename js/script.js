//scroll magic
var controller = new ScrollMagic.Controller();

//sec1
var tween_sec2 = new TimelineLite();
var sec2_h3_span = document.querySelector('.sec2-item h3 span');
var sec2_p_span = document.querySelectorAll('.sec2-item p span i');
tween_sec2
    .from(sec2_h3_span, 1, { y: 80, ease: Power3.easeOut, delay: 0.2 })
    .staggerFrom(sec2_p_span, 1, { y: 50, ease: Power3.easeOut }, 0.05, 0.7);

new ScrollMagic.Scene({
    triggerElement: '.sec2',
    reverse: false,
})
    .setTween(tween_sec2)
    .addTo(controller);

//sec2
var tween_sec2_hero = new TimelineLite();
var sec2_white_cover = document.querySelectorAll('.sec2 .white-cover');
var sec2_img = document.querySelector('.sec2-hero .product-img img');
var sec2_card_h3 = document.querySelector('.sec2-hero .card-inner h3');
var sec2_card_p = document.querySelector('.sec2-hero .card-inner p');
tween_sec2_hero
    .to(sec2_white_cover, 1.2, { x: '-100%', ease: Power3.easeOut }, 'Start')
    .from(sec2_img, 1.3, { scale: 1.6, ease: Power3.easeOut }, 0.2);
tween_sec2_hero
    .from(sec2_card_h3, 1.2, { x: -60, ease: Power3.easeOut }, 'Start')
    .from(sec2_card_p, 1.2, { x: -60, ease: Power3.easeOut }, 0.2);
new ScrollMagic.Scene({
    triggerElement: '.sec2-hero',
    offset: -100,
    reverse: false,
})
    .setTween(tween_sec2_hero)
    .addTo(controller);

var tween_sec3 = new TimelineLite();
var sec3_img01_frame = document.querySelector('.sec3 .img-01');
var sec3_img01_img = document.querySelector('.sec3 .img-01 img');
var sec3_img02_frame = document.querySelector('.sec3 .img-02');
var sec3_img02_img = document.querySelector('.sec3 .img-02 img');
var sec3_h3 = document.querySelectorAll('.sec3 .container h3 div span');
var sec3_p = document.querySelector('.sec3 .container p');

tween_sec3
    .from(sec3_img01_frame, 1.2, { y: 1280, ease: Power3.easeOut }, 'Start')
    .from(sec3_img01_img, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2)
    .from(sec3_img02_frame, 1.2, { y: 1280, ease: Power3.easeOut }, 0.2)
    .from(sec3_img02_img, 2, { scale: 1.6, ease: Power3.easeOut }, 0.2);
tween_sec3
    .staggerFrom(sec3_h3, 1, { y: 44, ease: Power3.easeOut, delay: 0.8 }, 0.15, 'Start')
    .from(sec3_p, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4);

new ScrollMagic.Scene({
    triggerElement: '.sec3',
    reverse: false,
})
    .setTween(tween_sec3)
    .addTo(controller);

var tween_sec4 = new TimelineLite();
var sec4_white_cover = document.querySelector('.sec4 .white-cover');
var sec4_img = document.querySelector('.sec4 img');
var sec4_h3 = document.querySelectorAll('.sec4 .container h3 div span');
var sec4_p = document.querySelector('.sec4 .container p');
tween_sec4
    .to(sec4_white_cover, 1.2, { x: '-100%', ease: Power3.easeOut }, 'Start')
    .from(sec4_img, 1.6, { scale: 1.4, ease: Power3.easeOut, delay: -1.5 });

tween_sec4
    .staggerFrom(sec4_h3, 1, { y: 60, ease: Power3.easeOut, delay: 0.8 }, 0.15, 'Start', '-=0.2')
    .from(sec4_p, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4);

new ScrollMagic.Scene({
    triggerElement: '.sec4',
    reverse: false,
    offset: -20,
})
    .setTween(tween_sec4)
    .addTo(controller);

var hero01 = document.querySelector('.sec1-hero-01');
var hero02 = document.querySelector('.sec1-hero-02');

document.addEventListener('scroll', function () {
    hero01.style.width = 100 + window.pageYOffset / 30 + '%';
    hero02.style.width = 100 + window.pageYOffset / 30 + '%';
});
