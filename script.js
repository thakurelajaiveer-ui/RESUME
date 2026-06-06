const toggle = document.getElementById("darkToggle");

toggle.onclick = () => {
  document.body.classList.toggle("dark");
};
function forceDownload(e) {
  e.preventDefault();
  const link = document.createElement("a");
  link.href = "resume.pdf";
  link.download = "Jaiveer_Resume.pdf";
  link.click();
}
fetch("https://api.github.com/users/thakurelajaiveer-ui/repos")
  .then(response => response.json())
  .then(data => {
    const repoList = document.getElementById("repo-list");

    data.forEach(repo => {
      const card = document.createElement("div");
      card.className = "repo-card";
      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || "No description available"}</p>
        <a href="${repo.html_url}" target="_blank">🔗 View Repository</a>
      `;
      repoList.appendChild(card);
    });
  })
  .catch(err => console.error(err));
  const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});