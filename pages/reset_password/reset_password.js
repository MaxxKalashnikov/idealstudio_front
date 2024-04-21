import { User } from "../../js/classes/user.js";
const reset = document.getElementById('reset');
const user = new User()

reset.addEventListener('click', async ()=>{
    const emailInp = document.getElementById('exampleFormControlInput1')
    const actualEmail = emailInp.value;
    let username = ''
    console.log(actualEmail)
    try{
        const response = await user.resetPassword(username, actualEmail)
        console.log(response.resetToken)
        const link = `http://localhost:3001/users/resetpassword/${response.resetToken}`
        await sendMail(actualEmail, link)
    }catch(e){
        console.log(e)
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
  
    let templateID = "template_2wcessl"
  
    emailjs.send(serviceID, templateID, params)
    .then(res=>{
      alert('message has been sent successfully')
    })
  }