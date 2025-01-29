// particlesJS("body", {
//     particles: {
//         number: { value: 30 },
//         shape: { 
//             type: "image", 
//             image: { 
//                 src: "",  // Replace with any heart image
//                 width: 20, 
//                 height: 20 
//             } 
//         },
//         size: { value: 15 },
//         move: { 
//             speed: 2, 
//             direction: "bottom", 
//             out_mode: "out" 
//         }
//     }
// });

document.querySelectorAll("#ques2-yes, #ques2-no, #gif").forEach(function(button) {
    button.style.display = "none";
});
 document.getElementById("no-btn").onclick = function(){
  let yesBtn = document.getElementById("yes-btn");

    // Get current scale (default to 1 if not set)
    let currentScale = yesBtn.style.transform.match(/scale\(([^)]+)\)/);
    let newScale = currentScale ? parseFloat(currentScale[1]) + 0.5 : 1.5;

    // Apply the new scale
    yesBtn.style.transform = `scale(${newScale})`;
  
}

 document.getElementById("maybe-btn").onclick = function(){
  let maybeBtn = document.getElementById("maybe-btn");

    // Get current scale (default to 1 if not set)
    let currentScale = maybeBtn.style.transform.match(/scale\(([^)]+)\)/);
    let newScale = currentScale ? parseFloat(currentScale[1]) - 0.5 : 1;

    // Apply the new scale
    maybeBtn.style.transform = `scale(${newScale})`;
  
}

document.getElementById("yes-btn").onclick = function () {
  document.getElementById("text").innerHTML = "Good Choice!";
  let buttons = document.querySelectorAll("#yes-btn, #no-btn, #maybe-btn , #yeah-btn");
    buttons.forEach(function(button) {
        button.style.display = "none";  // Hide each button
    });
  
   setTimeout(function() {
        // Reset text to a new question or any other prompt
        document.getElementById("text").innerHTML = "Will you be my valentine?";
        
        // Show all buttons again
       document.querySelectorAll("#ques2-yes, #ques2-no").forEach(function(button) {
    button.style.display = "inline-block";
});
    }, 2000); // 3000 milliseconds = 3 seconds

}
document.getElementById("ques2-yes").onclick = function () {
  document.body.style.backgroundColor = "#FFB6C1";
   document.getElementById("text").innerHTML = "Love you baby";
   document.getElementById("text").style.color = "red";
   document.querySelectorAll("#ques2-yes, #ques2-no").forEach(function(button) {
     button.style.display = "none";
     
   });
  document.getElementById("gif").style.display = "block";

}