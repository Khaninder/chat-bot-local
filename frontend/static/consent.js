$(document).ready(function() {
    function cap(string) {
        var newString = string.replace(/^./, string[0].toUpperCase());
        return newString;
    }

    localStorage.clear();
    $('input[type=radio][name=optradio]').change(function() {
        if (this.value == 'no') {
            alert("Thank you for your visit");
            window.location.replace(window.location.origin);
        }
        if (this.value == 'yes') {
            $("#firstname").removeAttr('disabled');
            $("#lastname").removeAttr('disabled');
            $("#uid").removeAttr('disabled');
        } else if (this.value == 'no') {
            $("#firstNameError").hide()
            $("#lastNameError").hide()
            $("#uidError").hide()
            $("#uidValidError").hide()
            $("#firstname").attr('disabled', 'disabled');
            $("#lastname").attr('disabled', 'disabled');
            $("#uid").attr('disabled', 'disabled');
        }
    });


    $("#firstname").keyup(function(e) {
        if ($('#firstname').val().trim().length > 0) {
            $("#firstNameError").hide()
        } else {
            $("#firstNameError").show()
        }

    });

    $("#lastname").keyup(function(e) {
        if ($('#lastname').val().trim().length > 0) {
            $("#lastNameError").hide()
        } else {
            $("#lastNameError").show()
        }

    });

    $("#uid").keyup(function(e) {
        var uid = $('#uid').val().trim()
        if (uid.length > 0) {
            $("#uidError").hide()
            for (var i = 0; i < uid.length; i++) {
                if (uid.charCodeAt(i) >= 48 && uid.charCodeAt(i) <= 57) {
                    $("#uidValidError").hide()
                } else {
                    $("#uidValidError").show()
                    break;
                }
            }
        } else {
            $("#uidError").show()
        }



    });

    $('#consentNext').click(function(e) {

        var firstName = $('#firstname').val().trim();
        var lastName = $('#lastname').val().trim();
        var uid = $('#uid').val().trim();
        var isUidValid = true
        var isAllValid = false
        var option = $("input[type=radio][name=optradio]:checked").val()

        if (option == 'yes') {
            if (!isAllValid) {
                var isFirstNameAvailable = false
                var isLastNameAvailable = false
                var isUidAvailable = false
                if (uid.length == 8) {
                    for (var i = 0; i < uid.length; i++) {
                        if (uid.charCodeAt(i) >= 48 && uid.charCodeAt(i) <= 57) {
                            isUidValid = true
                        } else {
                            isUidValid = false;
                            $("#uidValidError").show();
                            break;
                        }
                    }
                } else {
                    isUidValid = false;
                }

                if (firstName.length == 0) {
                    $("#firstNameError").show()
                    isFirstNameAvailable = false
                } else {
                    isFirstNameAvailable = true
                }
                if (lastName.length == 0) {
                    $("#lastNameError").show()
                    isLastNameAvailable = false
                } else {
                    isLastNameAvailable = true
                }
                if (uid.length == 0) {
                    $("#uidError").show()
                    isUidAvailable = false
                } else {
                    isUidAvailable = true
                }
                if (!isUidValid && uid.length != 0) {
                    $("#uidValidError").show()
                } else {
                    $("#uidValidError").hide()
                }

                if (isFirstNameAvailable && isLastNameAvailable && isUidAvailable && isUidValid) {
                    isAllValid = true
                }

            }
        }

        if (isAllValid) {
            var option = $("input[type=radio][name=optradio]:checked").val()

            if (option == 'yes') {
                $.ajax({
                    type: 'POST',
                    url: '/panas',
                    data: { firstName: cap(firstName), lastName: cap(lastName), uid: uid },
                    dataType: 'json',
                });
            } else {
                alert("Thank you")
            }

        }

    });
});