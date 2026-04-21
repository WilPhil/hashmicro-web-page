import './style.css';
import 'preline';

// Preline data-hs-collapsed navbar elements
window.addEventListener('load', () => {
  if (window.HSStaticMethods) {
    window.HSStaticMethods.autoInit();
  }
})
