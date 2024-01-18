import { Express } from "express"
import http from "http"
import cors from 'cors'
import dotenv from "dotenv"
import { expression } from "joi";


dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express()

app.use(express.json()) // We will get payload in JSON

app.use(cors());

app.get('/', (req,res) => {
    return res.send('Server us Running!')
})

const server = http.createServer(app) // create server using HTTP module and we will pass app

server.listen(PORT, () => {
    console.log(`Server is listening`);
})