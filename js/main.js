let phone = $("#exampleInputNumber");
phone.inputmask("+7-9999999999");

$("#phone_submit").click(function() {
    let checkbox = $("#phone_submit_checkbox");
    if (phone.val() && checkbox.is(":checked")) {
        $("#myModal").modal("hide");
        $("#myModalComplete").modal("show");     
    }
})
