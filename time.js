  function mytime() 
{
  
  var d = new Date();
  m=d.getMinutes();
  s=d.getSeconds();
  

  if (d.getMinutes()<10)
  {
      m='0'+d.getMinutes();    //adding 0 in front of minutes 1-9
    }
    

    if (d.getSeconds()<10) 
    {
      s='0'+d.getSeconds();   //adds 0 in front of seconds 1-9
    }


    document.getElementById("show").innerHTML = d.getHours()+':'+m+':'+s; //displays time
    var t = setTimeout(mytime, 500);
    
}
  
  var x=new Date();
  c=x.getHours();
  if(c>=12 && c<15)
  document.getElementById("time").innerHTML="Good Afternoon ";
  else if (c>=15 && c<=24) 
  document.getElementById("time").innerHTML='Good evening ';
  else if (c>=0 && c<12)  
  document.getElementById("time").innerHTML='Good Morning ';
  var t = setTimeout(wish,1000);
