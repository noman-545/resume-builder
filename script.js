function generateResume() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const linkedin = document.getElementById("linkedin").value;
  const github = document.getElementById("github").value;
  const objective = document.getElementById("objective").value;
  const skills = document.getElementById("skills").value;
  const education = document.getElementById("education").value;
  const cgpa = document.getElementById("cgpa").value;
  const internships = document.getElementById("internships").value;
  const projects = document.getElementById("projects").value;

  document.getElementById("r-name").innerText = name;
  document.getElementById("r-email").innerText = email;
  document.getElementById("r-phone").innerText = phone;
  document.getElementById("r-links").innerText = linkedin + " | " + github;
  document.getElementById("r-objective").innerText = objective;

  const skillsList = document.getElementById("r-skills");
  skillsList.innerHTML = "";
  skills.split(",").forEach(skill => {
    if (skill.trim() !== "") {
      const li = document.createElement("li");
      li.innerText = skill.trim();
      skillsList.appendChild(li);
    }
  });

  document.getElementById("r-education").innerText = education;
  document.getElementById("r-cgpa").innerText = "CGPA: " + cgpa;
  document.getElementById("r-internships").innerText = internships;
  document.getElementById("r-projects").innerText = projects;

  // OPTIONAL animation re-trigger
  const resume = document.getElementById("resume");
  resume.style.animation = "none";
  resume.offsetHeight;
  resume.style.animation = "fadeIn 0.8s ease-in-out";
}

function changeTemplate(template) {
  const resume = document.getElementById("resume");
  resume.style.opacity = 0;
  setTimeout(() => {
    resume.className = "resume " + template;
    resume.style.opacity = 1;
  }, 200);
}

function downloadPDF() {
  const resume = document.getElementById("resume");
  html2pdf().from(resume).save("Resume.pdf");
}
