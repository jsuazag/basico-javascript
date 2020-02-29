function promedio(notas){
    //return (n1 + n2+ n2) / 3
    var suma = 0;
    for(var i = 0; i < notas.length; i ++){
        //suma = suma + notas[i];
        suma += notas[i];
    }
    return suma / notas.length;
}

promedio([5,4,3]);