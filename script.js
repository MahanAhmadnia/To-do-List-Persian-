// DOM
const input = document.getElementById('input');
const addButton = document.getElementById('addButton');
const result = document.getElementById('result');

// Program
addButton.addEventListener("click",() => {
    
    const workText = input.value.trim();

    if (workText === ""){
        alert("فیلد وظیفه نباید خالی باشد");
        return;
    }

    result.innerHTML += `

    <div class="w-full flex items-center justify-between px-3 py-2 my-3 border border-gray-300 rounded-md bg-white">

        <div class="flex items-center justify-between">

            <input id="checkboxBtn" type="checkbox" class="me-3">

            <span class="text-sm">${workText}</span>

        </div>

        <button onclick="this.parentElement.remove()" class="p-1 rounded-md hover:bg-violet-50 active:scale-95">
    
            <img src="images/delete_22dp_666666_FILL0_wght400_GRAD0_opsz24.svg">

        </button>
    </div>`

    input.value = "";
})

// checkboxBtn
result.addEventListener("change", (e) => {
    if (e.target.id === "checkboxBtn") {
        e.target.nextElementSibling.classList.toggle("line-through");
    }
});

// Press Enter
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addButton.click();
    }
});