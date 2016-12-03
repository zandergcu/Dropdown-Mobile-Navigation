

//$(document).ready(function(){


//});

 


  //function toggle(id, id2) {
   // var n = document.getElementById(id);
	//if (n.style.display != 'none') 
	//  {
  //    n.style.display = 'none';
  //    document.getElementById(id2).setAttribute('aria-expanded', 'false');
 // }
//  else
//  {   
 // n.style.display = '';
//  document.getElementById(id2).setAttribute('aria-expanded', 'true');
//	  }
//  }

function showNav() {
    
  //  $('#navigation');
  //  if ()
  //  $('#navigation').css('height', '500px');
    
    

    var heightValue = $('#navigation').css('height');
if (heightValue == '0px'){
    $( '#navigation' ).css({ "height": "290px", "-webkit-transition": "height 400ms ease-in", "transition": "height 400ms ease-in" });
}
else {
   // alert('bla');
    $( '#navigation' ).css({ "height": "", "-webkit-transition": "height 400ms ease-out", "transition": "height 400ms ease-out" });
}
}




    
  





