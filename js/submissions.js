// Prevent Refresh
$("#submit_form").submit(function(e) {
    e.preventDefault();
});

// Submit the form
function submitForm(){
    var msg = document.getElementById('submit_msg');
    msg.innerHTML = "Thank you so much for choosing to join our community and submitting your artwork. Our purpose is to create a connection between children and their medically-related sources, and your submission is doing just that. Check out our social media pages over the next few weeks to see your art masterpiece."
}