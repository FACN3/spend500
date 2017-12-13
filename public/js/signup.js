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

    fetchPOST('/createuser', query, function(err, res) {
      console.log('fetchpost running');
      console.log('res is ', res);
      if (err) {
        console.log('error with', err);
      } else if (res === JSON.stringify('username already exists')) {
        document.querySelector('#rules').textContent =
          'username already exists';
      } else if (res === JSON.stringify('login successful')) {
        console.log('success with', res);
        window.location.href = '../buy.html';
      } else {
        console.log('through to else');
      }
    });
  }

  console.log(e);
});
