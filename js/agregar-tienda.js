
let form = document.querySelector("#datosTienda");

form.addEventListener("submit", e=>{
    e.preventDefault();
    console.log(e.target);
});

/*
fetch("https://private-6095a-precios.apiary-mock.com/tiendas",{
    method:"POST"
})
    .then(res=>res.json())
    .then(here=>console.log(here))
    .catch(no=>console.log("error "+no));
    */