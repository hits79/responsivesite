/* JavaScript Document */

$(document).ready(function(){
    //only be excuted when the dom has been fully loaded
    
   $('nav a.mobile').on('click',function(){
       
       var navHeight = $('nav').height();
       
       //toggle state
       if( navHeight < 5 ){
           
           //addes 15 to nav ul height
           var newNavHeight = $('nav > ul').height() + 15;
           
           $('nav').animate({'height':newNavHeight+'px'},750);
           
       }else{
           
           $('nav').animate({'height':'0px'},750,function({
               $(this).removeAttr('style');
           }));
       }
       
   });
           
    $(window).resize(function({
        
        //remove is wider then 625px
        if( $(this).width() > 625){
            $('nav').removeAttr('style');
    }
        
    }));
    
});
