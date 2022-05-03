let karusel = document.querySelector('#karusel');
items =  document.querySelectorAll('.pages_item');
count = items.length;
x = 420;
dif = 850;

items[2].classList.add('active')
grow = true;
active = 2;

function moveKarusel(){
    if(items[count-1].classList.contains('active')){
        grow = true;
    }
    if(items[0].classList.contains('active')){
        grow = false;
    }
    if(grow){
        x+=dif;
        active-=1;
    }
    else
    {
        active+=1;
        x-=dif;
    }
    karusel.style.transform=`translateX(${x}px)`;
    for(let i=0; i<count; i++){
        if(items[i].classList.contains('active')){
            items[i].classList.remove('active');
        }
    }
    items[active].classList.add('active');
    console.log(x)
}
const myTimeout = setInterval(moveKarusel, 4000);
