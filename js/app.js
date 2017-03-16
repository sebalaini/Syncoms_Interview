$(document).ready(function(e){

/***************
EMAIL VALIDATOR
***************/

$('#header_btn').click(function() {

var sEmail = $('#txtEmail').val();

  if ($.trim(sEmail).length == 0) {
    alert('Please enter valid email address');
    e.preventDefault();
  }
  if (validateEmail(sEmail)) {
    alert('Email is valid');
  }
  else {
    alert('Invalid Email Address');
    e.preventDefault();
  }
});

function validateEmail(sEmail) {

var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (filter.test(sEmail)) {
    return true;
  }
  else {
    return false;
  }
}



/***************
CAROUSEL
***************/

// add responsive 
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
    0:{
      items:3
      },
    600:{
      items:6
      },
    1000:{
      items:7
      }
    }
})

// execute owlcarousel
$(".owl-carousel").owlCarousel()


}); // end ready 





