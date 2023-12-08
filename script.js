gsap.from('.page1 .circle',{
  scale:0,
  duration:1.2,
  rotate:360
})

gsap.from('.page2 .circle',{
  scale:0,
  duration:1.2,
  rotate:360,
  scrollTrigger:{
    trigger:'.page2 .circle',
    scroller:'body',
    markers:true,
    start:'top 60%',
    scrub:1,
    end:'top 30%'
  }
})

gsap.from('.page3 .circle',{
  scale:0,
  duration:1.2,
  rotate:360,
  scrollTrigger:{
    trigger:'.page3 .circle',
    scroller:'body',
    markers:true,
    start:'top 75%',
    scrub:true,
    end:'top 40%'
  }
})