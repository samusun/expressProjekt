// import { mongoDriver } from './drivers/mongodriver.js';
// import { mockdbDriver } from './drivers/mockdbdriver.js';
// import webDriver from './drivers/webdriver.js';

// const DBNAME = 'dataShop';
// const DBCONN = 'mongodb://localhost:27017/dataShop';
// const PORT = process.env.PORT || 3000; // 3000 or 80
// const DBTYPE = process.env.DB || 'mock'; // mock or mongo

// const selectDb = async (dbType, dbConn, dbName) => {
//   switch (dbType) {
//     case 'mock':
//       return mockdbDriver();
//     case 'mongo':
//     default:
//       return await mongoDriver(dbConn, dbName);
//   }
// };

// const main = async (port, dbType, dbConn, dbName) => {
//   try {
//     const db = await selectDb(dbType, dbConn, dbName);
//     const app = await webDriver(db);
//     app.listen(port, () => {
//       console.log(
//         `USERS app (${dbType}) listening at http://localhost:${port}`
//       );
//     });
//   } catch (err) {
//     console.error('Error running app', err);
//   }
// };

// main(PORT, DBTYPE, DBCONN, DBNAME);

// // const connectionString = 'mongodb://localhost:27017/dataShop';
