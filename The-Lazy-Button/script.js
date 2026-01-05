const lazyBtn = document.getElementById("lazyBtn");

lazyBtn.addEventListener("click", function() {
  
  lazyBtn.innerText = "Processing...";
  lazyBtn.disabled = true; 

  setTimeout(function() {
    lazyBtn.innerText = "Done!";

    setTimeout(function() {
      lazyBtn.innerText = "Click Me!";
      lazyBtn.disabled = false; 
    }, 1000)
  }, 2000)
})
