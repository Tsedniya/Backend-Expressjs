import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js'
import todoRoutes from './routes/todoRoutes.js'



const app = express();
const PORT = process.env.PORT || 5003;

// get file path from the url of the  current module
const __filename = fileURLToPath(import.meta.url);
//get the directory name from the file path 
const __dirname = dirname(__filename);

app.use(express.json())
// serve static files from src/public
app.use(express.static(path.join(__dirname, 'public')));
 
// serve html file from the /pubic directory
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/auth',authRoutes)
app.use('/todo',todoRoutes)

app.listen(PORT, () => {
  console.log(`server has started on port: ${PORT}`);
});
