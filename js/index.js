const service1 = document.getElementById('service1');
const service2 = document.getElementById('service2');
service1.addEventListener('click', ()=>{
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
    description.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem odit maxime eligendi error ullam! Ea explicabo cumque tempore eius reprehenderit.";
    const getApp = document.createElement("button");
    getApp.innerText = "Get appointment";
    const topic = document.createElement("h3");
    topic.innerText = service1.innerText;
    const price = document.createElement("h4");
    price.innerText = "5$";

    parent.appendChild(topic);
    parent.appendChild(description);
    parent.appendChild(price);
    parent.appendChild(getApp);

    const img = document.createElement("img");
    img.setAttribute("class", "img-fluid");
    img.setAttribute("src", "./assets/girl.png");

    spaceForPic.appendChild(img);
})

service2.addEventListener('click', ()=>{
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
    description.innerText = "One more example of description. Here goes brief info about the service.";
    const getApp = document.createElement("button");
    getApp.innerText = "Get appointment";
    const topic = document.createElement("h3");
    topic.innerText = service2.innerText;
    const price = document.createElement("h4");
    price.innerText = "10$";
    
    parent.appendChild(topic);
    parent.appendChild(description);
    parent.appendChild(price);
    parent.appendChild(getApp);

    const img = document.createElement("img");
    img.setAttribute("class", "img-fluid");
    img.setAttribute("src", "./assets/girl2.png");

    spaceForPic.appendChild(img);
})