// Datenstruktur für alle Seiten
let pages = [
    { type: 'text', content: '' },
    { type: 'image', content: null },
    { type: 'text', content: '' },
    { type: 'image', content: null },
    { type: 'text', content: '' },
    { type: 'image', content: null }
];

let currentPageIndex = 0;

// Elemente
const leftPage = document.getElementById('leftPage');
const rightPage = document.getElementById('rightPage');
const leftText = document.getElementById('leftText');
const imageUpload = document.getElementById('imageUpload');
const fileInput = document.getElementById('fileInput');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const leftPageNum = document.getElementById('leftPageNum');
const rightPageNum = document.getElementById('rightPageNum');
const leftIndicator = document.getElementById('leftIndicator');
const rightIndicator = document.getElementById('rightIndicator');

// Warten bis DOM geladen ist
document.addEventListener('DOMContentLoaded', function() {
    // Event Listeners
    const imageUploadElement = document.getElementById('imageUpload');
    const fileInputElement = document.getElementById('fileInput');
    const leftTextElement = document.getElementById('leftText');

    if (imageUploadElement) {
        imageUploadElement.addEventListener('click', () => {
            if (rightPage.classList.contains('image-page')) {
                fileInputElement.click();
            }
        });
    }

    if (fileInputElement) {
        fileInputElement.addEventListener('change', handleImageUpload);
    }

    if (leftTextElement) {
        leftTextElement.addEventListener('input', saveTextContent);
    }

    // Initialisierung
    updatePageContent();
});

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageUrl = e.target.result;
            
            // Bild anzeigen
            const imageUploadElement = document.getElementById('imageUpload');
            imageUploadElement.innerHTML = `<img src="${imageUrl}" alt="Hochgeladenes Bild" class="uploaded-image">`;
            imageUploadElement.classList.add('has-image');
            
            // Daten speichern
            const rightPageIndex = currentPageIndex + 1;
            if (rightPageIndex < pages.length) {
                pages[rightPageIndex].content = imageUrl;
            }
        };
        reader.readAsDataURL(file);
    }
}

function saveTextContent() {
    const leftPageIndex = currentPageIndex;
    const leftTextElement = document.getElementById('leftText');
    if (leftPageIndex < pages.length && leftTextElement) {
        pages[leftPageIndex].content = leftTextElement.value;
    }
}

function updatePageContent() {
    const leftPageIndex = currentPageIndex;
    const rightPageIndex = currentPageIndex + 1;
    
    // Linke Seite aktualisieren
    if (leftPageIndex < pages.length) {
        const leftPageData = pages[leftPageIndex];
        
        if (leftPageData.type === 'text') {
            leftPage.className = 'page left text-page';
            leftPage.innerHTML = `
                <div class="page-content">
                    <textarea class="text-area" placeholder="Schreibe hier deine Geschichte..." id="leftText">${leftPageData.content}</textarea>
                    <div class="page-number left">${leftPageIndex + 1}</div>
                </div>
                <div class="speech-bubble">Schreibe deine Geschichte!</div>
            `;
            leftIndicator.textContent = 'Text';
        } else {
            leftPage.className = 'page left image-page';
            const imageContent = leftPageData.content ? 
                `<img src="${leftPageData.content}" alt="Bild" class="uploaded-image">` : 
                `<div class="upload-icon">📸</div><div class="upload-text">Klicke hier um ein Bild hochzuladen!</div>`;
            
            leftPage.innerHTML = `
                <div class="page-content">
                    <div class="image-upload-area ${leftPageData.content ? 'has-image' : ''}" onclick="handleLeftImageClick()">
                        ${imageContent}
                    </div>
                    <div class="page-number left">${leftPageIndex + 1}</div>
                </div>
                <div class="speech-bubble">Füge dein Bild hinzu!</div>
            `;
            leftIndicator.textContent = 'Bild';
        }
    }
    
    // Rechte Seite aktualisieren
    if (rightPageIndex < pages.length) {
        const rightPageData = pages[rightPageIndex];
        
        if (rightPageData.type === 'text') {
            rightPage.className = 'page right text-page';
            rightPage.innerHTML = `
                <div class="page-content">
                    <textarea class="text-area" placeholder="Schreibe hier deine Geschichte..." id="rightText">${rightPageData.content}</textarea>
                    <div class="page-number right">${rightPageIndex + 1}</div>
                </div>
                <div class="speech-bubble">Schreibe deine Geschichte!</div>
            `;
            rightIndicator.textContent = 'Text';
            rightIndicator.style.display = 'block';
        } else {
            rightPage.className = 'page right image-page';
            const imageContent = rightPageData.content ? 
                `<img src="${rightPageData.content}" alt="Bild" class="uploaded-image">` : 
                `<div class="upload-icon">📸</div><div class="upload-text">Klicke hier um ein Bild hochzuladen!</div>`;
            
            rightPage.innerHTML = `
                <div class="page-content">
                    <div class="image-upload-area ${rightPageData.content ? 'has-image' : ''}" onclick="handleRightImageClick()">
                        ${imageContent}
                    </div>
                    <div class="page-number right">${rightPageIndex + 1}</div>
                </div>
                <div class="speech-bubble">Füge dein Bild hinzu!</div>
            `;
            rightIndicator.textContent = 'Bild';
            rightIndicator.style.display = 'block';
        }
        rightPage.style.display = 'flex';
    } else {
        rightPage.style.display = 'none';
        rightIndicator.style.display = 'none';
    }
    
    // Event Listeners für neue Textarea hinzufügen
    const newLeftText = document.getElementById('leftText');
    const newRightText = document.getElementById('rightText');
    
    if (newLeftText) {
        newLeftText.addEventListener('input', () => {
            pages[leftPageIndex].content = newLeftText.value;
        });
    }
    
    if (newRightText) {
        newRightText.addEventListener('input', () => {
            pages[rightPageIndex].content = newRightText.value;
        });
    }
    
    // Navigation Buttons aktualisieren
    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex >= pages.length - 2;
}

function handleLeftImageClick() {
    if (pages[currentPageIndex].type === 'image') {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    pages[currentPageIndex].content = event.target.result;
                    updatePageContent();
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    }
}

function handleRightImageClick() {
    if (currentPageIndex + 1 < pages.length && pages[currentPageIndex + 1].type === 'image') {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    pages[currentPageIndex + 1].content = event.target.result;
                    updatePageContent();
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    }
}

function previousPage() {
    if (currentPageIndex > 0) {
        // Flip-Animation
        leftPage.classList.add('flipped-left');
        rightPage.classList.add('flipped-right');
        
        setTimeout(() => {
            currentPageIndex -= 2;
            updatePageContent();
            
            // Animation zurücksetzen
            leftPage.classList.remove('flipped-left');
            rightPage.classList.remove('flipped-right');
        }, 300);
    }
}

function nextPage() {
    if (currentPageIndex < pages.length - 2) {
        // Flip-Animation
        leftPage.classList.add('flipped-left');
        rightPage.classList.add('flipped-right');
        
        setTimeout(() => {
            currentPageIndex += 2;
            updatePageContent();
            
            // Animation zurücksetzen
            leftPage.classList.remove('flipped-left');
            rightPage.classList.remove('flipped-right');
        }, 300);
    }
}