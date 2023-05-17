var styleId = 'leetcode-style';

function toggleDisplay() {
  var existingStyle = document.getElementById(styleId);

  if (existingStyle) {
    existingStyle.remove();
  } else {
    var style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      pre, img, .pt-5{
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }
}

toggleDisplay();
