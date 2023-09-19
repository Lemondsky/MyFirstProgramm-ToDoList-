function addElement() {
    const input = document.querySelector("#input").value.trim(); 

    
    if (input !== "") {
        const createListItem = document.createElement("li");
        const list = document.querySelector("#list");
        createListItem.innerHTML = input;
        createListItem.className = "list-item";
        createListItem.addEventListener("click", function () {
            list.removeChild(createListItem);
        });
        list.appendChild(createListItem);
        document.querySelector("#input").value = "";
    }
}

document.querySelector("#input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addElement();
    }
});

function removeElement () {
    let i = document.querySelector("#list").childElementCount;
    while (i > 0) {
        const deleteItems = document.querySelector("li");
        const list = document.querySelector("#list");
        list.removeChild(deleteItems);
        i--;
    }
      
}

  


