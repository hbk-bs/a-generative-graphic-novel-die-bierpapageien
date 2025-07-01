{ type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/1.jpg', alt: 'Seite 1' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/2.jpg', alt: 'Seite 2' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/3.png', alt: 'Seite 3' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/4.png', alt: 'Seite 4' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/5.png', alt: 'Seite 5' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/6.png', alt: 'Seite 6' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/7.png', alt: 'Seite 7' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/8.png', alt: 'Seite 8' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/9.png', alt: 'Seite 9' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/10.jpg', alt: 'Seite 10' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/11.jpg', alt: 'Seite 11' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/12.png', alt: 'Seite 12' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/13.png', alt: 'Seite 13' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/14.png', alt: 'Seite 14' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/15.png', alt: 'Seite 15' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/16.png', alt: 'Seite 16' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/17.png', alt: 'Seite 17' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/18.png', alt: 'Seite 18' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/19.png', alt: 'Seite 19' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/20.jpg', alt: 'Seite 20' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/21.png', alt: 'Seite 21' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/22.jpg', alt: 'Seite 22' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/23.png', alt: 'Seite 23' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/24.jpg', alt: 'Seite 24' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/25.png', alt: 'Seite 25' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/26.png', alt: 'Seite 26' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/27.jpg', alt: 'Seite 27' },
    { type: 'image', content: 'https://hbk-bs.github.io/a-generative-graphic-novel-die-bierpapageien/Bilder/28.png', alt: 'Seite 28' }
  ];
  let currentPageIndex = 0;
  const leftPage = document.getElementById('leftPage');
  const rightPage = document.getElementById('rightPage');
  const leftContent = document.getElementById('leftContent');
  const rightContent = document.getElementById('rightContent');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const leftPageNum = document.getElementById('leftPageNum');
  const rightPageNum = document.getElementById('rightPageNum');
  const leftIndicator = document.getElementById('leftIndicator');
  const rightIndicator = document.getElementById('rightIndicator');
  document.addEventListener('DOMContentLoaded', updatePageContent);
  function updatePageContent() {
    const leftIndex = currentPageIndex;
    const rightIndex = currentPageIndex + 1;
    updateSinglePage(leftPage, leftContent, pages[leftIndex], leftPageNum, leftIndicator, leftIndex + 1);
    if (pages[rightIndex]) {
      updateSinglePage(rightPage, rightContent, pages[rightIndex], rightPageNum, rightIndicator, rightIndex + 1);
      rightPage.style.display = 'flex';
      rightIndicator.style.display = 'block';
    } else {
      rightPage.style.display = 'none';
      rightIndicator.style.display = 'none';
    }
    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex >= pages.length - 2;
  }
  function updateSinglePage(pageEl, contentEl, data, pageNumEl, indicatorEl, num) {
    contentEl.innerHTML = data?.content
      ? `<div class="image-content"><img src="${data.content}" alt="${data.alt}" class="comic-image" onerror="handleImageError(this)"></div>`
      : `<div class="image-content"><div class="image-placeholder">Bild hier einfügen</div></div>`;
    pageNumEl.textContent = num;
    indicatorEl.textContent = data?.type === 'text' ? 'Text' : 'Bild';
  }
  function handleImageError(img) {
    img.parentElement.innerHTML = '<div class="image-placeholder">Bild nicht gefunden</div>';
  }
  function previousPage() {
    if (currentPageIndex > 0) {
      currentPageIndex -= 2;
      updatePageContent();
    }
  }
  function nextPage() {
    if (currentPageIndex < pages.length - 2) {
      currentPageIndex += 2;
      updatePageContent();
    }
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') previousPage();
    else if (e.key === 'ArrowRight') nextPage();
  });
