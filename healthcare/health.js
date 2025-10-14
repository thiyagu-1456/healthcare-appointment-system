function login() {
  const name = document.getElementById('name').value;
  if(name) {
    localStorage.setItem('patientName', name);
    window.location.href = 'dashboard.html';
  } else {
    alert('Please enter your name');
  }
}

function registerAppointment(hospital, doctor) {
  const patientName = localStorage.getItem('patientName') || 'Unknown';
  const id = 'APT' + Math.floor(Math.random() * 10000);
  localStorage.setItem('appointment', JSON.stringify({
    name: patientName,
    hospital,
    doctor,
    id,
    status: 'Verified',
    time: '10:30 AM'
  }));
  window.location.href = 'confirmation.html';
}

window.onload = function() {
  if (window.location.pathname.includes('confirmation.html')) {
    const a = JSON.parse(localStorage.getItem('appointment'));
    if (a) {
      document.getElementById('pName').innerText = a.name;
      document.getElementById('aId').innerText = a.id;
      document.getElementById('aTime').innerText = a.time;
      document.getElementById('aStatus').innerText = a.status;
    }
  }
};
