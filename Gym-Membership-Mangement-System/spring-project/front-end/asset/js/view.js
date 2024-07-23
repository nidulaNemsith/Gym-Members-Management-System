
let table = document.getElementById("tblMember");

function getMember() {

    let body = `<tr>
                <th>Phone Number</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
                <th>Gender</th>
                </tr>`;

    fetch("http://localhost:8080/member")
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                console.log(element);
                body += `<tr>
                        <td>${element.phoneNumber}</td>
                        <td>${element.name}</td>
                        <td>${element.age}</td>
                        <td>${element.address}</td>
                        <td>${element.gender}</td>
                    </tr>`
            });
            table.innerHTML = body;

        })

}