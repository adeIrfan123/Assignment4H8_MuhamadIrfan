const btnEdit = document.getElementById("edit");
const inputSection = document.getElementById("input-section");
btnEdit.addEventListener("click", function () {
  inputSection.classList.toggle("hidden");
});

function displayData() {
  let data = JSON.parse(localStorage.getItem("data")) || [];
  let dataUser1 = document.getElementById("data-user1");
  let dataUser2 = document.getElementById("data-user2");

  dataUser2.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    dataUser1.innerHTML = `
            <h1 id="name" class="font-bold text-3xl">${data[i].name}</h1>
            <p id="role">${data[i].role}</p>`;
    dataUser2.innerHTML = `
          <p>${data[i].availability}</p>
          <p>${data[i].usia}</p>
          <p>${data[i].lokasi}</p>
          <p>${data[i].yoe}</p>
          <p>${data[i].email}</p>
    `;
  }
}

function inputData() {
  let data = JSON.parse(localStorage.getItem("data")) || [];
  let inputName = document.getElementById("name-input");
  let inputRole = document.getElementById("role-input");
  let inputAvailability = document.getElementById("availability-input");
  let inputUsia = document.getElementById("usia-input");
  let inputLokasi = document.getElementById("lokasi-input");
  let inputYoe = document.getElementById("yoe-input");
  let inputEmail = document.getElementById("email-input");
  let id = 1;

  if (data.length > 0) {
    id = data[data.length - 1].id + 1;
  }

  if (
    !inputName.value ||
    !inputRole.value ||
    !inputAvailability.value ||
    !inputUsia ||
    !inputLokasi.value ||
    !inputYoe.value ||
    !inputEmail.value
  ) {
    return alert("input tidak boleh kosong broo");
  }
  if (!isNaN(inputName.value)) {
    return alert("nama tidak boleh diisi angka!!");
  } else if (isNaN(inputUsia.value)) {
    return alert("Input usia tidak boleh huruf!!");
  }
  data.push({
    id: id,
    name: inputName.value,
    role: inputRole.value,
    availability: inputAvailability.value,
    usia: inputUsia.value,
    lokasi: inputLokasi.value,
    yoe: inputYoe.value,
    email: inputEmail.value,
  });
  localStorage.setItem("data", JSON.stringify(data));
  displayData();
}

function deleteData(id) {
  let data = JSON.parse(localStorage.getItem("data")) || [];
  data = data.filter((data) => data.id == id);
  localStorage.setItem("data", JSON.stringify(data));
  displayData();
}
