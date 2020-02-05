const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 3000;
 
app.use(cors());
app.use(express.static(path.join(__dirname + '/../dist')));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});