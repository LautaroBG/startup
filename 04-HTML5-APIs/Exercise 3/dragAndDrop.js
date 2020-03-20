// modified from http://html5demos.com/file-api
// took from pinned answer in https://stackoverflow.com/questions/11313414/html5-drag-and-drop-load-text-file-in-a-textbox-with-javascript
var holder = document.getElementById('text-area'),
    state = document.getElementById('status');

if (typeof window.FileReader === 'undefined') {
  state.className = 'fail';
} else {
  state.className = 'success';
  state.innerHTML = 'File API & FileReader available';
}

holder.ondragover = function() {
  this.className = 'hover';
  return false;
};
holder.ondragend = function() {
  this.className = '';
  return false;
};
holder.ondrop = function(e) {
  this.className = '';
  e.preventDefault();

  var file = e.dataTransfer.files[0],
    reader = new FileReader();
  reader.onload = function(event) {
    console.log(event.target);
    holder.innerText = event.target.result;
  };
  console.log(file);
  reader.readAsText(file);

  return false;
};