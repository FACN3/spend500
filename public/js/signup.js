document.querySelector('.signIn').addEventListener('submit', function(e) {
  e.preventDefault();
  var data = [];
  var  username = document.getElementById('usernameSignIn').value;
  var pass = document.getElementById('passwordSignIn').value;
  data.push(username, pass);

  fetchPOST('/login', data, function(err, res) {
    if (err) {
      console.log(err);
    } else if (res === 'Username does not exist') {
      document.querySelector('#signInRules').textContent = "Username Not Found.";
    } else if (res === 'Wrong Password') {
      document.querySelector('#signInRules').textContent = "Wrong Password";
    }
    else {
      console.log(res);
      window.location.href = '../buy.html';
    }
  })
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

      //Return a message to the user if password is too short.
      if (pass.length < 8) {
        document.querySelector('#rules').textContent = "Password should be at least 8 characters.";
      } else if (user.length < 6) {
        document.querySelector('#rules').textContent = "Username should be at least 6 characters.";
      }
      else {
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
        if (err) {
          console.log('error with', err);
        } else if (res === JSON.stringify('username already exists')) {
          document.querySelector('#rules').textContent =
            'username already exists';
        } else if (res === JSON.stringify('login successful')) {
          alert('Thank you for signing up! You receive a 500$ certificate :)');
          window.location.href = '../buy.html';
        }
      });
    }
  }
});

//Create a regex check function
