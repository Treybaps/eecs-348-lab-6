function applyStyles() { 

    const text = document.getElementById('text'); 

    const color = document.getElementById('colorInput').value; 

    const borderWidth = document.getElementById('borderWidthInput').value; 

  

    text.style.color = `rgb(${color})`; 

    text.style.border = `${borderWidth} solid black`; 

} 