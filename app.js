var tl = new TimelineMax();

tl.from('.img-wrapper', 2, {
    opacity: 0,
    y: 10,
    ease: Power2.easeOut
}, 0);

tl.from('.circle-1', 2, {
    opacity: 0,
    y: 10,
    ease: Power2.easeOut
}, .2) ;
tl.from('.circle-2', 2, {
    opacity: 0,
    y: 10,
    ease: Power2.easeOut
}, .6) ;
tl.from('.cta', 2, {
    opacity: 0,
    y: -10,
    ease: Power2.easeOut
}, 1) ;
tl.from('.circle-3', 2, {
    opacity: 0,
    y: 10,
    ease: Power2.easeOut
}, 1.2) ;


