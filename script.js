// const btn1 = document.getElementsByTagName('a');

// btn1.addEventListener('click', function(){
//     alert('button clicked!');
// })
// document.addEventListener("DOMContentLoaded", function() {
// const buttons = document.querySelectorAll('.btn-primary');
// buttons.addEventListener('click', function() {
//     alert('Button clicked!');
// });
// });

// above program wrong and we learn from mistakes!

const btns = document.querySelectorAll('.btn-primary');

btns.forEach(btn => {
   btn.addEventListener('click' , function(){
    let text = this.innerHTML.trim();
      if(text === "Add Friend"){
            this.innerHTML = "cancel request";

      }else if(text === "cancel request"){
          this.innerHTML = "Add Friend" 
      }

    })
})

// function addFreind(){
//     this.innerHTML = "request sent" 

// }

// function Remove(){
//     btns.innerHTML = "cancel request"
// }

// array.forEach(element => {
//     element.addEventListener('click',function(){

//     })
// });