const BACKEND_ROOT_URL = "http://localhost:3001/appointments"; //back url 
import { Appointments } from './classes/appointmentAll.js' //importing class for appointments
const appointments = new Appointments(BACKEND_ROOT_URL);

const parentElement = document.getElementById('tableAppointmentsBody');


function renderAppointment(appointment){
    // Создаем элемент tr
    var tr = document.createElement("tr");

    // Создаем элементы th, td и div для каждой ячейки
    var th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.textContent = appointment.appointment_id;

    var td1 = document.createElement("td");
    var div = document.createElement("div");
    div.classList.add("form-check");
    var input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.classList.add("form-check-input");
    input.setAttribute("value", "");
    input.setAttribute("id", `checkBoxAppointment${appointment.appointment_id}`);
    div.appendChild(input);
    td1.appendChild(div);

    var td8 = document.createElement("td");
    var date = appointment.timeslot_date;
    date = date.substring(0, 10)
    td8.textContent = date;

    var td2 = document.createElement("td");
    td2.textContent = appointment.start_time;

    var td3 = document.createElement("td");
    td3.textContent = appointment.end_time;

    var td4 = document.createElement("td");
    td4.textContent = appointment.service_name;

    var td5 = document.createElement("td");
    td5.textContent = appointment.employee_firstname +" " + appointment.employee_lastname;

    var td6 = document.createElement("td");
    td6.textContent = appointment.customer_firstname + " " + appointment.customer_lastname;

    var td7 = document.createElement("td");
    if(appointment.is_canceled == false){
        td7.textContent = "active";
    }
    else{
        td7.textContent = "canceled";
    }

    // Добавляем созданные элементы в родительский tr
    tr.appendChild(th);
    tr.appendChild(td1);
    tr.appendChild(td8);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);

    // Добавляем созданный tr в таблицу с id "myTable"
    document.getElementById("tableAppointmentsBody").appendChild(tr);
 
}

function cleanDiv(){
    const childElement = parentElement.querySelector('tr');
    if(childElement){
        while (parentElement.firstChild) {
            parentElement.removeChild(parentElement.firstChild);
        }
    }
}

//initial func for getting a list appointments
const getAppointmentsAll = async () => {
    cleanDiv()
    //method from todos class which returns an array of task objects
    appointments.getAppointments().then((appoints) =>{
        console.log(appoints)
        appoints.forEach(appoint => {
            renderAppointment(appoint);//handling of ui elements
        });
    }).catch((error) => {//error handling
        alert(error)
    })
}

const changeButton = document.getElementById('changeButton');
changeButton.addEventListener('click', () => {
    let checkboxes = document.querySelectorAll('[id^="checkBoxAppointment"]');
    let num = 0;
    checkboxes = Array.from(checkboxes);
    let idNumber = 0;
    checkboxes.forEach(box => {
        if (box.checked) {
            idNumber = box.id.substring(19);
            idNumber = Number(idNumber);
            num++;
        }
    });
    if (num == 0) {
        return;
    }
    const detailsDiv = document.getElementById('detailsDiv');

    const childElement = detailsDiv.querySelector('p');
    if(childElement){
        while (detailsDiv.firstChild) {
            detailsDiv.removeChild(detailsDiv.firstChild);
        }
    }

    // Call cancelOrActivateAppointment and chain getAppointmentsAll after it's resolved
    appointments.cancelOrActivateAppointment(idNumber)
        .then(() => getAppointmentsAll()) // Fetch updated data after the operation is complete
        .catch((error) => {
            alert(error); // Error handling
        });
});

function renderDetails(appointment){
    const detailsDiv = document.getElementById('detailsDiv');

    const childElement = detailsDiv.querySelector('p');
    if(childElement){
        while (detailsDiv.firstChild) {
            detailsDiv.removeChild(detailsDiv.firstChild);
        }
    }

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
        paragraph.textContent = appointment[field]; 
        detailsDiv.appendChild(paragraph);
      });
}

const getAppointmentsMore = async (id) => {
    //method from todos class which returns an array of task objects
    appointments.getMoreDetails(id).then((appoints) =>{
        appoints.forEach(appoint => {
            renderDetails(appoint);//handling of ui elements
        });
    }).catch((error) => {//error handling
        alert(error)
    })
}

const more = document.getElementById('moreBut');
more.addEventListener('click', ()=>{
    let checkboxes = document.querySelectorAll('[id^="checkBoxAppointment"]');
    let num = 0;
    checkboxes = Array.from(checkboxes);
    let idNumber = 0;
    checkboxes.forEach(box => {
        if (box.checked) {
            idNumber = box.id.substring(19);
            idNumber = Number(idNumber);
            num++;
        }
    });
    if (num == 0) {
        return;
    }

    getAppointmentsMore(idNumber);
})

getAppointmentsAll();