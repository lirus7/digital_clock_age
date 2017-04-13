$(document).ready(function()
{
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
    var d = document.getElementById('clk');
    d.style.position = "relative";
    d.style.left = -50+'px';
    d.style.top = 200+'px';
    clkdiv.innerText = hours + ":" + mins + ":" + secs ;
    clkdiv.style.fontSize = "60px";
    clkdiv.style.color = "grey";
    clkdiv.style.fontWeight="bolder";
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
    var d = document.getElementById('age');
    d.style.position = "relative";
    d.style.left = 0+'px';
    d.style.top = 100+'px';
    agediv.style.fontSize = "75px";
    agediv.style.color = "grey";
    agediv.style.fontWeight="bolder";
  }
  displayage();
  displayt();
  setInterval(displayage,100);
  setInterval(displayt, 1000);
}
);
