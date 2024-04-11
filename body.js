var p = document.querySelector("#peso")

function limpar(){
    location.reload(); 
}

function info(){
    alert("Informações de utilização do aplicativo:")
}

function fAdrenalina(){ 
    var peso = p.value; 
    if(peso <= 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else{
    alert("ADRENALINA - Ampola: 1mg/ml \nMáximo: 1mg. Flush com 5ml de soro depois. \n"+
    "\nPrescrição: Diluir uma ampola de 1ml em 9ml de ABD e administrar 0.3ml dessa diluição EV a cada 3 ou 5 minutos.\n"+
    "\nCálculo: " + peso*0.1)  //Cálculo: Peso x 0.1.
    }
}
          
//Função configurando o input de recebimento do peso do pct
const kg = window.document.getElementById("peso")
kg.addEventListener('keypress', () => {
    let tam = kg.value.length

    if (tam === 2){
        kg.value += ''
    }
})
