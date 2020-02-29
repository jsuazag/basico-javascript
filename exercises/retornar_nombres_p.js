function perros(nombres){
    var nombresP = [];
    for(var  i = 0; i < nombres.length; i++){
        var nombre = nombres[i];
        if ( nombre[0].toLowerCase() == "p" ) {
            nombresP.push(nombre);
        }
    }
    return nombresP;
}

function perros2(nombres){
    return nombresP = nombres.filter(function(nombre){
        return nombre[0].toLowerCase() == "p"
    });
}

perros2(['firulais', 'pepe', 'paco', 'lulu', 'toño', 'pecas']);