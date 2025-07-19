function verifyStudent() {
  const idInput = document.getElementById('identifier');
  const id = idInput.value.trim();
  const resultBox = document.getElementById('result');

  if (!id) return alert('Please enter a valid Email or ID');

  showSpinner(true);

  // Simulate network delay and dummy data
  setTimeout(() => {
    const student = {
      name: "John Doe",
      email: "john@example.com",
      mobile: "9876543210",
      domain: "Web Development",
      college: "Dummy University",
      start: "01 June 2024",
      duration: "1 Month",
      photo: "https://via.placeholder.com/130",
      assignments: [true, false, true, true],
      certificate: "#"
    };

    const {
      name,
      email,
      mobile,
      domain,
      college,
      start,
      duration,
      photo,
      assignments,
      certificate
    } = student;

    const assignmentHTML = assignments
      .map((done, i) => `<span>A${i + 1}: ${done ? '✅' : '❌'}</span>`)
      .join('');

    const html = `
      <div class="card">
        <img src="${photo}" alt="Photo" />
        <h3>${name}</h3>
        <p>Email: ${email}</p>
        <p>Mobile: ${mobile}</p>
        <p>Domain: ${domain}</p>
        <p>College: ${college}</p>
        <p>Start Date: ${start}</p>
        <p>Duration: ${duration}</p>
        <h4>Assignment Status</h4>
        <div class="assignment-status">
          ${assignmentHTML}
        </div>
        <p>Status: Completed</p>
        <a href="${certificate}" target="_blank">View Certificate</a>
      </div>
    `;

    resultBox.innerHTML = html;
    showSpinner(false);
    showToast('✅ Dummy student data loaded.');
  }, 1200);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.className = 'toast show';
  setTimeout(() => (toast.className = 'toast'), 3000);
}

function showSpinner(show) {
  document.querySelector('.spinner').style.display = show ? 'block' : 'none';
}
