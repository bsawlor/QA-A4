function validate(fname, lname, address, city, province, postal, phone, email, notes) {
    // fname, lname, address, city, province, postal, phone, email, notes
    // var fname = document.getElementById("fname").value;
    // var lname = document.getElementById("lname").value;
    // var address = document.getElementById("address").value;
    // var city = document.getElementById("city").value;
    // var province = document.getElementById("province").value;
    // var postal = document.getElementById("postal").value;
    // var phone = document.getElementById("phone").value;
    // var email = document.getElementById("email").value;
    // var notes = document.getElementById("notes").value;


    if (checkIfExists(email)) {
        alert(`${email} has already been entered as a contact. Please enter a new email.`);
        return;
    }

    if (checkIfPostal(postal)) {
        alert(`${postal} is an invalid postal code. Please enter a new postal code.`);
        return;
    }

    if (checkIfPhone(phone)) {
        alert(`${phone} is an invalid phone. Please enter one formatted like either of these: 123-123-1234, or (123)123-1234).`);
        return;
    }

    const entry = {
        fname: fname,
        lname: lname,
        address: address,
        city: city,
        province: province,
        postal: postal,
        phone: phone,
        email: email,
        notes: notes,
    }

    save(email, entry);

    remove_link(email);

}

function remove_link(email) {
    var a = document.createElement('a');

    var link = document.createTextNode(email);
    a.appendChild(link);

    a.title = "View contact details";

    a.href = "../remove/index.html";

    document.getElementById("entry-saved").appendChild(a);
}

function checkIfPhone(phone) {
    //var pattern = /(\d{3}\-\d{3}\-\d{4})|(\(\d{3}\)\d{3}\-\d{4})/g;
    var pattern = new RegExp("/^((\d{3}\-)|(\(\d{3}\)))\d{3}\-\d{4}$/g");
    // var result = pattern.test(phone);
    // if (result.length == 7)
    // {
    //     return true;
    // }
    // return false;

    return pattern.test(phone);
}


function checkIfPostal(postal) {
    var pattern = /[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ] \d[ABCEGHJKLMNPRSTVWXYZ]\d/;

    // var result = pattern.test(postal);
    // if (result.length == 7)
    // {
    //     return true;
    // }
    // return false;

    return pattern.test(postal);
}

function checkIfExists(email) {
    var test = window.localStorage.getItem(email);

    if (test == null) {
        return false;
    }
    return true;
}

function save(email, entry) {
    window.localStorage.setItem(email, JSON.stringify(entry));
    window.localStorage.setItem("remove", email);
}