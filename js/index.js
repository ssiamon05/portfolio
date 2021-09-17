'use strict';

function changeIconOver() {
  let icon = document.getElementById('download-icon');
  icon.setAttribute('src', 'images/file_download_black_24dp.svg');
}

function changeIconLeave() {
  let icon = document.getElementById('download-icon');
  icon.setAttribute('src', 'images/file_download_white_24dp.svg');
}