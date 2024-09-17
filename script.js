// Initialize EmailJS with your user ID 
// This is necessary to link your website to your EmailJS account
emailjs.init("5oTlrA08AwkZPNSUD");

// Select the button with the class 'send-btn' and the element where results will be displayed
const sendBtn = document.querySelector('.send-btn');
const result = document.querySelector('.result');

// Add an event listener to the send button to trigger the sendEmail function when clicked
sendBtn.addEventListener('click', sendEmail);

// Function to send an email using EmailJS
function sendEmail() {
    // Get the form data by retrieving the values from input fields
    const to = document.getElementById("to").value; // Recipient's email address
    const subject = document.getElementById("subject").value; // Subject of the email
    const message = document.getElementById("message").value; // Message content of the email

    // Send the email using EmailJS
    // - "service_4q7i2rn" is the service ID 
    // - "template_13ucpmb" is the template ID 
    // - The third parameter is an object containing the variables to be replaced in the email template
    
    emailjs.send("service_4q7i2rn", "template_13ucpmb", {
        to_email: to,
        subject: subject,
        message: message
    })
    .then(function () {
        // If the email is sent successfully, update the result element to show a success message
        result.innerHTML = "Email sent successfully!";
        result.style.opacity = 1; // Make the result message visible
    }, function (error) {
        // If there is an error while sending the email, update the result element to show a failure message
        result.innerHTML = "Email sending failed!";
        result.style.opacity = 1; // Make the result message visible
    });
}
