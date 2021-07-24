/*this script displays the clock in the homepage*/
var myVar = setInterval(function() 
{
  myTimer();
}, 1000);/*this is equals to 1 second interval*/

function myTimer()
{
  var d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString(); /* to change the html element from javascript .innerHTML is use*/
}
