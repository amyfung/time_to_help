$("#button").click(function() {
    $("#button").addClass('button-clicked');
});

$(function() {
    $('.showSingle').click(function() {
        $('.targetDiv').not('#div' + $(this).attr('target')).hide();
        $('#div' + $(this).attr('target')).toggle();
    });
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}