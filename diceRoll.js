let id = 0;
let result;
let isRolling = false; //roll cooldown

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  }


function cellHTML(element, index, content) {
    console.log(`cellHTML added ${content} to cell ${index}`);
   return element.insertCell(index).innerHTML = content;
}

let rollDie; 

document.getElementById('d4').addEventListener('click', () => {

    if (isRolling) {
        console.log('Roll already in progress. Please wait...');
        return; // ignore click event
    }

    console.log('Button clicked. Starting roll...');
    isRolling = true;

let date = new Date()
let time = date.toLocaleTimeString();
let tableBody = document.getElementById('tableBody');
let row = tableBody.insertRow(0);
result = getRandomInt(4);
row.setAttribute('id', `item-${id}`);
row.insertCell(0).innerHTML = time
row.insertCell(1).innerHTML = '4'
row.insertCell(2).innerHTML = 'Rolling...'

id++

let iteration = 0;
intervalId = setInterval(() => {
    document.getElementById('result').innerHTML = getRandomInt(4);
    iteration++;

    // Stop the interval after a certain number of iterations
    if (iteration >= 8) {
        clearInterval(intervalId);
        result = getRandomInt(4);
        document.getElementById('result').innerHTML = result;
        row.cells[2].innerHTML = result; // Update the row with the final result
        isRolling = false; //reset flag
    }
}, 50);


});

document.getElementById('d6').addEventListener('click', () => {

    if (isRolling) {
        console.log('Roll already in progress. Please wait...');
        return; // ignore click event
    }

    console.log('Button clicked. Starting roll...');
    isRolling = true;

let date = new Date()
let time = date.toLocaleTimeString();
let tableBody = document.getElementById('tableBody');
let row = tableBody.insertRow(0);
result = getRandomInt(6);
row.setAttribute('id', `item-${id}`);
row.insertCell(0).innerHTML = time
row.insertCell(1).innerHTML = '6'
row.insertCell(2).innerHTML = 'Rolling...'

id++

let iteration = 0;
intervalId = setInterval(() => {
    document.getElementById('result').innerHTML = getRandomInt(6);
    iteration++;

    // Stop the interval after a certain number of iterations
    if (iteration >= 8) {
        clearInterval(intervalId);
        result = getRandomInt(6);
        document.getElementById('result').innerHTML = result;
        row.cells[2].innerHTML = result; // Update the row with the final result
        isRolling = false; //reset flag
    }
}, 50);


});

document.getElementById('d8').addEventListener('click', () => {

    if (isRolling) {
        console.log('Roll already in progress. Please wait...');
        return; // ignore click event
    }

    console.log('Button clicked. Starting roll...');
    isRolling = true;

let date = new Date()
let time = date.toLocaleTimeString();
let tableBody = document.getElementById('tableBody');
let row = tableBody.insertRow(0);
result = getRandomInt(8);
row.setAttribute('id', `item-${id}`);
row.insertCell(0).innerHTML = time
row.insertCell(1).innerHTML = '8'
row.insertCell(2).innerHTML = 'Rolling...'

id++

let iteration = 0;
intervalId = setInterval(() => {
    document.getElementById('result').innerHTML = getRandomInt(8);
    iteration++;

    // Stop the interval after a certain number of iterations
    if (iteration >= 10) {
        clearInterval(intervalId);
        result = getRandomInt(8);
        document.getElementById('result').innerHTML = result;
        row.cells[2].innerHTML = result; // Update the row with the final result
        isRolling = false; //reset flag
    }
}, 60);


});

document.getElementById('d10').addEventListener('click', () => {

    if (isRolling) {
        console.log('Roll already in progress. Please wait...');
        return; // ignore click event
    }

    console.log('Button clicked. Starting roll...');
    isRolling = true;

let date = new Date()
let time = date.toLocaleTimeString();
let tableBody = document.getElementById('tableBody');
let row = tableBody.insertRow(0);
result = getRandomInt(10);
row.setAttribute('id', `item-${id}`);
row.insertCell(0).innerHTML = time
row.insertCell(1).innerHTML = '10'
row.insertCell(2).innerHTML = 'Rolling...'

id++

let iteration = 0;
intervalId = setInterval(() => {
    document.getElementById('result').innerHTML = getRandomInt(10);
    iteration++;

    // Stop the interval after a certain number of iterations
    if (iteration >= 10) {
        clearInterval(intervalId);
        result = getRandomInt(10);
        document.getElementById('result').innerHTML = result;
        row.cells[2].innerHTML = result; // Update the row with the final result
        isRolling = false; //reset flag
    }
}, 60);


});

document.getElementById('d12').addEventListener('click', () => {

    if (isRolling) {
        console.log('Roll already in progress. Please wait...');
        return; // ignore click event
    }

    console.log('Button clicked. Starting roll...');
    isRolling = true;

let date = new Date()
let time = date.toLocaleTimeString();
let tableBody = document.getElementById('tableBody');
let row = tableBody.insertRow(0);
result = getRandomInt(12);
row.setAttribute('id', `item-${id}`);
row.insertCell(0).innerHTML = time
row.insertCell(1).innerHTML = '12'
row.insertCell(2).innerHTML = 'Rolling...'

id++

let iteration = 0;
intervalId = setInterval(() => {
    document.getElementById('result').innerHTML = getRandomInt(12);
    iteration++;

    // Stop the interval after a certain number of iterations
    if (iteration >= 12) {
        clearInterval(intervalId);
        result = getRandomInt(12);
        document.getElementById('result').innerHTML = result;
        row.cells[2].innerHTML = result; // Update the row with the final result
        isRolling = false; //reset flag
    }
}, 60);


});

document.getElementById('d20').addEventListener('click', () => {

        if (isRolling) {
            console.log('Roll already in progress. Please wait...');
            return; // ignore click event
        }
    
        console.log('Button clicked. Starting roll...');
        isRolling = true;

    let date = new Date()
    let time = date.toLocaleTimeString();
    let tableBody = document.getElementById('tableBody');
    let row = tableBody.insertRow(0);
    result = getRandomInt(20);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = time
    row.insertCell(1).innerHTML = '20'
    row.insertCell(2).innerHTML = 'Rolling...'
    
    id++

    let iteration = 0;
    intervalId = setInterval(() => {
        document.getElementById('result').innerHTML = getRandomInt(20);
        iteration++;

        // Stop the interval after a certain number of iterations
        if (iteration >= 15) {
            clearInterval(intervalId);
            result = getRandomInt(20);
            document.getElementById('result').innerHTML = result;
            row.cells[2].innerHTML = result; // Update the row with the final result
            isRolling = false; //reset flag
        }
    }, 40);


});

document.getElementById('percentile').addEventListener('click', () => {

    if (isRolling) {
        console.log('Roll already in progress. Please wait...');
        return; // ignore click event
    }

    console.log('Button clicked. Starting roll...');
    isRolling = true;

let date = new Date()
let time = date.toLocaleTimeString();
let tableBody = document.getElementById('tableBody');
let row = tableBody.insertRow(0);
result = getRandomInt(100);
row.setAttribute('id', `item-${id}`);
row.insertCell(0).innerHTML = time
row.insertCell(1).innerHTML = '100'
row.insertCell(2).innerHTML = 'Rolling...'

id++

let iteration = 0;
intervalId = setInterval(() => {
    document.getElementById('result').innerHTML = getRandomInt(100);
    iteration++;

    // Stop the interval after a certain number of iterations
    if (iteration >= 20) {
        clearInterval(intervalId);
        result = getRandomInt(100);
        document.getElementById('result').innerHTML = result;
        row.cells[2].innerHTML = result; // Update the row with the final result
        isRolling = false; //reset flag
    }
}, 40);


});

document.getElementById('custom').addEventListener('click', () => {

    if (isRolling) {
        console.log('Roll already in progress. Please wait...');
        return; // ignore click event
    }

    console.log('Button clicked. Starting roll...');
    isRolling = true;

    let customNum = document.getElementById('custom-num').value
    let date = new Date()
    let time = date.toLocaleTimeString();
    let tableBody = document.getElementById('tableBody');
    let row = tableBody.insertRow(0);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = time;
    row.insertCell(1).innerHTML = customNum;
    row.insertCell(2).innerHTML = 'Rolling...';
    document.getElementById('custom-num').value = '';
    id++

    let iteration = 0;
    intervalId = setInterval(() => {
        document.getElementById('result').innerHTML = getRandomInt(customNum);
        iteration++;
    
        // Stop the interval after a certain number of iterations
        if (iteration >= 20) {
            clearInterval(intervalId);
            result = getRandomInt(customNum);
            document.getElementById('result').innerHTML = result;
            row.cells[2].innerHTML = result; // Update the row with the final result
            isRolling = false; //reset flag
        }
    }, 40);
    

})

document.getElementById('clear-history').addEventListener('click', () => {
    let tableBody = document.getElementById('tableBody');
    clearHistory(tableBody)
    
})

function clearHistory(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}