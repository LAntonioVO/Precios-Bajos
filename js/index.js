
let articulos = document.querySelector("#articulos");
fetch("https://private-6095a-precios.apiary-mock.com/productos")
    .then(res=>res.json())
    .then(productos=>{
        let insertar = "";
        productos.forEach(producto => {
            insertar+=crearTabla(producto);
        });
        articulos.innerHTML=insertar;
    });

function cargar(campo){
    let fetchData;
    if(campo) fetchData = fetch("https://private-6095a-precios.apiary-mock.com/productos/"+campo)
    else fetchData = fetch("https://private-6095a-precios.apiary-mock.com/productos")
    fetchData
    .then(res=>res.json())
    .then(productos=>{
        let insertar = "";
        productos.forEach(producto => {
            insertar+=crearTabla(producto);
        });
        articulos.innerHTML=insertar;
    });
}


function crearTabla(json){
   return `<table border="1" cellspacing="0">
    <tbody>
        <tr>
            <td colspan="2">
                <img src="${json.imagen}" alt="${json.name}">
                <p>
                   ${json.nombre}
                </p>
            </td>
        </tr>
        <tr>
            <th colspan="2">Precio mas bajo:</th>
        </tr>
        <tr>
            <td>
                <data>$13</data>
                <p>
                    Al <time>2-Agosto-2020</time>
                </p>
            </td>
            <td>
                <address>
                    Abarrotes Lupita <br>
                    Calle Juarez #4, Col. Centro <br>
                    Calpulalpan, Tlaxcala
                </address>
            </td>
        </tr>
        <tr>
            <th colspan="2">Otros:</th>
        </tr>
        <tr>
            <td>
                <data>$15</data>
                <p>
                    Al <time>4-Agosto-2020</time>
                </p>
                
            </td>
            <td><address>
                Mi Bodega Aurrera <br>
                Av Neza #23, Col. Centro <br>
                Calpulalpan, Tlaxcala
            </address></td>
        </tr>
        <tr>
            <td>
                <p>${json.categoria}</p>
            </td>
            <td>
                <data>
                    ${json.codigo}
                </data>

            </td>
        </tr>
    </tbody>
</table> `;
}
