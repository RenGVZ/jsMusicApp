// wrap everything in a window.eventListener that listens for 'load'
window.addEventListener('load', () => {
// grad sounds, pads, viual and make a colors array: "#60d394",
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads div');
  const visual = document.querySelector('.visual');
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#6860d3",
    "#60b2d3"
  ]
  // add an event listener to each pad with an anonymous fuction
  pads.forEach((pad, i) => {
    pad.addEventListener('click', function() {
       // set the currenTime of the sound (w indexx) to 0
      sounds[i].currentTime = 0;
       // play the sound
      sounds[i].play();
      // call the create bubbles fuction
      createBubbles(i);
    })
  })
  // make createBubbles function that takes the value of the sound' index
  const createBubbles = (i) => {
    // create a div called bubble
    const bubble = document.createElement('div');
    // append bubble to visual
    visual.appendChild(bubble);
    // give the bubbles a color from the colors array 
    bubble.style.backgroundColor = colors[i]
    // add a bubbles stye animation that is "jump 1s ease"
    bubble.style.animation = 'jump 1s ease'
    // add an event 'animationend' that removes bubble from visual
    bubble.addEventListener('animationend', function() {
      visual.removeChild(this);
    })

  }
})