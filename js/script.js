const juego = document.getElementById('moneda');
juego.addEventListener('click',()=>{
      juego.classList.toggle('animate-heads')
})      
const Victoria= document.getElementById('ganar');
const Derrota = document.getElementById('perder');
const Apuesta = document.getElementById('apuesta');
const Juegos = document.getElementById('juegos');
let j = 0;
let d = 0;
let v = 0;
let subtotal = 0;
const cara = document.getElementById('cara_boton');
cara.addEventListener('click', ()=>{
      let valor = document.getElementById('inp__').value;
      valor = parseFloat(valor)
      if(valor > 10000){
            let rando =  Math.floor((Math.random() *2)+1);
            let moneda = rando.toPrecision(1);  
            if(moneda == 1){
                  v= v+1
                  Victoria.innerText= v;
                  j= j+1
                  Juegos.innerText= j;
                  subtotal = subtotal + valor;
                  Apuesta.innerText=subtotal;
                  Swal.fire({title:"Felicidades ganaste"});
            }else if(moneda > 1){
                  Derrota.innerText=d;
                  d = d+1
                  j=j+1
                  Juegos.innerText= j;
                  subtotal = subtotal-valor;
                  Apuesta.innerText=subtotal;
                  Swal.fire({title:"Haz perdido, buena suerte en la siguiente"});
            }            
            
      
      }else{
            Swal.fire({title:"Ingresa una apuesta mayor a 10000"});
      }
      
})

const sello = document.getElementById('sello_boton');
sello.addEventListener('click', ()=>{
      let valor = document.getElementById('inp__').value;
      valor = parseFloat(valor)
      if(valor > 10000){
            let rando =  Math.floor((Math.random() *2)+1);
            let moneda = rando.toPrecision(1); 
            if(moneda==2){
                  console.log("gano");
                  v= v+1
                  Victoria.innerText= v
                  subtotal = subtotal + valor;
                  j=j+1
                  Juegos.innerText= j;
                  Apuesta.innerText=subtotal;
                  Swal.fire({title:"Felicidades ganaste"});
                  
            }else if(moneda <2 || moneda >2){
                  console.log("perdio");
                  d =d+1
                  Derrota.innerText=d;
                  j=j+1
                  Juegos.innerText= j;
                  subtotal = subtotal - valor;
                  Apuesta.innerText=subtotal;
                  Swal.fire({title:"Haz perdido, buena suerte en la siguiente"});
            } 
      
            
      }else{
            Swal.fire({title:"Ingresa una apuesta mayor a 10000"});
      }
      
     
})

const volver = document.getElementById('volver');
volver.addEventListener('click', ()=>{
      if(subtotal <0){
            alert(`Perdiste $ ${subtotal} y jugaste ${j} veces`);
            Swal.fire({title:"Gracias por jugar, vuelve pronto"});
           
      }else{
            alert(`Ganaste $ ${subtotal} y jugaste ${j} veces`);
            Swal.fire({title:"Gracias por jugar, vuelve pronto"});
            
      }
      window.location.reload(true);
})
