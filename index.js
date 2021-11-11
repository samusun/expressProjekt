import dotenv from "dotenv"
import { expressDriver } from "./drivers/webdriver.js"
import { mockdbDriver } from "./drivers/mockdbdriver.js"
import { mongoDriver } from "./drivers/mongodriver.js"

dotenv.config()

const PORT = process.env.PORT || 3000 // 3000 or 80
const DBTYPE = process.env.DBTYPE || "mock" // mock or mongo
const DBCONN = process.env.CONNECTION_STRING || "<default>"
const DBNAME = process.env.DBNAME || "<default>"

const selectDb = async (dbType, dbConn, dbName) => {
  switch (dbType) {
    case "mock":
      return mockdbDriver()
    case "mongo":
    default:
      return await mongoDriver(dbConn, dbName)
  }
}

const main = async (port, dbType, dbConn, dbName) => {
  try {
    const db = await selectDb(dbType, dbConn, dbName)
    const app = expressDriver(db)
    app.listen(port, (err) => {
      if (err) throw err
      console.log(
        `dataShop app (${dbType}) listening at http://localhost:${port}`
      )
    })
  } catch (err) {
    console.error("Error running app", err)
  }
}

main(PORT, DBTYPE, DBCONN, DBNAME)
console.log(
  "PORT: ",
  PORT,
  "DBTYPE: ",
  DBTYPE,
  "CONN: ",
  DBCONN,
  "DBNAME: ",
  DBNAME
)
