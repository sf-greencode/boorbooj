//CARROUSEL DE IMÁGENES CON JQUERY + ANIMACIONES
$(document).ready(function () {
    // Para contar cuantos elementos hay    
        let imgItems = $(".slider li").length; 
        //console.log(imgItems)
    //Para determinar la posición de la imagen
        let imgPos = 1; 
    
    //Iteración para agregar las imágenes dinamicamente
        for(i=1; i<= imgItems; i++){
            $(".pagination").append('<li><span class="fa fa-circle"></span></li>');
        }
    
        $(".slider li").hide();//para ocultar todas las imagenes
        $(".slider li:first").show();//para mostrar solo la primera
        $(".pagination li:first").css({"color": "#CD6E2E"}); //Para darle color al puntito
    
    //Evento click asociado a sus funciones correspondientes para que se muevan los slides
        $(".pagination li").click(pagination);
        $(".right span").click(nextSlider);
        $(".left span").click(prevSlider);
    
    //Función para setear un invervalo y que las imágenes se muevan solas cada 4 segundos    
        setInterval (() =>{
            nextSlider();
        }, 4000); 
    
    // DECLARACION DE FUNCIONES
    
    //Función para los circulitos
        function pagination(){
            let paginationPos = $(this).index() + 1; // Para ver la posicion de la imagen seleccionada
            //console.log(paginationPos)
    
            $(".slider li").hide();
            $(".slider li:nth-child("+ paginationPos +")").fadeIn();
    
            //Para darle color a los circulitos dependiendo de la imagen seleccionada(naranja o gris segun corresponda)
            $(".pagination li").css({"color": "#858585"});
            $(this).css({"color": "#CD6E2E"});
    
            imgPos = paginationPos;
        }
    
    //Función para la flecha hacia la derecha
        function nextSlider(){
            if( imgPos >= imgItems){
                imgPos = 1;
            }else {
                imgPos++;
            }
    
            $(".pagination li").css({"color": "#858585"});
            $(".pagination li:nth-child("+ imgPos +")").css({"color": "#CD6E2E"});
    
            $(".slider li").hide();
            $(".slider li:nth-child("+ imgPos +")").fadeIn();
        }
    
    //Función para la flecha hacia la izquierda (acá va igual que la función anterior pero restando en la iteración)
        function prevSlider(){
            if( imgPos <= 1){
                imgPos = imgItems;
            }else {
                imgPos--;
            }
    
            $(".pagination li").css({"color": "#858585"});
            $(".pagination li:nth-child("+ imgPos +")").css({"color": "#CD6E2E"});
    
            $(".slider li").hide();
            $(".slider li:nth-child("+ imgPos +")").fadeIn();
        }

//AGREGAR CARDS DINÁMICAMENTE PARA LOS TESTIMONIALES UTILIZANDO API+JQUERY
    //Crear variable para traer la api
    const url = "https://6186b7f0cd8530001765ab8b.mockapi.io/api/v1/testimonial"

    //Chequear que traiga bien la info
    //METODO "GET" de JQUERY
    $.get(url,(info, status) => {
        if(status === "success"){
            //console.log(info)
            //Bucle para imprimir dinámicamente las cards con la info de la api
            info.forEach(element => {
                $("#print").append( 
                    `<div class="card col-md-4 testimonio">
                        <div class="card-header">
                            Testimonio ${element.id}
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <p>${element.quote}</p>
                                <footer class="blockquote-footer testimonio"><cite title="Source Title">${element.name} </cite>${element.title}</footer>
                            </blockquote>
                        </div>
                    </div>                 
                    `
                )           
            });
        }
        });
    });



