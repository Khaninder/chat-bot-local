$(document).ready(function() {
    function cap(string) {
        var newString = string.replace(/^./, string[0].toUpperCase());
        return newString;
    }

    localStorage.clear();
    $('input[type=radio][name=optradio]').change(function() {
        if (this.value == 'yes') {
            $("#participantFirstName").removeAttr('disabled');
            $("#participantLastName").removeAttr('disabled');
            $("#participantUid").removeAttr('disabled');
        } else if (this.value == 'no') {
            $("#firstNameError").hide()
            $("#lastNameError").hide()
            $("#uidError").hide()
            $("#uidValidError").hide()
            $("#participantFirstName").attr('disabled', 'disabled');
            $("#participantLastName").attr('disabled', 'disabled');
            $("#participantUid").attr('disabled', 'disabled');
        }
    });


    $("#participantFirstName").keyup(function(e) {
        if ($('#participantFirstName').val().trim().length > 0) {
            $("#firstNameError").hide()
        } else {
            $("#firstNameError").show()
        }

    });

    $("#participantLastName").keyup(function(e) {
        if ($('#participantLastName').val().trim().length > 0) {
            $("#lastNameError").hide()
        } else {
            $("#lastNameError").show()
        }

    });

    $("#participantUid").keyup(function(e) {
        var uid = $('#participantUid').val().trim()
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

        var firstName = $('#participantFirstName').val().trim();
        var lastName = $('#participantLastName').val().trim();
        var uid = $('#participantUid').val().trim();
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
        } else {
            alert("Thank you for your visit");
            location.reload(true);
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
                $.ajax({
                    url: '/panas',
                    type: 'GET',
                    success: function(response) {
                        localStorage.setItem("isValid", 'True')
                        window.location.replace(window.location.href + 'panas')
                    },
                    error: function(response) {

                    }
                });
            } else {
                alert("Thank you")
            }

        }

    });
});