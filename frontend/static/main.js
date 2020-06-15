var index = 0
var panas = parseInt(localStorage.getItem("panas"))
var panas = -1
//alert(panas)
var severity = 0
var name = ''
var timeout = ''
var isVenting = false
$(document).ready(function () {

    if (index == 0) {

        addMessage('bot', "Hi, my name is Anna.")
        addMessage('bot', "What would you like me to call you ?")
        timeout = setTimeout(function () {
            addMessage("bot", "Are you still there? I'd love to know your name so I know what to call you while we chat.")
            timeout = setTimeout(function () {
                alert("Contact RA")
            }, 60000); //60
        }, 60000); //60
        $("#userInputBlock").show()
        index = 1
    }

    $("#userMessage").keyup(function () {
        countChar($("#userMessage").val())
    });

    $("#submitButton").click(function () {
        if (index == 1) {
            clearTimeout(timeout);
            var userVal = $("#userMessage").val()
            name = userVal
            addMessage("user",userVal)
            addMessage("bot", "It's nice to meet you, " + userVal + ".")
            addMessage("bot","How are you doing today?")
            $("#userInputBlock").hide()
            index = 2

            if (index == 2) {
                $("#userEmotionBlock").show()
                timeout = setTimeout(function () {
                    addMessage("bot", "Are you still there, " + name + "?")
                    timeout = setTimeout(function () {
                        alert("Contact TA")
                    }, 60000); //60
                }, 180000); //180
            }
        }
        else if (index == 9) {
            clearTimeout(timeout);
            var userVal = $("#userMessage").val()
            isVenting = true
            addMessage("user", userVal)
            $("#userInputBlock").hide()
            getValidationMessage(severity, 0)
        }

        else if (index == 11) {
            clearTimeout(timeout);
            var userVal = $("#userMessage").val()
            isVenting = true
            addMessage("user", userVal)
            $("#userInputBlock").hide()
            getValidationMessage(severity, 1)
        }
    });

    $(".positive").click(function () {
        clearTimeout(timeout);
        $("#userEmotionBlock").hide()
        addMessage("user", "Good")
        if (panas == 1) {
            addMessage("bot","Good! It's great to hear that. Soon, we will play a quick game, but we can chat a bit first, if you would like. If there are any problems or stressers you'd like to vent about, you have the opportunity to do so now. Is there anything you'd like to talk to me about?")
            $("#yesornoBlock").show()
            index = 7

        }
        else if (panas == -1) {
            addMessage("bot","I noticed you indicated that you were feeling some negative emotions on your questionnaire earlier. Are you still feeling that way ?")
            $("#yesornoBlock").show()
            index = 3
        }
    })

    $(".negative").click(function () {
        clearTimeout(timeout);
        $("#userEmotionBlock").hide()
        index = 3
        addMessage("user", "Not Good")
        addMessage("bot","I'm sorry to hear that you're feeling that way. Can you tell me more about it?")
        index = 4
        $("#yesornoBlock").show()
    })


    $(".yes").click(function () {
        clearTimeout(timeout);
        addMessage("user", "Yes")
        if (index == 3) {
            $("#yesornoBlock").hide()
            addMessage("bot","I'm sorry to hear that you're feeling that way. Can you tell me more about it?")
            $("#yesornoBlock").show()
            index = 4
        }

        else if (index == 4) {
            $("#yesornoBlock").hide()
            addMessage("bot","I'm glad to hear that you feel comfortable telling me about it. I'll give you an opportunity to do so in just a moment. First, I just have a few questions for you. Click OK to continue")
            $("#okBlock").show()
            //$("#userMessage").val("")
            index = 6 //Go to severity questions

        }

        else if (index == 5) {
            $("#yesornoBlock").hide()
            addMessage("bot","That's okay. Let me show you some techniques that can help you manage your negative emotions. Click OK to continue")
            index = 8 //Go to Activities
            $("#okBlock").show()
            //alert("Game")
        }

        else if (index == 7) {
            $("#yesornoBlock").hide()
            addMessage("bot", "Great! You can tell me anything you would like to.")
            timeout = setTimeout(function () {
                addMessage("bot", "Are you still typing, " + name + "? <br /> I'd hate to cut you off, but I do want to make sure we have time for our activity at the end. Go ahead and take another minute to finish up your message.")
                timeout = setTimeout(function () {
                    addMessage("bot", "It seems like you might have changed your mind about wanting to talk with me. That's okay, we can just skip to the next activity.")
                }, 60000); //60
            }, 300000); //300
            $("#userInputBlock").show()
            $("#userMessage").val("")
            index = 6 //Go to severity questions
        }

        else if (index == 10) {
            $("#yesornoBlock").hide()
            addMessage("bot", "Great! You can tell me anything you would like to.")
            timeout = setTimeout(function () {
                addMessage("bot", "Are you still typing, " + name + "? <br /> I'd hate to cut you off, but I do want to make sure we have time for our activity at the end. Go ahead and take another minute to finish up your message.")
                timeout = setTimeout(function () {
                    addMessage("bot", "It seems like you might have changed your mind about wanting to talk with me. That's okay, we can just skip to the next activity.")
                }, 60000); //60
            }, 300000); //300
            $("#userInputBlock").show()
            $("#userMessage").val("")
            index = 11 //Go to severity questions
        }

    })

    
    $(".no").click(function () {
        clearTimeout(timeout);
        addMessage("user", "No")
        if (index == 3) {
            $("#yesornoBlock").hide()
            addMessage("bot","Good! It's great to hear that. Soon, we will play a quick game, but we can chat a bit first, if you would like. If there are any problems or stressers you'd like to vent about, you have the opportunity to do so now. Is there anything you'd like to talk to me about?")
            $("#yesornoBlock").show()
            index = 7
        }

        else if (index == 4) {
            $("#yesornoBlock").hide()
            addMessage("bot","Are you sure? Sometimes it can feel good to get it off your chest. However, if you don't feel comfortable talking about it right now, I can just share some ideas to help you feel better.")
            $("#yesornoBlock").show()
            index = 5
        }

        else if (index == 5) {
            $("#yesornoBlock").hide()
            addMessage("bot","I'm glad to hear that you feel comfortable telling me about it. I'll give you an opportunity to do so in just a moment. First, I just have a few questions for you. Click OK to continue.")
            $("#okBlock").show()
            //$("#userMessage").val("")
            index = 6 //Go to severity questions
        }

        else if (index == 7) {
            $("#yesornoBlock").hide()
            addMessage("bot","Okay. Lots of us have stressors that may not always be on our minds, but when we are thinking about them, they can really bring about some negative feelings. I would like to show you a simple technique that can help you manage your negative emotions when they do come up. Click OK to continue")
            index = 8 //Go to Activities
            $("#okBlock").show()
            //alert("Game")
        }

        else if (index == 10) {
            $("#yesornoBlock").hide()
            addMessage("bot","Lots of people struggle to deal with negative emotions. Sometimes we can change the underlying situation that causes the emotions, but sometimes that's outside of our control. While we may not always have control over the situation, we can change our emotional response to it. It's not always easy to do, but luckily, there are a number of simple activities that can help with this. I'd like to show you a calming game. Click OK to continue")
            index = 12 //Go to Activities
            $("#okBlock").show()
            //alert("Game")
        }
    })

    $(".ok").click(function () {
        clearTimeout(timeout);
        addMessage("user", "Ok")
        //displayIframe()
        if (index == 14 || index == 8 || index == 12) {
            $("#okBlock").hide()
            $("#gameBlock").show()
            addMessage("bot", "Once you enjoyed the game, click OK")
            index = 15 //After game
            //$("#okBlock").show()
        }
        else if (index == 6) {
            $("#okBlock").hide()
            severityQuestions(1)
        }

        else if (index == 13) {
            $("#okBlock").hide()
            addMessage("bot", "Lots of people struggle to deal with negative emotions. Sometimes we can change the underlying situation that causes the emotions, but sometimes that's outside of our control. While we may not always have control over the situation, we can change our emotional response to it. It's not always easy to do, but luckily, there are a number of simple activities that can help with this. I'd like to show you a calming game. Click OK to continue")
            index = 14 //Go to Activities
            $("#okBlock").show()
        }
        else if (index == 15) {
            $("#gameBlock").hide()
            addMessage("bot", "I hope you enjoyed that! Remember, this is something you can do on your own anytime to reduce your negative emotions. I'm also going to send you a link to the game so that you can play it whenever you want.")
            if (isVenting)  {
                addMessage("bot", "Thanks for taking the time to speak with me today. I hope this helped you feel a little better. Even if you didn't notice a change in your negative emotions during the session, you may find that this new technique comes in handy later on. Remember that the more you practice at it, the better it will work.")
            }
            else {
                addMessage("bot", "Thanks for taking the time to speak with me today. I hope you enjoyed the game. You may find that this new technique comes in handy at some point later on, when you are feeling stressed, frustrated, or upset. Remember that the more you practice at it, the better it will work.")
            }
            addMessage("bot", "I hope you have a great day.")
        }
    });

    $(".ques1").click(function () {
        addMessage("user", $(this)[0].innerText)
        severity += parseInt($(this).val())
        $("#question1").hide()
        severityQuestions(2)
    });

    $(".ques2").click(function () {
        addMessage("user", $(this)[0].innerText)
        severity += parseInt($(this).val())
        $("#question2").hide()
        severityQuestions(3)
    });

    $(".ques3").click(function () {
        addMessage("user", $(this)[0].innerText)
        severity += parseInt($(this).val())
        $("#question3").hide()
        addMessage("bot", "Thanks for answering those questions for me, " + name + ". Now, you can go ahead and tell me about what's been going on. You can tell me more about the way you're feeling and why. ")
        
        index = 9
        timeout = setTimeout(function () {
            addMessage("bot", "Are you still typing, " + name + "? <br /> I'd hate to cut you off, but I do want to make sure we have time for our activity at the end. Go ahead and take another minute to finish up your message.")
            timeout = setTimeout(function () {
                addMessage("bot", "It seems like you might have changed your mind about wanting to talk with me. That's okay, we can just skip to the next activity.")
            }, 60000);  //60
        }, 300000); //300
        $("#userInputBlock").show()
        $("#userMessage").val("")
    });

    function getValidationMessage(score, ind) {
        var msg = ''
        if (score <= 6) {
            var items = ["Even though this hasn't taken a huge toll on you. I'm sure it's still hard to be dealing with these feelings. I'm really glad you shared this with me.",
                         "I see... That's sounds pretty difficult. Your reaction is definitely understandable."]
            msg = items[ind];
            
            
        }
        else if (score > 6 && score <= 11) {
            var items = ["That sounds really tough. I can see why it’s got you feeling this way.",
                "This certainly sounds like an upsetting situation and I'm sure it's not easy to talk about this stuff. I'm really glad you shared this with me."]
            msg = items[ind];
            
        }
        else if (score >= 12) {
            var items = ["It sounds like this has been really upsetting and I can see why. The way you're feeling right now is totally valid.",
                "I can only imagine what that must be like for you. Thank you for being so open with me about this. I know it must be really difficult to talk about."]
            msg = items[ind];
            
        }

        var addMsg = ''
        if (ind == 0) {
            addMsg = 'Is there anything else? Anything you would like to add?'
            index = 10
            addMessage("bot", msg + "<br /> <br />" + addMsg)
            $("#yesornoBlock").show()
        }
        else {
            addMsg = 'Click OK to continue.'
            index = 13
            addMessage("bot", msg + "<br /> <br />" + addMsg)
            $("#okBlock").show()

           
        }
        

    }

    function severityQuestions(question) {

        if (question == 1) {
            addMessage("bot","How intense have these emotions been?")
            $("#question1").show()
        }

        if (question == 2) {
            addMessage("bot","How much have these emotions bothered you?")
            $("#question2").show()
        }

        if (question == 3) {
            addMessage("bot","How much has this impacted your concentration or ability to focus your attention on tasks?")
            $("#question3").show()
        }
    }

    

    function addMessage(type, message) {
        var html = '';
        if (type == 'user') {
            html = "<div class='user_msg_div'><div class='user_msg_main_div'><p style='word-wrap: break-word'>" + message + "</p></div></div>"
        }
        else if (type == 'bot') {
            
            html = "<div class='bot_msg_div'><div class='bot_msg_main_div'><div class='bot_msg_inner_div'><p style='word-wrap: break-word;background: #f0ecda'>" + message + "</p></div></div></div>"
            
        }

        $('#chatDiv').append(html)
        var element = document.getElementById("chatDiv");
        element.scrollTop = element.scrollHeight;
    }
    
    function countChar(val) {
        var len = val.length;
        if (len >= 241) {
            message = $("#userMessage").val()
            $("#userMessage").val(message.substring(0, 240));
        } else {
            $('#charNum').text(len.toString()+'/240');
        }
    };

    //function addThinking(type, condition) {
    //    var html = '';
    //    if (type == 'user') {
    //        html = "<div id='user_thinking' class='user_msg_div'><div class='user_msg_main_div'><div class='ticontainer'><div class='tiblock'><div class='tidot'></div><div class='tidot'></div><div class='tidot'></div></div></div></div></div > "
    //    }
    //    else {
    //        html = "<div id='bot_thinking' class='bot_msg_div'><div class='bot_msg_main_div'><div class='bot_msg_inner_div'><div class='ticontainer'><div class='tiblock'><div class='tidot'></div><div class='tidot'></div><div class='tidot'></div></div></div></div></div></div>"
    //    }
    //    $('#chatDiv').append(html)
    //    var element = document.getElementById("chatDiv");
    //    element.scrollTop = element.scrollHeight;
    //}

  

});