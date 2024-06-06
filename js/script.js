// untuk validasi form pada index.html
function validateFormIndex() {
  const nama = document.forms['message-form']['name-input'].value;
  const lahir = document.forms['message-form']['lahir-input'].value;
  const gender = document.forms['message-form']['gender'].value;
  const pesan = document.forms['message-form']['pesan-input'].value;
  if (nama == "" || lahir == "" || gender == "" || pesan == "") {
    alert("data tidak boleh kosong");
    return false
  }

  setResult(nama, lahir, gender, pesan);

  return false

}
function setResult(name, date, gender, message) {
  document.getElementById("name").innerHTML = name
  document.getElementById("lahir").innerHTML = date
  document.getElementById("gender").innerHTML = gender
  document.getElementById("pesan").innerHTML = message
}

