
$(document).ready(function() { 
  $(".main-content").click(function() {
    $(".container").toggleClass("open-sidebar");
    //displayRoutingControl();
    if (routing)
    {
      removeRouting();      
     
    }  
  });



  });
