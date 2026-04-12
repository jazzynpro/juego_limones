function generarAleatorio(min,max){
    let random=Math.random(); //0 y 1
    //EJEMPLO: max es 600, minimo es 5
    let numero=random*(max-min); //0 y max
    let numeroEntero = Math.ceil(numero);
    //EJEMPLO: 0
    numeroEntero = numeroEntero+min;
    return numeroEntero
}