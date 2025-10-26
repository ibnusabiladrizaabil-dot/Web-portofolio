document.addEventListener("DOMContentLoaded", () => {
  fetch("api.php")
    .then(res => res.json())
    .then(data => {
      document.querySelector(".logo").textContent = data.name;
      document.querySelector(".home-content h1").innerHTML = `Hi, It's <span>${data.nickname}</span>`;
      document.querySelector(".typing-text span").textContent = data.title;
      document.querySelector(".home-content p").textContent = data.description;
      document.querySelector(".home-img img").src = data.image;

      const icons = document.querySelectorAll(".social-icons a");
      const links = Object.values(data.socials);
      icons.forEach((icon, index) => {
        icon.href = links[index];
      });
    })
    .catch(err => console.error("Gagal memuat data:", err));
});