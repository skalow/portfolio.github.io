$("#clickk").click(function () {
    if ($(".overlay-login").hasClass("activo")) {
        $(".overlay-login").removeClass("activo");
    }
    else {
        $(".overlay-login").addClass("activo");
    }
});

$(".sd-contador-alertas").click(function () {
    if ($(".sd-alertas").hasClass("ocultar")) {
        $(".sd-alertas").removeClass("ocultar");
    }
    else {
        $(".sd-alertas").addClass("ocultar");
    }
});

$("#llamar-panel").click(function () {
    if ($("#panel-amostrar").hasClass("activo")) {
        $("#panel-amostrar").removeClass("activo");
    }
    else {
        $("#panel-amostrar").addClass("activo");
    }
});
  
$(document).on("mouseover","#list li ul",function(e){
     //var paradondevao_O =  isElementInViewport($(this));
	 var paradondevao_O = vaDerechoIzquierdo(this);
     // if(flag === false){
       // // $(this).addClass("left");
      // $(this).find("ul").addClass("left");
     // }
	var bandera = false;
       if($(".sub-menu").is(":visible")){
		   if(paradondevao_O){
			$(this).addClass("left");
			$(this).find("ul").addClass("left");
		 }else{
			$(this).find("ul").removeClass("left");
			// $(this).removeClass("left");
		 }
	     bandera = true;
	}
  // if($(".sub-menu left").is(":visible") == false && !bandera) {
	// $(this).find("ul").addClass("left");
  // }
  // else{
	// //$(this).find("ul").removeClass("left");
  // }
 

});


function isElementInViewport (el) {
        //special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right >= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        );
}

function vaDerechoIzquierdo (el) {
        //special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }
        var rect = el.getBoundingClientRect();
		
		if((rect.right+50) >=  document.documentElement.clientWidth){
			return true;
		}
		else 
		{
			return false;
        }
        
        var pruebaarray = [];
        
        // esto para obtener el width del sub-sub-menu en el que te encuentras 
        $(document).on('mouseover','.sub-sub-menu', function(){
            $(this).width();
            console.log($(this).width());
        });
        // esto para obtener el width del ul hijo cuando el padre es this -> .principal li
        $(document).on('mouseover', '.principal li', function(){
            $(this).children('ul').width();
            console.log($(this).children('ul').width());
        });
        // esto para obtener el width del ul hijo cuando el padre es this -> .principal li
        $(document).on('mouseover', '.principal li', function(){
            $(this).children('ul ').width();
            console.log($(this).children('ul').width());
        });
        $.each('.sub-sub-menu', function(){
            pruebaarray.push($(this));
        });       
}