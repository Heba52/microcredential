let form1 = document.querySelector('.myForm1');
let name1 = document.querySelector('.fullName');
let dis7=document.querySelector('.display7');

form1.addEventListener('submit',function(e){
  e.preventDefault();
  let nameForm= name1.value;
  dis7.innerHTML = `Welcome to our collection for the winer ${nameForm}!`;
});


let toTopDiv= document.querySelector('.toTop');
window.addEventListener('scroll', function(){
  let pxWin=window.pageYOffset;

  if(pxWin>250){
    toTopDiv.style.display='block';

  }
  else{
    toTopDiv.style.display = 'none';
  }
});
window.addEventListener('load', function(){
  toTopDiv.style.display='none';
});
