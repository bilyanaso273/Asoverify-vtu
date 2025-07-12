async function lookupNIN() {
  const nin = document.getElementById('nin').value;
  const res = await fetch('http://localhost:5000/api/user/nin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nin })
  });
  const data = await res.json();
  document.getElementById('ninResult').textContent = JSON.stringify(data, null, 2);
}

async function lookupBVN() {
  const bvn = document.getElementById('bvn').value;
  const res = await fetch('http://localhost:5000/api/user/bvn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ bvn })
  });
  const data = await res.json();
  document.getElementById('bvnResult').textContent = JSON.stringify(data, null, 2);
}

function downloadSlip() {
  window.open('http://localhost:5000/api/user/pdf-slip', '_blank');
}