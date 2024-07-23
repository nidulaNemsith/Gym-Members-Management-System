document.getElementById("btn-search").addEventListener("click", function () {
    let phoneNumber = document.getElementById("txt-phone-number").value;
    setValues(phoneNumber);
    mapRequset();
})

function setValues(phoneNumber) {

    fetch("http://localhost:8080/member")
        .then(res => res.json())
        .then(data => {
            data.forEach(member => {
                if(member.phoneNumber == phoneNumber){
                    document.getElementById("txt-phone-number").value=member.phoneNumber;
                    document.getElementById("txt-search-name").value=member.name;
                    document.getElementById("txt-search-age").value=member.age;
                    document.getElementById("txt-search-address").value=member.address;
                    document.getElementById("gender-options").value=member.gender;
                    console.log(member);
                }                
            });
        })
}

function clearForm() {
    document.getElementById("txt-search-name").value =null;
    document.getElementById("txt-search-age").value = null;
    document.getElementById("txt-search-address").value = null;
    document.getElementById("txt-search-gender").value = null;
    document.getElementById("txt-phone-number").value=null;
}


document.getElementById("btn-update")
    .addEventListener("click", saveMember)

function saveMember() {

    let requestBody = mapRequset();

    fetch("http://localhost:8080/member/${requestBody.phoneNumber}", {
        method: 'PUT',
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
    let num=document.getElementById("txt-phone-number").value;
    requestBody.phoneNumber =parseInt(num,10);
    requestBody.name = document.getElementById("txt-search-name").value;
    requestBody.age = document.getElementById("txt-search-age").value;
    requestBody.address = document.getElementById("txt-search-address").value;

    let genderValue = document.getElementById("gender-options").value;
    if (genderValue != "Gender") {
        requestBody.gender = genderValue;
    }
    return requestBody;
}

function showSucess() {
    const toastLive= document.getElementById('liveToast');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive);
    toastBootstrap.show()
}
