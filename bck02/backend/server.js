import dotenv from 'dotenv';
import express from 'express';

dotenv.config(); 

const app = express();
const port = process.env.PORT || 5000; 

app.get('/', (req, res) => { 
    res.send('hello');
});

aapp.get('/api/jokes', (req, res) => {
    res.json([
      {
        id: 1,
        setup: "Why don't scientists trust atoms?",
        punchline: "Because they make up everything!"
      },
      {
        id: 2,
        setup: "What do you call fake spaghetti?",
        punchline: "An impasta!"
      }
    ]);
  });
  

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
