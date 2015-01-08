

function showHide()
{
    if (document.getElementById('div2').style.visibility == 'visible')
    {
        document.getElementById('div2').style.visibility = 'hidden'
    }
    else
    {
        document.getElementById('div2').style.visibility = 'visible'
    }
}

function validateEmail(email) {
    var oEmail = $(email);
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test(oEmail.val()))
    {
        oEmail.val("");
        alert("Invalid email !");
        $("#inputEmail").focus();
        return false;
    }
    else
    {
        return true;
    }
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    var str = this.valueOf();
    return true;
}

//// Validate Page
//function validateForm() {
//    var listSimple = $('.required');
//    var counter = 0;
//    for (var i = 0; i < listSimple.length; i++)
//    {
//        var control = listSimple[i];
//        var fieldvalue = $(control).val();
//        if (i != 8)
//        {
//            if (fieldvalue == null || fieldvalue == "")
//            {
//                //$(control).prop('placeholder', 'required');
//                counter++;
//                $(control).addClass("Error");

//            }
//            else
//            {
//                $(control).removeClass("Error");
//            }
//        }
//    }

    
//    if (counter > 0)
//    {
//        //implementing focus back to error
//        if ($(".Error").length > 0)
//        {
//            var divId = $(".Error")[0].id;
//            if ($("#" + divId).length > 0)
//                $("#" + divId).focus();
//            return false;
//        }
//    }
//    else
//    {
//        return true;
//    }
//} // end

function clearForm() {
    var listSimple = $('.form-control');
    for (var i = 0; i < listSimple.length; i++)
    {
        listSimple[i].value = null;
    }
}


//function calling
//$("#registerBtn").on("click", function () {
//    validateForm();
//})

$("#email").on("blur", function () {
    validateEmail(this);
})

$(function () {
    $("#datepicker").datepicker();
});