var styleId = 'leetcode-style';

function hideElements() {
  var existingStyle = document.getElementById(styleId);

  if (!existingStyle) {
    var style = document.createElement('style');
    style.id = styleId;
    style.innerHTML = `
      .pt-4 pre, .pt-4 img, .pt-5, .example, .pt-3{
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }
}

function showElements() {
  var existingStyle = document.getElementById(styleId);
  if (existingStyle) {
    existingStyle.remove();
  }
}

// 检查插件状态并更新页面
chrome.storage.sync.get('hide', function(data) {
  if (data.hide) {
    hideElements();
  } else {
    showElements();
  }
})


;
