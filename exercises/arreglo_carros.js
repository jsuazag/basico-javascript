var carros = [
    {
        marca: 'Mazda',
        modelo: 2019
    },
    {
        marca: 'Chevrolet',
        modelo: 2017
    },
    {
        marca: 'Jeep',
        modelo: 2018
    }
];

function carrosModelos(carros){
    modelos = carros.filter(function(carro){
        return carro.modelo > 2018
    });
    return modelos.length;
}

carrosModelos(carros);