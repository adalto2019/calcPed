/* Adrenalina */
function functionAdrenalina() {
  document.getElementById("myDropdownAdrenalina").classList.toggle("show");
}
function functionAtropina() {
  document.getElementById("myDropdownAtropina").classList.toggle("show");
}
function functionAmiodarona() {
  document.getElementById("myDropdownAmiodarona").classList.toggle("show");
}
function functionGluconato() {
  document.getElementById("myDropdownGluconato").classList.toggle("show");
}    
function functionBicarbonatoSodio(){
  document.getElementById("myDropdownBicarbonatoSodio").classList.toggle("show");
}
function functionGlicose(){
  document.getElementById("myDropdownGlicose").classList.toggle("show");
}
function functionAdenosina() {
  document.getElementById("myDropdownAdenosina").classList.toggle("show");
}  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  // Adrenalina ###################################################################################################
  function adrenalinaL1(){
    alert("ADRENALINA - Ampola: 1mg/ml \nMáximo: 1mg. Flush com 5ml de soro depois. \n"+
    "\nPrescrição: Diluir uma ampola de 1ml em 9ml de ABD e administrar 0.3ml dessa diluição EV a cada 3 ou 5 minutos.\n"+
    "\nCálculo: Peso x 0.1.")
  }
  function adrenalinaL2(){
    alert("ADRENALINA - Ampola: 1mg/ml \nMáximo: 1mg. Flush com 5ml de soro depois. \n"+
    "\nPrescrição: Diluir uma ampola de 1ml em 9ml de ABD e administrar 0.4ml dessa diluição EV a cada 3 ou 5 minutos.\n"+
    "\nCálculo: Peso x 0.1.")
  }
  function adrenalinaL3(){
    alert("ADRENALINA - Ampola: 1mg/ml \nMáximo: 1mg. Flush com 5ml de soro depois. \n"+
    "\nPrescrição: Diluir uma ampola de 1ml em 9ml de ABD e administrar 0.5ml dessa diluição EV a cada 3 ou 5 minutos.\n"+
    "\nCálculo: Peso x 0.1.")
  }
  function adrenalinaL4(){
    alert("ADRENALINA - Ampola: 1mg/ml \nMáximo: 1mg. Flush com 5ml de soro depois. \n"+
    "\nPrescrição: Diluir uma ampola de 1ml em 9ml de ABD e administrar 0.6ml dessa diluição EV a cada 3 ou 5 minutos.\n"+
    "\nCálculo: Peso x 0.1.")
  }
  function adrenalinaL5(){
    alert("ADRENALINA - Ampola: 1mg/ml \nMáximo: 1mg. Flush com 5ml de soro depois. \n"+
    "\nPrescrição: Diluir uma ampola de 1ml em 9ml de ABD e administrar 0.8ml dessa diluição EV a cada 3 ou 5 minutos.\n"+
    "\nCálculo: Peso x 0.1.")
  }
  function adrenalinaL6(){
    alert("ADRENALINA - Ampola: 1mg/ml \nMáximo: 1mg. Flush com 5ml de soro depois. \n"+
    "\nPrescrição: Diluir uma ampola de 1ml em 9ml de ABD e administrar 1.0ml dessa diluição EV a cada 3 ou 5 minutos.\n"+
    "\nCálculo: Peso x 0.1.")
  }
  function adrenalinaL7(){
    alert("ADRENALINA - Ampola: 1mg/ml \nMáximo: 1mg. Flush com 5ml de soro depois. \n"+
    "\nPrescrição: Diluir uma ampola de 1ml em 9ml de ABD e administrar 1.2ml dessa diluição EV a cada 3 ou 5 minutos.\n"+
    "\nCálculo: Peso x 0.1.")
  }
  function adrenalinaL8(){
    alert("ADRENALINA - Ampola: 1mg/ml \nMáximo: 1mg. Flush com 5ml de soro depois. \n"+
    "\nPrescrição: Diluir uma ampola de 1ml em 9ml de ABD e administrar 1.6ml dessa diluição EV a cada 3 ou 5 minutos.\n"+
    "\nCálculo: Peso x 0.1.")
  }
  function adrenalinaL9(){
    alert("ADRENALINA - Ampola: 1mg/ml \nMáximo: 1mg. Flush com 5ml de soro depois. \n"+
    "\nPrescrição: Diluir uma ampola de 1ml em 9ml de ABD e administrar 2.0ml dessa diluição EV a cada 3 ou 5 minutos.\n"+
    "\nCálculo: Peso x 0.1.")
  }
  function adrenalinaL10(){
    alert("ADRENALINA - Ampola: 1mg/ml \nMáximo: 1mg. Flush com 5ml de soro depois. \n"+
    "\nPrescrição: Diluir uma ampola de 1ml em 9ml de ABD e administrar 2.5ml dessa diluição EV a cada 3 ou 5 minutos.\n"+
    "\nCálculo: Peso x 0.1.")
  }
  function adrenalinaL11(){
    alert("ADRENALINA - Ampola: 1mg/ml \nMáximo: 1mg. Flush com 5ml de soro depois. \n"+
    "\nPrescrição: Diluir uma ampola de 1ml em 9ml de ABD e administrar 3.5ml dessa diluição EV a cada 3 ou 5 minutos.\n"+
    "\nCálculo: Peso x 0.1.")
  }
  // Atropina ###################################################################################################
  function atropina1(){
    alert("ATROPINA - Ampola: 0.5mg/ml \nMínimo: 0.2mg e Máximo 2.0ml.\n"+
    "\nPrescrição: Administrar 0.12ml de atropina em bolus. Se necessário pode ser repetida uma vez na mesma dose ou dose dobrada.\n"+
    "\nCálculo: Peso x 0.04.")
  }
  function atropina2(){
    alert("ATROPINA - Ampola: 0.5mg/ml \nMínimo: 0.2mg e Máximo 2.0ml.\n"+
    "\nPrescrição: Administrar 0.16ml de atropina em bolus. Se necessário pode ser repetida uma vez na mesma dose ou dose dobrada.\n"+
    "\nCálculo: Peso x 0.04.")
  }
  function atropina3(){
    alert("ATROPINA - Ampola: 0.5mg/ml \nMínimo: 0.2mg e Máximo 2.0ml.\n"+
    "\nPrescrição: Administrar 0.2ml de atropina em bolus. Se necessário pode ser repetida uma vez na mesma dose ou dose dobrada.\n"+
    "\nCálculo: Peso x 0.04.")
  }
  function atropina4(){
    alert("ATROPINA - Ampola: 0.5mg/ml \nMínimo: 0.2mg e Máximo 2.0ml.\n"+
    "\nPrescrição: Administrar 0.25ml de atropina em bolus. Se necessário pode ser repetida uma vez na mesma dose ou dose dobrada.\n"+
    "\nCálculo: Peso x --.")
  }
  function atropina5(){
    alert("ATROPINA - Ampola: 0.5mg/ml \nMínimo: 0.2mg e Máximo 2.0ml.\n"+
    "\nPrescrição: Administrar 0.3ml de atropina em bolus. Se necessário pode ser repetida uma vez na mesma dose ou dose dobrada.\n"+
    "\nCálculo: Peso x 0.04.")
  }
  function atropina6(){
    alert("ATROPINA - Ampola: 0.5mg/ml \nMínimo: 0.2mg e Máximo 2.0ml.\n"+
    "\nPrescrição: Administrar 0.4ml de atropina em bolus. Se necessário pode ser repetida uma vez na mesma dose ou dose dobrada.\n"+
    "\nCálculo: Peso x 0.04.")
  }
  function atropina7(){
    alert("ATROPINA - Ampola: 0.5mg/ml \nMínimo: 0.2mg e Máximo 2.0ml.\n"+
    "\nPrescrição: Administrar 0.5ml de atropina em bolus. Se necessário pode ser repetida uma vez na mesma dose ou dose dobrada.\n"+
    "\nCálculo: Peso x 0.04.")
  }
  function atropina8(){
    alert("ATROPINA - Ampola: 0.5mg/ml \nMínimo: 0.2mg e Máximo 2.0ml.\n"+
    "\nPrescrição: Administrar 0.6ml de atropina em bolus. Se necessário pode ser repetida uma vez na mesma dose ou dose dobrada.\n"+
    "\nCálculo: Peso x 0.04.")
  }
  function atropina9(){
    alert("ATROPINA - Ampola: 0.5mg/ml \nMínimo: 0.2mg e Máximo 2.0ml.\n"+
    "\nPrescrição: Administrar 0.8ml de atropina em bolus. Se necessário pode ser repetida uma vez na mesma dose ou dose dobrada.\n"+
    "\nCálculo: Peso x 0.04.")
  }
  function atropina10(){
    alert("ATROPINA - Ampola: 1.0mg/ml \nMínimo: 0.2mg e Máximo 2.0ml.\n"+
    "\nPrescrição: Administrar 0.12ml de atropina em bolus. Se necessário pode ser repetida uma vez na mesma dose ou dose dobrada.\n"+
    "\nCálculo: Peso x 0.04.")
  }
  function atropina11(){
    alert("ATROPINA - Ampola: 0.5mg/ml \nMínimo: 0.2mg e Máximo 2.0ml.\n"+
    "\nPrescrição: Administrar 1.5ml de atropina em bolus. Se necessário pode ser repetida uma vez na mesma dose ou dose dobrada.\n"+
    "\nCálculo: Peso x 0.04.")
  }
  // Amiodaroma ###################################################################################################
  function amiodarona1(){
    alert("AMIODARONA - Ampola: (3ml) 50mg/ml. Dose máxima. \n"+
    "\nPrescrição: Diluir uma ampola (3ml) em 17ml de ABD e administrar 2.1ml dessa diluição em 5-10 minutos.\n"+
    "\nCálculo: Peso x 0.7.")
  }
  function amiodarona2(){
    alert("AMIODARONA - Ampola: (3ml) 50mg/ml. Dose máxima. \n"+
    "\nPrescrição: Diluir uma ampola (3ml) em 17ml de ABD e administrar 2.8ml dessa diluição em 5-10 minutos.\n"+
    "\nCálculo: Peso x 0.7.")
  }
  function amiodarona3(){
    alert("AMIODARONA - Ampola: (3ml) 50mg/ml. Dose máxima. \n"+
    "\nPrescrição: Diluir uma ampola (3ml) em 17ml de ABD e administrar 3.5ml dessa diluição em 5-10 minutos.\n"+
    "\nCálculo: Peso x 0.7.")
  }
  function amiodarona4(){
    alert("AMIODARONA - Ampola: (3ml) 50mg/ml. Dose máxima. \n"+
    "\nPrescrição: Diluir uma ampola (3ml) em 17ml de ABD e administrar 4.0ml dessa diluição em 5-10 minutos.\n"+
    "\nCálculo: Peso x 0.7.")
  }
  function amiodarona5(){
    alert("AMIODARONA - Ampola: (3ml) 50mg/ml. Dose máxima: 150mg \n"+
    "\nPrescrição: Diluir uma ampola (3ml) em 17ml de ABD e administrar 6.0ml dessa diluição em 5-10 minutos.\n"+
    "\nCálculo: Peso x 0.7.")
  }
  function amiodarona6(){
    alert("AMIODARONA - Ampola: (3ml) 50mg/ml. Dose máxima: 150mg \n"+
    "\nPrescrição: Diluir uma ampola (3ml) em 17ml de ABD e administrar 7.0ml dessa diluição em 5-10 minutos.\n"+
    "\nCálculo: Peso x 0.7.")
  }
  function amiodarona7(){
    alert("AMIODARONA - Ampola: (3ml) 50mg/ml. Dose máxima: 150mg \n"+
    "\nPrescrição: Diluir uma ampola (3ml) em 17ml de ABD e administrar 8.0ml dessa diluição em 5-10 minutos.\n"+
    "\nCálculo: Peso x 0.7.")
  }
  function amiodarona8(){
    alert("AMIODARONA - Ampola: (3ml) 50mg/ml. Dose máxima: 150mg \n"+
    "\nPrescrição: Diluir uma ampola (3ml) em 17ml de ABD e administrar 11.0ml dessa diluição em 5-10 minutos.\n"+
    "\nCálculo: Peso x 0.7.")
  }
  function amiodarona9(){
    alert("AMIODARONA - Ampola: (3ml) 50mg/ml. Dose máxima: 150mg \n"+
    "\nPrescrição: Diluir uma ampola (3ml) em 17ml de ABD e administrar 14.0ml dessa diluição em 5-10 minutos.\n"+
    "\nCálculo: Peso x 0.7.")
  }
  function amiodarona10(){
    alert("AMIODARONA - Ampola: (3ml) 50mg/ml. Dose máxima: 150mg \n"+
    "\nPrescrição: Diluir uma ampola (3ml) em 17ml de ABD e administrar 17.0ml dessa diluição em 5-10 minutos.\n"+
    "\nCálculo: Peso x 0.7.")
  }
  function amiodarona11(){
    alert("AMIODARONA - Ampola: (3ml) 50mg/ml. Dose máxima: 150mg \n"+
    "\nPrescrição: Diluir uma ampola (3ml) em 17ml de ABD e administrar os 20.0ml (diluição inteira) em 5-10 minutos.\n"+
    "\nCálculo: Essa é a dose máxima.")
  }
  // Gluconato de Cálcio a 10% ###################################################################################################
  function gluconato1(){
    alert("GLUCONATO DE CÁLCIO A 10% - Cada ml tem 9mg de cálcio-elemento\n"+
    "\nPrescrição: Diluir 3ml de gluconato de cálcio em 3ml de ABD e administrar EV lento sob ausculta ou monitorização cardíaca.\n"+
    "\nCálculo: Peso x 1.")
  }
  function gluconato2(){
    alert("GLUCONATO DE CÁLCIO A 10% - Cada ml tem 9mg de cálcio-elemento\n"+
    "\nPrescrição: Diluir 4ml de gluconato de cálcio em 4ml de ABD e administrar EV lento sob ausculta ou monitorização cardíaca.\n"+
    "\nCálculo: Peso x 1.")
  }
  function gluconato3(){
    alert("GLUCONATO DE CÁLCIO A 10% - Cada ml tem 9mg de cálcio-elemento\n"+
    "\nPrescrição: Diluir 5ml de gluconato de cálcio em 5ml de ABD e administrar EV lento sob ausculta ou monitorização cardíaca.\n"+
    "\nCálculo: Peso x 1.")
  }
  function gluconato4(){
    alert("GLUCONATO DE CÁLCIO A 10% - Cada ml tem 9mg de cálcio-elemento\n"+
    "\nPrescrição: Diluir 6ml de gluconato de cálcio em 6ml de ABD e administrar EV lento sob ausculta ou monitorização cardíaca.\n"+
    "\nCálculo: Peso x 1.")
  }
  function gluconato5(){
    alert("GLUCONATO DE CÁLCIO A 10% - Cada ml tem 9mg de cálcio-elemento\n"+
    "\nPrescrição: Diluir 8ml de gluconato de cálcio em 8ml de ABD e administrar EV lento sob ausculta ou monitorização cardíaca.\n"+
    "\nCálculo: Peso x 1.")
  }
  function gluconato6(){
    alert("GLUCONATO DE CÁLCIO A 10% - Cada ml tem 9mg de cálcio-elemento\n"+
    "\nPrescrição: Diluir 10ml de gluconato de cálcio em 10ml de ABD e administrar EV lento sob ausculta ou monitorização cardíaca.\n"+
    "\nCálculo: Peso x 1.")
  }
  function gluconato7(){
    alert("GLUCONATO DE CÁLCIO A 10% - Cada ml tem 9mg de cálcio-elemento\n"+
    "\nPrescrição: Diluir 12ml de gluconato de cálcio em 12ml de ABD e administrar EV lento sob ausculta ou monitorização cardíaca.\n"+
    "\nCálculo: Peso x 1.")
  }
  function gluconato8(){
    alert("GLUCONATO DE CÁLCIO A 10% - Cada ml tem 9mg de cálcio-elemento\n"+
    "\nPrescrição: Diluir 16ml de gluconato de cálcio em 16ml de ABD e administrar EV lento sob ausculta ou monitorização cardíaca.\n"+
    "\nCálculo: Peso x 1.")
  }
  function gluconato9(){
    alert("GLUCONATO DE CÁLCIO A 10% - Cada ml tem 9mg de cálcio-elemento\n"+
    "\nPrescrição: Diluir 20ml de gluconato de cálcio em 20ml de ABD e administrar EV lento sob ausculta ou monitorização cardíaca.\n"+
    "\nCálculo: Peso x 1.")
  }
  function gluconato10(){
    alert("GLUCONATO DE CÁLCIO A 10% - Cada ml tem 9mg de cálcio-elemento\n"+
    "\nPrescrição: Diluir 25ml de gluconato de cálcio em 25ml de ABD e administrar EV lento sob ausculta ou monitorização cardíaca.\n"+
    "\nCálculo: Peso x 1.")
  }
  function gluconato11(){
    alert("GLUCONATO DE CÁLCIO A 10% - Cada ml tem 9mg de cálcio-elemento\n"+
    "\nPrescrição: Diluir 30ml de gluconato de cálcio em 30ml de ABD e administrar EV lento sob ausculta ou monitorização cardíaca.\n"+
    "\nCálculo: Essa é a dose máxima.")
  }
// Bicarbonaro de Sódio ###################################################################################################
function bicarbonatoSodio1(){
  alert("BICARBONATO de SÓDIO a 8,4% - Cada 1ml = 1mEq\n"+
  "\nPrescrição: Diluir 3ml de bicarbonato em 3ml de ABD e administrar EV lentamente.\n"+
  "\nCálculo: Peso x 0.1.")
}
function bicarbonatoSodio2(){
  alert("BICARBONATO de SÓDIO a 8,4% - Cada 1ml = 1mEq\n"+
  "\nPrescrição: Diluir 4ml de bicarbonato em 4ml de ABD e administrar EV lentamente.\n"+
  "\nCálculo: Peso x 0.1.")
}
function bicarbonatoSodio3(){
  alert("BICARBONATO de SÓDIO a 8,4% - Cada 1ml = 1mEq\n"+
  "\nPrescrição: Diluir 5ml de bicarbonato em 5ml de ABD e administrar EV lentamente.\n"+
  "\nCálculo: Peso x 0.1.")
}
function bicarbonatoSodio4(){
  alert("BICARBONATO de SÓDIO a 8,4% - Cada 1ml = 1mEq\n"+
  "\nPrescrição: Diluir 6ml de bicarbonato em 6ml de ABD e administrar EV lentamente.\n"+
  "\nCálculo: Peso x 0.1.")
}
function bicarbonatoSodio5(){
  alert("BICARBONATO de SÓDIO a 8,4% - Cada 1ml = 1mEq\n"+
  "\nPrescrição: Diluir 8ml de bicarbonato em 8ml de ABD e administrar EV lentamente.\n"+
  "\nCálculo: Peso x 0.1.")
}
function bicarbonatoSodio6(){
  alert("BICARBONATO de SÓDIO a 8,4% - Cada 1ml = 1mEq\n"+
  "\nPrescrição: Diluir 10ml de bicarbonato em 10ml de ABD e administrar EV lentamente.\n"+
  "\nCálculo: Peso x 0.1.")
}
function bicarbonatoSodio7(){
  alert("BICARBONATO de SÓDIO a 8,4% - Cada 1ml = 1mEq\n"+
  "\nPrescrição: Diluir 12ml de bicarbonato em 12ml de ABD e administrar EV lentamente.\n"+
  "\nCálculo: Peso x 0.1.")
}
function bicarbonatoSodio8(){
  alert("BICARBONATO de SÓDIO a 8,4% - Cada 1ml = 1mEq\n"+
  "\nPrescrição: Diluir 16ml de bicarbonato em 16ml de ABD e administrar EV lentamente.\n"+
  "\nCálculo: Peso x 0.1.")
}
function bicarbonatoSodio9(){
  alert("BICARBONATO de SÓDIO a 8,4% - Cada 1ml = 1mEq\n"+
  "\nPrescrição: Diluir 20ml de bicarbonato em 20ml de ABD e administrar EV lentamente.\n"+
  "\nCálculo: Peso x 0.1.")
}
function bicarbonatoSodio10(){
  alert("BICARBONATO de SÓDIO a 8,4% - Cada 1ml = 1mEq\n"+
  "\nPrescrição: Diluir 25ml de bicarbonato em 25ml de ABD e administrar EV lentamente.\n"+
  "\nCálculo: Peso x 0.1.")
}
function bicarbonatoSodio11(){
  alert("BICARBONATO de SÓDIO a 8,4% - Cada 1ml = 1mEq\n"+
  "\nPrescrição: Diluir 35ml de bicarbonato em 35ml de ABD e administrar EV lentamente.\n"+
  "\nCálculo: Peso x 0.1.")
}
// Glicose a 50% ###################################################################################################
function glicose1(){
  alert("GLICOSE a 50% - Diluir a 10% para criança e 10% para neonato\n"+
  "\nPrescrição: Diluir 3ml de glicose a 50% 12ml de ABD e administrar EV em bolus (Equivale a 0.5g/Kg). Pode usar o dobro se preciso.\n"+
  "\nCálculo: Peso x 0.1.")
}
function glicose2(){
  alert("GLICOSE a 50% - Diluir a 10% para criança e 10% para neonato\n"+
  "\nPrescrição: Diluir 4ml de glicose a 50% 16ml de ABD e administrar EV em bolus (Equivale a 0.5g/Kg). Pode usar o dobro se preciso.\n"+
  "\nCálculo: Peso x 0.1.")
}
function glicose3(){
  alert("GLICOSE a 50% - Diluir a 10% para criança e 10% para neonato\n"+
  "\nPrescrição: Diluir 5ml de glicose a 50% 20ml de ABD e administrar EV em bolus (Equivale a 0.5g/Kg). Pode usar o dobro se preciso.\n"+
  "\nCálculo: Peso x 0.1.")
}
function glicose4(){
  alert("GLICOSE a 50% - Diluir a 25% para criança e 10% para neonato\n"+
  "\nPrescrição: Diluir 6ml de glicose a 50% 6ml de ABD e administrar EV em bolus (Equivale a 0.5g/Kg). Pode usar o dobro se preciso.\n"+
  "\nCálculo: Peso x 0.1.")
}
function glicose5(){
  alert("GLICOSE a 50% - Diluir a 25% para criança e 10% para neonato\n"+
  "\nPrescrição: Diluir 8ml de glicose a 50% 8ml de ABD e administrar EV em bolus (Equivale a 0.5g/Kg). Pode usar o dobro se preciso.\n"+
  "\nCálculo: Peso x 0.1.")
}
function glicose6(){
  alert("GLICOSE a 50% - Diluir a 25% para criança e 10% para neonato\n"+
  "\nPrescrição: Diluir 10ml de glicose a 50% 10ml de ABD e administrar EV em bolus (Equivale a 0.5g/Kg). Pode usar o dobro se preciso.\n"+
  "\nCálculo: Peso x 0.1.")
}
function glicose7(){
  alert("GLICOSE a 50% - Diluir a 25% para criança e 10% para neonato\n"+
  "\nPrescrição: Diluir 12ml de glicose a 50% 12ml de ABD e administrar EV em bolus (Equivale a 0.5g/Kg). Pode usar o dobro se preciso.\n"+
  "\nCálculo: Peso x 0.1.")
}
function glicose8(){
  alert("GLICOSE a 50% - Diluir a 25% para criança e 10% para neonato\n"+
  "\nPrescrição: Diluir 16ml de glicose a 50% 16ml de ABD e administrar EV em bolus (Equivale a 0.5g/Kg). Pode usar o dobro se preciso.\n"+
  "\nCálculo: Peso x 0.1.")
}
function glicose9(){
  alert("GLICOSE a 50% - Diluir a 25% para criança e 10% para neonato\n"+
  "\nPrescrição: Diluir 20ml de glicose a 50% 20ml de ABD e administrar EV em bolus (Equivale a 0.5g/Kg). Pode usar o dobro se preciso.\n"+
  "\nCálculo: Peso x 0.1.")
}
function glicose10(){
  alert("GLICOSE a 50% - Diluir a 25% para criança e 10% para neonato\n"+
  "\nPrescrição: Diluir 25ml de glicose a 50% 25ml de ABD e administrar EV em bolus (Equivale a 0.5g/Kg). Pode usar o dobro se preciso.\n"+
  "\nCálculo: Peso x 0.1.")
}
function glicose11(){
  alert("GLICOSE a 50% - Diluir a 25% para criança e 10% para neonato\n"+
  "\nPrescrição: Diluir 35ml de glicose a 50% 35ml de ABD e administrar EV em bolus (Equivale a 0.5g/Kg). Pode usar o dobro se preciso.\n"+
  "\nCálculo: Peso x 0.1.")
}
// Adenosina ###################################################################################################
function adenosina1(){
  alert("ADENOSINA - Ampola: (2ml): 6mg\n"+
  "\nPrescrição: Administrar 0.2ml EV seguida de flush com soro fisiológico. Se necessário repetir uma vez com dose dobrada (0.18ml).\n"+
  "\nCálculo: Dose mínima Peso x 0.6.")
}
function adenosina2(){
  alert("ADENOSINA - Ampola: (2ml): 6mg\n"+
  "\nPrescrição: Administrar 0.2ml EV seguida de flush com soro fisiológico. Se necessário repetir uma vez com dose dobrada (0.24ml).\n"+
  "\nCálculo: Dose mínima Peso x 0.6.")
}
function adenosina3(){
  alert("ADENOSINA - Ampola: (2ml): 6mg\n"+
  "\nPrescrição: Administrar 0.15ml EV seguida de flush com soro fisiológico. Se necessário repetir uma vez com dose dobrada (0.3ml).\n"+
  "\nCálculo: Peso x 0.3 | Peso x 0.06")
}
function adenosina4(){
  alert("ADENOSINA - Ampola: (2ml): 6mg\n"+
  "\nPrescrição: Administrar 0.2ml EV seguida de flush com soro fisiológico. Se necessário repetir uma vez com dose dobrada (0.4ml).\n"+
  "\nCálculo: Peso x 0.3 | Peso x 0.06")
}
function adenosina5(){
  alert("ADENOSINA - Ampola: (2ml): 6mg\n"+
  "\nPrescrição: Administrar 0.25ml EV seguida de flush com soro fisiológico. Se necessário repetir uma vez com dose dobrada (0.5ml).\n"+
  "\nCálculo: Peso x 0.3 | Peso x 0.06.")
}
function adenosina6(){
  alert("ADENOSINA - Ampola: (2ml): 6mg\n"+
  "\nPrescrição: Administrar 0.3ml EV seguida de flush com soro fisiológico. Se necessário repetir uma vez com dose dobrada (0.6ml).\n"+
  "\nCálculo: Peso x 0.3 | Peso x 0.06.")
}
function adenosina7(){
  alert("ADENOSINA - Ampola: (2ml): 6mg\n"+
  "\nPrescrição: Administrar 0.4ml EV seguida de flush com soro fisiológico. Se necessário repetir uma vez com dose dobrada (0.7ml).\n"+
  "\nCálculo: Peso x 0.3 | Peso x 0.06.")
}
function adenosina8(){
  alert("ADENOSINA - Ampola: (2ml): 6mg\n"+
  "\nPrescrição: Administrar 0.5ml EV seguida de flush com soro fisiológico. Se necessário repetir uma vez com dose dobrada (1.0ml).\n"+
  "\nCálculo: Peso x 0.3 | Peso x 0.06.")
}
function adenosina9(){
  alert("ADENOSINA - Ampola: (2ml): 6mg\n"+
  "\nPrescrição: Administrar 0.6ml EV seguida de flush com soro fisiológico. Se necessário repetir uma vez com dose dobrada (1.2ml).\n"+
  "\nCálculo: Peso x 0.3 | Peso x 0.06.")
}
function adenosina10(){
  alert("ADENOSINA - Ampola: (2ml): 6mg\n"+
  "\nPrescrição: Administrar 0.8ml EV seguida de flush com soro fisiológico. Se necessário repetir uma vez com dose dobrada (1.5ml).\n"+
  "\nCálculo: Peso x 0.3 | Peso x 0.06.")
}
function adenosina11(){
  alert("ADENOSINA - Ampola: (2ml): 6mg\n"+
  "\nPrescrição: Administrar 1.0ml EV seguida de flush com soro fisiológico. Se necessário repetir uma vez com dose dobrada (2.0ml).\n"+
  "\nCálculo: Peso x 0.3 | Peso x 0.06.")
}