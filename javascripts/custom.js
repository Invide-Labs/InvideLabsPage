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



$(document).ready(function(){
	$("#demosMenu").change(function(){
	  window.location.href = $(this).find("option:selected").attr("id") + '.html';
	});
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
