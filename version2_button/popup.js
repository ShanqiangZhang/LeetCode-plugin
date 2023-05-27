// on off 版本
document.addEventListener('DOMContentLoaded', function() {
  var toggleButton = document.getElementById('toggle-display');
  var toggle = false;

  function updateButtonName() {
    toggleButton.textContent = toggle ? 'Click to Show' : 'Click to hide';
  }

  toggleButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.executeScript(tabs[0].id, { file: 'content.js' }, function() {
        toggle = !toggle;
        updateButtonName();
      });
    });
  });

  // 初始化时更新按钮名称
  updateButtonName();
});