// const otp = Math.round(Math.random() * 10000);
// console.log(otp);

const genaratePin = () => {
  const random = Math.round(Math.random() * 10000);
  return random;
};

const getPin = () => {
  const pin = genaratePin();
  const pinStr = pin + "";
  if (pinStr.length === 4) {
    return pin;
  } else {
    return getPin();
  }
};

document.querySelector(".generate-btn").addEventListener("click", () => {
  const otpPin = getPin();
  const otpField = document.getElementById("otp-display");
  otpField.value = otpPin;
  document.querySelector(".generate-btn").setAttribute("disabled", true);
});

document.querySelector(".calc-body").addEventListener("click", (e) => {
  const pinField = document.getElementById("input-pin");
  const previousPin = pinField.value;
  const number = e.target.innerText;

  if (!isNaN(number)) {
    const newPin = previousPin + number;
    pinField.value = newPin;
  } else {
    if (number == "C") {
      pinField.value = "";
    } else if (number == "<") {
      const pinArr = previousPin.split("");
      pinArr.pop();
      const remainingPin = pinArr.join("");
      pinField.value = remainingPin;
    }
  }
});

document.querySelector(".submit-btn").addEventListener("click", () => {
  const newOtp = document.getElementById("otp-display").value;
  const myPin = document.getElementById("input-pin").value;

  if (newOtp === myPin) {
    document.getElementById("success").style.display = "block";
    document.getElementById("error").style.display = "none";
    document.getElementById("generate-btn").removeAttribute("disabled");
  } else {
    let chance = 3;
    chance--;
    document.getElementById("error").style.display = "block";
    document.getElementById("success").style.display = "none";
    document.getElementById("chance").innerText = chance;
    if (chance == 0) {
      document.querySelector(".submit-btn").setAttribute("disabled", true);
    }
  }
});
