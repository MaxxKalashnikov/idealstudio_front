const BACKEND_ROOT_URL = "http://localhost:3001/appointments"; //back url 
import { Appointments } from './classes/appointmentAll.js' //importing class for appointments
const appointments = new Appointments(BACKEND_ROOT_URL);

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

//initial func for getting a list appointments
const getAppointmentsAll = async () => {
    //method from todos class which returns an array of task objects
    appointments.getAppointments().then((appoints) =>{
        appoints.forEach(appoint => {
            renderAppointment(appoint);//handling of ui elements
        });
    }).catch((error) => {//error handling
        alert(error)
    })
}


const changeStatus = async () =>{
    const changeButton = document.getElementById('changeButton');
    changeButton.addEventListener('click', ()=>{
        let checkboxes = document.querySelectorAll('[id^="checkBoxAppointment"]');
        checkboxes = Array.from(checkboxes);
        let idNumber;
        checkboxes.forEach(box =>{
            if(box.checked){
                idNumber = box.id.substring(19); 
            }
        })

        appointments.cancelOrActivateAppointment(idNumber).catch((error) => {//error handling
            alert(error)
        });//it works but probaly there is a small bug somewhere
        // location.reload();
        })
}

getAppointmentsAll();
changeStatus();