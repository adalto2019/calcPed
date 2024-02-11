var res1 = window.document.getElementById('res1')
var res2 = window.document.getElementById('res2')
var res3 = window.document.getElementById('res3')
var res4 = window.document.getElementById('res4')
var res5 = window.document.getElementById('res5')
var res6 = window.document.getElementById('res6')
var res7 = window.document.getElementById('res7')
var res8 = window.document.getElementById('res8')
var res9 = window.document.getElementById('res9')
var res10 = window.document.getElementById('res10')
var res11 = window.document.getElementById('res11')
var res12 = window.document.getElementById('res12')
var res13 = window.document.getElementById('res13')
var res14 = window.document.getElementById('res14')
var res15 = window.document.getElementById('res15')
var res16 = window.document.getElementById('res16')
var res17 = window.document.getElementById('res17')
var res18 = window.document.getElementById('res18')
var res19 = window.document.getElementById('res19')
var res20 = window.document.getElementById('res20')
var res21 = window.document.getElementById('res21')
var res22 = window.document.getElementById('res22')
var res23 = window.document.getElementById('res23')
var res24 = window.document.getElementById('res24')
var res25 = window.document.getElementById('res25')
var res26 = window.document.getElementById('res26')
var res27 = window.document.getElementById('res27')
var res28 = window.document.getElementById('res28')
var res29 = window.document.getElementById('res29')
var res30 = window.document.getElementById('res30')
var res31 = window.document.getElementById('res31')
var res32 = window.document.getElementById('res32')
var res33 = window.document.getElementById('res33')
var res34 = window.document.getElementById('res34')
var res35 = window.document.getElementById('res35')
var res36 = window.document.getElementById('res36')
var res37 = window.document.getElementById('res37')
var res38 = window.document.getElementById('res38')
var res39 = window.document.getElementById('res39')
var res40 = window.document.getElementById('res40')
var res41 = window.document.getElementById('res41')
var res42 = window.document.getElementById('res42')
var res43 = window.document.getElementById('res43')
var res44 = window.document.getElementById('res44')

var peso = window.document.getElementById('peso')

function calc(){

    peso = peso.value //Passando para variával o valor informado do peso no input/
    console.log(peso)
     
    if (peso == 0) {
        alert("Informe o peso do paciente!") 
        location.reload();  
    
    }else if(peso < 0){
        alert("Ação inválida, o peso não pode ser menor que zero!")
        location.reload();

    }else if(peso > 150){
        alert("Ação inválida, informe um peso válido!")
        location.reload();
    }else {
        var formula1 = 0.01*peso //FÓRMULA '1': 0.01 * PESO DO PCT
        var formula2 = 0.1*peso //FÓRMULA '2': 0.1 * PESO DO PCT
        var formula3 = 0.02*peso //FÓRMULA '3': 0.02 * PESO DO PCT
        var formula4 = 0.08*peso //FÓRMULA '4': 0.08 * PESO DO PCT
        var formula5 = 0.2*peso //FÓRMULA '5': 0.2 * PESO DO PCT
        var formula6 = (0.1*peso)/3 //FÓRMULA '6': 0.1 * PESO DO PCT / 3
        var formula7 = (0.2*peso)/3 //FÓRMULA '7': 0.2 * PESO DO PCT /  3
        var formula8 = 5*peso //FÓRMULA '8': 5 * PESO DO PCT
        var formula9 = (2*peso) - (0.1*peso) //FÓRMULA '9': 2 * PESO DO PCT - 0.1 * PESO DO PCT
        var formula10 = 50*peso //FÓRMULA '10': 50 * PESO DO PCT
        var formula11 = (25*peso)/100 //FÓRMULA '11': 25 * PESO DO PCT / 100
        var formula12 = (50*peso)/100 //FÓRMULA '12': 50 * PESO DO PCT / 100
        var formula13 = ((((50*peso)/100)*100)/40) - ((50*peso)/100)  //FÓRMULA '13'
        var formula14 = peso*1  //FÓRMULA '14': SÓ PESO
        var formula15 = 0.5*peso //FÓRMULA '15': 0.5 * PESO DO PCT
        var formula16 = 0.4*peso //FÓRMULA '16': 0.4 * PESO DO PCT
        var formula17 = ((5*(0.4*peso))-(0.4*peso)) //FÓRMULA '17'
        var formula18 = 0.3*peso //FÓRMULA '18': 0.3 * PESO DO PCT
        var formula19 = 0.06*peso //FÓRMULA '19': 0.06 * PESO DO PCT
        var formula20 = 15*peso //FÓRMULA '20': 15 * PESO DO PCT 
        var formula21 = ((3*peso)-(0.3*peso)) //FÓRMULA '21'
        var formula22 = (15*peso)/peso //FÓRMULA '22': (15 * PESO DO PCT) - PESO DO PCT 
        var formula23 = ((3*peso)-(0.15*peso)) //FÓRMULA '23'       
        var formula24 = 0.15*peso //FÓRMULA '20': 0.15 * PESO DO PCT       
         


        res1.innerHTML = formula1.toFixed(2) + 'mg'
            res1.style.backgroundColor = 'black'
        res2.innerHTML = formula2.toFixed(1) + 'mg'
            res2.style.backgroundColor = 'black'
        res3.innerHTML = formula1.toFixed(2) + 'mg'
            res3.style.backgroundColor = 'black'
        res4.innerHTML = formula2.toFixed(1) + 'ml' 
            res4.style.backgroundColor = 'black'
        res5.innerHTML = formula2.toFixed(1) + 'ml'
            res5.style.backgroundColor = 'black'
        res6.innerHTML = formula1.toFixed(2) + 'ml'
            res6.style.backgroundColor = 'black'
        res7.innerHTML = formula3.toFixed(1) + 'mg'
            res7.style.backgroundColor = 'black'
        res8.innerHTML = formula4.toFixed(1) + 'ml'
            res8.style.backgroundColor = 'black'
        res9.innerHTML = formula2.toFixed(1) + 'mg' //Adenosina (6mg/2mL)
            res9.style.backgroundColor = 'black'
        res10.innerHTML = formula5.toFixed(1) + 'mg' 
            res10.style.backgroundColor = 'black'
        res11.innerHTML = formula6.toFixed(1) + 'ml'
            res11.style.backgroundColor = 'black'
        res12.innerHTML = formula7.toFixed(1) + 'ml'
            res12.style.backgroundColor = 'black'
        res13.innerHTML = formula8.toFixed(1) + 'mg'//Amiodarona (50mg/mL)
            res13.style.backgroundColor = 'black'
        res14.innerHTML = formula8.toFixed(1) + 'mg'
            res14.style.backgroundColor = 'black'
        res15.innerHTML = formula2.toFixed(1) + 'ml'
            res15.style.backgroundColor = 'black'
        res16.innerHTML = formula2.toFixed(1) + 'ml'
            res16.style.backgroundColor = 'black'
        res17.innerHTML = formula9.toFixed(1) + 'ml'
            res17.style.backgroundColor = 'black'
        res18.innerHTML = formula10.toFixed(1) + 'mg'//Sulfato de Magnésio
            res18.style.backgroundColor = 'black'
        res19.innerHTML = formula11.toFixed(1) + 'ml'
            res19.style.backgroundColor = 'black'
        res20.innerHTML = formula12.toFixed(1) + 'ml'
            res20.style.backgroundColor = 'black'
        res21.innerHTML = formula12.toFixed(1) + 'ml'
            res21.style.backgroundColor = 'black'
        res22.innerHTML = formula13.toFixed(1) + 'ml'
            res22.style.backgroundColor = 'black'
        res23.innerHTML = formula12.toFixed(1) + 'ml'
            res23.style.backgroundColor = 'black'
        res24.innerHTML = formula13.toFixed(1) + 'ml'
            res24.style.backgroundColor = 'black'
        res25.innerHTML = formula14.toFixed(1) + 'mEq'//Bicarbonato de sódio
            res25.style.backgroundColor = 'black'
        res26.innerHTML = formula14.toFixed(1) + 'ml'
            res26.style.backgroundColor = 'black'
        res27.innerHTML = formula15.toFixed(1) + 'mEq'//Gluconato de cálcio
            res27.style.backgroundColor = 'black'
        res28.innerHTML = formula14.toFixed(1) + 'ml'
            res28.style.backgroundColor = 'black'
        res29.innerHTML = formula5.toFixed(1) + 'g'//Glicose 50%
            res29.style.backgroundColor = 'black'
        res30.innerHTML = formula16.toFixed(1) + 'ml'
            res30.style.backgroundColor = 'black'
        res31.innerHTML = formula17.toFixed(1) + 'ml'//
            res31.style.backgroundColor = 'black'
        res32.innerHTML = formula15.toFixed(1) + 'g'
            res32.style.backgroundColor = 'black'
        res33.innerHTML = formula14.toFixed(1) + 'ml'
            res33.style.backgroundColor = 'black'
        res34.innerHTML = formula14.toFixed(1) + 'ml'
            res34.style.backgroundColor = 'black'
            //FIM DA TABELA 1

            //INICIO TABELA 2
        res35.innerHTML = formula18.toFixed(1) + 'mg'//Diazepam (5mg/mL)
             res35.style.backgroundColor = 'black'
        res36.innerHTML = formula19.toFixed(1) + 'ml'
            res36.style.backgroundColor = 'black'
        res37.innerHTML = formula20.toFixed(1) + 'mg'//Fenitoína (50mg/mL)
            res37.style.backgroundColor = 'black'
        res38.innerHTML = formula18.toFixed(1) + 'ml'
            res38.style.backgroundColor = 'black'
        res39.innerHTML = formula21.toFixed(1) + 'ml'//em:
            res39.style.backgroundColor = 'black'
        res40.innerHTML = formula22.toFixed(0) + 'mim'
            res40.style.backgroundColor = 'black'
        res41.innerHTML = formula20.toFixed(1) + 'mg'
            res41.style.backgroundColor = 'black'
        res42.innerHTML = formula24.toFixed(1) + 'ml'//Diluir:
            res42.style.backgroundColor = 'black'
        res43.innerHTML = formula23.toFixed(1) + 'ml'//em:
            res43.style.backgroundColor = 'black'
        res44.innerHTML = formula22.toFixed(0) + 'min'
            res44.style.backgroundColor = 'black'
            //FIM DA TABELA 2

            //INICIO TABELA 3
     }

     peso = null; //Não permite calcular ao acionar o btn 2x vezes\
}

function limpar(){
    location.reload();
}

function imprimir(){
    alert("Ops.. Função Imprimir ainda em desenvolvimento!")
    
}

//Funções que mudam a cor dos botões ao passar o mouse sobre ele, e que volta ao estado anterior ao retirar o mouse sobre ele.
function mudaCorBtn1(){
    var btn = document.getElementById('btn1'); btn.style.color = 'white', btn.style.backgroundColor = 'rgb(146, 130, 102)' }
function voltaCorBtn1(){var btn = document.getElementById('btn1'); btn.style.color = 'rgb(99, 11, 11)', btn.style.backgroundColor = 'wheat'}

function mudaCorBtn2(){
    var btn = document.getElementById('btn2'); btn.style.color = 'white' , btn.style.backgroundColor = 'rgb(146, 130, 102)'}
function voltaCorBtn2(){var btn = document.getElementById('btn2'); btn.style.color = 'rgb(99, 11, 11)', btn.style.backgroundColor = 'wheat'}

function mudaCorBtn3(){
    var btn = document.getElementById('btn3'); btn.style.color = 'white' , btn.style.backgroundColor = 'rgb(146, 130, 102)'}
function voltaCorBtn3(){var btn = document.getElementById('btn3'); btn.style.color = 'rgb(99, 11, 11)', btn.style.backgroundColor = 'wheat'}


//INICIO CONTRAIR E EXPANDIR TABELAS ****************************************
function abreTb1(){
    var tabela = window.document.getElementById("tb1")
    tabela.style.display = 'block'
}
function fecharTb1(){
    var tabela = window.document.getElementById("tb1")
    tabela.style.display = 'none'
}

function abreTb2(){
    var tabela = window.document.getElementById("tb2")
    tabela.style.display = 'block'
}
function fecharTb2(){
    var tabela = window.document.getElementById("tb2")
    tabela.style.display = 'none'
}

function abreTb3(){
    var tabela = window.document.getElementById("tb3")
    tabela.style.display = 'block'
}
function fecharTb3(){
    var tabela = window.document.getElementById("tb3")
    tabela.style.display = 'none'
}

function abreTb4(){
    var tabela = window.document.getElementById("tb4")
    tabela.style.display = 'block'
}
function fecharTb4(){
    var tabela = window.document.getElementById("tb4")
    tabela.style.display = 'none'
}

function abreTb5(){
    var tabela = window.document.getElementById("tb5")
    tabela.style.display = 'block'
}
function fecharTb5(){
    var tabela = window.document.getElementById("tb5")
    tabela.style.display = 'none'
}
//FIM CONTRAIR E EXPANDIR TABELAS ****************************************


//Função configurando o input de recebimento do peso do pct
const kg = window.document.getElementById("peso")
kg.addEventListener('keypress', () => {
    let tam = kg.value.length

    if (tam === 2){
        kg.value += ''
    }
})
