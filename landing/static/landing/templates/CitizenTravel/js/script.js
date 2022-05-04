let btn = document.getElementById("js-burger-btn");
let burgMenu = document.getElementById("burgerMenu");
let overlay = document.getElementById('overlay');
btn.onclick = function(){
    if(burgMenu.classList.contains("burger_menu_active")){
        burgMenu.classList.remove("burger_menu_active");
    }
    else{
        burgMenu.classList.add("burger_menu_active");
        overlay.style.display = 'block';
    }
}
overlay.onclick = function(){
    burgMenu.classList.remove("burger_menu_active");
}
let section = document.getElementById('js-our-services');
let arrow = document.getElementById("icon_arrr");
let ourserv = document.getElementById("ourServices");
ourserv.onclick = function(){
    if(arrow.classList.contains("icon_arrow_rotate")){
        arrow.classList.remove("icon_arrow_rotate");
        arrow.classList.add("array_rotate_back");
        section.style.display = "none";
    }
    else{
        arrow.classList.add("icon_arrow_rotate");
        section.style.display = "block";
    }
}