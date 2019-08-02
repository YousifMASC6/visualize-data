const main = document.querySelector("main")


const createCard = (obj, indx) => {
    const newCard = document.createElement("div")
    newCard.className = "card"
    newCard.id = indx;

    const face = document.createElement("img")
    face.src = obj.picture.medium
    face.alt = "Portrait"

    const newText = document.createElement("p")
    newText.innerText = `${obj.name.first} ${obj.name.last}
    ${obj.location.city} ${obj.location.state}
    ${obj.email}
    ${obj.login.username}
    ${obj.dob.age}`


    newCard.appendChild(face)
    newCard.appendChild(newText)
    main.appendChild(newCard)
}



const loopCreate = arr => {
    for(let i = 0; i < arr.length; i++){
        createCard(arr[i], i)
}
}

loopCreate(list)


