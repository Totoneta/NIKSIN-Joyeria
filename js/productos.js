import { productos } from './prods.js';

/* D.O.M. */
/* Filtro Precio */
const precioRango = document.getElementById('precioRango');
const precioMaximo = document.getElementById('precioMaximo');
/* Filtro Material */
const filtromaterial = document.getElementById('filtromaterial');
/* Filtro Categoría */
const filtrocategoria = document.getElementById('filtrocategoria');

let btnLimpiarFiltros = document.querySelector('.btnlimpiarfiltros');
let container = document.querySelector(".productos-container");

/* Mostrar Tarjetas */
function mostrarProductos(precioLimite, material = 'nada', categoria = 'nada') {
    container.innerHTML = '';

    const productosFiltradosPrimero = productos.filter(producto => producto.precio <= precioLimite);

    const productosFiltradosSegundo = material !== 'nada'
        ? productosFiltradosPrimero.filter(prod => prod.material === material)
        : productosFiltradosPrimero;

    const productosFiltradosTercero = categoria !== 'nada'
        ? productosFiltradosSegundo.filter(prod => prod.categoria === categoria)
        : productosFiltradosSegundo;


    productosFiltradosTercero.map(el => {
        let tarjeta = document.createElement("div");
        tarjeta.classList.add("producto");

        let imgtarjeta = document.createElement("img");
        let titulotarjeta = document.createElement("h2");
        let preciotarjeta = document.createElement("span");
        let descripciontarjeta = document.createElement("p");

        let btnstarjeta = document.createElement("div");
        btnstarjeta.classList.add("btns-tarjeta");

        let btnVerMastarjeta = document.createElement("button");
        btnVerMastarjeta.innerText = "Ver Más...";

        btnstarjeta.appendChild(btnVerMastarjeta);

        imgtarjeta.src = el.img;
        titulotarjeta.innerText = el.titulo;
        preciotarjeta.innerText = `$${el.precio}`;
        descripciontarjeta.innerText = el.descripcion;

        tarjeta.appendChild(imgtarjeta);
        tarjeta.appendChild(titulotarjeta);
        tarjeta.appendChild(preciotarjeta);
        tarjeta.appendChild(descripciontarjeta);
        tarjeta.appendChild(btnstarjeta);

        container.appendChild(tarjeta);
    });
}

precioRango.addEventListener('input', (e) => {
    const precioActual = e.target.value;
    precioMaximo.textContent = precioActual;
    mostrarProductos(precioActual, filtromaterial.value, filtrocategoria.value);
});

filtromaterial.addEventListener('change', (e) => {
    mostrarProductos(precioRango.value, e.target.value, filtrocategoria.value);
});

filtrocategoria.addEventListener('change', (e) => {
    mostrarProductos(precioRango.value, filtromaterial.value, e.target.value);
});

btnLimpiarFiltros.addEventListener('click', () => {
    precioRango.value = 10000;
    precioMaximo.textContent = 10000;
    filtromaterial.value = 'nada';
    filtrocategoria.value = 'nada';
    mostrarProductos(10000, 'nada', 'nada');
});

mostrarProductos(precioRango.value, 'nada');