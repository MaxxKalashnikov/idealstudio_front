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
          spaceBetween: 150
      },
      1200: {
          slidesPerView: 2,
          spaceBetween: 50
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
const categorySection = document.getElementById('booking_section_first');
// Flags
let manic = false;
let pedic = false;

// Event Listeners
imgManic.addEventListener('click', () => {
  manic = true;
  pedic = false;
  imgManic1.id = ''
  imgPedic.id = ''
  imgManic.id = 'clicked'
  imgPedic1.id = ''
  if (manic) {
    setTimeout(()=>{
      categorySection.style.display = "none"; 
      manicSection.style.display = "block";
    }, 200)
  }
  if (pedic) {
    setTimeout(()=>{
      categorySection.style.display = "none";
      pedicSection.style.display = "block";
    }, 200)
  }
  if (manic === false && pedic === false){ 
    alert("Choose category first!")
  }
});

imgPedic.addEventListener('click', () => {
  manic = false;
  pedic = true;
  imgManic1.id = ''
  imgPedic.id = 'clicked'
  imgManic.id = ''
  imgPedic1.id = ''
  if (manic) {
    setTimeout(()=>{
    categorySection.style.display = "none";
    manicSection.style.display = "block";
  }, 200)
  }
  if (pedic) {
    setTimeout(()=>{
      categorySection.style.display = "none";
      pedicSection.style.display = "block";
    }, 200)
  }
  if (manic === false && pedic === false){ 
    alert("Choose category first!")
  }
});

imgManic1.addEventListener('click', () => {
  manic = true;
  pedic = false;
  imgManic1.id = 'clicked'
  imgPedic.id = ''
  imgManic.id = ''
  imgPedic1.id = ''
  if (manic) {
    setTimeout(()=>{
      categorySection.style.display = "none"; 
      manicSection.style.display = "block";
    }, 200)
  }
  if (pedic) {
    setTimeout(()=>{
      categorySection.style.display = "none";
      pedicSection.style.display = "block";
    }, 200)
  }
  if (manic === false && pedic === false){ 
    alert("Choose category first!")
  }
});

imgPedic1.addEventListener('click', () => {
  manic = false;
  pedic = true;
  imgManic1.id = ''
  imgPedic1.id = 'clicked'
  imgManic.id = ''
  imgPedic.id = ''
  if (manic) {
    setTimeout(()=>{
    categorySection.style.display = "none";
    manicSection.style.display = "block";
  }, 200)
  }
  if (pedic) {
    setTimeout(()=>{
      categorySection.style.display = "none";
      pedicSection.style.display = "block";
    }, 200)
  }
  if (manic === false && pedic === false){ 
    alert("Choose category first!")
  }
});

next_buttonFirst.addEventListener('click', () => {
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

nextToMasterForManicure.addEventListener('click', () => {
  if(!serviceChosenID){
    alert("Choose service first!")
  }else{
    manicSection.style.display = "none";
    masterSection.style.display = "block";
  }
});

nextToMasterForPedicure.addEventListener('click', () => {
  if(!serviceChosenID){
    alert("Choose service first!")
  }else{
    pedicSection.style.display = "none";
    masterSection.style.display = "block";
  }
});

nextToMasterForManicure1.addEventListener('click', () => {
  if(!serviceChosenID){
    alert("Choose service first!")
  }else{
    manicSection.style.display = "none";
    masterSection.style.display = "block";
  }
});

nextToMasterForPedicure1.addEventListener('click', () => {
  if(!serviceChosenID){
    alert("Choose service first!")
  }else{
    pedicSection.style.display = "none";
  masterSection.style.display = "block";
  }
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
let masterChosenObject = ""
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
const BACKEND_ROOT_URL_CUS = "http://localhost:3001/customers";
const BACKEND_ROOT_URL_APP = "http://localhost:3001/appointments";

import { Services } from "../../../js/classes/services.js" //importing class for services
import { Employees } from "../../../js/classes/employees.js"; //importing class for masters
import { Timeslots } from "../../../js/classes/Timeslots.js"; //importing class for timeslots
import { CustomerService } from "../../../js/classes/CustomerService.js"; //importing class for timeslots
import { Appointments } from "../../../js/classes/appointmentAll.js";

const services = new Services(BACKEND_ROOT_URL_SERVICE);
const employees = new Employees(BACKEND_ROOT_URL_MASTER);
const timeslots = new Timeslots(BACKEND_ROOT_URL_TS);
const customers = new CustomerService(BACKEND_ROOT_URL_CUS);
const appointmentsAll = new Appointments(BACKEND_ROOT_URL_APP)

let serviceChosenID = ""
let serviceChosenObject = "";

function toggleSections() {
  const activeSection = categorySection.classList.contains('active') ? categorySection : manicSection;
  const hiddenSection = manicSection.classList.contains('active') ? manicSection : categorySection;

  // Устанавливаем задержку перед изменением стилей, чтобы переход был плавным
  setTimeout(() => {
    activeSection.classList.remove('active');
    activeSection.classList.add('hidden');
    hiddenSection.classList.remove('hidden');
    hiddenSection.classList.add('active');
  }, 500); // Минимальная задержка перед началом анимации
}



const getServicesAll = async () => {
  //method from todos class which returns an array of task objects
  services.getServices().then((services) =>{
      services.forEach(service => {
        console.log(service)
          renderService(service);//handling of ui elements
      });
  }).catch((error) => {//error handling
      alert(error)
  })
}

function toggleCard(cardId) {
  //manicSection pedicSection
  let card = document.getElementById(`${cardId}`);
  let clickedCards = document.querySelectorAll('.clicked');
  // Проходимся по всем элементам с классом 'clicked' и удаляем этот класс
  clickedCards.forEach(function(clickedCard) {
    clickedCard.classList.remove('clicked');
  });
  // Добавляем класс 'clicked' только к текущему элементу
  card.classList.add('clicked');
}

function renderService(service){
  const pictures = {
    1: '/assets/manicWomen1.jpg',
    2: '/assets/manicMen1.jpg',
    3: '/assets/manicRemove1.jpg',
    4: '/assets/manicShort1.jpg',
    5: '/assets/manicLong1.jpg',
    6: '/assets/manicExtention1.jpg',
    7: '/assets/pedicWomen1.jpg',
    8: '/assets/pedicCoating1.jpg',
    9: '/assets/pedicMen1.jpg',
}

  if(service.category == "manicure"){

    // Create col-md-4 and col-xs-12 div
      var colDiv = document.createElement("div");
      colDiv.classList.add("col-md-4", "col-xs-12", "mb-4");

      // Create card div
      var cardDiv = document.createElement("div");
      cardDiv.classList.add("card", "text-center", "text-bg-dark");
      cardDiv.id = service.serviceId;

      // Create card image
      var cardImg = document.createElement("img");
      cardImg.classList.add("card-img");
      cardImg.src = pictures[service.serviceId];
      cardImg.alt = "...";

      // Create card overlay div
      var overlayDiv = document.createElement("div");
      overlayDiv.classList.add("card-img-overlay", "d-flex", "flex-column", "justify-content-center", "align-items-center");

      // Create card title
      var title = document.createElement("h5");
      title.classList.add("card-title");
      title.textContent = service.serviceName;
      title.id = "serviceID" + service.serviceId;

      // Create card text for description
      var description = document.createElement("p");
      description.classList.add("card-text");
      description.id = "serviceDescription" + service.description;
      description.innerHTML = `<small>${service.description}</small>`;

      // Create card text for price
      var price = document.createElement("p");
      price.classList.add("card-text");
      price.id = "servicePrice" + service.price;
      price.textContent = service.price + "€";
      price.className = "highlighted";


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

      cardDiv.addEventListener('click', ()=>{
        serviceChosenID = ""
        serviceChosenID = service.serviceId;
        serviceChosenObject = service
        serviceChosen(serviceChosenID)
        toggleCard(serviceChosenID)
        const serviceNameAtMaster = document.getElementById('serviceNameAtMaster')
        const servicePriceAtMaster = document.getElementById('servicePriceAtMaster')
        console.log("SERVICE:: "+serviceChosenObject)
        serviceNameAtMaster.innerText = serviceChosenObject.category;
        servicePriceAtMaster.innerText = serviceChosenObject.price + '€'
        manicSection.style.display = "none";
        masterSection.style.display = "block";
      })
  }

  if(service.category == "pedicure"){

   // Create col-md-4 and col-xs-12 div
   var colDiv = document.createElement("div");
   colDiv.classList.add("col-md-4", "col-xs-12", "mb-4");

   // Create card div
   var cardDiv = document.createElement("div");
   cardDiv.classList.add("card", "text-center", "text-bg-dark");
   cardDiv.id = service.serviceId;

   // Create card image
   var cardImg = document.createElement("img");
   cardImg.classList.add("card-img");
   cardImg.src = pictures[service.serviceId]; 
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
   price.textContent = service.price + "€";
   price.className = "highlighted";

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

   cardDiv.addEventListener('click', ()=>{
    serviceChosenID = ""
    serviceChosenObject = ""
    serviceChosenID = service.serviceId;
    serviceChosenObject = service
    serviceChosen(serviceChosenID)
    toggleCard(serviceChosenID)
    //for the service name and price which are chosen
    const serviceNameAtMaster = document.getElementById('serviceNameAtMaster')
    const servicePriceAtMaster = document.getElementById('servicePriceAtMaster')
    console.log("SERVICE:: "+serviceChosenObject)
    serviceNameAtMaster.innerText = serviceChosenObject.category;
    servicePriceAtMaster.innerText = serviceChosenObject.price + '€'
    pedicSection.style.display = "none";
    masterSection.style.display = "block";
  })

  }
}


//MASTERS
const getEmployeesAll = async () => {
  //method from todos class which returns an array of task objects
  employees.getMoreEmployee().then((employees) =>{
      employees.forEach(employee => {
        console.log(employee)
          renderMaster(employee);//handling of ui elements
      });
  }).catch((error) => {//error handling
      alert(error)
  })
}


function renderMaster(employee){
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
    img.classList.add("card-image");

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
    button.type = 'button'
    button.classList.add("btn");
    button.textContent = "Choose";
    button.addEventListener('click', ()=>{
        master = "";
        master = employee.employeeId;
        masterChosenObject = employee
        console.log(master)
        if(master == ""){
          alert("choose")
        }else{
        removeTimeslots();
        masterSection.style.display = "none";
        datetimeSection.style.display = "block";
        }
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

function paintDays(timeslot){
  if(timeslot.is_available == true){
    let dateString = timeslot.timeslot_date;

  let date = new Date(dateString);

  let timestamp = date.getTime();//timestamp from db here

  let dayElements = document.querySelectorAll('.day');

  dayElements.forEach(function(dayElement) {
      let dateNew = dayElement.dataset.date;
      dateNew = Number(dateNew)
      dateNew = dateNew - 10800000;
      // console.log(new Date(timestamp) + ":::" + new Date(dateNew))
      if(timestamp == dateNew){
        dayElement.style = 'background-color: #4ea550'
      }
  });
  }
}
//TIMESLOTS

let count = 0;
const getTimeslotsPerPerson = async (id) => {
  //method from todos class which returns an array of task objects
  timeslots.getTimeslotsPerPerson(id).then((timeslots) =>{
    count = 0
      timeslots.forEach(ts => {
          renderTS(ts);//handling of ui elements
      });
      const parentElement = document.getElementById("timeSlotContainer");
      var heading = document.createElement("h4");
      if(count == 0 && heading.textContent == ''){
  
        heading.classList.add("col-12", "text-center", "mb-3");
        heading.textContent = "Unfortunately, master does not have any free timeslots this day. Please, try another date";
    
        parentElement.appendChild(heading);
      }
  }).catch((error) => {//error handling
      alert(error)
  })
}

const date = document.getElementById('dateInp');
date.addEventListener('click', async()=>{
  removeTimeslots();
  getTimeslotsPerPerson(master);
  removeTimeslots();
})
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
let timeChosenObject = "";

function renderTS(ts){
  let dateString = ts.timeslot_date;
  let dateFromDB = new Date(dateString);
  let timestamp = dateFromDB.getTime();
  const systemTs = new Date().getTime() + 86400000;
  // console.log(typeof(systemTs) + "::::DB:::" + timestamp);
  if(systemTs <= timestamp){
    paintDays(ts)
    chosenDate = date.value;
    let month = chosenDate.substring(0,2);
    let day = chosenDate.substring(3,5);
    day = Number(day);
    day = day - 1;
    if(day >= 0 && day <= 9){
      if(day == 0){
        day = day + 1;
        day = String(day)
        day = "0" + day
      }else{
        day = String(day)
        day = "0" + day
      }
    }
    day = String(day)
    let year = chosenDate.substring(6,10);
    chosenDate = `${year}-${month}-${day}`
    console.log(chosenDate)
    let dayOfMonth = ts.timeslot_date.substring(8, 10);
    if(dayOfMonth[0] == '0'){
      let dof = Number(dayOfMonth[1])
      dof = dof + 1;
      if(dof == 10){
        dayOfMonth = String(dof)
      }else{
        dayOfMonth = '0' + dof
      }
    }else{
      dayOfMonth = Number(dayOfMonth)
      dayOfMonth = dayOfMonth + 1; 
      dayOfMonth = String(dayOfMonth)
    }
  
    let tsDate = ts.timeslot_date.substring(0, 8) + `${dayOfMonth}` + ts.timeslot_date.substring(10);
    tsDate = ts.timeslot_date.substring(0, 10);
    
    if(tsDate == chosenDate && ts.is_available === true){
  
      const parentElement = document.getElementById("timeSlotContainer");
  
        console.log(ts)
        var button = document.createElement("button");
      
        button.setAttribute("type", "button");
        button.setAttribute("class", "btn time-slot-btn");
        button.id = ts.timeslot_id;
      
        let timeStart = ts.start_time.substring(0, 5);
        let timeEnd = ts.end_time.substring(0, 5);
        button.textContent = `${timeStart}-${timeEnd}`;
        button.addEventListener('click', ()=>{
          timeslotChosen = button.id;
          timeChosenObject = ts
          datetimeSection.style.display = "none";
          infoSection.style.display = "block";
        })
        
        parentElement.appendChild(button);
        count = count + 1;
    }
  }else{
    return
  }
}

function removeTimeslots(){
  const parentElement = document.getElementById("timeSlotContainer");
  const childElement1 = parentElement.querySelector('button');
  const childElement2 = parentElement.querySelector('h3');
  const heading = parentElement.querySelector('h4');
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
    if(heading){
      while (parentElement.firstChild) {
        parentElement.removeChild(parentElement.firstChild);
    }
    }
}
let customerID = ""
let customerChosenObject = "";
const subbutton = document.getElementById('subButton')
subbutton.addEventListener('click', async()=>{
  let fname = document.getElementById('validationDefault01').value
  let lname = document.getElementById('validationDefault02').value
  let email = document.getElementById('validationDefault03').value
  let phone = document.getElementById('validationDefault04').value
  let schet = 0;

  if(fname.length > 0 && lname.length > 0 && email.length > 0 && phone.length > 0){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^[0-9]{10}$/;
    console.log(emailPattern.test(email))
    console.log(phonePattern.test(phone))
    if (emailPattern.test(email)) {
      if (phonePattern.test(phone)) {
        const inf = await customers.getAllCustomers()
        inf.forEach(person=>{
          if(person.email == email || person.phone == phone){
            customerID = person.customerId
            customerChosenObject = person
            schet = schet + 1;
          }
        })

        if(schet == 0){
          submit();
        }else{
          submitIfUser()
        }
      } else {
        console.log("Phone is invalid");
        alert("Phone is invalid!")
      }
    } else {
      console.log("Email is invalid");
      alert("Email is invalid!")
    }
  }
  else 
  {
    alert("Fill all of the fields")
  }
})


let message = ""
let wishes = ""

import { User } from "../../../js/classes/user.js"
const user = new User();

async function checkUser(){
  try{
    let fname = document.getElementById('validationDefault01')
    let lname = document.getElementById('validationDefault02')
    let email = document.getElementById('validationDefault03')
    let phone = document.getElementById('validationDefault04')
    const tokenData = await user.checkToken()
    if(tokenData.role == 'customer'){
      const userData = await customers.getCustomerByUserId(tokenData.id)
      console.log(userData.personalInfo[0].firstname)
      fname.value = userData.personalInfo[0].firstname
      lname.value = userData.personalInfo[0].lastname
      email.value = userData.personalInfo[0].email
      phone.value = userData.personalInfo[0].phone
    }else{
      return
    }
  }catch(err){
    console.log(err)
  }
}

checkUser()

function submitIfUser(){
  let fname = document.getElementById('validationDefault01').value
  let lname = document.getElementById('validationDefault02').value
  let email = document.getElementById('validationDefault03').value
  let phone = document.getElementById('validationDefault04').value
  wishes = document.getElementById('floatingTextarea2').value
  if(wishes.length <= 1){
    wishes = "No comments for appointment"
  }
  
  let personalInfoObj = new Object();

  personalInfoObj.fname = fname;
  personalInfoObj.lname = lname;
  personalInfoObj.email = email;
  personalInfoObj.phone = phone;
  const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'), {
    keyboard: false
  })
  const appointmentDetailsDiv = document.getElementById('appointmentDetails');
 

  console.log(personalInfoObj)
  customers.getAllCustomers().then((customer) =>{
    // customer.forEach(cust =>{
    //   console.log(cust.customerId);
    //   customerID = cust.customerId;
    //   customerChosenObject = cust;
    // }) 
    
    const p1 = document.createElement('p');
    if(manic === true){
      p1.innerText = "manicure";
    }else{
      p1.innerText = "pedicure";
    }
  
    const p2 = document.createElement('p');
    p2.innerText = serviceChosenObject.serviceName
  
    const p3 = document.createElement('p');
    p3.innerText = masterChosenObject.firstname + " " + masterChosenObject.lastname;
  
    const p4 = document.createElement('p');
    let appDate = timeChosenObject.timeslot_date.substring(8, 10);
    appDate = Number(appDate);
    appDate = appDate + 1;
    appDate = String(appDate)
    let appDatenew = timeChosenObject.timeslot_date.substring(0, 8) + appDate;
    let appTimeStart = timeChosenObject.start_time.substring(0, 5);
    let appTimeEnd = timeChosenObject.end_time.substring(0, 5);
    p4.innerText = appDatenew + " " + appTimeStart + "-" + appTimeEnd;
  
    const p5 = document.createElement('p');
    p5.innerText = customerChosenObject.firstname + " " + customerChosenObject.lastname;
  
    const p6 = document.createElement('p');
    p6.innerText = customerChosenObject.email
  
    const p7 = document.createElement('p');
    p7.innerText = customerChosenObject.phone
    const children = appointmentDetailsDiv.querySelector('p')

    if(children){
      while (appointmentDetailsDiv.firstChild) {
        appointmentDetailsDiv.removeChild(appointmentDetailsDiv.firstChild);
      }
    }
    //ADD APPOINTMENT ID!!!!  
    message = `\nCategory:   ${p1.innerText}\nService:   ${p2.innerText}\nMaster's name:   ${p3.innerText}\n${p4.innerText}\n${p5.innerText}\n${p6.innerText}\n${p7.innerText}\n`
    appointmentDetailsDiv.appendChild(p1)
    appointmentDetailsDiv.appendChild(p2)
    appointmentDetailsDiv.appendChild(p3)
    appointmentDetailsDiv.appendChild(p4)
    appointmentDetailsDiv.appendChild(p5)
    appointmentDetailsDiv.appendChild(p6)
    appointmentDetailsDiv.appendChild(p7)

    getAppointmentReady(wishes, customerID, serviceChosenID, timeslotChosen)
    printObj(customerChosenObject, serviceChosenObject, timeChosenObject)
    confirmModal.show()
  }).catch((error) => {//error handling
    alert(error)
  })
}

function submit(){
  let fname = document.getElementById('validationDefault01').value
  let lname = document.getElementById('validationDefault02').value
  let email = document.getElementById('validationDefault03').value
  let phone = document.getElementById('validationDefault04').value
  wishes = document.getElementById('floatingTextarea2').value
  if(wishes.length <= 1){
    wishes = "No comments for appointment"
  }
  
  let personalInfoObj = new Object();

  personalInfoObj.fname = fname;
  personalInfoObj.lname = lname;
  personalInfoObj.email = email;
  personalInfoObj.phone = phone;
  const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'), {
    keyboard: false
  })
  const appointmentDetailsDiv = document.getElementById('appointmentDetails');
 

  console.log(personalInfoObj)
  customers.createNewCustomer(personalInfoObj).then((customer) =>{
    customer.forEach(cust =>{
      console.log(cust.customerId);
      customerID = cust.customerId;
      customerChosenObject = cust;
    }) 
    
    const p1 = document.createElement('p');
    if(manic === true){
      p1.innerText = "manicure";
    }else{
      p1.innerText = "pedicure";
    }
  
    const p2 = document.createElement('p');
    p2.innerText = serviceChosenObject.serviceName
  
    const p3 = document.createElement('p');
    p3.innerText = masterChosenObject.firstname + " " + masterChosenObject.lastname;
  
    const p4 = document.createElement('p');
    let appDate = timeChosenObject.timeslot_date.substring(8, 10);
    appDate = Number(appDate);
    appDate = appDate + 1;
    appDate = String(appDate)
    let appDatenew = timeChosenObject.timeslot_date.substring(0, 8) + appDate;
    let appTimeStart = timeChosenObject.start_time.substring(0, 5);
    let appTimeEnd = timeChosenObject.end_time.substring(0, 5);
    p4.innerText = appDatenew + " " + appTimeStart + "-" + appTimeEnd;
  
    const p5 = document.createElement('p');
    p5.innerText = customerChosenObject.firstname + " " + customerChosenObject.lastname;
  
    const p6 = document.createElement('p');
    p6.innerText = customerChosenObject.email
  
    const p7 = document.createElement('p');
    p7.innerText = customerChosenObject.phone
    const children = appointmentDetailsDiv.querySelector('p')

    if(children){
      while (appointmentDetailsDiv.firstChild) {
        appointmentDetailsDiv.removeChild(appointmentDetailsDiv.firstChild);
      }
    }
    //ADD APPOINTMENT ID!!!!  
    message = `\nCategory:   ${p1.innerText}\nService:   ${p2.innerText}\nMaster's name:   ${p3.innerText}\n${p4.innerText}\n${p5.innerText}\n${p6.innerText}\n${p7.innerText}\n`
    appointmentDetailsDiv.appendChild(p1)
    appointmentDetailsDiv.appendChild(p2)
    appointmentDetailsDiv.appendChild(p3)
    appointmentDetailsDiv.appendChild(p4)
    appointmentDetailsDiv.appendChild(p5)
    appointmentDetailsDiv.appendChild(p6)
    appointmentDetailsDiv.appendChild(p7)

    getAppointmentReady(wishes, customerID, serviceChosenID, timeslotChosen)
    printObj(customerChosenObject, serviceChosenObject, timeChosenObject)
    confirmModal.show()
  }).catch((error) => {//error handling
    alert(error)
  })
}

function timeChosen(timeslotChosen){
  console.log(timeslotChosen)
}

function serviceChosen(service){
  console.log(service)
}

function getAppointmentReady(description, customerId, serviceId, timeslotId){//customerID, service, timeslotChosen
  let appointmentReady = new Object();

  appointmentReady.customerID = customerId;
  appointmentReady.serviceID = serviceId;
  appointmentReady.timeslotID = timeslotId;
  appointmentReady.description = description

  return appointmentReady
}

function printObj(customerChosenObject, serviceChosenObject, timeChosenObject){

  console.log(customerChosenObject + '\n//////////////////\n' + serviceChosenObject + "\n/////////////////////\n" + timeChosenObject);
}

const confirmAppointment = document.getElementById('confirmAppointment');
confirmAppointment.addEventListener('click', async ()=>{
  const appointment = getAppointmentReady(wishes, customerID, serviceChosenID, timeslotChosen)
  const sections = document.querySelectorAll('section');

  try{
    const app = await appointmentsAll.createNewAppointment(appointment)
    await timeslots.changeTimeslotStatus(timeslotChosen)
    let confirmation = ''
    await new Promise((resolve, reject) => {
      sendMail(app[0].appointment_id)
          .then(() => {
            confirmation = confirm("Message with your appointment details has been sent successfully!\nProceed to the front page...");              resolve();
          })
          .catch(err => {
              reject(err);
          });
    });
    
    if (confirmation) {
        moveToFrontPage()
    }else{
        moveToFrontPage()
    }
  }catch(err){
    console.log(err)
  }

  // appointmentsAll.createNewAppointment(appointment)
  // .then((appointment) => {
  //   console.log(appointment[0].appointment_id)
  //   timeslots.changeTimeslotStatus(timeslotChosen)
  //   return appointment[0].appointment_id
  // })
  // .then((id) => {
  //   sendMail(id)
  // })
  // .then(()=>{
  //   moveToFrontPage()
  // })
  // .catch((error) => {
  //   alert("Error: " + error); // Обработка ошибок
  // });
})


async function sendMail(id){
  (function(){
    emailjs.init('zY9SWgodnH3F5FHTU');//public key needs to be saved in .env file later
  })();

  message = `\nYour id: ${id}` + message 
  let params = {
    sendername: "Nail-studio IDEAL",
    to: customerChosenObject.email,
    subject: "Your appointment details",
    replyto: "maxvanholl75@gmail.com",
    message: message
  };

  let serviceID = "service_4j0j5yh"

  let templateID = "template_2wcessl"

  try{
    await emailjs.send(serviceID, templateID, params)
  }catch(err){
    console.log(err)
  }  
}


async function moveToFrontPage(){
  window.location.href = "../../index.html";
} 

getEmployeesAll();

getServicesAll();

//create also a textarea for a description later