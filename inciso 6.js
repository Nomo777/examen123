

this.addEventListener("keydown",function(event){

    document.body.classList.remove('rojo', 'naranja', 'amarillo', 'verde', 'azul');
  

    if (event.key==="1"){
        document.body.classList.add('rojo'); //if es si. entoces is presiono la tecla 1 me gace lo que le pido 
    }

    if (event.key==="2"){
        document.body.classList.add('naranja');
    }
    if (event.key==="3"){
        document.body.classList.add('amarillo');
    }  
    
    if (event.key==="4"){
        document.body.classList.add('verde');
    }    
    
    if (event.key==="5"){
        document.body.classList.add('azul');
    }



})

document.addEventListener('keydown', function(event) {

    // Muestra el código de la tecla y la tecla presionada

    console.log('Tecla presionada: ' + event.key); // Muestra el nombre de la tecla

    
});


function alertaHola(){

    alert("hola mundo");

}

function alertaAdios(){

    alert("Nos Vemos");

}

window.addEventListener('keydown', detectarTecla);


function detectarTecla(event){

      const teclaPresionada = event.key;

console.log("tecla presionada: "+teclaPresionada);
}