let naam = document.querySelector("#name");
let email = document.querySelector("#email");
let num = document.querySelector("#number");
let mass = document.querySelector("#mass");
let btn = document.querySelector("#btn");
let print = document.querySelector("#print");

function createItem() {
  var list1 = document.createElement("div");
  var nameBox = document.createElement("div");
  var emailBox = document.createElement("div");
  var numBox = document.createElement("div");
  var massBox = document.createElement("div");
  var edit = document.createElement("img");
  var update = document.querySelector("#update");

  list1.className = "grid grid-cols-[3%_auto_auto_auto_auto] mt-[18px]";
  nameBox.className = "border px-2";
  nameBox.innerText = naam.value;
  emailBox.className = "border px-2";
  emailBox.innerText = email.value;
  numBox.className = "border px-2";
  numBox.innerText = num.value;
  massBox.className = "border px-2";
  massBox.innerText = mass.value;
  edit.classList = "ml-[10px]";
  edit.src = "Assets/pencil.svg";

  edit.addEventListener("click", () => {
    naam.value = nameBox.innerText;
    email.value = emailBox.innerText;
    num.value = numBox.innerText;
    mass.value = massBox.innerText;
    update.addEventListener("click", () => {
      nameBox.innerText = naam.value;
      emailBox.innerText = email.value;
      numBox.innerText = num.value;
      massBox.innerText = mass.value;
    });
  });

  print.appendChild(list1);
  list1.appendChild(edit);
  list1.appendChild(nameBox);
  list1.appendChild(emailBox);
  list1.appendChild(numBox);
  list1.appendChild(massBox);
  naam.value = "";
  email.value = "";
  num.value = "";
  mass.value = "";
}

btn.addEventListener("click", () => {
  createItem();
});
