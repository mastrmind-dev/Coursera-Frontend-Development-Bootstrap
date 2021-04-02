$(document).ready(function () {
    //carousel
    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($(this).children("span").hasClass("fa-pause")) {
            $("#mycarousel").carousel("pause");
            $(this).children("span").removeClass("fa-pause");
            $(this).children("span").addClass("fa-play");
        } else {
            $("#mycarousel").carousel("cycle");
            $(this).children("span").removeClass("fa-play");
            $(this).children("span").addClass("fa-pause");
        }
    });

    //modals
    //reservation table
    $("#reserveButton").click(function (e) {
        e.preventDefault();
        $('#reservationTableModal').modal('show');
    });
    //login modal
    $('#loginButton').click(function(e){
        e.preventDefault();
        $('#loginModal').modal('show');
    })
});