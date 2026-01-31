
const studentForm = document.getElementById('studentForm');
const studentDisplay = document.getElementById('studentDisplay');

studentForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const fullName = document.getElementById('fullName').value;
    const university = document.getElementById('university').value;
    const major = document.getElementById('major').value;

    
    const student = {
        name: fullName,
        uni: university,
        study: major
    };

    saveStudent(student);
    studentForm.reset(); 
    displayStudents();   
});


function saveStudent(student) {
    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
}


function displayStudents() {
    studentDisplay.innerHTML = ''; 
    let students = JSON.parse(localStorage.getItem('students')) || [];

    students.forEach(s => {
        const card = document.createElement('div');
        card.classList.add('student-card');
        card.innerHTML = `
            <h3>${s.name}</h3>
            <p><strong>Uni:</strong> ${s.uni}</p>
            <p><strong>Major:</strong> ${s.study}</p>
        `;
        studentDisplay.appendChild(card);
    });
}


displayStudents();