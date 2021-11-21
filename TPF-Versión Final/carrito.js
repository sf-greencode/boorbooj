//Declaración de variables
let btnAgregarAlCarrito = document.getElementsByClassName("btn-primary")
let containerCarrito = document.getElementsByTagName("tbody")[0]
let espacioCantidad = document.getElementsByClassName("num")
let btnBorrar = document.getElementsByClassName("uk-button-danger")
let btnComprar = document.getElementsByClassName("boton-compra")


//Para tomar todos los botones "Agregar"
    for(let i = 0; i < btnAgregarAlCarrito.length; i++){
        btnAgregarAlCarrito[i].addEventListener('click', agregarAlCarrito)
    }

//Funcion para agregar productos al carrito
    function agregarAlCarrito(event){

        let btn = event.target
        let btnPadre = btn.parentElement
        let btnAbuelo = btn.parentElement.parentElement
        let nombreProducto = btnPadre.children[0].innerText
        let precioProducto = btnPadre.children[1].innerText
        let imgProducto = btnAbuelo.children[0].src
        let containerProducto = document.createElement("tr")
        containerProducto.classList.add('producto-agregado')
        containerProducto.innerHTML = 
            `<td><img class ="uk-preserve-width uk-border-circle" src="${imgProducto}" width="40" alt=""></td>
            <td class="uk-table-link">
            <h3 class= "item-name">${nombreProducto}</h3>
            </td>
            <td class="uk-text-truncate item-price"><h3>${precioProducto}</h3></td>
            <td><input type = 'number' class = 'num' value = '1'></td>
            <td class="uk-text-truncate total-price"><h3>${precioProducto}</h3></td>
            <td><button class="uk-button uk-button-danger" type="button">Borrar</button></td>`

        containerCarrito.append(containerProducto)    
        
        //Para acceder las cantidades
        for(let i = 0; i < espacioCantidad.length; i++){
            espacioCantidad[i].addEventListener('click', actualizarTotal)
        }

        //Para eliminar productos
        for(let i = 0; i < btnBorrar.length; i++){
            btnBorrar[i].addEventListener('click', borrarProducto)
        }

        //Para comprar productos
        for(let i = 0; i < btnComprar.length; i++){
            btnComprar[i].addEventListener('click', comprarProducto)
        }

        totalFinal()
    }

//Funcion para multiplicar la cantidad y el precio
    function actualizarTotal(event){

        let cantidadProductos = event.target
        cantidadProductosPadre = cantidadProductos.parentElement.parentElement
        precio = cantidadProductosPadre.getElementsByClassName("item-price")[0]
        total = cantidadProductosPadre.getElementsByClassName("total-price")[0]
        contenidoPrecio = precio.children[0].innerText.replace("$", "")
        total.children[0].innerText = "$" + cantidadProductos.value * contenidoPrecio

        //Bucle For para que la cantidad de productos nunca sea menor a 1
        if (isNaN(cantidadProductos.value)||(cantidadProductos.value <= 0 )){
            cantidadProductos.value = 1
        }
        totalFinal()
    }

//Funcion para agregar el total de todos los productos
    function totalFinal(){
        let vtotal = 0
        let precioTotal = document.getElementsByClassName("total-price")
        let vprecioFinal = document.getElementsByClassName("grand-total")[0]
        for(let i = 0; i < precioTotal.length; i++){
            contenidoPrecioTotal = Number(precioTotal[i].innerText.replace("$", ""))
            vtotal += contenidoPrecioTotal
        }
        vprecioFinal.children[0].innerText = "$" + vtotal
        vprecioFinal.children[0].style.fontWeight = "bold"
        //console.log(vtotal)

    }

//Funcion para borrar productos
    function borrarProducto(event){
        delBtn = event.target
        delBtnAbuelo = delBtn.parentElement.parentElement
        delBtnAbuelo.remove()
        totalFinal()
    }

//Funcion para borrar productos comprados del HMTL
    function comprarProducto(){
        Array.from(document.getElementsByClassName('producto-agregado')).forEach(producto => {
          producto.remove()
        })
        totalFinal()
    }









