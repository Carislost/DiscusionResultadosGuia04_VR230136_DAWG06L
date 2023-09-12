class Potencia {
    constructor(base, exponente) {
        this.base = base;
        this.exponente = exponente;
        this.resultado = Math.pow(base, exponente);
    }

    calcularPotencia() {
        return this.resultado;
    }

    mostrarEnPagina() {
        document.getElementById('resultado').innerHTML = 'Resultado: ' + this.resultado;
    }
}

function calcularPotencia() {
    let base = parseFloat(document.getElementById('base').value);
    let exponente = parseFloat(document.getElementById('potencia').value);
    if (isNaN(base) || isNaN(exponente)) {
        alert('Por favor, ingresa valores válidos.');
        return;
    }
    let potencia = new Potencia(base, exponente);
    potencia.mostrarEnPagina();
}