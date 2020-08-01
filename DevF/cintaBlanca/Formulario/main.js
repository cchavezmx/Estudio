$ (function() {   /*el "$" es que usa el jquery de google */
   
    $(".form-control").on('focus', function(){

        $(this).parents(".form-group").addClass('focused'); // el paret es e elemento de claas al que que pertenece focused en el html 

    });

    $(".form-control").on('blur', function(){

        $(this).parents(".form-group").removeClass('focused');

    });

});