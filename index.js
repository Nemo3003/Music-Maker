window.addEventListener("load", () => {
   const sounds = document.querySelectorAll(".sound");
   const pads = document.querySelectorAll(".pads div");
   const visual = document.querySelector(".visual");
   const colors = [
      "#d8a434",
      "#5c137e",
      "#1a6827",
      "#1a6827",
      "#7e860a",
      "#411727ee",
      "#5e607c"
   ];
 
   pads.forEach((pad, index) => {
     pad.addEventListener("click", function() {
       sounds[index].currentTime = 0;
       sounds[index].play();
       createBubble(index);
     });
   });
 
   const createBubble = index => {
     //Create bubbles
     const bubble = document.createElement("div");
     visual.appendChild(bubble);
     bubble.style.backgroundColor = colors[index];
     bubble.style.animation = `jump 1s ease`;
     bubble.addEventListener("animationend", function() {
       visual.removeChild(this);
     });
   };
 });
 