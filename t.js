$(document).ready(function(){
  function displayt()
  {
    var curdate =new Date();
    var hours =curdate.getHours();
    var mins =curdate.getMinutes();
    var secs =curdate.getSeconds();
    if(secs < 10)
      secs = "0" + secs;
    if(mins<10)
      mins="0"+mins;
    var clkdiv=document.getElementById('clk');
    clkdiv.innerText = hours + ":" + mins + ":" + secs ;
  }
  function displayage()
  {
    var curdate =new Date();
    var year = curdate.getFullYear();
    var mnth = curdate.getMonth();
    var day = curdate.getDay();
    var bdate= new Date("August 18, 1997 20:33:20");
    var age = curdate.getTime()-bdate.getTime();
    age *=3.17098*(10**-11);
    var agediv=document.getElementById('age');
    agediv.innerText = age.toPrecision(11);
  }
  displayt();
  displayage();
  setInterval(displayt, 1000);
  setInterval(displayage,100);
});
