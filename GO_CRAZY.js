// HIER KÖNNEN SIE IHRE INHALTE BEARBEITEN
// Fügen Sie hier Ihre Texte und Bildpfade ein
const pages = [
  
    
    // Seite 1 - Bild
    {
        type: 'image',
        content: null, // Setzen Sie hier den Pfad zu Ihrem Bild ein, z.B. 'images/bild1.jpg'
        alt: 'Erstes Comic-Bild'
    },
    
    
    
    // Seite 2 - Bild
    {
        type: 'image',
        content: null, // Pfad zum zweiten Bild
        alt: 'Zweites Comic-Bild'
    },
    
    
   
    
    // Seite 3 - Bild
    {
        type: 'image',
        content: null, // Pfad zum dritten Bild
        alt: 'Drittes Comic-Bild'
    },

    

    // Seite 4 - Bild
    {
        type: 'image',
        content: null, // Pfad zum dritten Bild
        alt: 'Drittes Comic-Bild'
    },
   
// Seite 5 - Bild
{
        type: 'image',
        content: null, // Pfad zum dritten Bild
        alt: 'Drittes Comic-Bild'
    },
    
// Seite 6 - Bild
{
        type: 'image',
        content: null, // Pfad zum dritten Bild
        alt: 'Drittes Comic-Bild'
    },
    
    
// Seite 7- Bild
{
        type: 'image',
        content: null, // Pfad zum dritten Bild
        alt: 'Drittes Comic-Bild'
    },

    
// Seite 8 - Bild
{
        type: 'image',
        content: null, // Pfad zum dritten Bild
        alt: 'Drittes Comic-Bild'
    },
   
// Seite 9 - Bild
{
        type: 'image',
        content: null, // Pfad zum dritten Bild
        alt: 'Drittes Comic-Bild'
    },
   
    // Seite 10 - Bild
    {
        type: 'image',
        content: null, // Pfad zum dritten Bild
        alt: 'Drittes Comic-Bild'
    },


    // Seite 11 - Bild
    {
        type: 'image',
        content: null, // Pfad zum dritten Bild
        alt: 'Drittes Comic-Bild'
    },
    
];

// HINWEIS: Um Bilder hinzuzufügen:
// 1. Erstellen Sie einen Ordner "images" neben Ihren HTML/CSS/JS Dateien
// 2. Kopieren Sie Ihre Bilder in diesen Ordner
// 3. Ändern Sie 'content: null' zu 'content: "images/ihr-bildname.jpg"'
// Beispiel: content: 'images/comic1.jpg'

let currentPageIndex = 0;

// DOM Elemente
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

// Warten bis DOM geladen ist
document.addEventListener('DOMContentLoaded', function() {
    updatePageContent();
});

function updatePageContent() {
    const leftPageIndex = currentPageIndex;
    const rightPageIndex = currentPageIndex + 1;
    
    // Linke Seite aktualisieren
    if (leftPageIndex < pages.length) {
        const leftPageData = pages[leftPageIndex];
        updateSinglePage(leftPage, leftContent, leftPageData, leftPageIndex + 1, 'left');
        leftIndicator.textContent = leftPageData.type === 'text' ? 'Text' : 'Bild';
        leftIndicator.style.display = 'block';
    }
    
    // Rechte Seite aktualisieren
    if (rightPageIndex < pages.length) {
        const rightPageData = pages[rightPageIndex];
        updateSinglePage(rightPage, rightContent, rightPageData, rightPageIndex + 1, 'right');
        rightIndicator.textContent = rightPageData.type === 'text' ? 'Text' : 'Bild';
        rightIndicator.style.display = 'block';
        rightPage.style.display = 'flex';
    } else {
        rightPage.style.display = 'none';
        rightIndicator.style.display = 'none';
    }
    
    // Seitenzahlen aktualisieren
    leftPageNum.textContent = leftPageIndex + 1;
    if (rightPageIndex < pages.length) {
        rightPageNum.textContent = rightPageIndex + 1;
        rightPageNum.style.display = 'block';
    } else {
        rightPageNum.style.display = 'none';
    }
    
    // Navigation Buttons aktualisieren
    prevBtn.disabled = currentPageIndex === 0;
    nextBtn.disabled = currentPageIndex >= pages.length - 2;
}

function updateSinglePage(pageElement, contentElement, pageData, pageNumber, side) {
    // Seiten-Klasse setzen
    pageElement.className = `page ${side} ${pageData.type}-page`;
    
      {
        // Bild-Seite
        if (pageData.content) {
            contentElement.innerHTML = `
                <div class="image-content">
                    <img src="${pageData.content}" alt="${pageData.alt || 'Comic-Bild'}" class="comic-image" onerror="handleImageError(this)">
                </div>
            `;
        } else {
            contentElement.innerHTML = `
                <div class="image-content">
                    <div class="image-placeholder">
                        📸<br>
                        Bild hier einfügen<br>
                        <small>Bearbeiten Sie script.js um Bilder hinzuzufügen</small>
                    </div>
                </div>
            `;
        }
    }
}

function handleImageError(img) {
    img.parentElement.innerHTML = `
        <div class="image-placeholder">
            ❌<br>
            Bild nicht gefunden<br>
            <small>Prüfen Sie den Bildpfad in script.js</small>
        </div>
    `;
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
            setTimeout(() => {
                leftPage.classList.remove('flipped-left');
                rightPage.classList.remove('flipped-right');
            }, 50);
        }, 150);
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
            setTimeout(() => {
                leftPage.classList.remove('flipped-left');
                rightPage.classList.remove('flipped-right');
            }, 50);
        }, 150);
    }
}

// Keyboard Navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        previousPage();
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        nextPage();
    }
});

