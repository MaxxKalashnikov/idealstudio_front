import { User } from "../../js/classes/user.js";
const reset = document.getElementById('reset');
const checkCode = document.getElementById('checkCode')
const user = new User()
let plainToken = ''

const emailDiv = document.getElementById('divForEmail')
const codeDiv = document.getElementById('divForCode')
const divForUsername = document.getElementById('divForUsername')
const checkMail = document.getElementById('checkMail')
const resetForUname = document.getElementById('resetForUname')
const backToUname = document.getElementById('backToUname')

checkMail.addEventListener('click', ()=>{
  divForUsername.style.display = 'none'
  emailDiv.style.display = 'block'
})

resetForUname.addEventListener('click', async()=>{
  const unameDiv = document.getElementById('unameDiv')
    const actualEmail = "";
    let username = unameDiv.value
    if(username.length > 0){
      console.log(username)
      try{
          const response = await user.resetPassword(username, actualEmail)
          if(response.message){
            alert('User with such username does not exist')
          }
          console.log(response)
          plainToken = response.resetToken;
          const code = response.resetToken.slice(0, 6); 
          //await sendMail(actualEmail, code)
          if(response.resetToken.length > 1){
            divForUsername.style.display = "none"
            codeDiv.style.display = "block"
          }else{
            console.log('not found')
          }
      }catch(e){
          console.log(e)
      }
    }else{
      alert('Fill the field first!')
    }
})

backToUname.addEventListener('click', ()=>{
  divForUsername.style.display = 'block'
  emailDiv.style.display = 'none'
})

reset.addEventListener('click', async ()=>{
    const emailInp = document.getElementById('exampleFormControlInput1')
    const actualEmail = emailInp.value;
    if(actualEmail.length > 0){
      let username = ''
      console.log(actualEmail)
      try{
          const response = await user.resetPassword(username, actualEmail)
          console.log(response)
          if(response.message){
            alert('User with such email does not exist')
          }
          plainToken = response.resetToken;
          const code = response.resetToken.slice(0, 6); 
          //await sendMail(actualEmail, code)
          if(response.resetToken.length > 1){
            emailDiv.style.display = "none"
            codeDiv.style.display = "block"
          }else{
            console.log('not found')
          }
      }catch(e){
          console.log(e)
    }
    }else{
      alert('Fill the field first!')
    }
})

const divForNewPassword = document.getElementById('divForNewPassword')
checkCode.addEventListener('click', async() =>{
    let codeInp = document.getElementById('codeInp');
    let plainTokenCut = plainToken.slice(0, 6); 
    codeInp = codeInp.value.trim()
    console.log(plainTokenCut + '\n\n' + codeInp)

    if(codeInp == plainTokenCut){
      console.log('gocha')
      codeDiv.style.display = "none"
      divForNewPassword.style.display = 'block'
    }else{
      console.log('hell nah')
    }
})

const sendNewPass = document.getElementById('sendNewPass')
sendNewPass.addEventListener('click', async()=>{
  const newPass = document.getElementById('newPass')
  const confNewPass = document.getElementById('confNewPass') 

  if(newPass.value === confNewPass.value && newPass.value.length >= 4 && confNewPass.value.length >=4){
    const result = await user.createNewPass(newPass.value, plainToken)
    if(result){
      console.log(result)
      const divSucass = document.getElementById('divSucass')
      divForNewPassword.style.display = 'none'
      divSucass.style.display = 'block'
    }
  }
  else{
    alert('Passwords do not match or are too short!')
    newPass.value = ""
    confNewPass.value = ""
  }
})

const mainPage = document.getElementById('mainPage');
mainPage.addEventListener('click', ()=>{
  window.location.href = "http://127.0.0.1:5501/index.html#";
})

async function sendMail(mail, message){
    (function(){
      emailjs.init('zY9SWgodnH3F5FHTU');//public key needs to be saved in .env file later
    })();
  
    let params = {
      sendername: "Nail-studio IDEAL",
      to: mail,
      subject: "Your appointment details",
      replyto: "maxvanholl75@gmail.com",
      message: message
    };
  
    let serviceID = "service_4j0j5yh"
  
    let templateID = "template_j5m8wg8"
  
    emailjs.send(serviceID, templateID, params)
    .then(res=>{
      alert('message has been sent successfully')
    })
  }