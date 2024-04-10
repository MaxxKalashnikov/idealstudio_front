// Swiper initialization code
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 1,
      },
      950: {
          slidesPerView: 2,
      },
  }
});

// Variables
const next_buttonFirst = document.getElementById('next_buttonFirst');
const next_buttonFirst1 = document.getElementById('next_buttonFirst1');
const imgManic = document.getElementById('manicure');
const imgPedic = document.getElementById('pedicure');
const imgManic1 = document.getElementById('manicure1');
const imgPedic1 = document.getElementById('pedicure1');
const nextToMasterForManicure = document.getElementById('nextToMasterForManicure');
const nextToMasterForPedicure = document.getElementById('nextToMasterForPedicure');
const nextToMasterForManicure1 = document.getElementById('nextToMasterForManicure1');
const nextToMasterForPedicure1 = document.getElementById('nextToMasterForPedicure1');
const backToCategory1 = document.getElementById('backToCategory1');
const backToCategory2 = document.getElementById('backToCategory2');
const backToCategory3 = document.getElementById('backToCategory3');
const backToCategory4 = document.getElementById('backToCategory4');
const datetimeSection = document.getElementById('date_and_time');
const nextToDate = document.getElementById('nextToDate');
const nextToDate1 = document.getElementById('nextToDate1');
const backToManicPedic = document.getElementById('backToManicPedic');
const backToManicPedic1 = document.getElementById('backToManicPedic1');
const infoSection = document.getElementById('contact_info');
const nextToInfo = document.getElementById('nextToInfo');
const backToMaster = document.getElementById('backToMaster');
const backToDate = document.getElementById('backToDate');
const nextToInfo1 = document.getElementById('nextToInfo1');
const backToMaster1 = document.getElementById('backToMaster1');
const backToDate1 = document.getElementById('backToDate1');
const masterSection = document.getElementById('booking_section_master');
const manicSection = document.getElementById('booking_section_manicure');
const pedicSection = document.getElementById('booking_section_pedicure');

// Flags
let manic = false;
let pedic = false;

// Event Listeners
imgManic.addEventListener('click', () => {
  manic = true;
  pedic = false;
});

imgPedic.addEventListener('click', () => {
  manic = false;
  pedic = true;
});

imgManic1.addEventListener('click', () => {
  manic = true;
  pedic = false;
});

imgPedic1.addEventListener('click', () => {
  manic = false;
  pedic = true;
});

next_buttonFirst.addEventListener('click', () => {
  const categorySection = document.getElementById('booking_section_first');
  if (manic) {
      categorySection.style.display = "none";
      manicSection.style.display = "block";
  }
  if (pedic) {
      categorySection.style.display = "none";
      pedicSection.style.display = "block";
  }
  if (manic === false && pedic === false){ 
    alert("Choose category first!")
  }
});

next_buttonFirst1.addEventListener('click', () => {
  const categorySection = document.getElementById('booking_section_first');
  if (manic) {
      categorySection.style.display = "none";
      manicSection.style.display = "block";
  }
  if (pedic) {
      categorySection.style.display = "none";
      pedicSection.style.display = "block";
  }
});

nextToMasterForManicure.addEventListener('click', () => {
  manicSection.style.display = "none";
  masterSection.style.display = "block";
});

nextToMasterForPedicure.addEventListener('click', () => {
    pedicSection.style.display = "none";
    masterSection.style.display = "block";
});

nextToMasterForManicure1.addEventListener('click', () => {
  manicSection.style.display = "none";
  masterSection.style.display = "block";
});

nextToMasterForPedicure1.addEventListener('click', () => {
  pedicSection.style.display = "none";
  masterSection.style.display = "block";
});

backToCategory1.addEventListener('click', () => {
  const categorySection = document.getElementById('booking_section_first');
  pedicSection.style.display = "none";
  manicSection.style.display = "none";
  categorySection.style.display = "block";
});
backToCategory2.addEventListener('click', () => {
  const categorySection = document.getElementById('booking_section_first');
  pedicSection.style.display = "none";
  manicSection.style.display = "none";
  categorySection.style.display = "block";
});
backToCategory3.addEventListener('click', () => {
  const categorySection = document.getElementById('booking_section_first');
  pedicSection.style.display = "none";
  manicSection.style.display = "none";
  categorySection.style.display = "block";
});
backToCategory4.addEventListener('click', () => {
  const categorySection = document.getElementById('booking_section_first');
  pedicSection.style.display = "none";
  manicSection.style.display = "none";
  categorySection.style.display = "block";
});
let master = "";

nextToDate.addEventListener('click', () => {
  if(master == ""){
    alert("choose")
  }else{
  removeTimeslots();
  masterSection.style.display = "none";
  datetimeSection.style.display = "block";
  }
});

backToManicPedic.addEventListener('click', () => {
  if (manic) {
      masterSection.style.display = "none";
      manicSection.style.display = "block";
  } else if (pedic) {
      masterSection.style.display = "none";
      pedicSection.style.display = "block";
  }
});

nextToDate1.addEventListener('click', () => {
  if(master == ""){
    alert("choose")
  }else{
  removeTimeslots();
  masterSection.style.display = "none";
  datetimeSection.style.display = "block";
  }
});

backToManicPedic1.addEventListener('click', () => {
  if (manic) {
      masterSection.style.display = "none";
      manicSection.style.display = "block";
  } else if (pedic) {
      masterSection.style.display = "none";
      pedicSection.style.display = "block";
  }
});

nextToInfo.addEventListener('click', () => {
  if(timeslotChosen == ""){
    alert("Choose timeslot first!")
  }else{
    timeChosen(timeslotChosen)
    datetimeSection.style.display = "none";
    infoSection.style.display = "block";
  }
});

backToMaster.addEventListener('click', () => {
  datetimeSection.style.display = "none";
  masterSection.style.display = "block";
});

backToDate.addEventListener('click', () => {
  infoSection.style.display = "none";
  datetimeSection.style.display = "block";
});

nextToInfo1.addEventListener('click', () => {
  if(timeslotChosen == ""){
    alert("Choose timeslot first!")
  }else{
    timeChosen(timeslotChosen)
    datetimeSection.style.display = "none";
    infoSection.style.display = "block";
  }
});

backToMaster1.addEventListener('click', () => {
  datetimeSection.style.display = "none";
  masterSection.style.display = "block";
});

backToDate1.addEventListener('click', () => {
  infoSection.style.display = "none";
  datetimeSection.style.display = "block";
});

const BACKEND_ROOT_URL_SERVICE = "http://localhost:3001/services"; //back url 
const BACKEND_ROOT_URL_MASTER = "http://localhost:3001/employees";
const BACKEND_ROOT_URL_TS = "http://localhost:3001/timeslots";
import { Services } from "../../../js/classes/services.js" //importing class for services
import { Employees } from "../../../js/classes/employees.js"; //importing class for masters
import { Timeslots } from "../../../js/classes/Timeslots.js"; //importing class for timeslots
const services = new Services(BACKEND_ROOT_URL_SERVICE);
const employees = new Employees(BACKEND_ROOT_URL_MASTER);
const timeslots = new Timeslots(BACKEND_ROOT_URL_TS);

const getServicesAll = async () => {
  //method from todos class which returns an array of task objects
  services.getServices().then((services) =>{
      services.forEach(service => {
          renderService(service);//handling of ui elements
      });
  }).catch((error) => {//error handling
      alert(error)
  })
}

function renderService(service){
  if(service.category == "Manicure"){

    // Create col-md-4 and col-xs-12 div
      var colDiv = document.createElement("div");
      colDiv.classList.add("col-md-4", "col-xs-12", "mb-4");

      // Create card div
      var cardDiv = document.createElement("div");
      cardDiv.classList.add("card", "text-center", "text-bg-dark");

      // Create card image
      var cardImg = document.createElement("img");
      cardImg.classList.add("card-img");
      cardImg.src = "../../assets/section.jpg";
      cardImg.alt = "...";

      // Create card overlay div
      var overlayDiv = document.createElement("div");
      overlayDiv.classList.add("card-img-overlay", "d-flex", "flex-column", "justify-content-center", "align-items-center");

      // Create card title
      var title = document.createElement("h5");
      title.classList.add("card-title");
      title.textContent = service.serviceName;
      title.id = "serviceName" + service.serviceId;

      // Create card text for description
      var description = document.createElement("p");
      description.classList.add("card-text");
      description.id = "serviceDescription" + service.description;
      description.innerHTML = `<small>${service.description}</small>`;

      // Create card text for price
      var price = document.createElement("p");
      price.classList.add("card-text");
      price.id = "servicePrice" + service.price;
      price.textContent = service.price;

      // Append elements to their respective parent
      overlayDiv.appendChild(title);
      overlayDiv.appendChild(description);
      overlayDiv.appendChild(price);
      cardDiv.appendChild(cardImg);
      cardDiv.appendChild(overlayDiv);
      colDiv.appendChild(cardDiv);

      // Append the newly created structure to the body or any other container element
      const parent = document.getElementById('manicContainer');
      parent.appendChild(colDiv);
  }

  if(service.category == "Pedicure"){

   // Create col-md-4 and col-xs-12 div
   var colDiv = document.createElement("div");
   colDiv.classList.add("col-md-4", "col-xs-12", "mb-4");

   // Create card div
   var cardDiv = document.createElement("div");
   cardDiv.classList.add("card", "text-center", "text-bg-dark");

   // Create card image
   var cardImg = document.createElement("img");
   cardImg.classList.add("card-img");
   cardImg.src = "../../assets/section.jpg";
   cardImg.alt = "...";

   // Create card overlay div
   var overlayDiv = document.createElement("div");
   overlayDiv.classList.add("card-img-overlay", "d-flex", "flex-column", "justify-content-center", "align-items-center");
   overlayDiv.id = "overlayDiv" + service.serviceId;

   // Create card title
   var title = document.createElement("h5");
   title.classList.add("card-title");
   title.textContent = service.serviceName;
   title.style.fontSize = "16px";
   title.id = "serviceName" + service.serviceId;

   // Create card text for description
   var description = document.createElement("p");
   description.classList.add("card-text");
   description.id = "serviceDescription" + service.description;
   description.innerHTML = `<small>${service.description}</small>`;

   // Create card text for price
   var price = document.createElement("p");
   price.classList.add("card-text");
   price.id = "servicePrice" + service.price;
   price.textContent = service.price;

   // Append elements to their respective parent
   overlayDiv.appendChild(title);
   overlayDiv.appendChild(description);
   overlayDiv.appendChild(price);
   cardDiv.appendChild(cardImg);
   cardDiv.appendChild(overlayDiv);
   colDiv.appendChild(cardDiv);

   // Append the newly created structure to the body or any other container element
   const parent = document.getElementById('pedicContainer');
   parent.appendChild(colDiv);

  }
}


//MASTERS
const getEmployeesAll = async () => {
  //method from todos class which returns an array of task objects
  employees.getMoreEmployee().then((employees) =>{
      employees.forEach(employee => {
          renderMaster(employee);//handling of ui elements
      });
  }).catch((error) => {//error handling
      alert(error)
  })
}


function renderMaster(employee){
  //for the service name and price which are chosen
  const namePriceDiv = document.getElementById('serviceNameAtMaster')

  var div1 = document.createElement("div");
  div1.classList.add("col-6", "text-center");

  // Создаем заголовок h2 для первой части
  var h2_1 = document.createElement("h2");
  h2_1.textContent = "Service name";

  // Добавляем заголовок в первую часть
  div1.appendChild(h2_1);

  // Создаем div элемент для второй части
  var div2 = document.createElement("div");
  div2.classList.add("col-6", "text-center");

  // Создаем заголовок h2 для второй части
  var h2_2 = document.createElement("h2");
  h2_2.textContent = "5$";

  // Добавляем заголовок во вторую часть
  div2.appendChild(h2_2);

  // Получаем контейнер, куда мы хотим добавить созданные элементы
  // var container = document.getElementById("container");

  // Добавляем обе части в контейнер
  // container.appendChild(div1);
  // container.appendChild(div2);




  //slides
  // Create a new swiper-slide element
    var swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");

    // Create image-content div
    var imageContent = document.createElement("div");
    imageContent.classList.add("image-content");

    // Create overlay span
    var overlay = document.createElement("span");
    overlay.classList.add("overlay");

    // Create card-image div
    var cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
    // Create img element
    var img = document.createElement("img");
    img.setAttribute("src", `${employee.picture}`);
    img.setAttribute("alt", "");
    img.classList.add("card-img");

    // Append img to card-image div
    cardImage.appendChild(img);

    // Create card-content div
    var cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    // Create h2 element for name
    var h2 = document.createElement("h2");
    h2.classList.add("name");
    h2.textContent = employee.firstname + " " + employee.lastname;

    // Create p element for description
    var p = document.createElement("p");
    p.classList.add("description");
    p.textContent = employee.specialization;

    // Create button element
    var button = document.createElement("button");
    button.classList.add("button");
    button.textContent = "Choose";
    button.addEventListener('click', ()=>{
        master = "";
        master = employee.employeeId;
        console.log(master)
        return master;
    })

    // Append h2, p, and button to card-content div
    cardContent.appendChild(h2);
    cardContent.appendChild(p);
    cardContent.appendChild(button);

    // Append overlay, card-image, and card-content to image-content div
    imageContent.appendChild(overlay);
    imageContent.appendChild(cardImage);
    imageContent.appendChild(cardContent);

    // Append image-content to swiper-slide
    swiperSlide.appendChild(imageContent);

    // Append swiper-slide to its parent element (assuming you have a parent element with id "swiper-container")
    var swiperContainer = document.getElementById("swiper_wrapper");
    swiperContainer.appendChild(swiperSlide);

}

//TIMESLOTS
// const getTimeslots = async () => {
//   //method from todos class which returns an array of task objects
//   timeslots.getTimeslots().then((timeslots) =>{
//       timeslots.forEach(ts => {
//           renderTS(ts);//handling of ui elements
//       });
//   }).catch((error) => {//error handling
//       alert(error)
//   })
// }

const getTimeslotsPerPerson = async (id) => {
  //method from todos class which returns an array of task objects
  timeslots.getTimeslotsPerPerson(id).then((timeslots) =>{
      timeslots.forEach(ts => {
          renderTS(ts);//handling of ui elements
      });
  }).catch((error) => {//error handling
      alert(error)
  })
}

const date = document.getElementById('dateInp');
let chosenDate = "";
$('#datepicker').datepicker().on('changeDate', function(e) {
    console.log(master)
    removeTimeslots();
    getTimeslotsPerPerson(master);
    const parentElement = document.getElementById("timeSlotContainer");
    var heading = document.createElement("h3");

    heading.classList.add("col-12", "text-center", "mb-3");
    heading.textContent = "Choose available time";

    parentElement.appendChild(heading);
});

let timeslotChosen = "";
function renderTS(ts){
  chosenDate = date.value;
  let month = chosenDate.substring(0,2);
  let day = chosenDate.substring(3,5);
  day = Number(day);
  day = day - 1;
  day = String(day)
  let year = chosenDate.substring(6,10);
  chosenDate = `${year}-${month}-${day}`
  console.log(chosenDate)
  let tsDate = ts.timeslot_date.substring(0, 10);

  if(tsDate == chosenDate && ts.is_available === true){
      console.log(ts)
      var button = document.createElement("button");
    
      button.setAttribute("type", "button");
      button.setAttribute("class", "btn btn-outline-primary time-slot-btn");
      button.id = ts.timeslot_id;
    
      let timeStart = ts.start_time.substring(0, 5);
      let timeEnd = ts.end_time.substring(0, 5);
      button.textContent = `${timeStart}-${timeEnd}`;
      button.addEventListener('click', ()=>{
        timeslotChosen = button.id;
      })
      
      const parentElement = document.getElementById("timeSlotContainer");
      parentElement.appendChild(button);
  }
}

function removeTimeslots(){
  const parentElement = document.getElementById("timeSlotContainer");
  const childElement1 = parentElement.querySelector('button');
  const childElement2 = parentElement.querySelector('h3');
    if(childElement1){
        while (parentElement.firstChild) {
            parentElement.removeChild(parentElement.firstChild);
        }
    }
    if(childElement2){
      while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
    }
}

(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
          return;
        }

        submit()

        form.classList.add('was-validated');
      }, false);
    });
})();


function submit(){
  let fname = document.getElementById('validationCustom01').value
  let lname = document.getElementById('validationCustom02').value
  let email = document.getElementById('validationCustom03').value
  let phone = document.getElementById('validationCustom04').value

  console.log(fname, lname, email, phone)
}

function timeChosen(timeslotChosen){
  console.log(timeslotChosen)
}

function getAppointmentReady(description, customerId, serviceId, timeslotId){
  let appointmentReady = new Object();
}
getEmployeesAll();

getServicesAll();