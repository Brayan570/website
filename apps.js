/* Dark Mode */
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.createElement("button");
  toggleButton.innerText = "🌙 Dark Mode";
  toggleButton.style.position = "fixed";
  toggleButton.style.top = "10px";
  toggleButton.style.right = "10px";
  toggleButton.style.padding = "10px 20px";
  toggleButton.style.cursor = "pointer";
  toggleButton.style.backgroundColor = "#2A2D3E";
  toggleButton.style.color = "#fff";
  toggleButton.style.border = "none";
  toggleButton.style.borderRadius = "5px";
  toggleButton.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
  toggleButton.style.transition = "background 0.3s ease";

  document.body.appendChild(toggleButton);

  if (localStorage.getItem("dark-mode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleButton.innerText = "☀️ Light Mode";
  }

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("dark-mode", isDarkMode ? "enabled" : "disabled");
    toggleButton.innerText = isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
});
/* Dark Mode Fin */
