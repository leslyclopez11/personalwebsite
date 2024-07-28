function emailSend() {
    var email = document.getElementById('email').value;
    var userName = document.getElementById('name').value;
    var message = document.getElementById('message').value;

    var messageBody = "Email: " + email +
                      "<br/>Name: " + userName +
                      "<br/>Message: " + message;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "leslycatota2004@gmail.com",
        Password: "75E6B91AB663AF013AF71B09C61AC926B5F8",
        To: 'leslyclopez11@gmail.com',
        From: "leslycatota2004@gmail.com",
        Subject: "Contact Form Submission",
        Body: messageBody
    }).then(
        message => {
            if (message === 'OK') {
                swal({
                    title: 'Success',
                    text: 'Message sent successfully!',
                    icon: 'success',
                    button: 'OK'
                });
            } else {
                swal({
                    title: 'Error',
                    text: 'Failed to send message.',
                    icon: 'error',
                    button: 'OK'
                });
                console.error(message);
            }
        }
    );

    // Prevent form submission
    return false;
}