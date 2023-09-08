
const progress   = document.getElementById('progress'); // peguei a classe no html
const circles    = document.querySelectorAll('.circle'); // selecionar todos os elementos em comun da classe

const btn_prev = document.getElementById('prev');
const btn_next = document.getElementById('next');
const btn_sav = document.getElementById('sav'); // ESSE BOTAO É MEU
// criar index

let ativado = 1;

// implementando o botao proximo
btn_next.addEventListener('click',function(){
    // incrementei o ativado
    ativado++ 
    
    // checando se esta dentro do limite de circulos
      if(ativado > circles.length) {
           ativado = circles.length
    }

      // função que faz update do DOM
     
    console.log(ativado)
    update()
})


// implementando o botao anterior
btn_prev.addEventListener('click',function(){
    // incrementei o ativado
    ativado-- 
    // checando se esta dentro do limite de circulos
      if(ativado < 1) {
           ativado = 1
    }
      
    // função que faz update do DOM
    update()
})
function update(){

        // pego cada um dos circle
    circles.forEach((circle,idx)=>{
          
         if(idx < ativado){
               // adiciono class ativado neles
            circle.classList.add('active')
         } else{
                 // removo class ativado neles
            circle.classList.remove('active')
         }

    })

      // pegando od botoes ativos
      const actives = document.querySelectorAll('.active')

      progress.style.width =  ((actives.length - 1)/(circles.length - 1)) * 100 + '%'

      // checando se posso usar o btn anterior
            if(ativado===1){
                 // na priemiro item nada muda fica desabilitado
                btn_prev.disabled = true 
                btn_sav.disabled = true 
            } else if(ativado === circles.length){
               btn_next.disabled = true
               btn_sav.disabled = false
            } 
            else{
               
               btn_prev.disabled = false
               btn_next.disabled = false
               btn_sav.disabled = true 
            
            }
   }


