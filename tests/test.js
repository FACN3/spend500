const tape = require('tape');
const build = require('../src/database/db_build.js');
const dbConnect = require('../src/database/db_connection.js');
const displayItems = require('../src/database/queries/displayItems.js');

// Testing if tape is working
tape("Is it working", (t) => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape("Item IDs should be selected", (t) => {
  build((err, res) => {
    if (err) {
      throw err;
    } else {
      const expected = [1,2,3,4,5];
      displayItems((error, results) => {
        if (error) {
          console.log(error);
        } else {
          var actual = [];
          results.forEach((el) => {
            actual.push(el.id);
          });
          t.deepEqual(actual, expected, "Should return an array of item IDs.");
          t.end();
        }
      });
    }
  });
})
