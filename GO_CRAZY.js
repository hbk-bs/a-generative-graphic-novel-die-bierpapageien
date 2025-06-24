// HIER KÖNNEN SIE IHRE INHALTE BEARBEITEN
// Fügen Sie hier Ihre Texte und Bildpfade ein
const pages = [
    // Seite 1 - Text
    {
        type: 'text',
        content: `Es war einmal ein kleines Mädchen, das liebte Märchen. 
        Aber nicht irgendein Märchen – ihr Märchen war „Küss den Frosch“. 
        Sie hörte es, bis sie jeden Satz mitsprechen konnte. 
        Jede Nacht vor dem Einschlafen: die Verwandlung, der Prinz, das Kleid, das Schloss.
         Und so wuchs sie auf – mit der festen Überzeugung, dass auch sie eines Tages eine Prinzessin sein würde. 
         Und dass irgendwo da draußen ihr verzauberter Frosch wartete.!`
    },
    
    // Seite 2 - Bild
    {
        type: 'image',
        content: null, // Setzen Sie hier den Pfad zu Ihrem Bild ein, z.B. 'images/bild1.jpg'
        alt: 'Erstes Comic-Bild'
    },
    
    // Seite 3 - Text
    {
        type: 'text',
        content: `Jahre später.

Die Realität sah anders aus: Altbauwohnung, unbezahlte Stromrechnung, Pflanzen am Fensterbrett (tot), ein Job, den sie hasste – aber Hoffnung hatte sie nie aufgegeben. Denn an diesem Morgen sagte ihr Horoskop:
„Heute triffst du dein grünes Glück. Dein Seelenverwandter ist näher, als du denkst.“

Klartext für sie: Heute ist es soweit. Heute finde ich meinen Prinzen.`
    },
    
    // Seite 4 - Bild
    {
        type: 'image',
        content: null, // Pfad zum zweiten Bild
        alt: 'Zweites Comic-Bild'
    },
    
    // Seite 5 - Text
    {
        type: 'text',
        content: `Sie zog sich ihr bestes Prinzessinnen-Outfit an (rosa Bluse mit Tüll, goldene Haarspangen) und ging in den Park. Sie lächelte jedem Mann zu, der auch nur entfernt „märchenhaft“ wirkte – nichts. Kein Glanz. Keine Magie.

Bis sie stolperte.`
    },
    
    // Seite 6 - Bild
    {
        type: 'image',
        content: null, // Pfad zum dritten Bild
        alt: 'Drittes Comic-Bild'
    },

    {
        type: 'text',
        content: `In ihrem Kopf: eine Gedankenblase. Ein bildschöner Prinz mit Krone, lächelnd, Arm ausgestreckt, Umarmung bereit. Ihre Augen leuchteten.

Sie griff entschlossen zu.
„Dich geb ich nicht mehr her.“`
    },

    {
        type: 'text',
        content: `Zu Hause setzte sie ihn in eine goldene Schale. Sie bereitete ein Schaumbad mit Rosenblättern vor, stellte Kerzen auf, zog ihr schönstes Nachthemd an. Auf dem Balkon flüsterte sie: „Küss mich…“

Der Frosch sprang. Direkt über das Geländer. Weg.`
    },

    {
        type: 'text',
        content: `Sie schrie. Und sprang hinterher.

Im Gebüsch suchte sie hektisch. Da! Ein Frosch! Sie packte ihn. Aber… war das ihr Frosch? Oder nur irgendein anderer?

Als sie hochschaute, sah sie den Teich. Hunderte Frösche.`
    },

    {
        type: 'text',
        content: `„Oh nein… welcher war es?“
Sie begann, sie einzusammeln. Einen nach dem anderen.
„Ich kann doch meinen Prinzen nicht verlieren!“

Am Abend waren es 23 Frösche.
Am nächsten Tag: 48.`
    },

    {
        type: 'text',
        content: `In ihrer Wohnung: Planschbecken, Salatblätter, leise Mozart-Musik.
In ihrer Ecke: Sie, mit Lippenstift verschmiert, küsste einen Frosch nach dem anderen.
„Hab ich dich schon geküsst? Nein? Komm her…“

Es klopfte.`
    },

    {
        type: 'text',
        content: `er Vermieter.
„Miete, Fräulein…“
Er öffnete die Tür.
Dutzende Frösche sprangen ihm entgegen.
Er stolperte rückwärts. „Was zum…?!“`
    },

    {
        type: 'text',
        content: `In der Ecke: Sie, flüsternd, verliebt, verloren.
„Ich weiß, du bist irgendwo hier… mein Prinz…“
Kuss. Quak. Kuss. Quak.

Cut.`
    },

    {
        type: 'text',
        content: `Weiße Wände.
Gummizelle.
Papierkrone.
Leere Hände – aber sie küsste weiter.
„Du bist es… ich weiß es…“

Ein Pfleger seufzte. „Dritter Frosch heute.“
Ein anderer: „Immer dieselbe Geschichte…“`
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
    
    if (pageData.type === 'text') {
        // Text-Seite
        contentElement.innerHTML = `
            <div class="text-content">${pageData.content.replace(/\n/g, '<br>')}</div>
        `;
    } else {
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
            setTimeout(() => {
                leftPage.classList.remove('flipped-left');
                rightPage.classList.remove('flipped-right');
            }, 50);
        }, 300);
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

// Touch/Swipe Navigation für mobile Geräte
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(event) {
    touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0) {
            // Swipe right - previous page
            previousPage();
        } else {
            // Swipe left - next page
            nextPage();
        }
    }
}