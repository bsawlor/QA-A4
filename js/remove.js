document.addEventListener('DOMContentLoaded', function() {
    var email = window.localStorage.getItem("remove");
    if (!email) {
        window.location.href = '../new/index.html';
    }

    var entry = window.localStorage.getItem(email);

    var entry = JSON.parse(entry);

    document.getElementById('fname').innerHTML = entry.fname;
    document.getElementById('lname').innerHTML = entry.lname;
    document.getElementById('address').innerHTML = entry.address;
    document.getElementById('city').innerHTML = entry.city;
    document.getElementById('province').innerHTML = entry.province;
    document.getElementById('postal').innerHTML = entry.postal;
    document.getElementById('phone').innerHTML = entry.phone;
    document.getElementById('email').innerHTML = entry.email;
    document.getElementById('notes').innerHTML = entry.notes;

}, false);


function remove() {
    var email = window.localStorage.getItem("remove");
    window.localStorage.remove(email);
    window.localStorage.remove("remove");
    window.location.href = '../new/index.html';
}