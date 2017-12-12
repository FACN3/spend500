function fetch(url, method, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status !== 200) {
      callback(xhr.responseText);
    } else if (xhr.readyState == 4 && xhr.status === 200) {
      callback(null, JSON.parse(xhr.responseText));
    }
  };
  xhr.open(method, url);
  xhr.send(data);
}

document.querySelector('.signIn').addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(e);
  // document.querySelector('')
});

document.querySelector('.signUp').addEventListener('submit', function(e) {
  e.preventDefault();
  if (
    document.querySelector('#passwordSignUp').value !==
    document.querySelector('#confirm').value
  ) {
    document.querySelector('#rules').textContent = 'passwords do not match';
  } else {
    var dataArr = [];
    document.querySelector('#rules').textContent = '';
    dataArr.push(document.querySelector('#usernameSignUp').value);
    dataArr.push(document.querySelector('#passwordSignUp').value);
    dataArr.push(document.querySelector('#firstName').value);
    dataArr.push(document.querySelector('#lastName').value);
    dataArr.push(document.querySelector('#address').value);
    console.log(dataArr);

    fetch('/createuser', 'post', dataArr, function(err, res) {
      if (err) {
        console.log('error with', err);
      } else {
        console.log('success with', res);
      }
    });
  }

  console.log(e);
});
