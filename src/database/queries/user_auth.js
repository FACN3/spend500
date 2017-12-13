// const connection = require('../db_connection');
//
// const user_auth = (username, password, cb) => {
//   connection.query(
//     `SELECT 1 AS col FROM users WHERE username=$1 AND password=$2`,
//     [username, password],
//     (error, result) => {
//       if (error) {
//         cb(error);
//       }
//       result = result.rows;
//       console.log('inside user_auth', result);
//       let isTrue = false;
//       if (result.length !== 0) {
//         isTrue = true;
//       } else {
//         isTrue = false;
//       }
//       console.log('inside auth_user', isTrue);
//       cb(null, isTrue);
//     }
//   );
// };
//
// // user_auth('hoslack', 'kkkk', (error,result)=>{
// // 	if (error) {console.log(error);}
// // 	console.log(result);
// // });
//
// module.exports = user_auth;
