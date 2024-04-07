
// render table row with timeslot data
function renderTableRow(timeslot) {
    const tBody = document.querySelector('#last-timeslots-table tbody')
    const tr = document.createElement('tr')

    const id_th = document.createElement('th')
    id_th.setAttribute('scope', 'row')
    id_th.innerText = timeslot.timeslot_id

    const employee_id_td = document.createElement('td')
    employee_id_td.innerText = timeslot.employee_id

    const employee_name_td = document.createElement('td')
    employee_name_td.innerText = timeslot.firstname + ' ' + timeslot.lastname

    const last_date_td = document.createElement('td')
    last_date_td.innerText = new Date(timeslot.last_timeslot_date).toLocaleDateString()

    
    tr.appendChild(id_th)
    tr.appendChild(employee_id_td)
    tr.appendChild(employee_name_td)
    tr.appendChild(last_date_td)

    tBody.appendChild(tr)
}


function renderMasterOption (id, name) {
    const master_select = document.getElementById('master')
    const s_option = document.createElement('option');
    s_option.setAttribute('value', id);
    s_option.appendChild(document.createTextNode(name));
    master_select.appendChild(s_option);
}


// get last timeslots
function getLastTimeslots() {
    fetch('http://localhost:3001/timeslots/last').then(respone => {
        return respone.json()
    }).then(json => {
        json.forEach(timeslot => {
            console.log(timeslot)
            renderTableRow(timeslot)
        })
    })
}

// get employees
function getEmloyees() {
    fetch('http://localhost:3001/employees').then(respone => {
        return respone.json()
    }).then(json => {
        json.forEach(employee => {
            console.log(employee)
            renderMasterOption(employee.employee_id, employee.firstname + ' ' + employee.lastname)
        })
    }).catch(error => {
        console.log(error)
    })
}

// add timeslot
const addTimeslot = async (timeslot) => {
    fetch('http://localhost:3001/timeslots/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(timeslot)
    }).then(response => {
        alert('Timeslot created successfully!')
        console.log(response)
    })
}


// create timeslot
document.getElementById('create-timeslot-btn').addEventListener('click', (event) => { 
    event.preventDefault()

    const employee_id = document.getElementById('master').value
    const start_date = document.getElementById('start-date').value
    const end_date = document.getElementById('end-date').value
    const start_time = document.getElementById('start-time').value
    const end_time = document.getElementById('end-time').value
    const duration = document.getElementById('duration').value

    if (employee_id === '' || start_date === '' || end_date === '' || start_time === '' || end_time === '' || duration === '') {
        alert('Please fill all the fields')
        return
    }

    const timeslot = {
        "employee_id": employee_id,
        "start_date": start_date,
        "end_date": end_date,
        "start_time": start_time,
        "end_time": end_time,
        "duration": duration
    }
    addTimeslot(timeslot)
    console.log(timeslot)
})



getLastTimeslots()
getEmloyees()