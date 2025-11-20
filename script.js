document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting Moonkey Collection! We’ll get back to you soon.");
  this.reset();
});
function sendToWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // 🔢 Replace this with your actual WhatsApp number (no spaces, no + sign)
  const phoneNumber = "2349134049410";

  const text = `Hello Moonkey Collection,%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Subject:* ${subject}%0A*Message:* ${message}`;
  const url = `https://wa.me/${phoneNumber}?text=${text}`;

  window.open(url, "_blank");
}
// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


