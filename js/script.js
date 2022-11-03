const juego = document.getElementById('moneda');
juego.addEventListener('click',()=>{
      juego.classList.toggle('animate-heads')
})
      
const Victoria= document.getElementById('ganar');
const Derrota = document.getElementById('perder');
let i = 0 ;
let e = 0;
let juegos = 0 ;
let subtotal = 0;
const cara = document.getElementById('cara_boton');
cara.addEventListener('click', ()=>{
      let valor = document.getElementById('inp__').value;
      valor = parseFloat(valor)
      if(valor > 10000){
            let rando =  Math.random()*2 + 1;
            let moneda = rando.toPrecision(1);  
            if(moneda == 1){
                  console.log("gano");
                  e= e+1
                  Victoria.innerText= e
                  subtotal = subtotal + valor
                  console.log(subtotal)
                  Swal.fire({title:"Felicidades ganaste"});
            }else if(moneda > 1){
                  console.log("perdio");
                  Derrota.innerHTML=i;  
                  i = i+1   
                  subtotal = subtotal - valor 
                  console.log(subtotal)
                  Swal.fire({title:"Haz perdido, buena suerte en la siguiente"});
            }            
            juegos = i + e;
      
      }else{
            Swal.fire({title:"Ingresa una apuesta mayor a 10000"});
      }
      
})

const sello = document.getElementById('sello_boton');
sello.addEventListener('click', ()=>{
      let valor = document.getElementById('inp__').value;
      valor = parseFloat(valor)
      if(valor > 10000){
            let rando =  Math.random()*2 + 1;
            let moneda = rando.toPrecision(1); 
            if(moneda==2){
                  console.log("gano");
                  e= e+1
                  Victoria.innerText= e
                  subtotal = subtotal + valor
                  console.log(subtotal)
                  Swal.fire({title:"Felicidades ganaste"});
                  
            }else if(moneda <2 || moneda >2){
                  console.log("perdio");
                  i =i+1
                  Derrota.innerHTML=i;
                  subtotal = subtotal - valor 
                  console.log(subtotal)
                  Swal.fire({title:"Haz perdido, buena suerte en la siguiente"});
            } 
      
            juegos = i + e;
      }else{
            Swal.fire({title:"Ingresa una apuesta mayor a 10000"});
      }
      
     
})

const volver = document.getElementById('volver');
volver.addEventListener('click', ()=>{
      if(subtotal <0){
            alert(`Perdiste $ ${subtotal} y jugaste ${juegos} veces`);
            Swal.fire({title:"Gracias por jugar, vuelve pronto"});
           
      }else{
            alert(`Ganaste $ ${subtotal} y jugaste ${juegos} veces`);
            Swal.fire({title:"Gracias por jugar, vuelve pronto"});
            
      }
      window.location.reload(true);
})
