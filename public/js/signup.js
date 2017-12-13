function fetch(url, method, data, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status !== 200) {
      callback(xhr.responseText);
    } else if (xhr.readyState == 4 && xhr.status === 200) {
      console.log(xhr.responseText);
      callback(null, JSON.parse(xhr.responseText));
    }
  };
  xhr.open(method, url);
  xhr.send(data);
}

document.querySelector('.signIn').addEventListener('submit', function(e) {
  e.preventDefault();
  // console.log(e);
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
    document.querySelector('#rules').textContent = '';
    var user = document.querySelector('#usernameSignUp').value;
    var pass = document.querySelector('#passwordSignUp').value;
    var first = document.querySelector('#firstName').value;
    var last = document.querySelector('#lastName').value;
    var address = document.querySelector('#address').value;
    var query =
      'user=' +
      user +
      '&pass=' +
      pass +
      '&first=' +
      first +
      '&last=' +
      last +
      '&address=' +
      address;

    fetch('/createuser', 'post', query, function(err, res) {
      if (err) {
        console.log('error with', err);
      } else {
        if (res == 'username already exists') {
          document.querySelector('#rules').textContent =
            'username already exists';
        }
        console.log('success with', res);
      }
    });
  }

  console.log(e);
});
