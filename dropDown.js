/* Adrenalina */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
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

  function peso2e5a3Kg(){
    alert("ADRENALINA - Ampola: 1mg/ml \nMáximo: 1mg. Flush com 5ml de soro depois. \n"+
    "\nPrescrição: Diluir uma ampola de 1ml em 9ml de ABD e administrar 0.3ml dessa diluição EV a cada 3 ou 5 minutos.\n"+
    "\nDose máxima: Peso x 0.1.")
  }