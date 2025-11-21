// Preencher data/hora atual automaticamente

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
