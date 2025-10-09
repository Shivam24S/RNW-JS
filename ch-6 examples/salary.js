document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const basicSalary = document.getElementById("basicSalary").value;

  const HRA = parseFloat(document.getElementById("hra").value);

  const DA = parseFloat(document.getElementById("da").value);

  const TA = parseFloat(document.getElementById("ta").value);

  //   const hraAmount = (basicSalary*hra)/100

  const grossSalary = basicSalary * (1 + (HRA + DA + TA) / 100);

  document.getElementById("grossSalary").innerHTML = `<h1>₹${grossSalary}</h1>`;
});
