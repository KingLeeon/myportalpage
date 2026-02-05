(function () {
    'use strict';
    console.log('reading js');
  
 
    const form = document.querySelector('#madlibsForm');
    const resultBox = document.querySelector('#resultBox');
    const storyOutput = document.querySelector('#storyOutput');
    const resetBtn = document.querySelector('#resetBtn');
    const formPanel = document.querySelector('.formPanel');

    const errorMessage = document.querySelector('#error');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const hero = document.querySelector('#hero').value;
      const adverb = document.querySelector('#adverb').value;
      const villain = document.querySelector('#villain').value;
      const noun1 = document.querySelector('#noun1').value;
      const place = document.querySelector('#place').value;
      const object = document.querySelector('#object').value;
      const adj1 = document.querySelector('#adj1').value;
      const adj2 = document.querySelector('#adj2').value;
      const noun2 = document.querySelector('#noun2').value;
      const noun3 = document.querySelector('#noun3').value;
      const adj3 = document.querySelector('#adj3').value;
      const adj4 = document.querySelector('#adj4').value;
  
    
      let myText = '';
  
   
      if (hero === '') {
        myText = 'Please provide a hero name.';
        document.querySelector('#hero').focus();
        if (errorMessage) errorMessage.innerHTML = myText;
        return;
      } else if (adverb === '') {
        myText = 'Please provide an adverb.';
        document.querySelector('#adverb').focus();
        if (errorMessage) errorMessage.innerHTML = myText;
        return;
      } else if (villain === '') {
        myText = 'Please provide a villain name.';
        document.querySelector('#villain').focus();
        if (errorMessage) errorMessage.innerHTML = myText;
        return;
      } else if (noun1 === '') {
        myText = 'Please provide a noun.';
        document.querySelector('#noun1').focus();
        if (errorMessage) errorMessage.innerHTML = myText;
        return;
      } else if (place === '') {
        myText = 'Please provide a campus location.';
        document.querySelector('#place').focus();
        if (errorMessage) errorMessage.innerHTML = myText;
        return;
      } else if (object === '') {
        myText = 'Please provide an object.';
        document.querySelector('#object').focus();
        if (errorMessage) errorMessage.innerHTML = myText;
        return;
      } else if (adj1 === '') {
        myText = 'Please provide an adjective.';
        document.querySelector('#adj1').focus();
        if (errorMessage) errorMessage.innerHTML = myText;
        return;
      } else if (adj2 === '') {
        myText = 'Please provide an adjective.';
        document.querySelector('#adj2').focus();
        if (errorMessage) errorMessage.innerHTML = myText;
        return;
      } else if (noun2 === '') {
        myText = 'Please provide a noun.';
        document.querySelector('#noun2').focus();
        if (errorMessage) errorMessage.innerHTML = myText;
        return;
      } else if (noun3 === '') {
        myText = 'Please provide a noun.';
        document.querySelector('#noun3').focus();
        if (errorMessage) errorMessage.innerHTML = myText;
        return;
      } else if (adj3 === '') {
        myText = 'Please provide an adjective.';
        document.querySelector('#adj3').focus();
        if (errorMessage) errorMessage.innerHTML = myText;
        return;
      } else if (adj4 === '') {
        myText = 'Please provide an adjective.';
        document.querySelector('#adj4').focus();
        if (errorMessage) errorMessage.innerHTML = myText;
        return;
      } else {
       
        myText = `
          <p>
            In the halls of UC Davis, a hero named <span>${hero}</span> was born.
            One day at <span>${place}</span>, they <span>${adverb}</span> discovered
            a mysterious <span>${object}</span>.
          </p>
  
          <p>
            The moment they touched it, a <span>${adj1}</span> power surged through their
            <span>${noun1}</span>. But peace didn’t last...
          </p>
  
          <p>
            A villain called <span>${villain}</span> showed up with a <span>${adj2}</span> plan:
            to steal every <span>${noun2}</span> on campus and replace them with
            <span>${noun3}</span>.
          </p>
  
          <p>
            Now <span>${hero}</span> must become the most <span>${adj3}</span> defender
            and face <span>${villain}</span> in a final, <span>${adj4}</span> showdown.
          </p>
        `;
  
     
        if (errorMessage) errorMessage.innerHTML = '';
  
    
        storyOutput.innerHTML = myText;
  
    
        formPanel.style.display = 'none';
        resultBox.hidden = false;
  
    
        document.querySelector('#hero').value = '';
        document.querySelector('#adverb').value = '';
        document.querySelector('#villain').value = '';
        document.querySelector('#noun1').value = '';
        document.querySelector('#place').value = '';
        document.querySelector('#object').value = '';
        document.querySelector('#adj1').value = '';
        document.querySelector('#adj2').value = '';
        document.querySelector('#noun2').value = '';
        document.querySelector('#noun3').value = '';
        document.querySelector('#adj3').value = '';
        document.querySelector('#adj4').value = '';
      }
    });
  
  
    resetBtn.addEventListener('click', function (event) {
      event.preventDefault();
      resultBox.hidden = true;
      formPanel.style.display = 'block';
      document.querySelector('#hero').focus();
    });
  
 
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        resultBox.hidden = true;
        formPanel.style.display = 'block';
      }
    });
  }());
  