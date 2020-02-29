function laboral(day){
    switch(day){
        case 'sabado':
            return false;
        case 'domingo':
            return false;
        default:
            return true;
    }
}

function laboralArreglo(day){
    var arregloNoLaborales = ['sabado', 'domingo'];
    return arregloNoLaborales.indexOf(day) === -1 ? true : false;
}