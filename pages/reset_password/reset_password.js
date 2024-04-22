import { User } from "../../js/classes/user.js";
const reset = document.getElementById('reset');
const checkCode = document.getElementById('checkCode')
const user = new User()

reset.addEventListener('click', async ()=>{
    const emailInp = document.getElementById('exampleFormControlInput1')
    const actualEmail = emailInp.value;
    let username = ''
    console.log(actualEmail)
    try{
        const response = await user.resetPassword(username, actualEmail)
        console.log(response.resetToken)
        const code = response.resetToken.slice(0, 6); 
        await sendMail(actualEmail, code)
        const resetToken = sessionStorage.getItem('resetToken');
        if(resetToken){
          const emailDiv = document.getElementById('divForEmail')
          const codeDiv = document.getElementById('divForCode')

          emailDiv.style.display = "none"
          codeDiv.style.display = "block"
        }else{
          console.log('not found')
        }
    }catch(e){
        console.log(e)
    }
})

checkCode.addEventListener('click', async() =>{
    let codeInp = document.getElementById('codeInp');
    let resetToken = sessionStorage.getItem('resetToken');
    resetToken = resetToken.slice(1, 7); 
    codeInp = codeInp.value.trim()
    console.log(resetToken + '\n\n' + codeInp)

    if(codeInp == resetToken){
      console.log('gocha')
    }else{
      console.log('hell nah')
    }
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