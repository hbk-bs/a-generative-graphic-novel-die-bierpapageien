let currentPage = 1;

function loadImage(event, side) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById(`image-${side}`).src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

function updatePageNumber() {
  document.getElementById("page-number").textContent = `Seite ${currentPage}`;
}

function nextPage() {
  currentPage++;
  updatePageNumber();
  // Bei echten Büchern würden hier neue Inhalte geladen werden
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    updatePageNumber();
  }
}
