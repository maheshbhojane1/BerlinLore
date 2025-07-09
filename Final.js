const stories = [
  { title: "Echoes in Kreuzberg", sector: "Kreuzberg" },
  { title: "Bunker Secrets in Mitte", sector: "Mitte" },
  { title: "Neukölln’s Street Pulse", sector: "Neukölln" },
  { title: "Hidden Voices of Wedding", sector: "Wedding" },
  { title: "Spree River Resistance", sector: "Friedrichshain" },
  { title: "Spree River Resistance", sector: "Friedrichshain" },
];

function loadMoreStories() {
  const container = document.querySelector("#stories");
  stories.forEach((story) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<div class="title"><strong>${story.title}</strong></div>
                          <div class="tag">${story.sector}</div>`;
    container.appendChild(card);
  });
}

function submitForm(e) {
  e.preventDefault();
  const msg = document.getElementById("form-msg");
  setTimeout(() => {
    msg.innerText = "Danke! Your tale is now part of BerlinLore.";
    msg.style.color = "green";
  }, 1000);
}

loadMoreStories();
