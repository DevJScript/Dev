   var ii = 97;
   var p = 2;
		var o = 9903;
        function changE()
         {
	       	ii++;
 o--;
 p++;
		document.getElementById('count').innerHTML = ii;
		document.getElementById('vit').innerHTML = o;
        document.getElementById('price').value = p;
if(p >= 25)
{
p = 3;
}
        }
setInterval('changE()',100);
