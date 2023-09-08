/* o primeiro elemento está ativo e agora no JS, nós vamos trocar as classes e colocar ativos nso outros elemntos quando clicar o mouse*/

// constante que pega os paineis. query select all

const panels = document.querySelectorAll('.panel') // peguei um node que é igual a um array
panels.forEach((panel) => { // criei um afunção seta com so paineis
    // event listener do botao do mouse
 panel.addEventListener('click', ()=>{ // quando tiver o click roda outra  função seta
    removeActiveClasses() // funçao qu remove a classe ativa de todos
    panel.classList.add('active') // peguei a lista dos elemtos da mesma classe e  adicionei um parametro
    
   console.log("allahu akbar") // ta funcionando

 }) 
})

function removeActiveClasses(){
    panels.forEach((panel)=>{
       panel.classList.remove('active')

  })


}
