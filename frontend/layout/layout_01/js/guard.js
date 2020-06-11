/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $("a.maternal").on("click", function(event) {
    var $anchor = $(this);
    let podeProsseguir = false;
    let password = "1506";
    let passWordConfirm=prompt("Informe a senha para prosseguir com o Download: ");
    if (passWordConfirm === password) {
      podeProsseguir = true;
    } else {
      alert("A Senha informada não é válida !");
      podeProsseguir = false;
    }
    return podeProsseguir;
    event.preventDefault();    
  });

  $("a.jardim").on("click", function(event) {
    var $anchor = $(this);
    let podeProsseguir = false;
    let password = "0615";
    let passWordConfirm=prompt("Informe a senha para prosseguir com o Download: ");
    if (passWordConfirm === password) {
      podeProsseguir = true;
    } else {
      alert("A Senha informada não é válida !");
      podeProsseguir = false;
    }
    return podeProsseguir;
    event.preventDefault();    
  });
});

