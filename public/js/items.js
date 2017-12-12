function fetch(url, method, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log(xhr.responseText);
      callback(null, JSON.parse(xhr.responseText));
    } else if (xhr.readyState === 4 && xhr.status !== 200){
      callback(xhr.status);
      console.log(xhr.readyState, xhr.status);
    } else {
      console.log(xhr.readyState, xhr.status);
    }
  };
  xhr.open(method, url, true);
  xhr.send();
}

fetch('/', 'GET' function(err, items) {
  if (err) {
    console.log(err);
  } else {
    console.log(items);
  }
});
