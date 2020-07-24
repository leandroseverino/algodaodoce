/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $("body").on("click", ".page-scroll a", function(event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });
});

// Floating label headings for the contact form
$(function() {
  $("body")
    .on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass(
        "floating-label-form-group-with-value",
        !!$(e.target).val()
      );
    })
    .on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    })
    .on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$("body").scrollspy({
  target: ".navbar-fixed-top"
});

// Closes the Responsive Menu on Menu Item Click
$(".navbar-collapse ul li a").click(function() {
  $(".navbar-toggle:visible").click();
});

function showWeek() {
  var selectComponent = document.getElementById("weekSelector");
  var selectedValue = selectComponent.options[selectComponent.selectedIndex].value;
  
  var weeks = document.getElementsByClassName('weeks');

  for (var index = 0; index < weeks.length; index++) {
    var element = weeks[index];
    element.classList.remove('enable');
    element.classList.add('disabled');
    if (element.id === selectedValue) {
      element.classList.remove('disabled');
      element.classList.add('enable');
    } else {      
      element.classList.add('disabled');
    }    
  } 
}

function popup_content(hideOrshow) {
  if (hideOrshow == 'hide') document.getElementById('popup_content_wrap').style.display = "none";
  else document.getElementById('popup_content_wrap').removeAttribute('style');
}
window.onload = function () {
  setTimeout(function () {
      popup_content('show');
  }, 100);
}
