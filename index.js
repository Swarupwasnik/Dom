console.log('working');
//1st question
 let Element1 = document.getElementById("text");
console.log(Element1);
//2nd question
 let Element2 = document.getElementsByTagName('h2');
console.log(Element2);
//3 rd Question
let Element3 =document.getElementsByClassName('box');
console.log(Element3);
//4th Question
var k=document.getElementById("hello").innerText="HELLO WORLD";
console.log(k);
  
//option form
function getOption(){
    g = document.querySelector('#btn');
    output= g.options[g.selectedIndex].text;
    document.querySelector('.output').textContent=output;
}
//form
function validateForm() {
    let x = document.forms["form"]["fname","PhoneNumber","Email","MobileNo"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
//change direction
  function myFunction() {
    document.getElementById("container").style.flexDirection = "row";
  }

//watch

  function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();