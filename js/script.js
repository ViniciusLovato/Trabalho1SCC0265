$(document).ready(function () {
    // nav bar collapse materializecss function
    $(".button-collapse").sideNav();

    // select materializecss function
    $('select').material_select();

    $('#btn-register-continue').click(function () {
        // it need to change the animation to hide, this raw effect should be temporary
        $('#first-register-menu').hide();
        $('#second-register-menu').show();
    });


});