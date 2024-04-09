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
// imgManic.addEventListener('click', () => {
//   manic = true;
//   pedic = false;
// });

// imgPedic.addEventListener('click', () => {
//   manic = false;
//   pedic = true;
// });

// imgManic1.addEventListener('click', () => {
//   manic = true;
//   pedic = false;
// });

// imgPedic1.addEventListener('click', () => {
//   manic = false;
//   pedic = true;
// });

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

nextToDate.addEventListener('click', () => {
  masterSection.style.display = "none";
  datetimeSection.style.display = "block";
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
  masterSection.style.display = "none";
  datetimeSection.style.display = "block";
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
  datetimeSection.style.display = "none";
  infoSection.style.display = "block";
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
  datetimeSection.style.display = "none";
  infoSection.style.display = "block";
});

backToMaster1.addEventListener('click', () => {
  datetimeSection.style.display = "none";
  masterSection.style.display = "block";
});

backToDate1.addEventListener('click', () => {
  infoSection.style.display = "none";
  datetimeSection.style.display = "block";
});

const BACKEND_ROOT_URL = "http://localhost:3001/services"; //back url 
import { Services } from "../../../js/classes/services.js" //importing class for appointments
const services = new Services(BACKEND_ROOT_URL);

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
  const parent = document.getElementById('ourId');

  const p = document.createElement('p');
  console.log(service)
  p.innerText = service.serviceName;

  parent.appendChild(p);
}

getServicesAll();