function reverseString(str) {
  return str.split("").reverse().join("");
}

function validateEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validatePassword(password) {
  const passwordPattern =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{12,}$/;
  return passwordPattern.test(password);
}

console.log(reverseString("hello")); // Output: "olleh"

console.log(validateEmail("test@example.com")); // Output: true
console.log(validateEmail("invalid-email")); // Output: false

console.log(validatePassword("StrongPass1!")); // Output: true
console.log(validatePassword("weakpass")); // Output: false
