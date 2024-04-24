const BACKEND_ROOT_URL = "http://localhost:3001/home"; //back url 
import { StatAndInfo } from './classes/statAndInfo.js' //importing class for appointments
import { User } from './classes/user.js';
const statNinfo = new StatAndInfo(BACKEND_ROOT_URL);
const user = new User()
console.log(user.token)

const getInformationAndStatistics = async () => {
    const userInf = await user.checkToken();

    statNinfo.getInfo(userInf.id).then((piece) =>{
        piece.forEach(elem => {
            renderInfo(elem);//handling of ui elements
        });
    }).catch((error) => {//error handling
        alert(error)
    })

    statNinfo.getStat().then((piece) =>{
        piece.forEach(elem => {
            renderStat(elem);//handling of ui elements
        });
    }).catch((error) => {//error handling
        alert(error)
    })
}

function renderInfo(elem){
    const parent = document.getElementById('infoSection')

    const paragraphs = parent.querySelectorAll('p');
        paragraphs.forEach(paragraph => {
        paragraph.innerText = ''; // Set inner text to empty string
    });

    const pName = document.getElementById('forName');
    const pSname = document.getElementById('forSname');
    const pMail = document.getElementById('forMail');
    const pPhone = document.getElementById('forPhone');

    pName.innerText = elem.firstname;
    pSname.innerText = elem.secondname;
    pMail.innerText = elem.email;
    pPhone.innerText = elem.phone;
}

function renderStat(elem){
    const spanAppoint = document.getElementById('appointmentNumber')
    const spanMaster = document.getElementById('masterNumber')
    const spanClient = document.getElementById('customersNumber')
    const spanReview = document.getElementById('reviewsNumber')

    spanAppoint.innerText = elem.appointments;
    spanMaster.innerText = elem.employees;
    spanClient.innerText = elem.customers;
    spanReview.innerText = elem.reviews;
}

const editButton = document.getElementById('editBut')
editButton.addEventListener('click', ()=>{
    const pName = document.getElementById('forName');
    const pSname = document.getElementById('forSname');
    const pMail = document.getElementById('forMail');
    const pPhone = document.getElementById('forPhone');

    const nameInp = document.getElementById('nameInp');
    const snameInp = document.getElementById('snameInp');
    const emailInp = document.getElementById('emailInp');
    const phoneInp = document.getElementById('phoneInp');

    nameInp.value = pName.innerText;
    snameInp.value = pSname.innerText;
    emailInp.value = pMail.innerText;
    phoneInp.value = pPhone.innerText;
})

const submit = document.getElementById('submitChanges');
submit.addEventListener('click', ()=>{
    const nameInp = document.getElementById('nameInp');
    const snameInp = document.getElementById('snameInp');
    const emailInp = document.getElementById('emailInp');
    const phoneInp = document.getElementById('phoneInp');

    statNinfo.updateInfo(nameInp.value, snameInp.value, emailInp.value, phoneInp.value)
    .then(() => getInformationAndStatistics())
    .catch((error) => {
        alert(error); // Error handling
    });
})

getInformationAndStatistics();