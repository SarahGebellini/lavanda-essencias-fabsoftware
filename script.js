// Preencher data/hora atual automaticamente
const firebaseConfig = {
  apiKey: "AIzaSyCWyCtdNQCPay2qIZZFAefCHuS8UnKg0RA",
  authDomain: "lavanderiaessencia-97705.firebaseapp.com",
  databaseURL: "https://lavanderiaessencia-97705-default-rtdb.firebaseio.com",
  projectId: "lavanderiaessencia-97705",
  storageBucket: "lavanderiaessencia-97705.firebasestorage.app",
  messagingSenderId: "926952648643",
  appId: "1:926952648643:web:dc368bb5f3644d5c12d776"
};

const now = new Date();
now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
document.getElementById('datahora').value = now.toISOString().slice(0,16);

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("formPeca");
    const modal = document.getElementById("confirmModal");
    const fecharModalBtn = document.getElementById("fecharModal");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
    });

    fecharModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target.id === "confirmModal") {
            modal.style.display = "none";
        }
    });

});