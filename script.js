
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggle.classList.toggle("spin");
});


document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty("--x", e.clientX - rect.left + "px");
    btn.style.setProperty("--y", e.clientY - rect.top + "px");
  });
});


function forceDownload(e) {
  e.preventDefault();
  const link = document.createElement("a");
  link.href = "assets/resume/jaiveer_resume.pdf";
  link.download = "Jaiveer_Resume.pdf";
  link.click();
}


fetch("https://api.github.com/users/thakurelajaiveer-ui/repos")
  .then(res => res.json())
  .then(repos => {
    const repoList = document.getElementById("repo-list");
    if (!repoList) return;

    repos.forEach((repo, index) => {
      const card = document.createElement("div");
      card.className = "repo-card glow-card";
      card.style.animationDelay = `${index * 0.15}s`;

      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description available"}</p>
        <a href="${repo.html_url}" target="_blank">🔗 View Repository</a>
      `;

      repoList.appendChild(card);
    });
  })
  .catch(err => console.error("GitHub API Error:", err));


new Typed(".typing", {
  strings: [
    "Web Developer",
    "Java Developer",
    "Problem Solver",
    "Frontend Developer",
    "AI Enthusiast"
  ],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true
});


ScrollReveal({
  reset: false,
  distance: "70px",
  duration: 1200,
  delay: 200
});

ScrollReveal().reveal(".project-card, .repo-card", {
  origin: "bottom",
  interval: 200
});

ScrollReveal().reveal(".skill-card", {
  origin: "left",
  interval: 150
});

ScrollReveal().reveal("header, section", {
  origin: "top"
});


document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mousemove", e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});
