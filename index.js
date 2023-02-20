var voto = 0;

$(".rate").click(function () {

    $(".rate").addClass("hoover-rate");
    $(".rate").removeClass("clicked");
    $("#" + this.id).removeClass("hoover-rate");
    $("#" + this.id).addClass("clicked");

    voto = this.id;
    console.log(this.id)

});

$("#submit").click(function () {
    $("#rating-div").hide();
    $("#thanks-div").show();
    $(".selected").text("You selected " + voto + " out of 5")

});