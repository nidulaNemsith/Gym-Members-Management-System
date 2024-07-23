document.getElementById("btn-search").addEventListener("click", function () {
    let phoneNumber = document.getElementById("txt-phone-number").value;
    setValues(phoneNumber);
})

function setValues(phoneNumber) {

    fetch("http://localhost:8080/member")
        .then(res => res.json())
        .then(data => {
            data.forEach(member => {
                if (member.phoneNumber == phoneNumber) {
                    document.getElementById("txt-phone-number").value=member.phoneNumber;
                    document.getElementById("txt-search-name").value=member.name;
                    document.getElementById("txt-search-age").value=member.age;
                    document.getElementById("txt-search-address").value=member.address;
                    document.getElementById("txt-search-gender").value=member.gender;
                }else{
                    alert("Member not Found !!!");
                    clearField();
                }
            });
        })
}

function clearField() {
    document.getElementById("txt-search-name").value =null;
    document.getElementById("txt-search-age").value = null;
    document.getElementById("txt-search-address").value = null;
    document.getElementById("txt-search-gender").value = null;
    document.getElementById("txt-phone-number").value=null;
}

