// wait the page load
window.onload = function() {

  //form
  const form = document.getElementById('bookingForm');
  
  form.addEventListener('submit', function(e) {
    e.preventDefault(); // if wrong cannot send it
    
    // validation
    let valid = true;
    
    // Name (min 3 letters)
    const name = document.getElementById('fullName').value;
    if (name.length < 3) {
      alert(" ❌ Name is too short (min 3 letters).");
      valid = false;
    }
    
    // Email (@ e .)
    const email = document.getElementById('email').value;
    if (!email.includes('@') || !email.includes('.')) {
      alert("Invalid email!");
      valid = false;
    }
    const phone = document.getElementById('phone').value;
    if (!/^[0-9]{10,15}$/.test(phone)) {
      alert("❌ Phone must have 10-15 numbers");
    valid = false;
    }
    if (!document.querySelector('input[name="duration"]:checked')) {
      alert("❌ Please select a duration!");
      valid = false;
    }

    // if everithing is okay
    if (valid) {
      alert("✅Booking completed! We'll contact you soon.");
      form.reset(); // 
    }
  });
};