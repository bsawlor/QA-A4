document.addEventListener('DOMContentLoaded', function() {
    window.localStorage.remove("remove");
    display();
}

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;
}

function display(){
    var tableRef = document.getElementById("entries").getElementsByTagName(tbody);

    for(var i = 0; i < localStorage.length; i++){
        var entry = JSON.parse(localStorage.getItem(localStorage.key(i)));
        //var newrow = tableRef.insertRow();
        entry.map(instance => {
            const row = document.createElement('tr');
            tableRef.appendChild(row);
            instance.map(info => {
                const cell = document.createElement('td');
                cell.innerText = info;
                row.appendChild(cell);
            });
        });
    }
}

function search(input){
    
}