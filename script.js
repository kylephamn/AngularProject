function createTable() {
    const container = document.getElementById("controls-container");
    const rows = document.getElementById("colors").value;
    const cols = 2;
    const tbl = document.createElement('table');
    tbl.className += "color-tbl";

    for (let i = 0; i < rows; i++) {
        var tr = tbl.insertRow();
        for (let j = 0; j < cols; j++) {
            const td = tr.insertCell();
            if (j == 0) {
                td.className += "left-col";
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'colors';
                td.appendChild(radio);

                const select = document.createElement('select');
                const red = document.createElement('option');
                red.value = 'red';
                red.text = 'red';
                select.add(red);
                const orange = document.createElement('option');
                orange.value = 'orange';
                orange.text = 'orange';
                select.add(orange);
                const yellow = document.createElement('option');
                yellow.value = 'yellow';
                yellow.text = 'yellow';
                select.add(yellow);
                const green = document.createElement('option');
                green.value = 'green';
                green.text = 'green';
                select.add(green);
                const blue = document.createElement('option');
                blue.value = 'blue';
                blue.text = 'blue';
                select.add(blue);
                const purple = document.createElement('option');
                purple.value = 'purple';
                purple.text = 'purple';
                select.add(purple);
                const grey = document.createElement('option');
                grey.value = 'grey';
                grey.text = 'grey';
                select.add(grey);
                const black = document.createElement('option');
                black.value = 'black';
                black.text = 'black';
                select.add(black);
                const brown = document.createElement('option');
                brown.value = 'brown';
                brown.text = 'brown';
                select.add(brown);
                const teal = document.createElement('option');
                teal.value = 'teal';
                teal.text = 'teal';
                select.add(teal);

                td.appendChild(select);
            }
        }
    }
    container.appendChild(tbl);
    event.preventDefault();
}