// Mouse Events
const heroTable = document.getElementById('hero-table');
const outputDiv = document.getElementById('output');

heroTable.addEventListener('click', function(event) {
    if (event.target.tagName === 'TD') {
        const row = event.target.parentNode;
        const heroName = row.cells[1].innerText;
        outputDiv.innerHTML = `You clicked on ${heroName}`;
    }
});

// Keyboard Events
document.getElementById('hero-name').addEventListener('keydown', function(event) {
    outputDiv.innerHTML = `Key Down: ${event.key}`;
});

document.getElementById('hero-role').addEventListener('keyup', function(event) {
    outputDiv.innerHTML += `<br>Key Up: ${event.key}`;
});

document.getElementById('hero-skill').addEventListener('keyup', function(event) {
    outputDiv.innerHTML += `<br>Key Up: ${event.key}`;
});

// Form Events
document.getElementById('hero-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('hero-name').value;
    const role = document.getElementById('hero-role').value;
    const skill = document.getElementById('hero-skill').value;

    const newRow = heroTable.insertRow(-1);
    newRow.innerHTML = `<td>${heroTable.rows.length - 1}</td><td>${name}</td><td>${role}</td><td>${skill}</td>`;
    
    outputDiv.innerHTML += `<br>Added Hero: ${name} as ${role} with Skill: ${skill}`;
    
    this.reset(); // Reset the form fields
});

// Window Events
window.addEventListener('resize', function() {
    outputDiv.innerHTML += `<br>Window resized to ${window.innerWidth} x ${window.innerHeight}`;
});

// Touch Events
document.addEventListener('touchstart', function(event) {
    outputDiv.innerHTML += `<br>Touch Start detected with ${event.touches.length} touches`;
});

document.addEventListener('touchend', function(event) {
    outputDiv.innerHTML += `<br>Touch End detected`;
});