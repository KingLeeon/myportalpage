(function () {
    'use strict';
  
    const container = document.querySelector('#container');
    const hotSpots = document.querySelectorAll('#container div');
    const theImg = document.querySelector('#container img');
    const caption = document.querySelector('#caption');
  
    hotSpots.forEach(function (eachSpot) {
      eachSpot.addEventListener('click', zoomPhoto);
    });
  
    // click outside zones (on the container) to reset
    container.addEventListener('click', function (event) {
      if (event.target === container || event.target === theImg) {
        theImg.className = 'start';
        caption.textContent = 'Click a region to reveal text.';
      }
    });
  
    function zoomPhoto(event) {
      event.stopPropagation();
  
      const thisCorner = event.target.id;
  
      // same switch/class pattern as the slide
      switch (thisCorner) {
        case 'topleft':
          theImg.className = 'topleft';
          caption.textContent = "Top-left: the cap feels like control—what you choose to open first.";
          break;
  
        case 'topright':
          theImg.className = 'topright';
          caption.textContent = "Top-right: the edge light makes it feel distant, like a memory fading.";
          break;
  
        case 'bottomleft':
          theImg.className = 'bottomleft';
          caption.textContent = "Bottom-left: the hand is the proof it’s real—still personal, still fragile.";
          break;
  
        case 'bottomright':
          theImg.className = 'bottomright';
          caption.textContent = "Bottom-right: the glass weight makes the ‘idea’ feel physical.";
          break;
  
        case 'center':
          theImg.className = 'center';
          caption.textContent = "Center: ‘IMAGINATION’ turns an object into a story you can wear.";
          break;
      }
    }
  
  })();
  