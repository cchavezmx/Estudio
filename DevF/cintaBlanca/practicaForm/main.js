var btn_ordena = document.getElementById('btn_ordena');


// 

const ordenar = () =>{
    
    let ordenList = document.getElementById('ordenList').value; //buscamos el valor
    document.getElementById('respuestaPizza').innerHTML = 'Tu Pizza  : ' + ordenList // buscamos el sitio para pegarlo 

    let custom_nombre = document.getElementById('custom_nombre'); // buscamos el valor 
    document.getElementById('ctm_rnombre').innerHTML = 'Hola : ' + custom_nombre.value // buscamos el sitipo para pegarlo 

    let ctm_telefono = document.getElementById('ctm_telefono'); // busco el elemento
    document.getElementById('rctm_telefono').innerHTML = 'Tu numero de telefono es: ' + ctm_telefono.value
    
    let custom_direccion = document.getElementById('custom_direccion')  // buscamos el elemento
    document.getElementById('ctm_direcion').innerHTML = 'Tu orden sera enviada a la siguiente dirreción: ' + custom_direccion.value // buscamos donde pegar el valor
      
    if (ordenList === 'Mexicana'){
        document.getElementById('fotopizza').src = "assets/pmexicana.jpg";
    } else if(ordenList === 'Tres Quesos'){
        document.getElementById('fotopizza').src = "assets/pquesos.jpg";
    } else if(ordenList === 'Champiñones'){
        document.getElementById('fotopizza').src = "assets/champi.jpg";
    } else 
        (document.getElementById('fotopizza').src = "assets/logo.PNG")
    
    document.getElementById('none').style.display = "flex" // aqui lo llamo oculto las propiedades de CSS
    
    
}     


btn_ordena.addEventListener('click', ordenar)

