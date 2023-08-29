
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
    

});


  var crsr = document.querySelector(".cursor")
  var main = document.querySelector(".main")
  document.addEventListener("mousemove",function(dets){
      crsr.style.left = dets.x + 20+"px"
      crsr.style.top = dets.y+ 20+"px"
  
  })

  var boxes = document.querySelectorAll(".box")
//   console.log(boxes)
boxes.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var att = elem.getAttribute("data-image")
        crsr.style.width = "400px"
        crsr.style.height = "250px"
        crsr.style.borderRadius = "0"
        crsr.style.backgroundImage = `url(${att})`
        // crsr.style.backgroundSize = "cover";
        // crsr.style.backgroundSize = "contain";
        crsr.style.backgroundSize = "100% 100%";
        crsr.style.backgroundRepeat = "no-repeat";
        crsr.style.backgroundPosition = "center center";
        crsr.style.backgroundColor = "transparent";         
    })
    elem.addEventListener("mouseleave",function(){
        elem.style.backgroundColor = "transparent"
        var att = elem.getAttribute("src")
        crsr.style.width = "20px"
        crsr.style.height = "20px"
        crsr.style.borderRadius = "50%"
        crsr.style.backgroundImage = `none`
    })
})




const texts = [
    "Yashika",
    "Frontend Developer",
    "Full stack Web Developer"
  ];
  let currentTextIndex = 0;
  
  const typewriterText = document.querySelector(".typewriter-text");
  
  function typeText(index, text, delay) {
    if (index < text.length) {
      typewriterText.textContent = text.slice(0, index + 1);
      setTimeout(() => typeText(index + 1, text, delay), delay);
    } else {
      setTimeout(() => eraseText(text, delay), 1000);
    }
  }
  
  function eraseText(text, delay) {
    if (typewriterText.textContent.length > 0) {
      typewriterText.textContent = text.slice(0, typewriterText.textContent.length - 1);
      setTimeout(() => eraseText(text, delay), delay);
    } else {
      currentTextIndex = (currentTextIndex + 1) % texts.length;
      setTimeout(() => typeText(0, texts[currentTextIndex], delay), delay);
    }
  }
  
  // Start the animation
  typeText(0, texts[currentTextIndex], 100);
  