id = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  }

  function thisId(id) {
    console.log(`thisId function is tied to id:${id}`);
   return document.getElementById(id);
}

function cellHTML(element, index, content) {
    console.log(`cellHTML added ${content} to cell ${index}`);
   return element.insertCell(index).innerHTML = content;
}

let rollDie; 

thisId('d4').addEventListener('click', () => {
    console.log('button is working');
    let date = new Date()
    let time = date.toLocaleString();
    let table = thisId('results')
    let row = table.insertRow(-1);
    row.setAttribute('id', `item-${id}`);
    cellHTML(row, 0, time);
    cellHTML(row, 1, 'D-4')
    cellHTML(row, 2, rollDie = getRandomInt(4));
    
    id++
})

thisId('d6').addEventListener('click', () => {
    console.log('button is working');
    let date = new Date()
    let time = date.toLocaleString();
    let table = thisId('results')
    let row = table.insertRow(-1);
    row.setAttribute('id', `item-${id}`);
    cellHTML(row, 0, time);
    cellHTML(row, 1, 'D-6')
    cellHTML(row, 2, rollDie = getRandomInt(6));
    
    id++
})

thisId('d8').addEventListener('click', () => {
    console.log('button is working');
    let date = new Date()
    let time = date.toLocaleString();
    let table = thisId('results')
    let row = table.insertRow(-1);
    row.setAttribute('id', `item-${id}`);
    cellHTML(row, 0, time);
    cellHTML(row, 1, 'D-8')
    cellHTML(row, 2, rollDie = getRandomInt(8));
    
    id++
})

thisId('d10').addEventListener('click', () => {
    console.log('button is working');
    let date = new Date()
    let time = date.toLocaleString();
    let table = thisId('results')
    let row = table.insertRow(-1);
    row.setAttribute('id', `item-${id}`);
    cellHTML(row, 0, time);
    cellHTML(row, 1, 'D-10')
    cellHTML(row, 2, rollDie = getRandomInt(10));
    
    id++
})

thisId('d12').addEventListener('click', () => {
    console.log('button is working');
    let date = new Date()
    let time = date.toLocaleString();
    let table = thisId('results')
    let row = table.insertRow(-1);
    row.setAttribute('id', `item-${id}`);
    cellHTML(row, 0, time);
    cellHTML(row, 1, 'D-12')
    cellHTML(row, 2, rollDie = getRandomInt(12));
    
    id++
})

thisId('d20').addEventListener('click', () => {
    console.log('button is working');
    let date = new Date()
    let time = date.toLocaleString();
    let table = thisId('results')
    let row = table.insertRow(-1);
    row.setAttribute('id', `item-${id}`);
    cellHTML(row, 0, time);
    cellHTML(row, 1, 'D-20')
    cellHTML(row, 2, rollDie = getRandomInt(20));
    
    id++
})

thisId('percentile').addEventListener('click', () => {
    console.log('button is working');
    let date = new Date()
    let time = date.toLocaleString();
    let table = thisId('results')
    let row = table.insertRow(-1);
    row.setAttribute('id', `item-${id}`);
    cellHTML(row, 0, time);
    cellHTML(row, 1, 'Percentile')
    cellHTML(row, 2, rollDie = getRandomInt(100));
    
    id++
})

thisId('custom').addEventListener('click', () => {
    console.log('button is working');
    let customNum = thisId('custom-num').value
    let date = new Date()
    let time = date.toLocaleString();
    let table = thisId('results')
    let row = table.insertRow(-1);
    row.setAttribute('id', `item-${id}`);
    cellHTML(row, 0, time);
    cellHTML(row, 1, customNum)
    cellHTML(row, 2, rollDie = getRandomInt(customNum));
    thisId('custom-num').value = '';
    id++
})