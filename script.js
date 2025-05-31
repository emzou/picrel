const tabButtons = document.querySelectorAll(".tab-button");
const tabContentArea = document.getElementById("tab-content-area");
const tabIndicator = document.getElementById("tab-indicator");

tabButtons.forEach(btn => {
  btn.addEventListener("click", async () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const tab = btn.getAttribute("data-tab");

    if (tab === "home") {
      tabContentArea.innerHTML = `
        <div class="cam-frame">
          <div class="home-image-frame">
            <div class="home-image">
              <img src="whatup.jpg" alt="itsme" />
            </div>
          </div>
          <div class="home-text">
            <h2>like most of my good ideas,</h2>
            <p>
              this one came from my little brother (a prolific and talented ex-photographer), 
              who said that photography was a soulless art, and gave me his camera. i have no idea what im doing, but 
              taking pictures makes me think about stuff more closely. this is a repository for that.
            </p>
          </div>
        </div>
      `;
    } else {
      try {
        const res = await fetch(`${tab}.html`);
        const html = await res.text();
        tabContentArea.innerHTML = html;
        window.scrollTo(0, 0);
      } catch (err) {
        tabContentArea.innerHTML = `<p>⚠️ a summoner could not load <strong>${tab}</strong></p>`;
      }
    }

    const tabIndicator = document.getElementById("tab-indicator");
    if (tabIndicator) tabIndicator.textContent = tab;
  });
});



