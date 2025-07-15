document.getElementById("customerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;

  const data = {
    FirstName: form.firstName.value,
    LastName: form.lastName.value,
    Gender: form.gender.value,
    Address: form.address.value,
    Contact: form.contact.value,
    Email: form.email.value,
    DOB: form.dob.value,
    Username: form.username.value,
    Password: form.password.value
  };

  // Format and display data
  let output = "";
  for (let key in data) {
    output += `${key}: ${data[key]}\n`;
  }

  document.getElementById("result").textContent = output;

  // Clear form manually after displaying
  form.reset();
});
