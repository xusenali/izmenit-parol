let changeBtn = document.querySelector(".btn");
changeBtn.style.display = "none";
let loginbtn = document.querySelector("#btnLogin");
let formdata = document.querySelector(".container");
formdata.style.display = "none";

loginbtn.addEventListener("click", function () {
    changeBtn.style.display = "block";
});
if (formdata) {
    formdata.addEventListener("submit", function (e) {
        e.preventDefault();
        let formData = new FormData(this);
        let user = {
            username: formData.get("username"),
            password: formData.get("password")
        };

        console.log(user);
    });
    changeBtn.addEventListener("click", function () {
        formdata.style.display = "none";
    });
}




