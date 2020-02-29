function sumatoria(numeros){
    var suma = 0;
    for(var i = 0; i < numeros.length; i ++){
        suma += numeros[i];
    }
    return suma;
}

promedio([5,4,3]);