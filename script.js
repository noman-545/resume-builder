function generateResume() {
  g("r-name").innerText = v("name");
  g("r-email").innerText = v("email");
  g("r-phone").innerText = v("phone");
  g("r-links").innerText = v("linkedin") + " | " + v("github");
  g("r-objective").innerText = v("objective");

  const list = g("r-skills");
  list.innerHTML = "";
  v("skills").split(",").forEach(s => {
    if (s.trim()) {
      const li = document.createElement("li");
      li.textContent = s.trim();
      list.appendChild(li);
    }
  });

  g("r-skills2").innerText = v("skills2");
  g("r-education").innerText = v("education");
  g("r-cgpa").innerText = "CGPA: " + v("cgpa");
  g("r-internships").innerText = v("internships");
  g("r-projects").innerText = v("projects");
}

function changeTemplate(t) {
  g("resume").className = "resume " + t;
}

/* ===== PDF DOWNLOAD (CHROME WORKING) ===== */
function downloadPDF() {
  const resume = document.getElementById("resume");
  const { jsPDF } = window.jspdf;

  html2canvas(resume, { scale: 2 }).then(canvas => {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "pt", "a4");

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = (canvas.height * pageWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 20, 20, pageWidth - 40, pageHeight);
    pdf.save("Resume.pdf");
  });
}

/* Helpers */
function g(id) { return document.getElementById(id); }
function v(id) { return document.getElementById(id).value; }
