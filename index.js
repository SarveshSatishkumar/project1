 gsap.to("#nav", {
     backgroundColor: "#000",
     duration: 0.5,
     height: "100px",
     width: " 100%",
     scrollTrigger: {
         trigger: "#nav",
         scoller: " body",
         // markers: true,
         start: "top-10%",
         scrub: 1,

     }

 })

 gsap.to("#main", {
     backgroundColor: "#000",
     scrollTrigger: {
         trigger: "#main",
         scoller: " body",
         markers: true,
         start: "top-10%",
         scrub: 1,
         height: "100vh",
         width: " 100%",

     }

 })
 var crsr = document.querySelector("#cursor")
 var blur = document.querySelector("#cursor-blur")
 document.addEventListener("mousemove", function(dets) {
     crsr.style.left = dets.x + "px"
     crsr.style.top = dets.y + "px"
     blur.style.left = dets.x - 125 + "px"
     blur.style.top = dets.y - 125 + "px"

 })