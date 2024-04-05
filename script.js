function getRandomColor() { //function for colour
    const letters = '0123456789ABCDEF'; //options
    let color = '#'; //# for the colour
    for (let i = 0; i < 6; i++) { //ilterates through options
      color += letters[Math.floor(Math.random() * 16)]; //gets random colour
    }
    return color; //returns random colour
  }
  
  document.getElementById('changeTextBtn').addEventListener('click', function() { //should change text when the id for the change text button clicked
    document.getElementById('message').textContent = "Text changed successfully!";
  });
  
  document.addEventListener('DOMContentLoaded', function() { //new background colour when DOMcontent loads (webpage loads/refreashes)
    document.body.style.backgroundColor = getRandomColor();
  
    
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "New paragraph added dynamically!"; //text
    document.getElementById('container').appendChild(newParagraph); // Appends a new paragraph in the <div> with the id continer
  });
  