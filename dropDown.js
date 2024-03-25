/* Adrenalina */
function functionAdrenalina() {
    document.getElementById("myDropdownAdrenalina").classList.toggle("show");
  }
  function functionAmiodarona() {
    document.getElementById("myDropdownAmiodarona").classList.toggle("show");
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