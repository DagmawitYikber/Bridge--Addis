const companyForm = document.getElementById('companyForm');
const companyDisplay = document.getElementById('companyDisplay');

companyForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('compName').value;
    const industry = document.getElementById('industry').value;
    const email = document.getElementById('contactEmail').value;

    const company = { name, industry, email };

    saveCompany(company);
    companyForm.reset();
    displayCompanies();
});

function saveCompany(company) {
    let companies = JSON.parse(localStorage.getItem('companies')) || [];
    companies.push(company);
    localStorage.setItem('companies', JSON.stringify(companies));
}

function displayCompanies() {
    companyDisplay.innerHTML = '';
    let companies = JSON.parse(localStorage.getItem('companies')) || [];

    companies.forEach(c => {
        const card = document.createElement('div');
        card.classList.add('student-card'); 
        card.style.borderTop = "4px solid #2c3e50"; 
        card.innerHTML = `
            <h3>${c.name}</h3>
            <p><strong>Industry:</strong> ${c.industry}</p>
            <p><strong>Contact:</strong> ${c.email}</p>
        `;
        companyDisplay.appendChild(card);
    });
}

displayCompanies();