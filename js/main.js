let inputTask = document.getElementById("input_task"),
    btn = document.querySelector(".btn"),
    outputTask = document.querySelector("ol");


btn.onclick = function () {
    if(inputTask.value.trim() == "") {
        alert("Input Invalid");
    }
    else {
        outputTask.innerHTML += `<li>${inputTask.value}</li>`;
        inputTask.value = "";
        inputTask.focus();
        
    }
}