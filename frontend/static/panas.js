$(document).ready(function() {

    var values = ['Interested', 'Distressed', 'Excited', 'Upset', 'Strong', 'Guilty', 'Scared', 'Hostile', 'Enthusiastic', 'Proud', 'Irritable', 'Alert', 'Ashamed', 'Inspired', 'Nervous', 'Determined', 'Attentive', 'Jittery', 'Active', 'Afraid']

    $("#panasError").hide()

    function removeErrors(value) {
        $("input[name=" + value + "]").change(
            function() {
                if ($(this).is(':checked')) {
                    $('.' + value).css("background-color", "transparent");
                }
            });
    }
    values.forEach(removeErrors);

    //$("#bgStorySetupModal").modal()
    $("#panas_result").click(function() {

        var val_1 = $("input[name='Interested']:checked").val()
        var val_2 = $("input[name='Distressed']:checked").val()
        var val_3 = $("input[name='Excited']:checked").val()
        var val_4 = $("input[name='Upset']:checked").val()
        var val_5 = $("input[name='Strong']:checked").val()
        var val_6 = $("input[name='Guilty']:checked").val()
        var val_7 = $("input[name='Scared']:checked").val()
        var val_8 = $("input[name='Hostile']:checked").val()
        var val_9 = $("input[name='Enthusiastic']:checked").val()
        var val_10 = $("input[name='Proud']:checked").val()
        var val_11 = $("input[name='Irritable']:checked").val()
        var val_12 = $("input[name='Alert']:checked").val()
        var val_13 = $("input[name='Ashamed']:checked").val()
        var val_14 = $("input[name='Inspired']:checked").val()
        var val_15 = $("input[name='Nervous']:checked").val()
        var val_16 = $("input[name='Determined']:checked").val()
        var val_17 = $("input[name='Attentive']:checked").val()
        var val_18 = $("input[name='Jittery']:checked").val()
        var val_19 = $("input[name='Active']:checked").val()
        var val_20 = $("input[name='Afraid']:checked").val()

        var isAllChecked = true;

        function highlightErrors(value) {
            if ($("input[name=" + value + "]:checked").val() == undefined) {
                $('.' + value).css("background-color", "rgba(250, 237, 239, 1)");
                isAllChecked = false;
            }
        }

        values.forEach(highlightErrors);

        if (isAllChecked == false) {
            $("#panasError").show()
        }
        if (isAllChecked == true) {
            $("#panasError").hide()
                // If val is undefined, load 0, else load parsed value
            val_1 = val_1 == undefined ? 0 : parseInt(val_1)
            val_2 = val_2 == undefined ? 0 : parseInt(val_2)
            val_3 = val_3 == undefined ? 0 : parseInt(val_3)
            val_4 = val_4 == undefined ? 0 : parseInt(val_4)
            val_5 = val_5 == undefined ? 0 : parseInt(val_5)
            val_6 = val_6 == undefined ? 0 : parseInt(val_6)
            val_7 = val_7 == undefined ? 0 : parseInt(val_7)
            val_8 = val_8 == undefined ? 0 : parseInt(val_8)
            val_9 = val_9 == undefined ? 0 : parseInt(val_9)
            val_10 = val_10 == undefined ? 0 : parseInt(val_10)
            val_11 = val_11 == undefined ? 0 : parseInt(val_11)
            val_12 = val_12 == undefined ? 0 : parseInt(val_12)
            val_13 = val_13 == undefined ? 0 : parseInt(val_13)
            val_14 = val_14 == undefined ? 0 : parseInt(val_14)
            val_15 = val_15 == undefined ? 0 : parseInt(val_15)
            val_16 = val_16 == undefined ? 0 : parseInt(val_16)
            val_17 = val_17 == undefined ? 0 : parseInt(val_17)
            val_18 = val_18 == undefined ? 0 : parseInt(val_18)
            val_19 = val_19 == undefined ? 0 : parseInt(val_19)
            val_20 = val_20 == undefined ? 0 : parseInt(val_20)

            var positive = val_1 + val_3 + val_5 + val_9 + val_10 + val_12 + val_14 + val_16 + val_17 + val_19
            var negative = val_2 + val_4 + val_6 + val_7 + val_8 + val_11 + val_13 + val_15 + val_18 + val_20

            alert("positive: " + positive + "\n" + "negative: " + negative + "\n")

            if (positive >= negative) {
                window.panas = 1;
            } else if (positive < negative) {
                window.panas = 0;
            }

            var panasscore = window.panas;
            $.ajax({
                type: 'POST',
                url: '/panas-score',
                data: { score: panasscore },
                dataType: 'json',
            });

            window.location.replace(window.location.href.replace("panas", 'chatbot'))
        }
    });

});