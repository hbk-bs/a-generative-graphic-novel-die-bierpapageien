const book = document.getElementById("book");
const pageCounter = document.getElementById("page-counter");

let currentPage = 0;
const totalPages = 5;

function createPage(index) {
  const left = document.createElement("div");
  left.className = "page left";
  left.innerHTML = getPageContent(index * 2);

  const right = document.createElement("div");
  right.className = "page right";
  right.innerHTML = getPageContent(index * 2 + 1);

  book.innerHTML = '';
  book.appendChild(left);
  book.appendChild(right);
  updateImages();
  pageCounter.textContent = `Seite ${index + 1}`;
}

function getPageContent(pageNum) {
  return `
    <textarea placeholder="Text auf Seite ${pageNum + 1}"></textarea>
    <input type="file" accept="image/*" onchange="handleImageUpload(event, ${pageNum})">
    <img id="image-${pageNum}" src="" />
  `;
}

function handleImageUpload(event, pageNum) {
  const file = event.target.files[0];
  const img = document.getElementById(`image-${pageNum}`);
  if (file && img) {
    const reader = new FileReader();
    reader.onload = function(e) {
      localStorage.setItem(`image-${pageNum}`, e.target.result);
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function updateImages() {
  for (let i = 0; i < totalPages * 2; i++) {
    const imgData = localStorage.getItem(`image-${i}`);
    if (imgData) {
      const img = document.getElementById(`image-${i}`);
      if (img) img.src = imgData;
    }
  }
}

function nextPage() {
  if (currentPage < totalPages - 1) {
    currentPage++;
    createPage(currentPage);
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    createPage(currentPage);
  }
}

createPage(currentPage);
