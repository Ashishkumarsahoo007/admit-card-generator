const form = document.getElementById('admit-card-form');
const admitCardContainer = document.getElementById('admit-card-container');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const collegeName = document.getElementById('college-name').value;
    const studentName = document.getElementById('student-name').value;
    const roleNumber = document.getElementById('role-number').value;
    const section = document.getElementById('section').value;
    const imageUrl = document.getElementById('image-url').value;
    const branch = document.getElementById('branch').value;
    const semester = document.getElementById('semester').value;

    const admitCardHTML = `
        <div id="admit-card">
            <img src="${imageUrl}" alt="Student Image">
            <h2>${studentName}</h2>
            <p>College: ${collegeName}</p>
            <p>Role Number: ${roleNumber}</p>
            <p>Section: ${section}</p>
            <p>Branch: ${branch}</p>
            <p>Semester: ${semester}</p>
        </div>
    `;

    admitCardContainer.innerHTML = admitCardHTML;
});