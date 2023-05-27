document.addEventListener('DOMContentLoaded', function() {
  var toggleButton = document.getElementById('toggle-display');
  var toggle = false;

  // 更新按钮状态并保存插件状态
  function updateButtonState() {
    toggleButton.checked = toggle;
    chrome.storage.sync.set({ hide: toggle }, function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, { file: 'content.js' });
      });
    });
  }

  // 从存储中获取插件状态并更新按钮状态
  chrome.storage.sync.get('hide', function(data) {
    toggle = data.hide;
    updateButtonState();
  });

  // 当用户点击按钮时，切换插件状态
  toggleButton.addEventListener('change', function() {
    toggle = !toggle;
    updateButtonState();
  });
});
