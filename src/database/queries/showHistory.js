const connection = require('../db_connection');

const showHistory = (user_id, cb) => {
  //First
  connection.query(
    `SELECT id,t_time FROM user_transactions WHERE user_id = $1`,
    [user_id],
    (err, result) => {
      if (err) {
        console.log(err);
        return cb(err);
      } else {
        const transactions = result.rows.id;
        transactions.forEach((trans) => {
          connection.query(
            `SELECT transaction_items.item_id,items.name FROM transaction_items,items
            WHERE transaction_id = $1 AND items.id=transaction_items.item_id`,
            [trans],
            (err, result) => {
              if (err) {
                console.log(err);
                return cb(err);
              } else {
                console.log(result);
                return cb(null, result);
              }
            }
          )
        })
      }
    }
  )
}
