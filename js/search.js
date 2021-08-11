document.addEventListener('DOMContentLoaded', function() {
    window.localStorage.removeItem("remove");
    console.log(localStorage);

    for (var i = 0; i < localStorage.length; i++) {
        var entry = JSON.parse(localStorage.getItem(localStorage.key(i)));
        // if (!entry.includes("@")) { localStorage.removeItem(localStorage.key(i)); }
        console.log(entry);
    }
    console.log(localStorage.length);

    display();
})

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }

    return values;
}

function display() {
    var tableRef = document.getElementById('entries').getElementsByTagName('tbody')[0]; //.getElementById("entries"); //

    for (var i = 0; i < localStorage.length; i++) {
        var entry = JSON.parse(localStorage.getItem(localStorage.key(i)));
        //var newrow = tableRef.insertRow();
        console.log(entry);
        var row = tableRef.insertRow(-1);
        var fname = row.insertCell(0);
        var lname = row.insertCell(1);
        var address = row.insertCell(2);
        var city = row.insertCell(3);
        var province = row.insertCell(4);
        var postal = row.insertCell(5);
        var phone = row.insertCell(6);
        var email = row.insertCell(7);
        var notes = row.insertCell(8);
        // var remove = row.insertCell(9);

        fname.innerHTML = entry.fname;
        lname.innerHTML = entry.lname;
        address.innerHTML = entry.address;
        city.innerHTML = entry.city;
        province.innerHTML = entry.province;
        postal.innerHTML = entry.postal;
        phone.innerHTML = entry.phone;
        email.innerHTML = entry.email;
        notes.innerHTML = entry.notes;
        // remove.innerHTML = `<a href='#' onclick='window.localStorage.removeItem(${entry.email})'>Remove</a>`;
        // remove.innerHTML = `<a href='#' onclick='remove(${entry.email})'>Remove</a>`;


        // entry.map(instance => {
        //     const row = document.createElement('tr');
        //     tableRef.appendChild(row);
        //     instance.map(info => {
        //         const cell = document.createElement('td');
        //         cell.innerText = info;
        //         row.appendChild(cell);
        //     });
        // });
    }
}

function remove(input) {
    window.localStorage.removeItem(input);
    window.location.href = "/search/index.html";
}