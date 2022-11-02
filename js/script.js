const movi = document.getElementById('moneda');
movi.addEventListener('click',()=>{
      movi.classList.toggle('animate-heads')
})
      


const cara = document.getElementById('button-addon1');

const rGnar= document.getElementById('ganar');
const rPerder = document.getElementById('perder');
let i = 0 ;
let e = 0;
let juegos = 0 ;
let subtotal = 0;
cara.addEventListener('click', ()=>{
      let valor = document.getElementById('inp__').value;
      valor = parseFloat(valor)
      if(valor > 1999){
            let rando =  Math.random()*2 + 1;
            let moneda = rando.toPrecision(1);  
            if(moneda == 1){
                  console.log("gano");
                  e= e+1
                  rGnar.innerText= e
                  subtotal = subtotal + valor
                  console.log(subtotal)
            }else if(moneda > 1){
                  console.log("perdio");
                  rPerder.innerHTML=i;  
                  i = i+1   
                  subtotal = subtotal - valor 
                  console.log(subtotal)            
            }
            juegos = i + e;
      
      }else{
            Swal.fire({title:"Por favor ingrese un cantidad de dinero mayor o igual a 2000!!"});
      }
      
})

const sello = document.getElementById('button-addon2');
sello.addEventListener('click', ()=>{
      let valor = document.getElementById('inp__').value;
      valor = parseFloat(valor)
      if(valor > 1999){
            let rando =  Math.random()*2 + 1;
            let moneda = rando.toPrecision(1); 
            if(moneda==2){
                  console.log("gano");
                  e= e+1
                  rGnar.innerText= e
                  subtotal = subtotal + valor
                  console.log(subtotal)
                  
            }else if(moneda <2 || moneda >2){
                  console.log("perdio");
                  i =i+1
                  rPerder.innerHTML=i;
                  subtotal = subtotal - valor 
                  console.log(subtotal)
            } 
      
            juegos = i + e;
      }else{
            Swal.fire({title:"Por favor ingrese un cantidad de dinero mayor o igual a 2000!!"});
      }
      
     
})

const volver = document.getElementById('reinicio');
volver.addEventListener('click', ()=>{
      if(subtotal <0){
            alert(`Lo sentimos has perdido $ ${subtotal} y jugo ${juegos} veces`);
            Swal.fire({title:"¡¡GRACIAS POR JUGAR!!"});
           
      }else{
            alert(`El total acumulado es $ ${subtotal} y jugo ${juegos} veces`);
            Swal.fire({title:"¡¡GRACIAS POR JUGAR!!"});
            
      }
      window.location.reload(true);
})
