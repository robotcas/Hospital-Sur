const open_modal = document.getElementById("open_modal");

const fondo_modal = document.querySelector(".fondo_modal");
const modal = document.querySelector(".modal");

// seleccionamos todos los botones de la modal
const close_modal_btns = document.querySelectorAll(".close_modal");

// evento click
open_modal.addEventListener("click", () => {
  fondo_modal.classList.remove("hidden");
  modal.classList.remove("hidden");
});

// close_modal_btns => contiene multiples elementos html
// por lo que no se puede hacer el evento click directamente

for (let btn_modal of close_modal_btns) {
  btn_modal.addEventListener("click", () => {
    fondo_modal.classList.add("hidden");
    modal.classList.add("hidden");
  });
}

const open_modaldos = document.getElementById("open_modaldos");

const fondo_modaldos = document.querySelector(".fondo_modaldos");
const modaldos = document.querySelector(".modaldos");

// seleccionamos todos los botones de la modal
const close_modaldos_btns = document.querySelectorAll(".close_modaldos");

// evento click
open_modaldos.addEventListener("click", () => {
  fondo_modaldos.classList.remove("hiddendos");
  modaldos.classList.remove("hiddendos");
});

// close_modal_btns => contiene multiples elementos html
// por lo que no se puede hacer el evento click directamente

for (let btn_modaldos of close_modaldos_btns) {
  btn_modaldos.addEventListener("click", () => {
    fondo_modaldos.classList.add("hiddendos");
    modaldos.classList.add("hiddendos");
  });
}

const open_modaltres = document.getElementById("open_modaltres");

const fondo_modaltres = document.querySelector(".fondo_modaltres");
const modaltres = document.querySelector(".modaltres");

// seleccionamos todos los botones de la modal
const close_modaltres_btns = document.querySelectorAll(".close_modaltres");

// evento click
open_modaltres.addEventListener("click", () => {
  fondo_modaltres.classList.remove("hiddentres");
  modaltres.classList.remove("hiddentres");
});

// close_modal_btns => contiene multiples elementos html
// por lo que no se puede hacer el evento click directamente

for (let btn_modaltres of close_modaltres_btns) {
  btn_modaltres.addEventListener("click", () => {
    fondo_modaltres.classList.add("hiddentres");
    modaltres.classList.add("hiddentres");
  });
}

const open_modalcuatro = document.getElementById("open_modalcuatro");

const fondo_modalcuatro = document.querySelector(".fondo_modalcuatro");
const modalcuatro = document.querySelector(".modalcuatro");

// seleccionamos todos los botones de la modal
const close_modalcuatro_btns = document.querySelectorAll(".close_modalcuatro");

// evento click
open_modalcuatro.addEventListener("click", () => {
  fondo_modalcuatro.classList.remove("hiddencuatro");
  modalcuatro.classList.remove("hiddencuatro");
});

// close_modal_btns => contiene multiples elementos html
// por lo que no se puede hacer el evento click directamente

for (let btn_modalcuatro of close_modalcuatro_btns) {
  btn_modalcuatro.addEventListener("click", () => {
    fondo_modalcuatro.classList.add("hiddencuatro");
    modalcuatro.classList.add("hiddencuatro");
  });
}


const open_modalcinco = document.getElementById("open_modalcinco");

const fondo_modalcinco = document.querySelector(".fondo_modalcinco");
const modalcinco = document.querySelector(".modalcinco");

// seleccionamos todos los botones de la modal
const close_modalcinco_btns = document.querySelectorAll(".close_modalcinco");

// evento click
open_modalcinco.addEventListener("click", () => {
  fondo_modalcinco.classList.remove("hiddencinco");
  modalcinco.classList.remove("hiddencinco");
});

// close_modal_btns => contiene multiples elementos html
// por lo que no se puede hacer el evento click directamente

for (let btn_modalcinco of close_modalcinco_btns) {
  btn_modalcinco.addEventListener("click", () => {
    fondo_modalcinco.classList.add("hiddencinco");
    modalcinco.classList.add("hiddencinco");
  });
}

const open_modalseis = document.getElementById("open_modalseis");

const fondo_modalseis = document.querySelector(".fondo_modalseis");
const modalseis = document.querySelector(".modalseis");

// seleccionamos todos los botones de la modal
const close_modalseis_btns = document.querySelectorAll(".close_modalseis");

// evento click
open_modalseis.addEventListener("click", () => {
  fondo_modalseis.classList.remove("hiddenseis");
  modalseis.classList.remove("hiddenseis");
});

// close_modal_btns => contiene multiples elementos html
// por lo que no se puede hacer el evento click directamente

for (let btn_modalseis of close_modalseis_btns) {
  btn_modalseis.addEventListener("click", () => {
    fondo_modalseis.classList.add("hiddenseis");
    modalseis.classList.add("hiddenseis");
  });
}

const open_modalsiete = document.getElementById("open_modalsiete");

const fondo_modalsiete = document.querySelector(".fondo_modalsiete");
const modalsiete = document.querySelector(".modalsiete");

// seleccionamos todos los botones de la modal
const close_modalsiete_btns = document.querySelectorAll(".close_modalsiete");

// evento click
open_modalsiete.addEventListener("click", () => {
  fondo_modalsiete.classList.remove("hiddensiete");
  modalsiete.classList.remove("hiddensiete");
});

// close_modal_btns => contiene multiples elementos html
// por lo que no se puede hacer el evento click directamente

for (let btn_modalsiete of close_modalsiete_btns) {
  btn_modalsiete.addEventListener("click", () => {
    fondo_modalsiete.classList.add("hiddensiete");
    modalsiete.classList.add("hiddensiete");
  });
}

const open_modalocho = document.getElementById("open_modalocho");

const fondo_modalocho = document.querySelector(".fondo_modalocho");
const modalocho = document.querySelector(".modalocho");

// seleccionamos todos los botones de la modal
const close_modalocho_btns = document.querySelectorAll(".close_modalocho");

// evento click
open_modalocho.addEventListener("click", () => {
  fondo_modalocho.classList.remove("hiddenocho");
  modalocho.classList.remove("hiddenocho");
});

// close_modal_btns => contiene multiples elementos html
// por lo que no se puede hacer el evento click directamente

for (let btn_modalocho of close_modalocho_btns) {
  btn_modalocho.addEventListener("click", () => {
    fondo_modalocho.classList.add("hiddenocho");
    modalocho.classList.add("hiddenocho");
  });
}

const open_modalnueve = document.getElementById("open_modalnueve");

const fondo_modalnueve = document.querySelector(".fondo_modalnueve");
const modalnueve = document.querySelector(".modalnueve");

// seleccionamos todos los botones de la modal
const close_modalnueve_btns = document.querySelectorAll(".close_modalnueve");

// evento click
open_modalnueve.addEventListener("click", () => {
  fondo_modalnueve.classList.remove("hiddennueve");
  modalnueve.classList.remove("hiddennueve");
});

// close_modal_btns => contiene multiples elementos html
// por lo que no se puede hacer el evento click directamente

for (let btn_modalnueve of close_modalnueve_btns) {
  btn_modalnueve.addEventListener("click", () => {
    fondo_modalnueve.classList.add("hiddennueve");
    modalnueve.classList.add("hiddennueve");
  });
}

const open_modaldiez = document.getElementById("open_modaldiez");

const fondo_modaldiez = document.querySelector(".fondo_modaldiez");
const modaldiez = document.querySelector(".modaldiez");

// seleccionamos todos los botones de la modal
const close_modaldiez_btns = document.querySelectorAll(".close_modaldiez");

// evento click
open_modaldiez.addEventListener("click", () => {
  fondo_modaldiez.classList.remove("hiddendiez");
  modaldiez.classList.remove("hiddendiez");
});

// close_modal_btns => contiene multiples elementos html
// por lo que no se puede hacer el evento click directamente

for (let btn_modaldiez of close_modaldiez_btns) {
  btn_modaldiez.addEventListener("click", () => {
    fondo_modaldiez.classList.add("hiddendiez");
    modaldiez.classList.add("hiddendiez");
  });
}

const open_modalonce = document.getElementById("open_modalonce");

const fondo_modalonce = document.querySelector(".fondo_modalonce");
const modalonce = document.querySelector(".modalonce");

// seleccionamos todos los botones de la modal
const close_modalonce_btns = document.querySelectorAll(".close_modalonce");

// evento click
open_modalonce.addEventListener("click", () => {
  fondo_modalonce.classList.remove("hiddenonce");
  modalonce.classList.remove("hiddenonce");
});

// close_modal_btns => contiene multiples elementos html
// por lo que no se puede hacer el evento click directamente

for (let btn_modalonce of close_modalonce_btns) {
  btn_modalonce.addEventListener("click", () => {
    fondo_modalonce.classList.add("hiddenonce");
    modalonce.classList.add("hiddenonce");
  });
}

const open_modaldoce = document.getElementById("open_modaldoce");

const fondo_modaldoce = document.querySelector(".fondo_modaldoce");
const modaldoce = document.querySelector(".modaldoce");

// seleccionamos todos los botones de la modal
const close_modaldoce_btns = document.querySelectorAll(".close_modaldoce");

// evento click
open_modaldoce.addEventListener("click", () => {
  fondo_modaldoce.classList.remove("hiddendoce");
  modaldoce.classList.remove("hiddendoce");
});

// close_modal_btns => contiene multiples elementos html
// por lo que no se puede hacer el evento click directamente

for (let btn_modaldoce of close_modaldoce_btns) {
  btn_modaldoce.addEventListener("click", () => {
    fondo_modaldoce.classList.add("hiddendoce");
    modaldoce.classList.add("hiddendoce");
  });
}
