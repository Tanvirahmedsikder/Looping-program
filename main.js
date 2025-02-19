let counter = "★";
let interval;
function myLoop(){
  if(interval){
    clearInterval(interval)
  };
  let input = document.getElementById('display').value;
  let output = document.getElementById('output');
  interval=setInterval(function(){
    output.innerHTML += counter + ".  " + input + "<br>";
    
    /*input++;*/
    /*counter++;*/
  /*  if(input===99999){
      clearInterval(interval);
    };*/
  },1);
};
function closeLoop(){
  clearInterval(interval);
};
function clearloop(){
  clearInterval(interval);
  document.getElementById('output').innerHTML = "";
};