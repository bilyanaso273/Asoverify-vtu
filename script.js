function generatePDF() {
  alert("Generating PDF Slip...");
  const slipData = {
    name: "John Doe",
    nin: "12345678901",
    date: new Date().toLocaleDateString()
  };

  const pdfWindow = window.open("", "_blank");
  pdfWindow.document.write(\`
    <html>
      <head><title>NIN Slip</title></head>
      <body>
        <h1>NIN Slip</h1>
        <p>Name: \${slipData.name}</p>
        <p>NIN: \${slipData.nin}</p>
        <p>Date: \${slipData.date}</p>
      </body>
    </html>
  \`);
  pdfWindow.document.close();
  pdfWindow.print();
}