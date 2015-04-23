// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
//Foundation Initializer
$(document).foundation();



  $("#alert").on("click", function(){
     // Sweet Alert function
    swal({
      title: "",   
      text: "You will prompted to Smugmug.com when selecting to view the gallery.",     
      showConfirmButton: true 
    });
  });
    // Slick Initializer
 $(document).ready(function(){
    $('.autoplay').slick({
        centerMode: true,
        centerPadding: '60px',
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });
 });


 // form submission reponse
    var xhr = new XMLHttpRequest();
      
    xhr.open('POST', 'formconfirmation.php');
      
    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById("ajax").innerHTML = xhr.responseText;
      }
    };
      
    function sendAJAX(){
      xhr.send();
      document.getElementById('hide1').style.display = "none";
      document.getElementById('hide2').style.display = "none";
    }
