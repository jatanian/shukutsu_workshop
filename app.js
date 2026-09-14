(function () {
  const grid = document.getElementById("spot-grid");
  const chipsEl = document.getElementById("filter-chips");
  const searchEl = document.getElementById("search-input");
  const countEl = document.getElementById("result-count");

  const categories = ["すべて", ...Array.from(new Set(SPOTS.map((s) => s.category)))];
  let activeCategory = "すべて";
  let query = "";

  function starString(rating) {
    const full = Math.round(rating);
    return "★★★★★".slice(0, full) + "☆☆☆☆☆".slice(full);
  }

  function renderChips() {
    chipsEl.innerHTML = categories
      .map(
        (c) =>
          `<button type="button" class="chip${c === activeCategory ? " active" : ""}" data-category="${c}">${c}</button>`
      )
      .join("");
    chipsEl.querySelectorAll(".chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.dataset.category;
        renderChips();
        renderCards();
      });
    });
  }

  function matches(spot) {
    const inCategory = activeCategory === "すべて" || spot.category === activeCategory;
    const q = query.trim().toLowerCase();
    const inQuery =
      q === "" ||
      spot.name.toLowerCase().includes(q) ||
      spot.notes.toLowerCase().includes(q) ||
      spot.category.toLowerCase().includes(q);
    return inCategory && inQuery;
  }

  function cardHtml(spot) {
    const mediaInner = spot.photos.length
      ? `<img src="${spot.photos[0]}" alt="${spot.name}">`
      : `<span class="placeholder-label">写真未登録</span>`;
    const videoTag = spot.videos.length ? `<span class="spot-video-tag">動画あり</span>` : "";
    const reviews = spot.googleReview.excerpts
      .map((ex) => `<div class="spot-review">${ex}</div>`)
      .join("");

    return `
      <article class="spot-card">
        <div class="spot-media">
          <span class="spot-order">${spot.order}</span>
          ${mediaInner}
          ${videoTag}
        </div>
        <div class="spot-body">
          <div class="spot-heading">
            <h3 class="spot-name">${spot.name}</h3>
            <span class="spot-tag">${spot.category}</span>
          </div>
          <div class="spot-rating">
            <span class="stars">${starString(spot.googleReview.rating)}</span>
            <span class="score">${spot.googleReview.rating.toFixed(1)}</span>
            <a href="${spot.googleMapUrl}" target="_blank" rel="noopener">Googleマップで見る ↗</a>
          </div>
          <div class="spot-reviews">${reviews}</div>
          <div class="spot-notes">
            <span class="label">メモ</span>
            ${spot.notes}
          </div>
        </div>
      </article>
    `;
  }

  function renderCards() {
    const filtered = SPOTS.slice()
      .sort((a, b) => a.order - b.order)
      .filter(matches);

    countEl.textContent = `${filtered.length} / ${SPOTS.length} 件表示`;

    grid.innerHTML = filtered.length
      ? filtered.map(cardHtml).join("")
      : `<div class="spot-empty">該当するスポットが見つかりませんでした。</div>`;
  }

  searchEl.addEventListener("input", (e) => {
    query = e.target.value;
    renderCards();
  });

  renderChips();
  renderCards();
})();
