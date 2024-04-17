import { Appointments } from "../../js/classes/appointmentAll.js";
const BACKEND_ROOT_URL = "http://localhost:3001/appointments"; 
const appointments = new Appointments(BACKEND_ROOT_URL)

const appointId = document.getElementById('appointId');
const findApp = document.getElementById('findApp2');
const notFound = document.getElementById('notFound')
const josFound = document.getElementById('josFound')
const booking = document.getElementById('booking')
const cancelApp = document.getElementById('cancelApp')

booking.addEventListener('click', ()=>{
    window.location.href = "http://127.0.0.1:5501/pages/booking/booking.html";
})

cancelApp.addEventListener('click', async()=>{
    const idElement = document.getElementById('appointment_id')
    if(idElement){
        cleanDiv();
        appointments.cancelOrActivateAppointmentForUser(idElement.innerText)
        .then(() => appointments.getMoreDetails(idElement.innerText)
        .then((appoints)=>{
        if(appoints.length > 0){
            appoints.forEach(appoint => {
                renderDetails(appoint); // handling of ui elements
            });
            josFound.style.display = "block";
            notFound.style.display = "none";

            // alert(`Your appointment was successfully`)
        }
        else{
            josFound.style.display = "none";
            notFound.style.display = "block";
        }
        })) // Fetch updated data after the operation is complete
        .catch((error) => {
            alert(error); // Error handling
        });
    }
    else{
        alert('Your appointment is not found')
    }
})

findApp.addEventListener('click', async () => {
    cleanDiv();
    try {
        if (appointId.value !== '') {
            const appoints = await appointments.getMoreDetails(appointId.value);
            if(appoints.length > 0){
                appoints.forEach(appoint => {
                    renderDetails(appoint); // handling of ui elements
                });
                josFound.style.display = "block";
                notFound.style.display = "none";
            }
            else{
                josFound.style.display = "none";
                notFound.style.display = "block";
            }
        } else {
            josFound.style.display = "none";
            notFound.style.display = "block";
            alert("Provide an appointment number!");
        }
        appointId.value = '';
    } catch (error) {
        alert(error); // error handling
    }
});



function renderDetails(appointment){

    const appointmentFields = [
        'appointment_id',
        'timeslot_date',
        'start_time',
        'end_time',
        'service_name',
        'category',
        'price',
        'employee_firstname',
        'employee_lastname',
        'employee_email',
        'employee_phone',
        'employee_specialization',
        'customer_firstname',
        'customer_lastname',
        'customer_email',
        'customer_phone',
        'is_canceled'
      ];
      
      appointmentFields.forEach(field => {
        const paragraph = document.createElement('p');
        paragraph.id = `${field}`;
        console.log(appointment[field])
        if(appointment[field] === false){
            paragraph.textContent = "active"; 
        }else if(appointment[field] === true){
            paragraph.textContent = "canceled";
        }
        else{
            paragraph.textContent = appointment[field];
        }
        
        detailsDiv.appendChild(paragraph);
      });
}

function cleanDiv(){
    const detailsDiv = document.getElementById('detailsDiv');

    const childElement = detailsDiv.querySelector('p');
    if(childElement){
        while (detailsDiv.firstChild) {
            detailsDiv.removeChild(detailsDiv.firstChild);
        }
    }
}