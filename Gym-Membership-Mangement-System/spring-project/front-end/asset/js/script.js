document.getElementById("btn-register")
    .addEventListener("click", saveMember)

function saveMember() {

    let requestBody = mapRequset();

    fetch("http://localhost:8080/member", {
        method: "POST",
        body: JSON.stringify(requestBody),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)            
            showSucess();
            clearForm();                
        })
        .catch(error =>{
            alert("network error!");
        })
}


function mapRequset() {

    let requestBody = {
        phoneNumber: undefined,
        name: undefined,
        age: undefined,
        address: undefined,
        gender: undefined
    }
    requestBody.phoneNumber = document.getElementById("txt-phone-number").value;
    requestBody.name = document.getElementById("txt-name").value;
    requestBody.age = document.getElementById("txt-age").value;
    requestBody.address = document.getElementById("txt-address").value;

    let genderValue = document.getElementById("gender-options").value;
    if (genderValue != "Gender") {
        requestBody.gender = genderValue;
    }
    return requestBody;
}

function clearForm() {
    document.getElementById("txt-phone-number").value = "";
    document.getElementById("txt-name").value = "";
    document.getElementById("txt-age").value = "";
    document.getElementById("txt-address").value = "";
    document.getElementById("gender-options").value = "Gender";
}

function showSucess() {
    const toastLive= document.getElementById('liveToast');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive);
    toastBootstrap.show()
}
