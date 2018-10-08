$(document).ready(function () {

    $.ajax({
        url: "http://172.16.15.200:3000/pull",
        dataType: "json",
    }).done(response => {
        data = response;
        console.log(data);
        displayChat();
    });
    //////

    var displayChat = () => {
        chatBox = $(".inner-chat");
        chatBox.empty();
        data.messages.forEach(item => {
            let messageContainer = $("<div>");
            messageContainer.addClass("cell");
            let message = $("<div>");
            message.html(`<h5>${item.name}</h5><h6>${item.subject}</h6><p>${item.message}</p>`);
            messageContainer.append(message);
            chatBox.append(messageContainer);
        })
    }


    $("#button-submit").on('click', event => {
        event.preventDefault();
        let i = 0;
        var name = $("#name").val();
        var surname = $("#surname").val();
        var object = $("#object").val();
        var message = $("#message").val();
        var todayDate = new Date($.now());
        // Input control
        if (name.length < 3) {
            $(".error-name").text("Nome incompleto, deve essere più lungo di 3 caratteri.");
            i++;
        } else {
            $(".error-name").text("");
        }
        if (surname.length < 3) {
            $(".error-surname").text("Cognome incompleto, deve essere più lungo di 3 caratteri.");
            i++;
        } else {
            $(".error-surname").text("");
        }
        if (object >= 1 && object <= 5) {
            $(".error-object").text("Oggetto incompleto, deve essere più lungo di 5 caratteri o lasciato vuoto.");
            i++;
        } else {
            $(".error-object").text("");
        }
        if (message.length < 1) {
            $(".error-message").text("Messaggio incompleto, deve essere più lungo di 25 caratteri.");
            i++;
        } else {
            $(".error-message").text("");
        }
        if (i === 0) {
            //Create new div
            var div = $("<div>");
            div.addClass("message-box");

            div.html(`<p>Nome: ${name}.<br/>Cognome: ${surname}.<br/>Oggetto: ${object}.<br/>Testo: ${message}.</p><br/><span class="date-time-message">Data invio: ${todayDate}</span><hr/>`);
            alert("Messaggio inviato.");
            // Append div
            $(".inner-chat").append($(div)).fadeIn();
            $('.chat').css({
                'border': '5px solid lightgreen',
                'animation': 'anim 2s ease-in-out ',
            });
            // Set time for animation
            setTimeout(function () {
                $('.chat').css('border', '5px solid white');
            }, 1500);
            //Call function for send new message
            newMessage();

            var myMessage = {
                "id": data.messages.length + 1,
                "name": name + " " + surname,
                "subject": object,
                "message": message,
            }

            $.ajax({
                url: "http://172.16.15.200:3000/push",
                dataType: "json",
                data: {
                    "message": encodeURIComponent(JSON.stringify(myMessage)),
                },
                statusCode: {
                    200: function () {
                        console.log("Message is pushed.");
                    }
                }
            })
        }

        function newMessage() {
            // Hide name and surname form
            $(".name-form").fadeOut();
            $(".surname-form").fadeOut();
            // Clean object and message
            $("#object").val('');
            $("#message").val('');
        }
    });
});