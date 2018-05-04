const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0;
  
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);
    
    if (key === code[index]) {
      index++;
      
      if (index === code.length) {
        alert("Congratulations! You Found the Secret Message!");
        
        index = 0;
      }
    } else {
      index = 0;
    }
  }
  
  const main = document.getElementById('main')
 
  main.addEventListener('keydown', onKeyDownHandler)
}