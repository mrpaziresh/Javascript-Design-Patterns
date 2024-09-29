function createButton(label, onClick) {

    const button = document.createElement('button');

    button.textContent = label;

    button.addEventListener("click", onClick);

   
    return button;
}

const addButton = createButton("Add", () => {console.log("Add button Worked")})
const removeButton = createButton("Remove", () => {console.log("Remove button Worked")})


document.body.appendChild(addButton);
document.body.appendChild(removeButton);
