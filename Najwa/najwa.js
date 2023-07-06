const terima = document.querySelector(".terima");
const tolak = document.querySelector(".tolak");

terima.addEventListener("click", function () {
  alert("aku cinta kamu najwaaa");
});
tolak.addEventListener("click", function () {
  alert("Aku cinta banget sama kamu waa, kenapa kamu nolak aku ??");
});

// tombol
function tombol1() {
  const tombol1 = document.querySelector(".tombol1");
  const tombol2 = document.querySelector(".tombol2");
  const tombol3 = document.querySelector(".tombol3");

  tombol1.classList.add("tombolmuncul");
  tombol2.classList.remove("tombolmuncul");
  tombol3.classList.remove("tombolmuncul");
  $(".foto").html(`
    <div class="container shadow-sm mt-2 mb-4" style=" border-radius:5px;">
              <div class="row">
                <div class="col-md-4 mt-3 mb-3">
                  <div class="card text-bg-dark" >
                    <img src="Najwa/a.jpg" class="card-img" alt="Web Programming" height="275px"/>
                  </div>
                </div>
                <div class="col-md-4 mt-3 mb-3">
                  <div class="card text-bg-dark" >
                    <img src="Najwa/b.jpg" class="card-img" alt="Web Programming" height="275px" />
                  </div>
                </div>
                <div class="col-md-4 mt-3 mb-3">
                  <div class="card text-bg-dark">
                    <img src="Najwa/c.jpg" class="card-img" alt="Web Programming" style="height:275px;"/>
                  </div>
                </div>
                <div class="col-md-4 mt-3 mb-3">
                  <div class="card text-bg-dark">
                    <img src="Najwa1/21.jpg" class="card-img" alt="Web Programming" style="height:275px;"/>
                  </div>
                </div>
                <div class="col-md-4 mt-3 mb-3">
                  <div class="card text-bg-dark">
                    <img src="Najwa1/22.jpg" class="card-img" alt="Web Programming" style="height:275px;"/>
                  </div>
                </div>
                <div class="col-md-4 mt-3 mb-3">
                  <div class="card text-bg-dark">
                    <img src="Najwa1/23.jpg" class="card-img" alt="Web Programming" style="height:275px;"/>
                  </div>
                </div>
              </div>
            </div>
    `);
}
function tombol2() {
  const tombol1 = document.querySelector(".tombol1");
  const tombol2 = document.querySelector(".tombol2");
  const tombol3 = document.querySelector(".tombol3");
  tombol2.classList.add("tombolmuncul");
  tombol1.classList.remove("tombolmuncul");
  tombol3.classList.remove("tombolmuncul");
  tombol1.classList.remove("text-white");
  $(".foto").html(`
    <div class="container shadow-sm mt-2 mb-4" style=" border-radius:5px;">
              <div class="row">
                <div class="col-md-4 mt-3 mb-3">
                  <div class="card text-bg-dark" >
                    <img src="Najwa1/15.jpg" class="card-img" alt="Web Programming" height="275px" />
                  </div>
                </div>
                <div class="col-md-4 mt-3 mb-3">
                  <div class="card text-bg-dark" >
                    <img src="Najwa1/16.jpg" class="card-img" alt="Web Programming" height="275px" />
                  </div>
                </div>
                <div class="col-md-4 mt-3 mb-3">
                  <div class="card text-bg-dark">
                    <img src="Najwa1/17.jpg" class="card-img" alt="Web Programming" height="275px" />
                  </div>
                </div>
              </div>
            </div>
    `);
}
function tombol3() {
  const tombol1 = document.querySelector(".tombol1");
  const tombol2 = document.querySelector(".tombol2");
  const tombol3 = document.querySelector(".tombol3");
  tombol2.classList.remove("tombolmuncul");
  tombol1.classList.remove("tombolmuncul");
  tombol3.classList.add("tombolmuncul");
  $(".foto").html(`
    <div class="container shadow-sm mt-2 mb-4" style=" border-radius:5px;" >
              <div class="row">
                <div class="col-md-4 mt-3 mb-3">
                  <div class="card text-bg-dark" >
                    <img src="Najwa1/18.jpg" class="card-img" alt="Web Programming"  height="275px" />
                  </div>
                </div>
                <div class="col-md-4 mt-3 mb-3">
                  <div class="card text-bg-dark" >
                    <img src="Najwa1/19.jpg" class="card-img" alt="Web Programming" height="275px" />
                  </div>
                </div>
                <div class="col-md-4 mt-3 mb-3">
                  <div class="card text-bg-dark" >
                    <img src="Najwa1/20.jpg" class="card-img" alt="Web Programming" height="275px" />
                  </div>
                </div>
              </div>
            </div>
    `);
}

const awal = document.querySelector(".haha");
const help = document.querySelector(".help");
const picture = document.querySelector(".picture");
const more = document.querySelector(".More");

function helpp() {
  help.classList.add("active");
  awal.classList.remove("active");
  picture.classList.remove("active");
  more.classList.remove("active");
}
function picturee() {
  help.classList.remove("active");
  awal.classList.remove("active");
  picture.classList.add("active");
  more.classList.remove("active");
}
function Moree() {
  help.classList.remove("active");
  awal.classList.remove("active");
  picture.classList.remove("active");
  more.classList.add("active");
}

function awall() {
  help.classList.remove("active");
  awal.classList.add("active");
  picture.classList.remove("active");
  more.classList.remove("active");
}
