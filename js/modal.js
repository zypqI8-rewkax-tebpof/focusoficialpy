// Get the modal
var modal = document.getElementById("contactModal");

// Function to open the modal
function openModal() {
   modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
   modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
   if (event.target == modal) {
      modal.style.display = "none";
   }
}

// Form submission handling
document.getElementById("contactForm").onsubmit = function(event) {
   event.preventDefault();
   var name = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var message = document.getElementById("message").value;

   // Construct the WhatsApp message
   var whatsappMessage = "Nombre: " + name + "%0AEmail: " + email + "%0AMensaje: " + message;
   
   // Replace the phone number with your WhatsApp number
   var whatsappUrl = "https://api.whatsapp.com/send?phone=595981188037&text=" + whatsappMessage;

   // Open WhatsApp link
   window.open(whatsappUrl, "_blank");

   // Close the modal
   closeModal();
};
