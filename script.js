// --- Function to create the Color Selection Table ---
function createTable() { 
    if (document.getElementById("colors-tbl") != null) { 
        document.getElementById("colors-tbl").remove(); 
    }

    const container = document.getElementById("controls-container"); 
    const rows = document.getElementById("colors").value; 
    const cols = 2; 
    const tbl = document.createElement('table'); 
    tbl.className += "color-tbl"; 
    tbl.id = "colors-tbl"; 

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

                const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'grey', 'black', 'brown', 'teal'];
                colors.forEach(color => {
                    const option = document.createElement('option');
                    option.value = color;
                    option.text = color;
                    select.add(option);
                });

                td.appendChild(select); 
            }
        }
    }
    container.appendChild(tbl); 

    // event.preventDefault(); 
    // This line was incorrectly placed here.
    // createTable() should only build the table.
    // Preventing page refresh should be handled in the event listener, not inside this function.
}

// --- Submit Button Event Listener ---
document.getElementById("submit-btn").addEventListener("click", function(event) { 
    event.preventDefault(); // Correct place to prevent page refresh because this function handles form submission

    const rows = document.getElementById("rows").value; 
    const cols = document.getElementById("cols").value; 
    const colors = document.getElementById("colors").value; 

    let errorMessages = []; // Array to collect all error messages

    // Validate Rows
    if (rows === "" || isNaN(rows) || rows < 1 || rows > 1000) { 
        errorMessages.push("Rows must be a number between 1 and 1000."); 
    }

    // Validate Columns
    if (cols === "" || isNaN(cols) || cols < 1 || cols > 702) { 
        errorMessages.push("Columns must be a number between 1 and 702."); 
    }

    // Validate Colors
    if (colors === "" || isNaN(colors) || colors < 1 || colors > 10) { 
        errorMessages.push("Colors must be a number between 1 and 10."); 
    }

    // If any validation fails, alert the user and stop
    if (errorMessages.length > 0) { 
        alert(errorMessages.join("\n")); 
        return; 
    }

    // If all validations pass, create the Color Selection Table
    createTable(); 
});
