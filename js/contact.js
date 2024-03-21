let form = document.getElementById("contact");
    document.getElementById("contact").onsubmit = function(event) {
        event.preventDefault();

        // Collect form data
        const formData = new FormData(this);

        // Send email using EmailJS
        emailjs.init("service_hivarve","template_db3vxyi", "15uvCbWBezx9UHs3k", {
            from_name: formData.get("name"),
            from_email: formData.get("email"),
            from_email: formData.get("phone"),
            message: formData.get("message")
        })
        .then(function(response) {
            console.log("Email sent successfully:", response);
        }, function(error) {
            console.error("Email could not be sent:", error);
        });
    };

form.reset()