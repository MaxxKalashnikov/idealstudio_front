let backend_root_url = ""; 
import { User } from './classes/user.js';
import { StatAndInfo } from './classes/statAndInfo.js' //importing class for appointments



const user = new User()
const userInf = await user.checkToken();

if (userInf.role == "customer"){
    backend_root_url = "http://localhost:3001/customers/profile"
}
else{
    backend_root_url = "http://localhost:3001/home"
}

console.log("BAQCKEND URL", backend_root_url)
const statNinfo = new StatAndInfo(backend_root_url);
const getInformationAndStatistics = async () => {

    console.log(userInf)
    statNinfo.getInfo(userInf.id).then((piece) =>{
        piece.forEach(elem => {
            renderInfo(elem);//handling of ui elements
        });
    }).catch((error) => {//error handling
        alert(error)
    })
}

const getInformation = async () => {
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

    statNinfo.updateInfo(nameInp.value, snameInp.value, emailInp.value, phoneInp.value, userInf.id)
    .then(() => getInformationAndStatistics())
    .catch((error) => {
        alert(error); // Error handling
    });
})

getInformation();