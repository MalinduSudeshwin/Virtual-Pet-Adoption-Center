const mongoose = require('mongoose');
const app = require('./app');

mongoose.connect('mongodb+srv://malindusudeshwin:mstbg1230@virtual-pets.hnfrqrk.mongodb.net/?retryWrites=true&w=majority&appName=virtual-pets', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB Connected");
  app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
  });
}).catch(err => console.error(err));
