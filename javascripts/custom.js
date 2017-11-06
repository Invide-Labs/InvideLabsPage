var logo_ascii= "If you're a developer, apply to become an Invider here: http://apply.invidelabs.com\n\n\n"+
"                                                \n"+
"                      .... . .                  \n"+
"                .::====;=;====;=;::...          \n"+
"             .:====;;=;=;=;=;;=;;=======:..     \n"+
"          ..=====;;=;=;=;=;=;=;=;=;;=;=;;;:;:.  \n"+
"         :;====;=;=;=;=;=;=;=;=;=;=;=;;:--..  ..\n"+
"       .:==;=;;=;=;=;=;=;;=;;=;=;=;=;=;;.       \n"+
"      .===;=;=;=;=;=;=;;==;=;=;=;;=;=;=;=.      \n"+
"     .=;;;=;=;=;=;====;=;;=;=;=;=;=;=;=;==:     \n"+
"    .;=;==;=;=;=;=qQma>=;=;=;=;=;=;=;=;=;;=.    \n"+
"    :=;==;=;=;=;==dQWQQga;==;=;=;=;=;=;=;=;=    \n"+
"   .==;=;=;=;=;=;=mQQQWWWQws==;=;==;=;=;==;=.   \n"+
"   :=;=;=;=;=;=;==dQQQQQQQQWmw>==;;=;=;=;;=;=   \n"+
"   =;=;=;=;=;=;=;=mQQQQQQQQQQQQma>==;=;=;=;=;.  \n"+
"  .;;=;=;=;==;=;==dQQQQQQQQQQQQQQQg====;===;=.  \n"+
"   ;=;=;==;=;=;===mQQQQQQQQQQQQQQWV(=;=;=;;=;=. \n"+
"   =;==;=;=;=;==;=dQQQQQQQQQQQWB?|=;;=;=;==;=;: \n"+
"   :=;=;==;==;=;==mQQQQQQQQW@Y+==;=;=;=;=;=;===.\n"+
"    ==;=;=;=;==;==dQQQQQQWT!=:===;=;=;==;==;=;;;\n"+
"   .:==;=;=;=;=;==mQQQWU!+;;;===;=;=;==;=;=;::- \n"+
"     =;===;===;===3WD?+=;=;===;=;====;=;==;-    \n"+
"     -=;=;==;==;=;=+=====;==;==;==;=;===;=-     \n"+
"      .=;==;==;=====;===;==;==;==;==;=;=;-      \n"+
"      .;==;==;==;=;=;=;===;==;==;==;===;-       \n"+
"     :==;==;==;==;=====;=;==;==;==;==;:         \n"+
"   .======;==;==;==;=;=====;=====;=;:-          \n"+
"  :+====;==============;==;===;=;;- .           \n"+
".=====;===;=;=;=;=;=;=;==;==;;-- .              \n"+
" --- -- - -- -- -- -- -- -                      \n\n";

console.log(logo_ascii);

function mfnc(obj){
  $(obj).children("ul").fadeOut();
}

var tou;

var faqopen = 0;


$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
  });
  $("body").click(function(ent){ 
    var cls_list = ent.target.classList;
    if(cls_list[1] != "fa-bars"){
      console.log("cool");
      $(".options").css("display","none");
    }
    if(cls_list[1] != "faqs"){
      $(".opt>li").slideUp("slow");
    }
  });


  $("nav>ul>li").mouseenter(function(){
    clearTimeout(tou);
    $(this).children("ul").fadeIn();
    $(this).children("ul").css("z-index","99999");
    console.log("facefine");
  });

  $("nav>ul>li").mouseleave(function(){
    var l = this;
    tou = setTimeout(mfnc,1000,l);
  });

  $("nav>ul>li>ul").mouseenter(function(){
    clearTimeout(tou);
  });

  $("nav>ul>li>ul").mouseleave(function(){
    clearTimeout(tou);
    $(this).fadeOut();
  });

  $("nav i").click(function (){
    var k = $(".options").css("display");
    if(k == "none"){
      $(".options").css("display","flex");
    }
    else{
      $(".options").css("display","none");
    }
  })

  $(".i_name").click(function (){
    var k = $(".options").css("display");
    if(k == "none"){
      // $(".options").css("display","flex");
    }
    else{
      $(".options").css("display","none");
    }
  })

  $(".faqs").click(function(){
    var n = $(this)[0].id;
    console.log(n);
    var dis  = $("."+n+">li").css("display");
    if(dis == "none"){
      $("."+n+">li").slideDown("slow");
    }else{
      $("."+n+">li").slideUp("slow");
    }
  })
});

document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('fullpage').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('fullpage').style.visibility="visible";
      },1000);
  }
}
