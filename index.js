import { connectToDB } from './dbConnection.js';
import { createApp } from './app.js';

connectToDB();
const port = process.env.PORT;

const app = createApp();
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
