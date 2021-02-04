

function replyID() {
    let td_ID = (event.srcElement.id);

    alert(td_ID);
    console.log(td_ID);
    return (td_ID);
    
}

function inputCijfer() {
    document.querySelector("#a1").innerHTML = (event.srcElement.innerHTML);
}




// document.querySelectorAll("td").addEventlistener("click", replyID());