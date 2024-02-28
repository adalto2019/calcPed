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
var res45 = window.document.getElementById('res45')
var res46 = window.document.getElementById('res46')
var res47 = window.document.getElementById('res47')
var res48 = window.document.getElementById('res48')
var res49 = window.document.getElementById('res49')
var res50 = window.document.getElementById('res50')
var res51 = window.document.getElementById('res51')
var res52 = window.document.getElementById('res52')
var res53 = window.document.getElementById('res53')
var res54 = window.document.getElementById('res54')
var res55 = window.document.getElementById('res55')
var res56 = window.document.getElementById('res56')
var res57 = window.document.getElementById('res57')
var res58 = window.document.getElementById('res58')
var res59 = window.document.getElementById('res59')
var res60 = window.document.getElementById('res60')
var res61 = window.document.getElementById('res61')
var res62 = window.document.getElementById('res62')
var res63 = window.document.getElementById('res63')
var res64 = window.document.getElementById('res64')
var res65 = window.document.getElementById('res65')
var res66 = window.document.getElementById('res66')
var res67 = window.document.getElementById('res67')
var res68 = window.document.getElementById('res68')
var res69 = window.document.getElementById('res69')
var res70 = window.document.getElementById('res70')
var res71 = window.document.getElementById('res71')
var res72 = window.document.getElementById('res72')
var res73 = window.document.getElementById('res73')
var res74 = window.document.getElementById('res74')
var res75 = window.document.getElementById('res75')
var res76 = window.document.getElementById('res76')
var res77 = window.document.getElementById('res77')
var res78 = window.document.getElementById('res78')
var res79 = window.document.getElementById('res79')
var res80 = window.document.getElementById('res80')
var res81 = window.document.getElementById('res81')
var res82 = window.document.getElementById('res82')
var res83 = window.document.getElementById('res83')
var res84 = window.document.getElementById('res84')
var res85 = window.document.getElementById('res85')
var res86 = window.document.getElementById('res86')
var res87 = window.document.getElementById('res87')
var res88 = window.document.getElementById('res88')
var res89 = window.document.getElementById('res89')
var res90 = window.document.getElementById('res90')
var res91 = window.document.getElementById('res91')
var res92 = window.document.getElementById('res92')
var res93 = window.document.getElementById('res93')
var res94 = window.document.getElementById('res94')
var res95 = window.document.getElementById('res95')
var res96 = window.document.getElementById('res96')
var res97 = window.document.getElementById('res97')
var res98 = window.document.getElementById('res98')
var res99 = window.document.getElementById('res99')

var res100 = window.document.getElementById('res100')
var res101 = window.document.getElementById('res101')
var res102 = window.document.getElementById('res102')
var res103 = window.document.getElementById('res103')
var res104 = window.document.getElementById('res104')
var res105 = window.document.getElementById('res105')
var res106 = window.document.getElementById('res106')
var res107 = window.document.getElementById('res107')
var res108 = window.document.getElementById('res108')
var res109 = window.document.getElementById('res109')
var res110 = window.document.getElementById('res110')
var res111 = window.document.getElementById('res111')
var res112 = window.document.getElementById('res112')
var res113 = window.document.getElementById('res113')
var res114 = window.document.getElementById('res114')
var res115 = window.document.getElementById('res115')
var res116 = window.document.getElementById('res116')
var res117 = window.document.getElementById('res117')
var res118 = window.document.getElementById('res118')
var res119 = window.document.getElementById('res119')
var res120 = window.document.getElementById('res120')
var res121 = window.document.getElementById('res121')
var res122 = window.document.getElementById('res122')
var res123 = window.document.getElementById('res123')
var res124 = window.document.getElementById('res124')
var res125 = window.document.getElementById('res125')
var res126 = window.document.getElementById('res126')
var res127 = window.document.getElementById('res127')
var res128 = window.document.getElementById('res128')
var res129 = window.document.getElementById('res129')
var res130 = window.document.getElementById('res130')


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
        res1.innerHTML = ((0.01*peso) >= 1 ? 1 : (0.01*peso)).toFixed(2) + 'mg'
            res1.style.backgroundColor = 'black'
            
        res2.innerHTML =  ((0.1*peso) >= 10 ? 10 : (0.1*peso)).toFixed(1) + 'ml'
            res2.style.backgroundColor = 'black'

        res3.innerHTML =  ((0.1*peso) >= 2.5 ? 2.5 : (0.1*peso)).toFixed(1) + 'mg'
            res3.style.backgroundColor = 'black'

        res4.innerHTML =  ((0.1*peso) >= 2.5 ? 2.5 : (0.1*peso)).toFixed(1) + 'ml' 
            res4.style.backgroundColor = 'black'

        res5.innerHTML =  ((0.01*peso) >= 0.3 ? 0.3 : (0.01*peso)).toFixed(2) + 'mg'
            res5.style.backgroundColor = 'black'

        res6.innerHTML =  ((0.01*peso) >= 0.3 ? 0.3 : (0.01*peso)).toFixed(2) + 'ml'
            res6.style.backgroundColor = 'black'

        res7.innerHTML = ((0.02*peso) < 0.1 ? 0.1 : (0.02*peso) > 0.5 ? 0.5 : (0.02*peso)).toFixed(1) + 'mg'//Atropina
            res7.style.backgroundColor = 'black'

        res8.innerHTML = ((0.08*peso) < 0.2 ? 0.2 :  (0.08*peso) > 1 ? 1 : (0.08*peso)).toFixed(1) + 'ml'
            res8.style.backgroundColor = 'black'

        res9.innerHTML = ((0.1*peso) > 6 ? 6 : (0.1*peso)).toFixed(1) + 'mg' //Adenosina (6mg/2mL)
            res9.style.backgroundColor = 'black'

        res10.innerHTML = (((0.1*peso) / 3) > 2 ? 2 : ((0.1*peso) / 3)).toFixed(1) + 'ml' 
            res10.style.backgroundColor = 'black'

        res11.innerHTML = ((0.2*peso) > 12 ? 12 : (0.2*peso)).toFixed(1) + 'mg'
            res11.style.backgroundColor = 'black'

        res12.innerHTML = (((0.2*peso)/3) > 4 ? 4 : ((0.2*peso)/3)).toFixed(1) + 'ml'
            res12.style.backgroundColor = 'black'

        res13.innerHTML = ((5*peso) >= 300 ? 300 : (5*peso)).toFixed(1) + 'mg'//Amiodarona (50mg/mL)
            res13.style.backgroundColor = 'black'

        res14.innerHTML = ((0.1*peso) >= 6 ? 6 : (0.1*peso)).toFixed(1) + 'ml'
            res14.style.backgroundColor = 'black'

        res15.innerHTML = ((5*peso) >= 300 ? 300 : (5*peso)).toFixed(1) + 'mg'
            res15.style.backgroundColor = 'black'

        res16.innerHTML = ((0.1*peso) >= 6 ? 6 : (0.1*peso)).toFixed(1) + 'ml'
            res16.style.backgroundColor = 'black'

        res17.innerHTML = ((2*peso) - ((0.1*peso) >= 6 ? 6 : (0.1*peso))).toFixed(1) + 'ml'
            res17.style.backgroundColor = 'black'

        res18.innerHTML = ((50*peso) >= 2000 ? 2000 : (50*peso)).toFixed(1) + 'mg'//Sulfato de Magnésio
            res18.style.backgroundColor = 'black'

        res19.innerHTML = ((50*peso) >= 2000 ? 2000 : (50*peso)).toFixed(1) + 'ml'
            res19.style.backgroundColor = 'black'

        res20.innerHTML = (((50*peso)/100) >= 20 ? 20 : ((50*peso)/100)).toFixed(1) + 'ml'
            res20.style.backgroundColor = 'black'

        res21.innerHTML = (((50*peso)/100) >= 20 ? 20 : ((50*peso)/100)).toFixed(1) + 'ml'
            res21.style.backgroundColor = 'black'

        res22.innerHTML = (((((((50*peso)/100) >= 20 ? 20 : ((50*peso)/100)))*100)/40) - ((((50*peso)/100) >= 20 ? 20 : ((50*peso)/100)))).toFixed(1)  + 'ml'
            res22.style.backgroundColor = 'black'

        res23.innerHTML = (((50*peso)/100) >= 20 ? 20 : ((50*peso)/100)).toFixed(1) + 'ml'
            res23.style.backgroundColor = 'black'

        res24.innerHTML = (((((((50*peso)/100) >= 20 ? 20 : ((50*peso)/100)))*100)/40) - (((50*peso)/100) >= 20 ? 20 : ((50*peso)/100))).toFixed(1) + 'ml'
            res24.style.backgroundColor = 'black'

        res25.innerHTML = (peso*1).toFixed(1) + 'mEq'//Bicarbonato de sódio
            res25.style.backgroundColor = 'black'

        res26.innerHTML = (peso*1).toFixed(1) + 'ml'
            res26.style.backgroundColor = 'black'

        res27.innerHTML = (0.5*peso).toFixed(1) + 'mEq'//Gluconato de cálcio
            res27.style.backgroundColor = 'black'

        res28.innerHTML = (peso*1).toFixed(1) + 'ml'
            res28.style.backgroundColor = 'black'

        res29.innerHTML = ((0.2*peso) >= 25 ? 25 : (0.2*peso)).toFixed(1) + 'g'//Glicose 50%
            res29.style.backgroundColor = 'black'
            
        res30.innerHTML = ((0.4*peso) >= 50 ? 50 : (0.4*peso)).toFixed(1) + 'ml'
            res30.style.backgroundColor = 'black'

        res31.innerHTML = ((5*((0.4*peso) >= 50 ? 50 : (0.4*peso)))-((0.4*peso) >= 50 ? 50 : (0.4*peso))).toFixed(1) + 'ml'//
            res31.style.backgroundColor = 'black'

        res32.innerHTML = ((0.5*peso) >= 25 ? 25 : (0.5*peso)).toFixed(1) + 'g'
            res32.style.backgroundColor = 'black'

        res33.innerHTML = ((peso*1) >= 50 ? 50 : (peso*1)).toFixed(1) + 'ml'
            res33.style.backgroundColor = 'black'

        res34.innerHTML = ((peso*1) >= 50 ? 50 : (peso*1)).toFixed(1) + 'ml'
            res34.style.backgroundColor = 'black'
            //FIM DA TABELA 1 ****************************************************************************************

            //INICIO TABELA 2 ****************************************************************************************
        res35.innerHTML =  ((0.3*peso) >= 10 ? 10 : (0.3*peso)).toFixed(1) + 'mg'//Diazepam (5mg/mL)
             res35.style.backgroundColor = 'black' 

        res36.innerHTML =  ((0.06*peso) >= 2 ? 2 : (0.06*peso)).toFixed(1) + 'ml'
            res36.style.backgroundColor = 'black'

        res37.innerHTML =  ((15*peso) >= 1000 ? 1000 : (15*peso)).toFixed(1) + 'mg'//Fenitoína (50mg/mL)
            res37.style.backgroundColor = 'black'

        res38.innerHTML =  ((0.3*peso) >= 20 ? 20 : (0.3*peso)).toFixed(1) + 'ml'
            res38.style.backgroundColor = 'black'

        res39.innerHTML =  ((3*peso) - ((0.3*peso) >= 20 ? 20 : (0.3*peso))).toFixed(1) + 'ml'//em:
            res39.style.backgroundColor = 'black'

        res40.innerHTML = (((15*peso) >= 1000 ? 1000 : (15*peso))/peso).toFixed(0) + 'min'
            res40.style.backgroundColor = 'black'
            
        res41.innerHTML = ((15*peso) >= 1000 ? 1000 : (15*peso)).toFixed(1) + 'mg'
            res41.style.backgroundColor = 'black'

        res42.innerHTML = ((0.15*peso) >= 10 ? 10 : (0.15*peso)).toFixed(2) + 'ml'//Diluir:
            res42.style.backgroundColor = 'black'

        res43.innerHTML = ((3*peso) - ((0.15*peso) >= 10 ? 10 : (0.15*peso))).toFixed(1)  + 'ml'//em:
            res43.style.backgroundColor = 'black'

        res44.innerHTML = (((15*peso) >= 1000 ? 1000 : (15*peso))/peso).toFixed(0) + 'min'
            res44.style.backgroundColor = 'black'
            //FIM DA TABELA 2 ****************************************************************************************

            //INICIO TABELA 3 ****************************************************************************************
        res45.innerHTML =  ((0.2*peso) >= 15 ? 15 : (0.2*peso)).toFixed(1) + 'mg'
            res45.style.backgroundColor = 'black'

        res46.innerHTML =  ((0.04*peso) >= 3 ? 3 : (0.04*peso)).toFixed(1) + 'ml'
            res46.style.backgroundColor = 'black'

        res47.innerHTML =  ((2*peso) >= 100 ? 100 : (2*peso)).toFixed(1) + 'mcg'
            res47.style.backgroundColor = 'black'

        res48.innerHTML =  ((0.04*peso) >= 2 ? 2 : (0.04*peso)).toFixed(1) + 'ml'
            res48.style.backgroundColor = 'black'

        res49.innerHTML = (((0.04*peso) >= 2 ? 2 : (0.04*peso)) > 1) ? (5 - ((0.04*peso) >= 2 ? 2 : (0.04*peso))).toFixed(1) + 'ml' : (3 - ((0.04*peso) >= 2 ? 2 : (0.04*peso))).toFixed(1) + 'ml'
            res49.style.backgroundColor = 'black'

        res50.innerHTML = (0.1*peso) >= 15 ? 15 : (0.1*peso).toFixed(1) + 'mg'//Morfina
            res50.style.backgroundColor = 'black'

        res51.innerHTML = (0.1*peso) >= 15 ? 15 : (0.1*peso).toFixed(1) + 'ml'
            res51.style.backgroundColor = 'black'

        res52.innerHTML = 
        ((0.1*peso) >= 15 ? 15 : (0.1*peso)) < 1 ? (3-((0.1*peso) >= 15 ? 15 : (0.1*peso))).toFixed(1) + 'ml': 
        ((0.1*peso) >= 15 ? 15 : (0.1*peso)) < 3 ? (5-((0.1*peso) >= 15 ? 15 : (0.1*peso))).toFixed(1)+ 'ml': 
        ((0.1*peso) >= 15 ? 15 : (0.1*peso)) < 5 ? (10-((0.1*peso) >= 15 ? 15 : (0.1*peso))).toFixed(1)+ 'ml': 
        ((0.1*peso) >= 15 ? 15 : (0.1*peso)) < 10 ? (15-((0.1*peso) >= 15 ? 15 : (0.1*peso))).toFixed(1)+ 'ml': 
        ((0.1*peso) >= 15 ? 15 : (0.1*peso)) < 15 ? (20-((0.1*peso) >= 15 ? 15 : (0.1*peso))).toFixed(1)+ 'ml': 0
            res52.style.backgroundColor = 'black'

        res53.innerHTML = ((2*peso) >= 100 ? 100 : (2*peso)).toFixed(1) + 'mg' //Dextrocetamina
            res53.style.backgroundColor = 'black'

        res54.innerHTML = ((0.04*peso) >= 2 ? 2 : (0.04*peso)).toFixed(1) + 'ml'
            res54.style.backgroundColor = 'black'

        res55.innerHTML = (((0.04*peso) >= 2 ? 2 : (0.04*peso)) > 1 ? (5-((0.04*peso) >= 2 ? 2 : (0.04*peso))) : (3-((0.04*peso) >= 2 ? 2 : (0.04*peso)))).toFixed(1) + 'ml'
            res55.style.backgroundColor = 'black'

        res56.innerHTML = ((0.5*peso) >= 50 ? 50 : (0.5*peso)).toFixed(1) + 'mg'//Atracúrio
            res56.style.backgroundColor = 'black'

        res57.innerHTML = ((0.05*peso) >= 5 ? 5 : (0.05*peso)).toFixed(1) + 'ml'
            res57.style.backgroundColor = 'black'
                    
        res58.innerHTML = ((peso*1) >= 50 ? 50 : (peso*1)).toFixed(1) + 'mg'//
            res58.style.backgroundColor = 'black'
        
        res59.innerHTML = ((0.1*peso) >= 5 ? 5 : (0.1*peso)).toFixed(1) + 'ml'
            res59.style.backgroundColor = 'black'
            
        res60.innerHTML = ((peso*1) >= 50 ? 50 : (peso*1)).toFixed(1) + 'mg'//
            res60.style.backgroundColor = 'black'
            
        res61.innerHTML = ((0.05*peso) >= 5 ? 5 : (0.05*peso)).toFixed(1) + 'ml'
            res61.style.backgroundColor = 'black'
        
        res62.innerHTML = ((2*peso) >= 100 ? 100 : (2*peso)).toFixed(1) + 'mg'//Tiopental
            res62.style.backgroundColor = 'black'
        
        res63.innerHTML = ((0.08*peso) >= 5 ? 5 : (0.08*peso)).toFixed(1) + 'ml'
            res63.style.backgroundColor = 'black'
        
        res64.innerHTML = ((0.01*peso) >= 0.5 ? 0.5 : (0.01*peso)).toFixed(2) + 'mg'//
            res64.style.backgroundColor = 'black'
        
        res65.innerHTML = ((0.1*peso) >= 2 ? 2 : (0.1*peso)).toFixed(1) + 'ml'
            res65.style.backgroundColor = 'black'
        
        res66.innerHTML = ((0.1*peso) >= 2 ? 2 : (0.1*peso)).toFixed(1) + 'mg'
            res66.style.backgroundColor = 'black'
        
        res67.innerHTML = ((0.25*peso) >= 5 ? 5 : (0.25*peso)).toFixed(1) + 'ml'
            res67.style.backgroundColor = 'black'
            //FIM DA TABELA 3 ****************************************************************************************
        
            //INICIO TABELA 4 ****************************************************************************************
        res68.innerHTML = Math.ceil((0.2*peso*24/5)).toFixed(1) + 'ml'  //Midazolam (5mg/mL) e Fentanil (50mcg/mL)
            res68.style.backgroundColor = 'black'

        res69.innerHTML = Math.ceil((2*peso*24/50)).toFixed(1) + 'ml' 
            res69.style.backgroundColor = 'black'
            
        res70.innerHTML = 
        (Math.ceil((0.2*peso*24/5))+Math.ceil((2*peso*24/50)) < 24 ? 24-Math.ceil((0.2*peso*24/5))-Math.ceil((2*peso*24/50)) + 'ml' :
        Math.ceil((0.2*peso*24/5))+Math.ceil((2*peso*24/50)) < 48 ? 48-Math.ceil((0.2*peso*24/5))-Math.ceil((2*peso*24/50)) + 'ml':
        Math.ceil((0.2*peso*24/5))+Math.ceil((2*peso*24/50)) < 72 ? 72-Math.ceil((0.2*peso*24/5))-Math.ceil((2*peso*24/50)) + 'ml':
        Math.ceil((0.2*peso*24/5))+Math.ceil((2*peso*24/50)) < 96 ? 96-Math.ceil((0.2*peso*24/5))-Math.ceil((2*peso*24/50)) + 'ml':
        Math.ceil((0.2*peso*24/5))+Math.ceil((2*peso*24/50)) < 120 ? 120-Math.ceil((0.2*peso*24/5))-Math.ceil((2*peso*24/50)) + 'ml':
        Math.ceil((0.2*peso*24/5))+Math.ceil((2*peso*24/50)) < 144 ? 144-Math.ceil((0.2*peso*24/5))-Math.ceil((2*peso*24/50)) + 'ml':
        Math.ceil((0.2*peso*24/5))+Math.ceil((2*peso*24/50)) < 168 ? 168-Math.ceil((0.2*peso*24/5))-Math.ceil((2*peso*24/50)) + 'ml':
        Math.ceil((0.2*peso*24/5))+Math.ceil((2*peso*24/50)) < 192 ? 192-Math.ceil((0.2*peso*24/5))-Math.ceil((2*peso*24/50)) + 'ml': 
        Math.ceil((0.2*peso*24/5))+Math.ceil((2*peso*24/50)) < 216 ? 216-Math.ceil((0.2*peso*24/5))-Math.ceil((2*peso*24/50)): 0 + 'ml' )
            res70.style.backgroundColor = 'black'
        
            //infundir:
        res71.innerHTML = ((Math.ceil((0.2*peso*24/5))*5) / 
        (((5*(Math.ceil((0.2*peso*24/5)))) / (
        (Math.ceil((0.2*peso*24/5))) + (Math.ceil((2*peso*24/50))) + 
        (Math.ceil((0.2*peso*24/5))+Math.ceil((2*peso*24/50)) < 24 ? 24-Math.ceil((0.2*peso*24/5))-Math.ceil((2*peso*24/50)):
        Math.ceil((0.2*peso*24/5))+Math.ceil((2*peso*24/50)) < 48 ? 48-Math.ceil((0.2*peso*24/5))-Math.ceil((2*peso*24/50)):
        Math.ceil((0.2*peso*24/5))+Math.ceil((2*peso*24/50)) < 72 ? 72-Math.ceil((0.2*peso*24/5))-Math.ceil((2*peso*24/50)):
        Math.ceil((0.2*peso*24/5))+Math.ceil((2*peso*24/50)) < 96 ? 96-Math.ceil((0.2*peso*24/5))-Math.ceil((2*peso*24/50)):
        Math.ceil((0.2*peso*24/5))+Math.ceil((2*peso*24/50)) < 120 ? 120-Math.ceil((0.2*peso*24/5))-Math.ceil((2*peso*24/50)):
        Math.ceil((0.2*peso*24/5))+Math.ceil((2*peso*24/50)) < 144 ? 144-Math.ceil((0.2*peso*24/5))-Math.ceil((2*peso*24/50)):
        Math.ceil((0.2*peso*24/5))+Math.ceil((2*peso*24/50)) < 168 ? 168-Math.ceil((0.2*peso*24/5))-Math.ceil((2*peso*24/50)):
        Math.ceil((0.2*peso*24/5))+Math.ceil((2*peso*24/50)) < 192 ? 192-Math.ceil((0.2*peso*24/5))-Math.ceil((2*peso*24/50)): 
        Math.ceil((0.2*peso*24/5))+Math.ceil((2*peso*24/50)) < 216 ? 216-Math.ceil((0.2*peso*24/5))-Math.ceil((2*peso*24/50)): 0)))*24)).toFixed(1) + 'ml/h'
            res71.style.backgroundColor = 'black'
        
        res72.innerHTML =  Math.round((0.2*peso*24/5)) + Math.round((2*peso*24/50)) +
        (Math.round((0.2*peso*24/5))+Math.round((2*peso*24/50)) < 24 ? 24-Math.round((0.2*peso*24/5))-Math.round((2*peso*24/50)) + 'ml' :
        Math.round((0.2*peso*24/5))+Math.round((2*peso*24/50)) < 48 ? 48-Math.round((0.2*peso*24/5))-Math.round((2*peso*24/50)) + 'ml':
        Math.round((0.2*peso*24/5))+Math.round((2*peso*24/50)) < 72 ? 72-Math.round((0.2*peso*24/5))-Math.round((2*peso*24/50)) + 'ml':
        Math.round((0.2*peso*24/5))+Math.round((2*peso*24/50)) < 96 ? 96-Math.round((0.2*peso*24/5))-Math.round((2*peso*24/50)) + 'ml':
        Math.round((0.2*peso*24/5))+Math.round((2*peso*24/50)) < 120 ? 120-Math.round((0.2*peso*24/5))-Math.round((2*peso*24/50)) + 'ml':
        Math.round((0.2*peso*24/5))+Math.round((2*peso*24/50)) < 144 ? 144-Math.round((0.2*peso*24/5))-Math.round((2*peso*24/50)) + 'ml':
        Math.round((0.2*peso*24/5))+Math.round((2*peso*24/50)) < 168 ? 168-Math.round((0.2*peso*24/5))-Math.round((2*peso*24/50)) + 'ml':
        Math.round((0.2*peso*24/5))+Math.round((2*peso*24/50)) < 192 ? 192-Math.round((0.2*peso*24/5))-Math.round((2*peso*24/50)) + 'ml': 
        Math.round((0.2*peso*24/5))+Math.round((2*peso*24/50)) < 216 ? 216-Math.round((0.2*peso*24/5))-Math.round((2*peso*24/50)): 0)  == 24 ? '(Preparar 2x)' : '(Preparar 1.5x)'
            res72.style.backgroundColor = 'black'
        //_____________________________________________________________________________________________________________
        res73.innerHTML = (((10*peso)*1.44)/50) < 1 ? 1 + 'ml' : Math.ceil((((10*peso)*1.44)/50)) + 'ml' //Cetamina
            res73.style.backgroundColor = 'black'
        
        res74.innerHTML = Math.ceil(((((10*peso)*1.44))/50) < 1 ? (24*50)/((10*peso)*1.44):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50))) < 14 ? (24 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50))) < 24 ? (48 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50))) < 52 ? (72 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50))) < 76 ? (96 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50))) < 100 ? (120 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50))) < 124 ? (144 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50))) < 148 ? (168 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50))) < 172 ? (192 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50)))):0.5).toFixed(1) + 'ml'
            res74.style.backgroundColor = 'black'
        
        res75.innerHTML = ((((10*peso)*1.44)/50) < 1 ? 1 : (((((10*peso)*1.44)/50) < 1 ? 1 : Math.round((((10*peso)*1.44)/50)))*50) /
        (((50*((((10*peso)*1.44)/50) < 1 ? 1 : Math.round((((10*peso)*1.44)/50))))/(((((10*peso)*1.44)/50) < 1 ? 1 : Math.round((((10*peso)*1.44)/50))) + 
        (Math.round(((((10*peso)*1.44))/50) < 1 ? (24*50)/((10*peso)*1.44):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.round((((10*peso)*1.44)/50))) < 14 ? (24 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.round((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.round((((10*peso)*1.44)/50))) < 24 ? (48 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.round((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.round((((10*peso)*1.44)/50))) < 52 ? (72 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.round((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.round((((10*peso)*1.44)/50))) < 76 ? (96 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.round((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.round((((10*peso)*1.44)/50))) < 100 ? (120 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.round((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.round((((10*peso)*1.44)/50))) < 124 ? (144 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.round((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.round((((10*peso)*1.44)/50))) < 148 ? (168 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.round((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.round((((10*peso)*1.44)/50))) < 172 ? (192 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.round((((10*peso)*1.44)/50)))):0.5)))*24))).toFixed(1) + 'ml/h' 
            res75.style.backgroundColor = 'black'
        
        res76.innerHTML = (((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50)) + 
        (Math.ceil(((((10*peso)*1.44))/50) < 1 ? (24*50)/((10*peso)*1.44):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50))) < 14 ? (24 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50))) < 24 ? (48 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50))) < 52 ? (72 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50))) < 76 ? (96 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50))) < 100 ? (120 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50))) < 124 ? (144 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50))) < 148 ? (168 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50)))):
        ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50))) < 172 ? (192 - ((((10*peso)*1.44)/50) < 1 ? 1 : Math.ceil((((10*peso)*1.44)/50)))):0.5)) == 24
        ? '(Preparar 2x)' : '(Preparar 1.5x)'
            res76.style.backgroundColor = 'black'
        //_____________________________________________________________________________________________________________
        res77.innerHTML =  Math.ceil(((0.3*peso)*24)/10) + 'ml' // Atracúrio (10mg/mL)
            res77.style.backgroundColor = 'black'    
        
        res78.innerHTML = (Math.round(((0.3*peso)*24)/10) < 14 ? 24-(Math.round(((0.3*peso)*24)/10)):
        Math.ceil(((0.3*peso)*24)/10) < 28 ? 48-(Math.ceil(((0.3*peso)*24)/10)):
        Math.ceil(((0.3*peso)*24)/10) < 52 ? 72-(Math.ceil(((0.3*peso)*24)/10)):
        Math.ceil(((0.3*peso)*24)/10) < 76 ? 96-(Math.ceil(((0.3*peso)*24)/10)):
        Math.ceil(((0.3*peso)*24)/10) < 100 ? 120-(Math.ceil(((0.3*peso)*24)/10)):
        Math.ceil(((0.3*peso)*24)/10) < 124 ? 144-(Math.ceil(((0.3*peso)*24)/10)):
        Math.ceil(((0.3*peso)*24)/10) < 148 ? 168-(Math.ceil(((0.3*peso)*24)/10)):
        Math.ceil(((0.3*peso)*24)/10) < 172 ? 192-(Math.ceil(((0.3*peso)*24)/10)):0).toFixed(1) + 'ml'
            res78.style.backgroundColor = 'black'    
        
        res79.innerHTML = ((Math.round(((0.3*peso)*24)/10)*10) / (((10*Math.round(((0.3*peso)*24)/10)) / 
        (Math.round(((0.3*peso)*24)/10) +
        (Math.round(((0.3*peso)*24)/10) < 14 ? 24-(Math.round(((0.3*peso)*24)/10)):
        Math.round(((0.3*peso)*24)/10) < 28 ? 48-(Math.round(((0.3*peso)*24)/10)):
        Math.round(((0.3*peso)*24)/10) < 52 ? 72-(Math.round(((0.3*peso)*24)/10)):
        Math.round(((0.3*peso)*24)/10) < 76 ? 96-(Math.round(((0.3*peso)*24)/10)):
        Math.round(((0.3*peso)*24)/10) < 100 ? 120-(Math.round(((0.3*peso)*24)/10)):
        Math.round(((0.3*peso)*24)/10) < 124 ? 144-(Math.round(((0.3*peso)*24)/10)):
        Math.round(((0.3*peso)*24)/10) < 148 ? 168-(Math.round(((0.3*peso)*24)/10)):
        Math.round(((0.3*peso)*24)/10) < 172 ? 192-(Math.round(((0.3*peso)*24)/10)):0))) *24)).toFixed(1) + 'ml/h'
            res79.style.backgroundColor = 'black'    
        
        res80.innerHTML = Math.round(((0.3*peso)*24)/10) +
        (Math.round(((0.3*peso)*24)/10) < 14 ? 24-(Math.round(((0.3*peso)*24)/10)):
        Math.round(((0.3*peso)*24)/10) < 28 ? 48-(Math.round(((0.3*peso)*24)/10)):
        Math.round(((0.3*peso)*24)/10) < 52 ? 72-(Math.round(((0.3*peso)*24)/10)):
        Math.round(((0.3*peso)*24)/10) < 76 ? 96-(Math.round(((0.3*peso)*24)/10)):
        Math.round(((0.3*peso)*24)/10) < 100 ? 120-(Math.round(((0.3*peso)*24)/10)):
        Math.round(((0.3*peso)*24)/10) < 124 ? 144-(Math.round(((0.3*peso)*24)/10)):
        Math.round(((0.3*peso)*24)/10) < 148 ? 168-(Math.round(((0.3*peso)*24)/10)):
        Math.round(((0.3*peso)*24)/10) < 172 ? 192-(Math.round(((0.3*peso)*24)/10)):0)  == 24 ? '(Preparar 2x)' : '(Preparar 1.5x)'
            res80.style.backgroundColor = 'black'    
        //_____________________________________________________________________________________________________________
        res81.innerHTML = Math.ceil((((0.6*peso)*24)/10)).toFixed(1) + 'ml' //Rocurônio (10mg/mL)
            res81.style.backgroundColor = 'black'    
        
        res82.innerHTML = Math.ceil((((10*peso)*1.44)/50) < 1 ? 24*50/((10*peso)*1.44):
        ((((10*peso)*1.44)/50) < 1 ? 1 + 'ml' : Math.ceil((((10*peso)*1.44)/50))) < 
        28 ? 48-(((10*peso)*1.44)/50) < 1 ? 1 + 'ml' : Math.ceil((((10*peso)*1.44)/50)):
        52 ? 72-(((10*peso)*1.44)/50) < 1 ? 1 + 'ml' : Math.ceil((((10*peso)*1.44)/50)):
        76 ? 96-(((10*peso)*1.44)/50) < 1 ? 1 + 'ml' : Math.ceil((((10*peso)*1.44)/50)):
        100 ? 120-(((10*peso)*1.44)/50) < 1 ? 1 + 'ml' : Math.ceil((((10*peso)*1.44)/50)):
        124 ? 144-(((10*peso)*1.44)/50) < 1 ? 1 + 'ml' : Math.ceil((((10*peso)*1.44)/50)):
        148 ? 168-(((10*peso)*1.44)/50) < 1 ? 1 + 'ml' : Math.ceil((((10*peso)*1.44)/50)):
        172 ? 192-(((10*peso)*1.44)/50) < 1 ? 1 + 'ml' : Math.ceil((((10*peso)*1.44)/50)):0.5)
        
            res82.style.backgroundColor = 'black'    
        
        res83.innerHTML = 
        ((Math.ceil((((0.6*peso)*24)/10))*10) /
        (((10*(Math.round(((0.6*peso)*24)/10))) / ((Math.round((((0.6*peso)*24)/10)) + 
        (Math.round((((10*peso*1.44)/50) < 1 ? 24*50/((10*peso)*1.44):  
        ((((10*peso)*1,44)/50) < 1 ? 1 + 'ml' : Math.round((((10*peso)*1,44)/50))) < 
        14 ? (24-((((10*peso)*1.44)/50) < 1 ? 1 + 'ml' : Math.round((((10*peso)*1.44)/50)))):
        28 ? (48-((((10*peso)*1.44)/50) < 1 ? 1 + 'ml' : Math.round((((10*peso)*1.44)/50)))):
        52 ? (72-((((10*peso)*1.44)/50) < 1 ? 1 + 'ml' : Math.round((((10*peso)*1.44)/50)))):
        76 ? (96-((((10*peso)*1.44)/50) < 1 ? 1 + 'ml' : Math.round((((10*peso)*1.44)/50)))):
        100 ? (120-((((10*peso)*1.44)/50) < 1 ? 1 + 'ml' : Math.round((((10*peso)*1.44)/50)))):
        124 ? (144-((((10*peso)*1.44)/50) < 1 ? 1 + 'ml' : Math.round((((10*peso)*1.44)/50)))):
        148 ? (168-((((10*peso)*1.44)/50) < 1 ? 1 + 'ml' : Math.round((((10*peso)*1.44)/50)))):
        172 ? (192-((((10*peso)*1.44)/50) < 1 ? 1 + 'ml' : Math.round((((10*peso)*1.44)/50)))):0.5)))))*24))).toFixed(1) + 'ml/h' 
            res83.style.backgroundColor = 'black'    
        
        res84.innerHTML = (Math.round((((0.6*peso)*24)/10))) +
        ((((10*peso*1.44)/50) < 1 ? 24*50/((10*peso)*1.44):  
        ((((10*peso)*1,44)/50) < 1 ? 1 + 'ml' : Math.round((((10*peso)*1,44)/50))) < 
        14 ? (24-((((10*peso)*1,44)/50) < 1 ? 1 + 'ml' : Math.round((((10*peso)*1.44)/50)))):
        28 ? (48-((((10*peso)*1,44)/50) < 1 ? 1 + 'ml' : Math.round((((10*peso)*1.44)/50)))):
        52 ? (72-((((10*peso)*1,44)/50) < 1 ? 1 + 'ml' : Math.round((((10*peso)*1.44)/50)))):
        76 ? (96-((((10*peso)*1,44)/50) < 1 ? 1 + 'ml' : Math.round((((10*peso)*1.44)/50)))):
        100 ? (120-((((10*peso)*1,44)/50) < 1 ? 1 + 'ml' : Math.round((((10*peso)*1.44)/50)))):
        124 ? (144-((((10*peso)*1,44)/50) < 1 ? 1 + 'ml' : Math.round((((10*peso)*1.44)/50)))):
        148 ? (168-((((10*peso)*1,44)/50) < 1 ? 1 + 'ml' : Math.round((((10*peso)*1.44)/50)))):
        172 ? (192-((((10*peso)*1,44)/50) < 1 ? 1 + 'ml' : Math.round((((10*peso)*1.44)/50)))):0.5)) == 24 ? '(Preparar 2x)' : '(Preparar 1.5x)'
            res84.style.backgroundColor = 'black'    
         //_____________________________________________________________________________________________________________
        res85.innerHTML = (((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25)) + 'ml' // Tiopental (25mg/mL)
            res85.style.backgroundColor = 'black'    
            
        res86.innerHTML = 
        (((((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))) < 14 ? (24 - Math.ceil(((10*peso)*1.44/25))):
        ((((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))) < 28 ? (48 - Math.ceil(((10*peso)*1.44/25))):
        ((((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))) < 52 ? (72 - Math.ceil(((10*peso)*1.44/25))):
        ((((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))) < 76 ? (96 - Math.ceil(((10*peso)*1.44/25))):
        ((((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))) < 100 ? (120 - Math.ceil(((10*peso)*1.44/25))):
        ((((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))) < 124 ? (144 - Math.ceil(((10*peso)*1.44/25))):
        ((((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))) < 148 ? (168 - Math.ceil(((10*peso)*1.44/25))):
        ((((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))) < 172 ? (192 - Math.ceil(((10*peso)*1.44/25))): 0)+ 'ml'
            res86.style.backgroundColor = 'black'    
        
        res87.innerHTML = ((((10*peso)*1.44)/25) < 1 ? 1 : 
        ((((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25)) * 25) / 
        (((25 *  Math.ceil(((10*peso)*1.44/25))) / (Math.ceil(((10*peso)*1.44/25)) + 
        ((((((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))) < 14 ? (24 - (((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))):
        ((((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))) < 28 ? (48 - (((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))):
        ((((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))) < 52 ? (72 - (((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))):
        ((((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))) < 76 ? (96 - (((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))):
        ((((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))) < 100 ? (120 - (((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))):
        ((((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))) < 124 ? (144 - (((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))):
        ((((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))) < 148 ? (168 - (((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))):
        ((((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))) < 172 ? (192 - (((10*peso)*1.44)/25) < 1 ? 1 : Math.ceil(((10*peso)*1.44/25))): 0))   
        )) * 24)).toFixed(1) + 'ml'
            res87.style.backgroundColor = 'black'    
        
        res88.innerHTML = ((((10*peso)*1.44)/25) < 1 ? 1 : Math.round(((10*peso)*1.44/25)) +
        ((((10*peso)*1.44)/25) < 1 ? 1 : Math.round(((10*peso)*1.44/25)) < 14 ? ((((10*peso)*1.44)/25) < 1 ? 1 : Math.round(((10*peso)*1.44/25))+20):0)) == 24 
        ? 'Preparar 2x' : 'Preparar 1.5x'
            res88.style.backgroundColor = 'black'    
         //_____________________________________________________________________________________________________________
        res89.innerHTML = ((0.1*peso)*1.44) < 1 ? 1 : (((0.1*peso)*1.44)).toFixed(1) + 'ml'//Adrenalina (1mg/mL):
            res89.style.backgroundColor = 'black'    
            
        res90.innerHTML =  + 'ml'
            res90.style.backgroundColor = 'black'    
        
        res91.innerHTML =  + 'ml'
            res91.style.backgroundColor = 'black'    
        
        res92.innerHTML =  + 'ml'
            res92.style.backgroundColor = 'black'    
        
        res93.innerHTML =  + 'ml'
            res93.style.backgroundColor = 'black'    
         //_____________________________________________________________________________________________________________
        res94.innerHTML =  + 'ml'
            res94.style.backgroundColor = 'black'    
        
        res95.innerHTML =  + 'ml'
            res95.style.backgroundColor = 'black'    
        
        res96.innerHTML =  + 'ml'
            res96.style.backgroundColor = 'black'    
        
        res97.innerHTML =  + 'ml'
            res97.style.backgroundColor = 'black'    
        
        res98.innerHTML =  + 'ml'
            res98.style.backgroundColor = 'black'    
        
        res99.innerHTML =  + 'ml'
            res99.style.backgroundColor = 'black'    
        
        res100.innerHTML =  + 'ml'
            res100.style.backgroundColor = 'black'    
        
        res101.innerHTML =  + 'ml'
            res101.style.backgroundColor = 'black'    
        
        res102.innerHTML =  + 'ml'
            res101.style.backgroundColor = 'black'    
        
        res102.innerHTML =  + 'ml'
            res101.style.backgroundColor = 'black'    
        
        res103.innerHTML =  + 'ml'
            res103.style.backgroundColor = 'black'    
        
        res104.innerHTML =  + 'ml'
            res104.style.backgroundColor = 'black'    
            
        res105.innerHTML =  + 'ml'
            res105.style.backgroundColor = 'black'    
        
        res106.innerHTML =  + 'ml'
            res106.style.backgroundColor = 'black'    
        
        res107.innerHTML =  + 'ml'
            res107.style.backgroundColor = 'black'    
        
        res108.innerHTML =  + 'ml'
            res108.style.backgroundColor = 'black'    
        
        res109.innerHTML =  + 'ml'
            res109.style.backgroundColor = 'black'    
        
        res110.innerHTML =  + 'ml'
            res110.style.backgroundColor = 'black'    
        
        res111.innerHTML =  + 'ml'
            res111.style.backgroundColor = 'black'    
        
        res112.innerHTML =  + 'ml'
            res112.style.backgroundColor = 'black'    
        
        res113.innerHTML =  + 'ml'
            res113.style.backgroundColor = 'black'    
        
        res114.innerHTML =  + 'ml'
            res114.style.backgroundColor = 'black'    
        
        res115.innerHTML =  + 'ml'
            res115.style.backgroundColor = 'black'    
        
        res116.innerHTML =  + 'ml'
            res116.style.backgroundColor = 'black'    
            
        res117.innerHTML =  + 'ml'
            res117.style.backgroundColor = 'black'    
            
        res118.innerHTML =  + 'ml'
            res118.style.backgroundColor = 'black'    
        
        res119.innerHTML =  + 'ml'
            res119.style.backgroundColor = 'black'    
            
        res120.innerHTML =  + 'ml'
            res120.style.backgroundColor = 'black'    
        
        res121.innerHTML =  + 'ml'
            res121.style.backgroundColor = 'black'    
        
        res122.innerHTML =  + 'ml'
            res122.style.backgroundColor = 'black'    
            
        res123.innerHTML =  + 'ml'
            res123.style.backgroundColor = 'black'    
        
        res124.innerHTML =  + 'ml'
            res124.style.backgroundColor = 'black'    
            
        res125.innerHTML =  + 'ml'
            res125.style.backgroundColor = 'black'    
        
            //FIM DA TABELA 4 ****************************************************************************************

            //INICIO TABELA 5 ****************************************************************************************

            //FIM DA TABELA 5 ****************************************************************************************
     }

     peso = null; //Não permite calcular ao acionar o btn 2x vezes\
}

function limpar(){
    location.reload();
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
function exibirAdrenalina(){
    var ex = document.getElementById('tbAdrenalina')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed1')
    txt.style.color = 'wheat'
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.border = 'solid'}
    
function exibirAtropina(){
    var ex = document.getElementById('tbAtropina')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed2')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}

function exibirAdenosina(){
    var ex = document.getElementById('tbAdenosina')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed3')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}

function exibirAmiodaroma(){
    var ex = document.getElementById('tbAmiodaroma')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed4')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}

function exibirSulfato(){
    var ex = document.getElementById('tbSulfato')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed5')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}    

function exibirBicarbonato(){
    var ex = document.getElementById('tbBicarbonato')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed6')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}    

function exibirGluconato(){
    var ex = document.getElementById('tbGluconato')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed7')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}    

function exibirGlicose(){
    var ex = document.getElementById('tbGlicose')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed8')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}    

//INICIO DADOS TABELA #2
function exibirDiazepam(){
    var ex = document.getElementById('tbDiazepam')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed9')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}    

function exibirFenitoina(){
    var ex = document.getElementById('tbFenitoina')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed10')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}    

function exibirFenobar(){
    var ex = document.getElementById('tbFenobar')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed11')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}    

//INICIO DADOS TABELA #3
function exibirMidazolam(){
    var ex = document.getElementById('tbMidazolam')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed12')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}    

function exibirFetanil(){
    var ex = document.getElementById('tbFetanil')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed13')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}    

function exibirMorfina(){
    var ex = document.getElementById('tbMorfina')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed14')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}    

function exibirDextrocetamina(){
    var ex = document.getElementById('tbDextrocetamina')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed15')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}    

function exibirAtracurio(){
    var ex = document.getElementById('tbAtracurio')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed16')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}    

function exibirRocuronio(){
    var ex = document.getElementById('tbRocuronio')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed17')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}    

function exibirLidocaina(){
    var ex = document.getElementById('tbLidocaina')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed18')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}    

function exibirTiopental(){
    var ex = document.getElementById('tbTiopental')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed19')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}    

function exibirFlumazenil(){
    var ex = document.getElementById('tbFlumazenil')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed20')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}    

function exibirNaloxone(){
    var ex = document.getElementById('tbNaloxone')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed21')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}        

//INICIO DADOS TABELA #4
function exibirMidazolam2(){
    var ex = document.getElementById('tbMidazolam2')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed22')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}        

function exibirCetamina(){
    var ex = document.getElementById('tbCetamina')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed23')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}        

function exibirAtracurio2(){
    var ex = document.getElementById('tbAtracurio2')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed24')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}        

/*function exibirRocuronio2(){
    var ex = document.getElementById('tbRocuronio2')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed25')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}        

function exibirTiopental2(){
    var ex = document.getElementById('tbTiopental2')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed26')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'} */      

/*function exibirAdrenalina2(){
    var ex = document.getElementById('tbAdrenalina2')
    ex.style.display = 'block'
    var txt = document.getElementById('btnMed27')
    txt.style.backgroundColor = 'rgb(152, 14, 14)'
    txt.style.color = 'wheat'
    txt.style.border = 'solid'}    */    

function fechaModal(){
    var ex = document.getElementById()
    ex.style.display = 'none'
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
