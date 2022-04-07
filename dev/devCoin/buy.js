     var rEP = "<table id='trc' border><tr><th id='rt'>#Reciept</th></tr><tr><td class='rEP'>Item : </ts><td>DeveloperCoin (DEV)</td></tr><tr><td class='rEP'>TotalBuy : </td><td id='rEPtbuy'></td></tr><tr><td class='rEP'>AmountPay :</td><td>$<span id='rEPtpay'></span></td></tr><tr><td class='rEP'>Date : </td><td id='rEPdt'></td></tr></table><br><a href='javascript:void(0);' class='rEPback' onclick='myNav()'>Check Wallet</a>";
     var dt = new Date();
    function state()
	    {
          var x = "<label id='statementJS'>Statement</label><br><span id='tpayJS'>Total Pay </span>$<span id='tT'></span>";
          document.getElementById('state').innerHTML = x;
          var khalip = document.getElementById('price').value;
          var adamu = document.getElementById('input').value;
          document.getElementById("bln").innerHTML = adamu;
          khalip*=adamu;
          ds=khalip/100*75; 
		  document.getElementById('tT').innerHTML = ds;
          document.getElementById('buyB').value = 'Pay';
          document.getElementById('buyB').onclick = function(){
          document.getElementById('buyB');
          document.getElementById('rEPt');
          document.getElementById('rEPtbuy');
          document.getElementById('rEPtpay');
          document.getElementById('rEPdt');
    if(buyB.value == 'Pay')
       {
         document.getElementById('ale').style.display = 'block';
setTimeout(function(){document.getElementById('ale').style.display = 'none'},3000);
          rEPt.innerHTML = rEP;
          rEPtbuy.innerHTML = adamu;
          rEPtpay.innerHTML = ds;
          dtt = dt.toDateString();
          rEPdt.innerHTML = dtt;
       }
     }
    }
