let productos = [
    {
        nombre : "Camiseta",
        precio : " $ 50.00 "
        descripcion: "Camiseta negra Rock"
        imagem: "XXXX"
    }
]




function mostrarProductos(){
    const catalogo = document.getElementById("catalogo")
}

productos.forEach(function(camisetas){

    const tarjetaProductos = document.createElement("div")
    tarjetaProductos.classList.add("productos")

    const img = document.createElement("img")
    img.src = productos.imagem
    img.alt = productos.nombre
    tarjetaProductos.appendChild(img)

    const nombre = document.createElement("h2")
    nombre.textContent = productos.nombre
    tarjetaProductos.appendChild(h2)

    const descripcion = document.createElement("h3")
    descripcion.textContent = productos.descripcion
    tarjetaProductos.appendChild(h3)

    const precio = document.createElement("p")
    precio.textContent = productos.precio
    tarjetaProductos.appendChild(p)
    
})

mostrarProductos();



