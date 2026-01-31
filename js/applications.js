const applicationForm = document.getElementById('applicationForm');
const applicationDisplay = document.getElementById('applicationDisplay');
const studentSelect = document.getElementById('studentSelect');
const internshipSelect = document.getElementById('internshipSelect');

// 1. Populate both dropdowns
function loadData() {
    const students = JSON.parse(localStorage.getItem('students')) || [];
    const internships = JSON.parse(localStorage.getItem('internships')) || [];

    students.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.name;
        opt.textContent = s.name;
        studentSelect.appendChild(opt);
    });

    internships.forEach(i => {
        const opt = document.createElement('option');
        opt.value = `${i.title} at ${i.company}`;
        opt.textContent = `${i.title} (${i.company})`;
        internshipSelect.appendChild(opt);
    });
}

// 2. Handle Application Submission
applicationForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const studentName = studentSelect.value;
    const jobDetail = internshipSelect.value;

    const newApp = {
        id: Date.now(),
        student: studentName,
        job: jobDetail,
        date: new Date().toLocaleDateString()
    };

    let apps = JSON.parse(localStorage.getItem('apps')) || [];
    apps.push(newApp);
    localStorage.setItem('apps', JSON.stringify(apps));

    applicationForm.reset();
    displayApplications();
});

function displayApplications() {
    applicationDisplay.innerHTML = '';
    let apps = JSON.parse(localStorage.getItem('apps')) || [];

    apps.forEach(a => {
        const card = document.createElement('div');
        card.classList.add('student-card');
        card.style.borderLeft = "6px solid #2c3e50";
        card.innerHTML = `
            <p><strong>${a.student}</strong> applied for <strong>${a.job}</strong></p>
            <small>Applied on: ${a.date}</small>
        `;
        applicationDisplay.appendChild(card);
    });
}

loadData();
displayApplications();