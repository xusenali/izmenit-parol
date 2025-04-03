
const passBtn = document.querySelector(".btn");
const newbtn = document.querySelector(".btnnew");
const changeBtn = document.querySelector(".btnchange");
const loginbtn = document.querySelector("#btnLogin");
const formdata = document.querySelector(".container");
const changeData = document.querySelector(".changpas");
const newData = document.querySelector(".newpass");
const exit = document.querySelector(".exit");
const newexit = document.querySelector(".exitt");
const changeinput = document.querySelector(".inputchange");
const inputpass = document.querySelector(".inputpass");
const newInpit = document.querySelector(".inputnew");

const user = {
    username: "admin",
    password: "admin"
};

function initializeUI() {
    formdata.style.display = "flex";
    changeData.style.display = "none";
    passBtn.style.display = "none";
    newData.style.display = "none";
}


function handleLoginClick() {
    passBtn.style.display = "block";
}


function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(formdata);
    user.username = formData.get("username");
    user.password = formData.get("password");
    console.log("Foydalanuvchi yangilandi:", user);
}


function handleChangePasswordClick() {
    if (changeinput.value === user.password) {
        changeData.style.display = "none";
        newData.style.display = "flex";
        changeinput.style.border = "transparent";
        changeinput.value = "";
    } else {
        changeinput.style.border = "1px solid red";
    }
}


function handleSaveNewPasswordClick() {
    user.password = newInpit.value;
    changeData.style.display = "none";
    newData.style.display = "none";
    formdata.style.display = "flex";
    passBtn.style.display = "block";
    newInpit.value = "";
    inputpass.value = "";
    console.log("Yangi parol saqlandi:", user.password);
    alert("Yangi parol saqlandi!");
}


function handlePassBtnClick() {
    formdata.style.display = "none";
    changeData.style.display = "flex";
    passBtn.style.display = "none";
}


function handleExitClick() {
    formdata.style.display = "flex";
    changeData.style.display = "none";
}


function handleNewExitClick() {
    changeData.style.display = "flex";
    newData.style.display = "none";
}


function attachEventListeners() {
    if (loginbtn) loginbtn.addEventListener("click", handleLoginClick);
    if (formdata) formdata.addEventListener("submit", handleFormSubmit);
    if (changeBtn) changeBtn.addEventListener("click", handleChangePasswordClick);
    if (newbtn) newbtn.addEventListener("click", handleSaveNewPasswordClick);
    if (passBtn) passBtn.addEventListener("click", handlePassBtnClick);
    if (exit) exit.addEventListener("click", handleExitClick);
    if (newexit) newexit.addEventListener("click", handleNewExitClick);
}


document.addEventListener("DOMContentLoaded", function () {
    initializeUI();
    attachEventListeners();
});




