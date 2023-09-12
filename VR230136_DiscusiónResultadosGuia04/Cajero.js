class Venta {
    constructor() {
        this.nombreProducto = "";
        this.precioUnitario = 0;
        this.cantidad = 0;
        this.detalle = 0;
    }

    setNombreProducto(nombreProducto) {
        this.nombreProducto = nombreProducto;
    }

    setPrecioUnitario(precioUnitario) {
        this.precioUnitario = precioUnitario;
    }

    setCantidad(cantidad) {
        this.cantidad = cantidad;
    }

    calcularDetalle() {
        this.detalle = this.precioUnitario * this.cantidad;
    }

    getDetalle() {
        return this.detalle;
    }
}

const arrayObjetos = [];

function iniciar() {
    const mostrar = document.getElementById("mostrar");
    mostrar.addEventListener("click", function () {
        createObject(document.frmbook);
    });
}

function createObject(form) {
    const venta = new Venta();
    venta.setNombreProducto(form.txtNombreProducto.value);
    venta.setPrecioUnitario(parseFloat(form.txtPrecioUnitario.value));
    venta.setCantidad(parseInt(form.txtCantidad.value));
    venta.calcularDetalle();

    showProperties(venta, "InfoVenta");
}

function showProperties(objeto, objName) {
    let infVenta = "";
    let tblVenta = "";
    const info = document.getElementById('infoVenta');
    for (const i in objeto) {
        infVenta += `${objName}.${i} = ${objeto[i]}\n`;
    }

    if (confirm(`${infVenta}\n\n¿Es esta información correcta?`)) {
        arrayObjetos.push(objeto);
    }

    let id = 1;
    let posicion = 0;
    let totalVenta = 0;

    arrayObjetos.forEach(element => {
        tblVenta += "\t<tr>\n";
        tblVenta += `\t\t<td>${id++}</td>\n`;
        tblVenta += `\t\t<td>${element.nombreProducto}</td>\n`;
        tblVenta += `\t\t<td>${element.precioUnitario}</td>\n`;
        tblVenta += `\t\t<td>${element.cantidad}</td>\n`;
        tblVenta += `\t\t<td>${element.detalle}</td>\n`;
        tblVenta += `\t\t<td><button onclick='eliminar(${posicion++})' class='btn btn-danger'>Eliminar</button></td>\n`;
        tblVenta += "\t</tr>\n";

        totalVenta += element.getDetalle();
    });

    tblVenta += `<tr><td colspan="4">Total</td><td>${totalVenta}</td><td></td></tr>`;

    info.innerHTML = tblVenta;
}

function eliminar(valor) {
    if (confirm(`Esta seguro de eliminar este registro id = ${valor}`)) {
        arrayObjetos.splice(parseInt(valor), 1);
        showProperties({}, "InfoVenta");
    }
}

window.addEventListener("load", iniciar);
