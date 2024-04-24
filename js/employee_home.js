const BACKEND_ROOT_URL = "http://localhost:3001/home"; //back url 
import { User } from './classes/user.js';
import { StatAndInfo } from './classes/statAndInfo.js' //importing class for appointments
const statNinfo = new StatAndInfo(BACKEND_ROOT_URL);
const user = new User()

const getInformation = async () => {
    const userInf = await user.checkToken();
    //method from todos class which returns an array of task objects
    statNinfo.getInfo(userInf.id).then((piece) =>{
        piece.forEach(elem => {
            renderInfo(elem);//handling of ui elements
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
})

getInformation();