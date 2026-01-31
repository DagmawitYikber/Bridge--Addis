const internshipForm = document.getElementById('internshipForm');
const internshipDisplay = document.getElementById('internshipDisplay');
const companySelect = document.getElementById('companySelect');


function loadCompanies() {
    const companies = JSON.parse(localStorage.getItem('companies')) || [];
    companies.forEach(company => {
        const option = document.createElement('option');
        option.value = company.name;
        option.textContent = company.name;
        companySelect.appendChild(option);
    });
}

internshipForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('jobTitle').value;
    const company = document.getElementById('companySelect').value;
    const description = document.getElementById('jobDesc').value;

    const newInternship = {
        id: Date.now(), 
        title,
        company,
        description
    };

    saveInternship(newInternship);
    internshipForm.reset();
    displayInternships();
});

function saveInternship(internship) {
    let internships = JSON.parse(localStorage.getItem('internships')) || [];
    internships.push(internship);
    localStorage.setItem('internships', JSON.stringify(internships));
}

function displayInternships() {
    internshipDisplay.innerHTML = '';
    let internships = JSON.parse(localStorage.getItem('internships')) || [];

    internships.forEach(job => {
        const card = document.createElement('div');
        card.classList.add('student-card');
        card.style.borderLeft = "6px solid #18bc9c";
        card.innerHTML = `
            <h3>${job.title}</h3>
            <h4 style="color: #2c3e50;">${job.company}</h4>
            <p>${job.description}</p>
            <button onclick="applyNow(${job.id})" class="btn" style="padding: 5px 15px; font-size: 0.8rem; margin-top: 10px;">Apply Now</button>
        `;
        internshipDisplay.appendChild(card);
    });
}

function applyNow(id) {
    alert("Application started! Next, go to the Applications page to complete the process.");
}


loadCompanies();
displayInternships();