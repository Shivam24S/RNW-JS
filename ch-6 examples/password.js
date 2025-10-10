document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const currentPassword = "123456";

  const oldPassword = document.getElementById("old").value;

  const newPassword = document.getElementById("new").value;

  if (oldPassword != currentPassword) {
    document.getElementById(
      "status"
    ).innerHTML = `<h1>old password is not matched</h1>`;
  } else if (newPassword.length < 6) {
    document.getElementById(
      "status"
    ).innerHTML = `<h1>password must contain at least 6 character</h1>`;
  } else if (newPassword === currentPassword) {
    document.getElementById(
      "status"
    ).innerHTML = `<h1>new password is same as old</h1>`;
  } else {
    document.getElementById("status").innerHTML = `<h1>password updated</h1>`;
  }
});
