// Move list down 20px along y axis
// gsap.to('header', { duration: 3, y: 20 });

// animate background colour
// gsap.to('h2', {
//   duration: 3,
//   backgroundColor: '#f301cb',
//   delay: 2
// });

// Adding easing to unordered list
// gsap.to('ul li', {
//   duration: 0.7,
//   y: 40,  
// })

// gsap.to('ul li', {
//   duration: 0.7,
//   x: 40,
//   delay: 2,
//   ease: 'power2.out',
//   stagger: 0.1
// })

// gsap.from('ul li', {
//   duration: 0.7,
//   x: -40,
//   delay: 2,
//   ease: 'power2.out',
//   stagger: 0.1
// })

// gsap.from('ul li', {
//   duration: 0.7,
//   x: -40,
//   delay: 2,
//   ease: 'power2.out',
//   stagger: 0.1,
//   repeat: 2,
//   repeatDelay: 1
// })

gsap.to('ul li:last-child', {
  duration: 0.7,
  y: 40,
  delay: 2,
  ease: 'power2.out',
  repeat: -1,
  repeatDelay: 1,
  yoyo: true
})