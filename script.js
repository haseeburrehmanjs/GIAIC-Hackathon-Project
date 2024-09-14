function generateResume() {
    // Get user input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const linkedin = document.getElementById('linkedin').value;
    const github = document.getElementById('github').value;
    const summary = document.getElementById('summary').value;
    const skills = document.getElementById('skills').value.split(',');

    // Check if required fields are filled
    if (name === '' || email === '' || phone === '') {
        alert('Please fill in the required fields');
        return;
    }

    // Create the resume content dynamically
    const resumeContent = `
        <div class="text-center">
            <h3>${name}</h3>
            <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
            <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
            <p><strong>GitHub:</strong> <a href="${github}" target="_blank">${github}</a></p>
        </div>
        <hr>
        <h4>Professional Summary</h4>
        <p>${summary}</p>
        <hr>
        <h4>Skills</h4>
        <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
    `;

    // Insert the resume content into the display section
    document.getElementById('resume-content').innerHTML = resumeContent;

    // Show the resume display section
    document.getElementById('resume-display').classList.remove('d-none');
}
