let productos = [
    {nombre: "Camisa", Descripcion: "CAMISA BLANCA DE HOMBRE", precio: "35.000", imagen: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ5NsOG3DLc7QJ-pIpqy3GFG1TekZQ7XeCi7Fpj3qYozrtMPg_IVB8Rhe5L1K0GkRgYGQQrlTnvrXNBbASCvdHwNxae2MhxorBLK1Vu0BUe&usqp=CAE"},
    {nombre: "Zapatos", Descripcion: "NIKE JORDAN DAMA DE TEMPORADA", precio: "55.000", imagen: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTQqbYgRU5VPuo9KMFEpC5gBRYmg2-zqGy1PrpTjOLNPchDjfauvZ4HSZvP0q7GGiC2qnlxR24T3MInibgwE72KxYLV_WgdMYYI0xDcjMzgOdjYo3UGyIZX6yba&usqp=CAE"},
    {nombre: "Correa", Descripcion: "Cinturón doble faz Lord de cuero para hombre", precio: "79.800", imagen: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQFHKJxZZ7YX2CeKJ6L98RujsUBWEKluycGn-l4y1mYCkp9z6WkobNFBvjrHPaojyiTSdpXAcFbO4VL71-rYHCF5t_yA9_8dbEUWGOVnOiZ5-gNCiVHjJznVA&usqp=CAE"},
    {nombre: "Chaqueta", Descripcion: "Chaqueta en Cuero para Hombres.", precio: "120.000", imagen: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSLFw6pAMhc9MIGrzbN30ahLb0v5F1gn-hNb_U-q363MlJEvQaAGQRteR4vdXcGsmMe8HKW8nRoERODUEko-uKvbE8NafpZ_iw3GpXHU_D_0p-aclOlkrVN1w&usqp=CAE"},
    {nombre: "Gorra", Descripcion: "Vive la pasión del béisbol a full con esta gorra New", precio: "20.000", imagen: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS4Lrs_q-E77ecjlg4bwnmYbU-cahTKKTNXQloN4AoKh9ar90lOBcrJXuG14Fj76ElLmcfyOC-TzMapvSag06Gj1y3pI7cH9_oLj3xNz-MhYzHoGorg9--7Qw&usqp=CAE"},

];

function mostrarProductos() {
    const catalogo = document.getElementById("catalogo"); 

    productos.forEach(function(producto) {
        const tarjetaProductos = document.createElement("div");
        tarjetaProductos.classList.add("producto");

        const img = document.createElement("img");
        img.src = producto.imagen;
        img.alt = producto.nombre;
        tarjetaProductos.appendChild(img);

        const nombre = document.createElement("h2");
        nombre.textContent = producto.nombre;
        tarjetaProductos.appendChild(nombre);

        const descripcion = document.createElement("span");
        descripcion.textContent = producto.Descripcion;
        tarjetaProductos.appendChild(descripcion);

        const precio = document.createElement("span");
        precio.textContent = `$${producto.precio}`;
        tarjetaProductos.appendChild(precio);

        catalogo.appendChild(tarjetaProductos);
    });
}

mostrarProductos();