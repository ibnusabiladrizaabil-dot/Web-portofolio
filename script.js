const BASE_URL = "http://localhost/portfolio/api/api.php?path=";

// Ambil data "About"
fetch(BASE_URL + "about")
  .then(response => response.json())
  .then(data => {
    document.getElementById("name").textContent = data.name;
    document.getElementById("title").textContent = data.title;
    document.getElementById("description").textContent = data.description;
  })
  .catch(err => console.error("Error fetching about:", err));

// Ambil data "Projects"
fetch(BASE_URL + "projects")
  .then(response => response.json())
  .then(projects => {
    const container = document.getElementById("projects");
    projects.forEach(p => {
      const div = document.createElement("div");
      div.className = "project";
      div.innerHTML = `
        <h3>${p.title}</h3>
        <img src="${p.image}" alt="${p.title}">
        <p>${p.description}</p>
        <a href="${p.url}" target="_blank">View Project</a>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => console.error("Error fetching projects:", err));