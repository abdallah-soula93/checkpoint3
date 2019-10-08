function bold(){

    var gettext= document.getElementById("mytext");
    if(gettext.style.fontWeight!="bold")
    {
    gettext.style.fontWeight="bold";
}
else{
    gettext.style.fontWeight="normal";
}
}
function italic() {
    var gettext=document.getElementById("mytext");
    if(gettext.style.fontStyle!="italic"){
    gettext.style.fontStyle="italic";
}
else{
    gettext.style.fontStyle="normal";
}
}
function underline() {

    var gettext=document.getElementById("mytext");
    if(gettext.style.textDecoration!="underline"){
    gettext.style.textDecoration="underline";
}
else{
    gettext.style.textDecoration="none";
}
}
function family(event){

    var gettext=document.getElementById("mytext");
   gettext.style.fontFamily=event.value;
}
function taille(event){

    var gettext=document.getElementById("mytext");
   gettext.style.fontSize=event.value;
}