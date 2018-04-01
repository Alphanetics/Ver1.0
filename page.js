//<- place holder code when you actually combine with input file
// word is an array of grapheme
var graphemes=['a'];


var enter = document.querySelector("#enter");

enter.addEventListener("click", function(){
  //
  if(document.querySelector('input').value != ""){
    enter.href = "./page2.html";
     localStorage.setItem( 'objectToPass', document.querySelector('input').value );
   }

});



// generates a link at the end
