let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=60; 
const ANCHO_PERSONAJE=40;
let personajeX=canvas.width/2;
let personajeY=canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE);
//constantes y variables limon
let limonX=canvas.width/2;
let limonY=0;
const ANCHO_LIMON=20;
const ALTURA_LIMON=20;
let vidas=3;

let puntaje=0;
let velocidadCaida=200;

function iniciar(){
    setInterval(bajarLimon,velocidadCaida);//funcion de js recibe 2 parametros, 1 funcion y tiempo en miliseg
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
    aparecerLimon();
}
function dibujarSuelo(){
    ctx.fillStyle="#c45c0d";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
}
function dibujarPersonaje(){
    ctx.fillStyle="#eff31c";
    ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE);
}
function moverIzquierda(){
    personajeX= personajeX-10;
    actualizarPantalla();
    detectarAtrapado();
}
//mover derecha
function moverDerecha(){
    personajeX=personajeX+10;
    actualizarPantalla();
    detectarAtrapado();
}
function actualizarPantalla(){
    limpiarCanva();
    dibujarSuelo();
    dibujarPersonaje();
    dibujarLimon();
}
function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
function dibujarLimon(){
    ctx.fillStyle="#ffffff";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTURA_LIMON);
}
function bajarLimon(){
    limonY=limonY+10;
    actualizarPantalla();
    detectarAtrapado();
    detectarPiso();
}
function detectarAtrapado(){
    if((limonX+ANCHO_LIMON > personajeX && 
        limonX < personajeX+ANCHO_PERSONAJE) && 
        (limonY+ALTURA_LIMON > personajeY && 
        limonY<personajeY+ALTURA_PERSONAJE) ){
        //alert("ATRAPADO!!");
        aparecerLimon();
        puntaje=puntaje+1;
        mostrarEnSpan("txtPuntaje",puntaje);

    }
}
function aparecerLimon(){
    limonX=generarAleatorio(0,canvas.width-ANCHO_LIMON);
    limonY=0;
    actualizarPantalla();
}
function detectarPiso(){
    if (limonY+ALTURA_LIMON == canvas.height-ALTURA_SUELO){
        aparecerLimon();
        vidas=vidas-1;
        mostrarEnSpan("txtVidas",vidas);
        //alert("Perdiste!!");
        if(vidas<=0){
            alert("GAME OVER!!");
        }
    }
}
