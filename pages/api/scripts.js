function formEmail() {
    document.getElementById("emailFormSubmit").addEventListener("click", function() {
        var email = document.getElementById("emailForm").value;
        var name = document.getElementById("nameForm").value;
        var message = document.getElementById("messageForm").value;
        var subject = document.getElementById("subjectForm").value;
        var body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
        window.open("mailto:ialdo1206@gmail.com?subject=" + subject + "&body=" + body);
    });
}