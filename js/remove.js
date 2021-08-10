document.addEventListener('DOMContentLoaded', function() {
    var email = window.localStorage.getItem("remove");
    if (!email) {
        window.location.href = '../new/index.html';
    }

    var entry = window.localStorage.getItem(email);

    var entry = JSON.parse(entry);

    document.getElementById('fname').value = entry.fname;
    document.getElementById('lname').value = entry.lname;
    document.getElementById('address').value = entry.address;
    document.getElementById('city').value = entry.city;
    document.getElementById('province').value = entry.province;
    document.getElementById('postal').value = entry.postal;
    document.getElementById('phone').value = entry.phone;
    document.getElementById('email').value = entry.email;
    document.getElementById('notes').value = entry.notes;

}, false);


function remove() {
    var email = window.localStorage.getItem("remove");
    window.localStorage.removeItem(email);
    window.localStorage.removeItem("remove");
    window.location.href = '/new/index.html';
}