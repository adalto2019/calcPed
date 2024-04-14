var p = document.querySelector("#peso")

function info(){
    alert("Informações de utilização do aplicativo.\n"+
    "\n"+
    "Olá usuário, muito obrigado por utilzar a ferramenta myCalcPed.\n"+
    "Para verificar as dosagens de diluições medicamentosas, basta informar o peso do paciente "+
    "no campo 'Informe o peso do paciente'. E em seguida, selecionar o botão referente a medicação desejada. O cálculo e feito automáticamente. "+
    "Para inserir um novo cálculo, clique no botão 'LIMPAR' e repita o processo.\n"+
    "\n"+
    "Caso deseje entrar em contato conosco - para elógios, sugestões, ou para relatar algum problema, "+
    "acesso o formulário no rodapé da plataforma em: 'Relatar um Problema'. Ficaremos muito felizes em 'ouvi-lo'."+
    "\n"+
    "\n"+
    "Atenciosamente:\n"+
    "myCalcPed")
}

// NOVA SESSÃO - Parada Cardiorrespiratória ###################################################################################################
function fAdrenalina(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else{
    alert("ADRENALINA - Ampola: 1mg/ml \nMáximo: 1mg. Flush com 5ml de soro depois. \n"+
    "\nPrescrição: Diluir uma ampola de 1ml em 9ml de ABD e administrar " + (peso*0.1).toFixed(2) + "ml dessa diluição EV a cada 3 ou 5 minutos.")
    //Cálculo: Peso x 0.1
    }   
}
function fAntropina(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else{
    alert("ATROPINA - Ampola: 0.5mg/ml \nMínimo: 0.2mg e Máximo 2.0ml.\n"+
    "\nPrescrição: Administrar " + (peso*0.04).toFixed(2) + "ml de atropina em bolus. Se necessário pode ser repetida uma vez na mesma dose ou dose dobrada.")
    //Cálculo: Peso x 0.04
    }
}
function fAmiodarona(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else{
    alert("AMIODARONA - Ampola: (3ml) 50mg/ml. Dose máxima. \n"+
    "\nPrescrição: Diluir uma ampola (3ml) em 17ml de ABD e administrar " + (peso*0.7).toFixed(2) + "ml dessa diluição em 5-10 minutos.")
    //Cálculo: Peso x 0.7
    }
}
function fGluconato(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else{
    alert("GLUCONATO DE CÁLCIO A 10% - Cada ml tem 9mg de cálcio-elemento\n"+
    "\nPrescrição: Diluir " + (peso*1).toFixed(2) + "ml de gluconato de cálcio em 3ml de ABD e administrar EV lento sob ausculta ou monitorização cardíaca.")
    //Cálculo: Peso x 1
    }
}
function fBicarbonatoSodio(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else{
    alert("BICARBONATO de SÓDIO a 8,4% - Cada 1ml = 1mEq\n"+
    "\nPrescrição: Diluir " + (peso*0.1).toFixed(2) + "ml de bicarbonato em 3ml de ABD e administrar EV lentamente.")
    //Cálculo: Peso x 0.1
    }
}
function fGlicose(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
        }else if(peso >= 0 && peso <= 5){
            alert("GLICOSE a 50% - Diluir a 10% para criança e 10% para neonato\n"+
            "\nPrescrição: Diluir " + (peso*1).toFixed(1) + "ml de glicose a 50% " + (peso*4).toFixed(1) + "ml de ABD e administrar "
            + "EV em bolus (Equivale a 0.5g/Kg). Pode usar o dobro se preciso.")
                }else{
                alert("GLICOSE a 50% - Diluir a 10% para criança e 10% para neonato\n"+
                "\nPrescrição: Diluir " + (peso*1).toFixed(1) + "ml de glicose a 50% " + (peso*1).toFixed(1) + "ml de ABD e administrar "
                +"EV em bolus (Equivale a 0.5g/Kg). Pode usar o dobro se preciso.")
                //Cálculo: Peso x 1
    }
}
function fAdenosina(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
        }else if(peso >= 0 && peso <= 4){
            alert("ADENOSINA - Ampola: (2ml): 6mg\n"+
        "\nPrescrição: Administrar 0.2ml EV seguida de flush com soro fisiológico."+
        "Se necessário repetir uma vez com dose dobrada ("+(peso*0.6).toFixed(1)+"ml).")       
        //Cálculo: Dose mínima Peso x 0.6
                }else{
                alert("ADENOSINA - Ampola: (2ml): 6mg\n"+
                "\nPrescrição: Administrar " + (peso*0.3).toFixed(1) + "ml EV seguida de flush com soro fisiológico."+
                "Se necessário repetir uma vez com dose dobrada ("+(peso*0.06).toFixed(1)+"ml).")
                //Cálculo: Peso x 0.3 | Peso x 0.06
                }
}

// NOVA SESSÃO - Anticonvulsionantes ###################################################################################################
function fDiazepam(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else{
    alert("DIAZEPAM - Ampola: 2ml com 5mg/ml\n"+
    "\nPrescrição: Administrar EV lento " + (peso*0.04).toFixed(2) + "ml diluída em 5ml de SF ou ABD (Essa dose é de 0.2mg/kg)."+
    " Pode-se usar até " + (peso*1).toFixed(2) + "ml/dose.")
    //Cálculo: Peso x 0.04
    }
}

// NOVA SESSÃO - Drogas Para Sedação ###################################################################################################
function fFentanil(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else{
    alert("FENTANIL - Frasco Ampola: 2.5 e 10ml com 50mcg/ml\n"+
    "\nPrescrição: Administrar " + (peso*0.04).toFixed(2) + "ml diluída em 3ml de soro fisiológico (bolus EV lento de 3 minutos) Essa dose corresponde a 2 mcg/kg.")
    //Cálculo: Peso x 0.04
    }
} 
function fLidocaina(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else{
    alert("LIDOCAÍNA - a 1% sem vasoconstritor. Frascos de 2 a 20ml com 10mg/ml\n"+
    "\nPrescrição: Administrar EV lento " + (peso*0.1).toFixed(2) + "ml diluída em 3-5ml de soro fisiológico (Essa dose = 1mg/kg)."+
    " Para intubação: " + (peso*0.1).toFixed(2) + " a " + (peso*0.2).toFixed(2) + "ml.")
    //Cálculo: Peso x 0.1
    }
} 
function fMorfina(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else{
    alert("MORFINA - Usar ampola de 1mg/ml (e não 10mg/ml)\n"+
    "\nPrescrição: Administrar EV lento " + (peso*0.1).toFixed(2) + "ml (diluir em 3ml de ABD  se preciso).(Essa dose é de 0.1mg/kg é a dose básica para analgesia).")
    //Cálculo: Peso x 0.1
    }
}
function fMidazolam(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else if(peso >= 0 && peso <= 6){
    alert("MILDAZOLAM - Amp 3ml com 5mg/ml. Se usar ampola de 1mg/ml, quintuplicar a dose.\n"+
    "\nPrescrição: Administrar bolo EV de " + (peso*0.04).toFixed(1) + "ml diluída em 3ml de SF ou ABD "+
    "(Essa dose é de 0.2mg/kg). Em convulsão: até " + (peso*0.1).toFixed(1) + "ml por dose.")
    //Cálculo: Peso x 0.04
    }else{
    alert("MILDAZOLAM - Amp 3 - 10ml com 5mg/ml. Se usar ampola de 1mg/ml, quintuplicar a dose.\n"+
    "\nPrescrição: Administrar bolo EV de " + (peso*0.04).toFixed(1) + "ml diluída em 3ml de SF ou ABD "+
    "(Essa dose é de 0.2mg/kg). Em convulsão: até " + (peso*0.1).toFixed(1) + "ml por dose.")
    }
}
function fRocurônio(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else{
    alert("ROCURÔNIO - Frasco ampola de 2.5 e 5ml com 10mg/ml.\n"+
    "\nPrescrição: Administrar EV " + (peso*0.1).toFixed(2) + "ml (diluir em 3ml de SF ou SGI se preciso)"+
    "(Essa dose é de 1mg/kg, mas pode se usada só a metade).")
    //Cálculo: Peso x 0.1
    }
}

// NOVA SESSÃO - Drogas Para Infusão ###################################################################################################
function fAdrenalinaI(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
        }else if(peso >= 0 && peso <= 3){
        alert("ADRENALINA - Amp 1ml: 1mg/1ml.\n"+
        "\nPrescrição: Diluir 1ml de droga em " + (peso*16.66).toFixed(1) + "ml de SGI e infundir a 1ml/hora "+
        "(Essa infusão equivale a 0.1ml mcg/kg/minuto). Titular pela resposta.")
        //Cálculo: Diluições específicas para usar infusão de 1ml/hora como referência inicial.
            }else if(peso > 3 && peso <= 4){
                alert("ADRENALINA - Amp 1ml: 1mg/1ml.\n"+
                "\nPrescrição: Diluir 2ml de droga em " + (peso*20).toFixed(1) + "ml de SGI e infundir a 1ml/hora "+
                "(Essa infusão equivale a 0.1ml mcg/kg/minuto). Titular pela resposta.")
                }else if(peso > 4 && peso <= 5){
                    alert("ADRENALINA - Amp 1ml: 1mg/1ml.\n"+
                    "\nPrescrição: Diluir 2ml de droga em " + (peso*12).toFixed(1) + "ml de SGI e infundir a 1ml/hora "+
                    "(Essa infusão equivale a 0.1ml mcg/kg/minuto). Titular pela resposta.")
                        }else if(peso > 5 && peso <= 6){
                        alert("ADRENALINA - Amp 1ml: 1mg/1ml.\n"+
                        "\nPrescrição: Diluir 5ml de droga em " + (peso*15.83).toFixed(1) + "ml de SGI e infundir a 1.5ml/hora "+
                        "(Essa infusão equivale a 0.2ml mcg/kg/minuto). Titular pela resposta.")
                            }else if(peso > 6){
                                alert("ADRENALINA - Amp 1ml: 1mg/1ml.\n"+
                                "\nPrescrição: Diluir 5ml de droga em 95ml de SGI e infundir a " + (peso*0.25).toFixed(1) + "ml/hora "+
                                "(Essa infusão equivale a 0.2ml mcg/kg/minuto). Titular pela resposta.")
                            }

}
function fFentanil(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else{
    alert("FENTANIL - Fr Ampola de 2-5 e 10ml com 50mcg/ml.\n"+
    "\nPrescrição: Diluir 10ml da droga em 90ml de SGI e infundir a " + (peso*0.2).toFixed(1) + "ml/hora "+
    "(Essa infusão equivale a 1mcg/kg/hora). Titular pela resposta.)")
    //Cálculo: Peso x 0.2
    }
}
function fDobutamina(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else if(peso >= 0 && peso <= 3){
    alert("DOBUTAMINA - Ampola de 20ml com 12.5mg/ml.\n"+
    "\nPrescrição: Diluir 20ml de droga em 260ml de SGI e infundir a 1ml/hora "+
    "(Essa infusão equivale a 5mcg/kg/minuto). Titular pela resposta.")
    }else if(peso >= 3 && peso < 4){
        alert("DOBUTAMINA - Ampola de 20ml com 12.5mg/ml.\n"+
        "\nPrescrição: Diluir 20ml de droga em 190ml de SGI e infundir a 1ml/hora "+
        "(Essa infusão equivale a 5mcg/kg/minuto). Titular pela resposta.")
    }else if(peso >= 4 && peso < 5){
        alert("DOBUTAMINA - Ampola de 20ml com 12.5mg/ml.\n"+
        "\nPrescrição: Diluir 20ml de droga em 150ml de SGI e infundir a 1ml/hora "+
        "(Essa infusão equivale a 5mcg/kg/minuto). Titular pela resposta.")
    }else if(peso >= 6 && peso < 8){
        alert("DOBUTAMINA - Ampola de 20ml com 12.5mg/ml.\n"+
        "\nPrescrição: Diluir 20ml de droga em 180ml de SGI e infundir a 1.5ml/hora "+
        "(Essa infusão equivale a 5mcg/kg/minuto). Titular pela resposta.")
    }else if(peso >= 8 && peso < 10){
        alert("DOBUTAMINA - Ampola de 20ml com 12.5mg/ml.\n"+
        "\nPrescrição: Diluir 20ml de droga em 180ml de SGI e infundir a 2ml/hora "+
        "(Essa infusão equivale a 5mcg/kg/minuto). Titular pela resposta.")
    }else if(peso >= 10 && peso < 12){
        alert("DOBUTAMINA - Ampola de 20ml com 12.5mg/ml.\n"+
        "\nPrescrição: Diluir 20ml de droga em 180ml de SGI e infundir a 2.5ml/hora "+
        "(Essa infusão equivale a 5mcg/kg/minuto). Titular pela resposta.")
    }else if(peso >= 12 && peso < 16){
        alert("DOBUTAMINA - Ampola de 20ml com 12.5mg/ml.\n"+
        "\nPrescrição: Diluir 20ml de droga em 180ml de SGI e infundir a 3ml/hora "+
        "(Essa infusão equivale a 5mcg/kg/minuto). Titular pela resposta.")
    }else if(peso >= 16 && peso < 20){
        alert("DOBUTAMINA - Ampola de 20ml com 12.5mg/ml.\n"+
        "\nPrescrição: Diluir 20ml de droga em 180ml de SGI e infundir a 4ml/hora "+
        "(Essa infusão equivale a 5mcg/kg/minuto). Titular pela resposta.")
    }else if(peso >=20 && peso <= 25){
        alert("DOBUTAMINA - Ampola de 20ml com 12.5mg/ml.\n"+
        "\nPrescrição: Diluir 20ml de droga em 180ml de SGI e infundir a 5ml/hora "+
        "(Essa infusão equivale a 5mcg/kg/minuto). Titular pela resposta.")
    }else if(peso >= 25 && peso < 35){
        alert("DOBUTAMINA - Ampola de 20ml com 12.5mg/ml.\n"+
        "\nPrescrição: Diluir 20ml de droga em 180ml de SGI e infundir a 6ml/hora "+
        "(Essa infusão equivale a 5mcg/kg/minuto). Titular pela resposta.")
    }else if(peso == 35){
            alert("DOBUTAMINA - Ampola de 20ml com 12.5mg/ml.\n"+
            "\nPrescrição: Diluir 20ml de droga em 180ml de SGI e infundir a 8ml/hora "+
            "(Essa infusão equivale a 5mcg/kg/minuto). Titular pela resposta.")
    }else{alert("Sem infromações para essa função para pesos acima de 35kg.")}
}
function fMildazolam(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else if(peso > 0 && peso <= 3){
        alert("MILDAZOLAM - Amp 3-5  a 10ml com 5mg/ml. (Se usar ampola de 1mg/ml, quintuplicar a dose.)\n"+
        "\nPrescrição: Diluir 3ml da droga em 75ml de SGI e infundir a 1ml/hora "+
        "(Essa infusão equivale a 1mcg/kg/hora). Titular pela resposta.")
    }else if(peso > 3 && peso <= 4){
        alert("MILDAZOLAM - Amp 3-5  a 10ml com 5mg/ml. (Se usar ampola de 1mg/ml, quintuplicar a dose.)\n"+
        "\nPrescrição: Diluir 3ml da droga em 60ml de SGI e infundir a 1ml/hora "+
        "(Essa infusão equivale a 1mcg/kg/hora). Titular pela resposta.")
    }else if(peso > 4 && peso <= 5){
        alert("MILDAZOLAM - Amp 3-5  a 10ml com 5mg/ml. (Se usar ampola de 1mg/ml, quintuplicar a dose.)\n"+
        "\nPrescrição: Diluir 3ml da droga em 50ml de SGI e infundir a 1ml/hora "+
        "(Essa infusão equivale a 1mcg/kg/hora). Titular pela resposta.")
    }else if(peso > 5 && peso <= 6){
        alert("MILDAZOLAM - Amp 3-5  a 10ml com 5mg/ml. (Se usar ampola de 1mg/ml, quintuplicar a dose.)\n"+
        "\nPrescrição: Diluir 5ml da droga em 95ml de SGI e infundir a 1.5ml/hora "+
        "(Essa infusão equivale a 1mcg/kg/hora). Titular pela resposta.")
    }else if(peso > 6 && peso <= 8){
        alert("MILDAZOLAM - Amp 3-5  a 10ml com 5mg/ml. (Se usar ampola de 1mg/ml, quintuplicar a dose.)\n"+
        "\nPrescrição: Diluir 5ml da droga em 95ml de SGI e infundir a 2ml/hora "+
        "(Essa infusão equivale a 1mcg/kg/hora). Titular pela resposta.")
    }else if(peso > 8 && peso <= 10){
        alert("MILDAZOLAM - Amp 3-5  a 10ml com 5mg/ml. (Se usar ampola de 1mg/ml, quintuplicar a dose.)\n"+
        "\nPrescrição: Diluir 5ml da droga em 95ml de SGI e infundir a 2.5ml/hora "+
        "(Essa infusão equivale a 1mcg/kg/hora). Titular pela resposta.")           
    }else if(peso > 10 && peso <= 12){
        alert("MILDAZOLAM - Amp 3-5  a 10ml com 5mg/ml. (Se usar ampola de 1mg/ml, quintuplicar a dose.)\n"+
        "\nPrescrição: Diluir 5ml da droga em 95ml de SGI e infundir a 3ml/hora "+
        "(Essa infusão equivale a 1mcg/kg/hora). Titular pela resposta.")
    }else if(peso > 12 && peso <= 16){
        alert("MILDAZOLAM - Amp 3-5  a 10ml com 5mg/ml. (Se usar ampola de 1mg/ml, quintuplicar a dose.)\n"+
        "\nPrescrição: Diluir 5ml da droga em 95ml de SGI e infundir a 4ml/hora "+
        "(Essa infusão equivale a 1mcg/kg/hora). Titular pela resposta.")
    }else if(peso > 16 && peso <= 20){
        alert("MILDAZOLAM - Amp 3-5  a 10ml com 5mg/ml. (Se usar ampola de 1mg/ml, quintuplicar a dose.)\n"+
        "\nPrescrição: Diluir 5ml da droga em 95ml de SGI e infundir a 5ml/hora "+
        "(Essa infusão equivale a 1mcg/kg/hora). Titular pela resposta.")
    }else if(peso > 20 && peso <= 25){
        alert("MILDAZOLAM - Amp 3-5  a 10ml com 5mg/ml. (Se usar ampola de 1mg/ml, quintuplicar a dose.)\n"+
        "\nPrescrição: Diluir 5ml da droga em 95ml de SGI e infundir a 6ml/hora "+
        "(Essa infusão equivale a 1mcg/kg/hora). Titular pela resposta.")
    }else if(peso > 25 && peso <= 35){
        alert("MILDAZOLAM - Amp 3-5  a 10ml com 5mg/ml. (Se usar ampola de 1mg/ml, quintuplicar a dose.)\n"+
        "\nPrescrição: Diluir 5ml da droga em 95ml de SGI e infundir a 8ml/hora "+
        "(Essa infusão equivale a 1mcg/kg/hora). Titular pela resposta.")                           
    }else{alert("Sem infromações para essa função para pesos acima de 35kg.")}
}    
function fNoradrenalina(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else if(peso >= 0 && peso <= 3){
        alert("NORADRENALINA - Amp 1ml: 1mg/1ml.\n"+
        "\nPrescrição: Diluir 1ml de droga em " + (peso*16.66).toFixed(1) + "ml de SGI e infundir a 1ml/hora "+
        "(Essa infusão equivale a 0.1ml mcg/kg/minuto). Titular pela resposta.")
        //Cálculo: Diluições específicas para usar infusão de 1ml/hora como referência inicial.
            }else if(peso > 3 && peso <= 4){
                alert("NORADRENALINA - Amp 1ml: 1mg/1ml.\n"+
                "\nPrescrição: Diluir 2ml de droga em " + (peso*20).toFixed(1) + "ml de SGI e infundir a 1ml/hora "+
                "(Essa infusão equivale a 0.1ml mcg/kg/minuto). Titular pela resposta.")
                }else if(peso > 4 && peso <= 5){
                    alert("NORADRENALINA - Amp 1ml: 1mg/1ml.\n"+
                    "\nPrescrição: Diluir 2ml de droga em " + (peso*12).toFixed(1) + "ml de SGI e infundir a 1ml/hora "+
                    "(Essa infusão equivale a 0.1ml mcg/kg/minuto). Titular pela resposta.")
                        }else if(peso > 5 && peso <= 6){
                        alert("NORADRENALINA - Amp 1ml: 1mg/1ml.\n"+
                        "\nPrescrição: Diluir 5ml de droga em " + (peso*15.83).toFixed(1) + "ml de SGI e infundir a 1.5ml/hora "+
                        "(Essa infusão equivale a 0.2ml mcg/kg/minuto). Titular pela resposta.")
                            }else if(peso > 6){
                                alert("NORADRENALINA - Amp 1ml: 1mg/1ml.\n"+
                                "\nPrescrição: Diluir 5ml de droga em 95ml de SGI e infundir a " + (peso*0.25).toFixed(1) + "ml/hora "+
                                "(Essa infusão equivale a 0.2ml mcg/kg/minuto). Titular pela resposta.")
                            }

}

// NOVA SESSÃO - Dispositivos ###################################################################################################
function ambu(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else if(peso <= 5){
        alert("AMBU: Lactante")
    }else if(peso <= 9){
        alert("AMBU: Lactante/Criança")
    }else if(peso <= 23){
        alert("AMBU: Criança")
    }else if(peso <= 29){
        alert("AMBU: Criança/Adulto")
    }else if(peso > 29){
        alert("AMBU: Adulto")
    }
}                  
function intraOssea(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else if(peso <= 9){
        alert("INTRA-ÓSSEA: 18/15ga")
    }else if(peso > 9){
        alert("AMBU: 15ga")
    }
} 
function fixacao(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else if(peso <= 3){
        alert("FIXAÇÃO: 9-9.5 cm")
    }else if(peso <= 4){
        alert("FIXAÇÃO: 9.5-10 cm")
    }else if(peso <= 5){
        alert("FIXAÇÃO: 10-10.5 cm")
    }else if(peso <= 9){
        alert("FIXAÇÃO: 10.5-11 cm")
    }else if(peso <= 11){
        alert("FIXAÇÃO: 11-12 cm")
    }else if(peso <= 14){
        alert("FIXAÇÃO: 12.5-13.5 cm")
    }else if(peso <= 18){
        alert("FIXAÇÃO: 14-15 cm")
    }else if(peso <= 23){
        alert("FIXAÇÃO: 15.5-16.5 cm")
    }else if(peso <= 29){
        alert("FIXAÇÃO: 17-18 cm")
    }else if(peso > 29){
        alert("FIXAÇÃO: 18.5-19.5 cm")
    }    
}  
function cargaD(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }if(peso >= 100){
        alert("CARGA PARA DESFIBRILAÇÃO - 1° CHOQUE: 200J\n"+
              "CARGA PARA DESFIBRILAÇÃO - 2° CHOQUE: 200J\n"+
              "DEMAIS: 4-10 J/Kg (Máx 200J)")

    }else if(peso < 100 && peso > 0){
        alert("CARGA PARA DESFIBRILAÇÃO - 1° CHOQUE: " + (2*peso) + "J\n"+
              "CARGA PARA DESFIBRILAÇÃO - 2° CHOQUE: " + (peso >= 50 ? 200 : 4*peso) + "J\n"+
              "DEMAIS: 4-10 J/Kg (Máx 200J)")
    }
}  
function canulaT(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else{
    alert(
    peso <= 5 ? 'CÂNULA TRAQUEAL: 3-3.5 sem cuff || 3 com cuff' :
    peso <= 9 ? 'CÂNULA TRAQUEAL: 3.5 sem cuff || 3 com cuff' :
    peso <= 11 ? 'CÂNULA TRAQUEAL: 4 sem cuff || 3.5 com cuff' :
    peso <= 14 ? 'CÂNULA TRAQUEAL: 4.5 sem cuff || 4 com cuff' : 
    peso <= 18 ? 'CÂNULA TRAQUEAL: 5 sem cuff || 4.5 com cuff' :
    peso <= 23 ? 'CÂNULA TRAQUEAL: 5.5 sem cuff || 5 com cuff' :
    peso <= 29 ? 'CÂNULA TRAQUEAL: - || 6 com cuff' :
    peso > 29 ? 'CÂNULA TRAQUEAL: - || 6.5 com cuff' :
    peso > 29 ? '6.5 com cuff' : + '')
    }
}  
function cargaC(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }if(peso > 0){
        alert("CARGA PARA CARDIOVERSÃO - 1° CARGA: " + (peso >= 200 ? 200 : peso) +" J\n"+
              "CARGA PARA CARDIOVERSÃO - 2° CARGA: " + (peso >= 100 ? 200 : 2*peso) + " J\n")
            }
}  
function dreno(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else{
    alert(
    peso <= 5 ? 'DRENO DE TÓRAX: 10F' :
    peso <= 9 ? 'DRENO DE TÓRAX: 10-12F' :
    peso <= 11 ? 'DRENO DE TÓRAX: 16-20F' :
    peso <= 18 ? 'DRENO DE TÓRAX: 20-24F' : 
    peso <= 23 ? 'DRENO DE TÓRAX: 23-24F' :
    peso <= 29 ? 'DRENO DE TÓRAX: 28-32F' :
    peso > 29 ? 'DRENO DE TÓRAX: 32-38F' : '-' )
    }
}  
function laminaL(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else{
    alert(
    peso <= 5 ? 'LÂMINA de LARINGOSCÓPIO: Reta 0 - 1 ' :
    peso <= 11 ? 'LÂMINA de LARINGOSCÓPIO: Reta 1' :
    peso <= 18 ? 'LÂMINA de LARINGOSCÓPIO: Reta 2' :
    peso <= 23 ? 'LÂMINA de LARINGOSCÓPIO: Reta 2 ou Curva' : 
    peso <= 29 ? 'LÂMINA de LARINGOSCÓPIO: Reta 2-3 ou Curva' :
    peso > 29 ? 'LÂMINA de LARINGOSCÓPIO: Reta 3 ou Curva' : + '')
    }
}  
function pasD(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else{
    alert(
    peso <= 7 ? 'PÁS DE DESFIBRILAÇÃO: Pás de Lactante < 1ano' :
    peso <= 9 ? 'PÁS DE DESFIBRILAÇÃO: Pás de Lactante < 1ano ou 10kg' :
    peso <= 11 ? 'PÁS DE DESFIBRILAÇÃO: Pás de Adulto se >= 1ano ou >= 10kg' :
    peso > 11 ? 'PÁS DE DESFIBRILAÇÃO: Pás de Adulto' : + '')
    }
}  
function sng(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else{
    alert(  
    peso <= 9 ? 'SNG: 5-8F' :
    peso <= 11 ? 'SNG: 8-10F' :
    peso <= 18 ? 'SNG: 10F' :
    peso <= 23 ? 'SNG: 12-14F' : 
    peso <= 29 ? 'SNG: 14-18F' :
    peso > 29 ? 'SNG: 16-18F' : '-')    
    }
}  
function sAspiracao(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else{
    alert(
    peso <= 7 ? 'SONDA DE ASPIRAÇÃO: 6-8F' :
    peso <= 9 ? 'SONDA DE ASPIRAÇÃO: 8F' :
    peso <= 11 ? 'SONDA DE ASPIRAÇÃO: 8-10F' :
    peso <= 29 ? 'SONDA DE ASPIRAÇÃO: 10F' : 
    peso > 29 ? 'SONDA DE ASPIRAÇÃO: 12F' : '-')
    }
}  
function sUrinaria(){ 
    var peso = p.value; 
    if(peso == 0){
        alert("Ação inválida! Informe um peso válido para prosseguir.")
        location.reload();
    }else{
    alert(
    peso <= 5 ? 'SONDA URINÁRIA: 5F' :
    peso <= 9 ? 'SONDA URINÁRIA: 5-8F' :
    peso <= 11 ? 'SONDA URINÁRIA: 8-10F' :
    peso <= 18 ? 'SONDA URINÁRIA: 10F' : 
    peso <= 23 ? 'SONDA URINÁRIA: 12-14F' :
    peso <= 29 ? 'SONDA URINÁRIA: 14-18F' :
    peso > 29 ? 'SONDA URINÁRIA: 16-18F' : '-')
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
