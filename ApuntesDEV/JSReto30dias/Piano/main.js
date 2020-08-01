function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //se cambia el tipo de encomillado, para poder agregar a la contante la vaiable e ahora conoces tres, "", '' , ` `   <--- fijate para donde van 
    const key = document.querySelector(`.tecla[data-key="${e.keyCode}"]`); // el $ concatena una funcion. 
    if (!audio) return; // para la funcion cuando tiene el valor null 
    audio.currenTime =  01; //
    audio.play();
    key.classList.add('tocar'); // CAMBIA EL VALOR DE KEY POR EL CSS DE TOCAR
    }

    function removerTransition(e){        
            
        if(e.propertyName !== 'transform' ) return;
        console.log(e.propertyName);
        this.classList.remove('tocar');
        console.log(this);


    }
      
      const keys  = document.querySelectorAll('.tecla');
              keys.forEach(key => key.addEventListener('transitionend', removerTransition))


window.addEventListener('keydown', playSound);
