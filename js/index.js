import { Services } from "./classes/services.js";
const url = "http://localhost:3001/services"
const servicesInstance = new Services(url);

const pictures = {
    1: '/assets/manicWomen.jpg',
    2: '/assets/manicMen.jpg',
    3: '/assets/manicRemove.jpg',
    4: '/assets/manicShort.jpg',
    5: '/assets/manicLong.jpg',
    6: '/assets/manicExtention.jpg',
    7: '/assets/pedicWomen.jpg',
    8: '/assets/pedicCoating.jpg',
    9: '/assets/pedicMen.jpg',
}

function renderService(serv){
    if(serv.category == 'manicure'){
        //const body = document.querySelector('#collapseOne.accordion-body');
        const collapseOne = document.querySelector("#collapseOne");

        const body = collapseOne.querySelector(".accordion-body");
        let p = document.createElement('p');
        p.id = `service${serv.serviceId}`;
        p.style.cursor = 'pointer';
        p.innerText = serv.serviceName;
        p.addEventListener('click', ()=>{
            const parent = document.getElementById("description");
            const spaceForPic = document.getElementById("example");

            while (parent.firstChild || spaceForPic.firstChild) {
                if(parent.firstChild){
                    parent.removeChild(parent.firstChild);
                }
                if(spaceForPic.firstChild){
                    spaceForPic.removeChild(spaceForPic.firstChild);
                }
            }

            const description = document.createElement("p");
            description.innerText = serv.description;
            const getApp = document.createElement("button");
            getApp.setAttribute('type', 'button');
            getApp.classList.add('btn', 'btn-primary');
            getApp.innerText = "Get appointment";
            const topic = document.createElement("h3");
            topic.innerText = serv.serviceName;
            const price = document.createElement("h4");
            price.innerText = serv.price + "€";
            
            parent.appendChild(topic);
            parent.appendChild(description);
            parent.appendChild(price);
            parent.appendChild(getApp);

            var prevActive = body.querySelector('.active');
            if (prevActive) {
                prevActive.classList.remove('active');
            }
            p.classList.add('active');

            const img = document.createElement("img");
            img.setAttribute("class", "img-fluid");
            img.setAttribute("src", pictures[serv.serviceId]);

            spaceForPic.appendChild(img);
        })
        body.appendChild(p)
    }
    else if(serv.category == "pedicure"){
        const collapseOne = document.querySelector("#collapseTwo");

        const body = collapseOne.querySelector(".accordion-body");
        let p = document.createElement('p');
        p.id = `service${serv.serviceId}`;
        p.style.cursor = 'pointer';
        p.innerText = serv.serviceName;
        p.addEventListener('click', ()=>{
            const parent = document.getElementById("description");
            const spaceForPic = document.getElementById("example");

            while (parent.firstChild || spaceForPic.firstChild) {
                if(parent.firstChild){
                    parent.removeChild(parent.firstChild);
                }
                if(spaceForPic.firstChild){
                    spaceForPic.removeChild(spaceForPic.firstChild);
                }
            }

            const description = document.createElement("p");
            description.innerText = serv.description;
            const getApp = document.createElement("button");
            getApp.setAttribute('type', 'button');
            getApp.classList.add('btn', 'btn-primary');
            getApp.innerText = "Get appointment";
            const topic = document.createElement("h3");
            topic.innerText = serv.serviceName;
            const price = document.createElement("h4");
            price.innerText = serv.price + "€";
            
            parent.appendChild(topic);
            parent.appendChild(description);
            parent.appendChild(price);
            parent.appendChild(getApp);

            var prevActive = body.querySelector('.active');
            if (prevActive) {
                prevActive.classList.remove('active');
            }
            p.classList.add('active');

            const img = document.createElement("img");
            img.setAttribute("class", "img-fluid");
            img.setAttribute("src", pictures[serv.serviceId]);

            spaceForPic.appendChild(img);
        })
        body.appendChild(p)
    }

}

async function getServicesFront(){
    try {
        const serviceResponse = await servicesInstance.getServices();
        serviceResponse.forEach(serviceNode => {
            renderService(serviceNode)
        });
        clickMe()
    } catch (error) {
        console.error(error);
    }
}


function clickMe(){
    const collapseOne = document.querySelector("#collapseOne");
    const body = collapseOne.querySelector(".accordion-body");
    const elementToClick = body.getElementsByTagName('p')[0]

    const clickEvent = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window
    });

    elementToClick.dispatchEvent(clickEvent);
}

getServicesFront()
