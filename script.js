document.addEventListener("DOMContentLoaded", () => {
    fetch("companies.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response not ok");
            }
            return response.json();
        })
        .then(data => {
            const container = document.getElementById("card-container");

            if (!container) {
                console.error("ไม่พบ card-container ใน HTML");
                return;
            }

            data.forEach(company => {
                const card = document.createElement("div");
                card.className = "card";

                card.innerHTML = `
                    <img src="${company.img}" alt="${company.name}">
                    <h2>${company.name}</h2>
                    <p>${company.desc}</p>
                    <a href="${company.url}" target="_blank">
                        <button>รายละเอียด</button>
                    </a>
                `;

                container.appendChild(card);
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
});