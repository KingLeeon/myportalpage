
(function () {
  'use strict'; 
  console.log('reading js');

  // Select the necessary DOM elements for the interactive image and text display.

  const frame = document.querySelector('#frame'); // The image container
  const hotSpots = document.querySelectorAll('svg path'); // The clickable hotspots defined as SVG paths over the image
  const theImg = document.querySelector('#img'); // The image itself

  const resetBtn = document.querySelector('#resetBtn'); // The reset button

  const nameEl = document.querySelector('#name'); // The element to display the name of the cologne
  const notesEl = document.querySelector('#notes'); // The element to display the scent notes
  const whyEl = document.querySelector('#why'); // The element to display why the cologne is liked
  const timeEl = document.querySelector('#time'); // The element to display the recommended time to wear the cologne

  let zoomed = false;

  hotSpots.forEach(function (eachSpot) {
    eachSpot.addEventListener('click', zoomPhoto);
  });


  resetBtn.addEventListener('click', reset);
  frame.addEventListener('click', reset);

  function zoomPhoto(event) {
    event.stopPropagation(); 

    const thisSpot = event.target.id; // Get the ID of the clicked hotspot to determine which cologne information to display


    // Based on the clicked hotspot, zoom to the appropriate area of the image and update the text with the corresponding cologne information.
    switch (thisSpot) {
      case 'stronger':
        zoomTo(10, 5, 2.2);
        setText(
          'Stronger With You',
          'Cinnamon, vanilla, and a hint of spice.',
          'One of the first gifts my girlfriend gave me. It’s a comforting scent that reminds me of her.',
          'Night time, dates, cold weather.'
        );
        break;

      case 'badboy':
        zoomTo(62, 10, 2.1);
        setText(
          'Bad Boy Extreme',
          'Chocolatey sweet',
          'My brohter in law put me on with this scent and it’s been a favorite ever since. It’s a unique sweet scent that stands out.',
          'Night out, parties.'
        );
        break;

      case 'imagination':
        zoomTo(45, 30, 2.35);
        setText(
          'Imagination',
          'Fresh clean Soapy Tea',
          '2025 signature summer scent my girlfriend gave me to me for our anniversary',
          'Daytime, school, warm weather. Everyday scent.'
        );
        break;

      case 'allure':
        zoomTo(90, 45, 2.2);
        setText(
          'Allure Homme Sport',
          'Creamy Orange, fresh, and clean.',
          'Perfect gym scent. One of first gifts from valentines day my girlfriend gave me. It’s fresh and clean but has a unique twist with the creamy orange.',
          'Daytime, spring/summer.'
        );
        break;

      case 'bleu':
        zoomTo(15, 45, 2.15);
        setText(
          'Bleu de Chanel',
          'Unique Scent with a blend of citrus, woods, and incense.',
          'My safe choice. Works anywhere and one of my og signature scents. It’s a versatile scent that can be worn in any season and for any occasion.',
          'Any season, day or night.'
        );
        break;

      case 'bluetalisman':
        zoomTo(30, 62, 2.2);
        setText(
          'Blue Talisman',
          'Fresh + musky pear with a hint of smokeness.',
          'My Signature Scent as of February. It’s fresh but has a unique twist with the pear and smokiness.',
          'Day to evening.'
        );
        break;

      case 'pacific':
        zoomTo(60, 64, 2.25);
        setText(
          'Pacific Chill',
          'Fresh fruity peach tea scent.',
          'My girlfriend personal favorite scent.',
          'Spring/summer daytime.'
        );
        break;

      case 'armanicode':
        zoomTo(22, 100, 2.1);
        setText(
          'Armani Code',
          'Office leather with iris.',
          'One of the first colonges in my collection and a classic. It’s a safe choice that always feels appropriate.',
          'Night time, formal, cold weather.'
        );
        break;

      case 'valentino':
        zoomTo(45, 95, 2.1);
        setText(
          'Valentino Born In Roma Intense',
          'Sweet modern vibe bubblegum scent.',
          'Youthful but still grown. Compliment puller, one of my first colognes.',
          'Dates, night out, fall/winter.'
        );
        break;

      case 'blackbottle':
        zoomTo(82, 90, 2.1);
        setText(
          'Azzaro The Most Wanted Parfum',
          'Ginger, grapefruit, and a hint of vanilla.',
          'My girlfriend favorite date night colonge I wear.',
          'Cold nights to Date Nights '
        );
        break;
    }
  }

  // This function calculates the appropriate background position for the image based on the clicked coordinates and the desired zoom level, then applies those values to the CSS variables to create the zoom effect.

  function zoomTo(x, y, s) {
    const bx = (50 - x) * (s - 1);
    const by = (50 - y) * (s - 1);

    theImg.style.setProperty('--s', s);
    theImg.style.setProperty('--bx', bx.toFixed(2) + '%');
    theImg.style.setProperty('--by', by.toFixed(2) + '%');

    zoomed = true;
  } 

// This function updates the text elements with the provided information about the cologne, including its name, scent notes, why it's liked, and the recommended time to wear it.

function setText(name, notes, why, time) {
  nameEl.innerHTML = name;
  notesEl.innerHTML = notes;
  whyEl.innerHTML = why;
  timeEl.innerHTML = time;
}

  function reset() { 
    theImg.style.setProperty('--s', 1);
    theImg.style.setProperty('--bx', '0%');
    theImg.style.setProperty('--by', '0%');
  
    nameEl.innerHTML = '—';
    notesEl.innerHTML = '—';
    whyEl.innerHTML = '—';
    timeEl.innerHTML = '—';
  
    zoomed = false;
  }

})();