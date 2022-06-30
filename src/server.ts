import express, { application, Request, Response } from 'express'
import bodyParser from 'body-parser'
import cors from 'cors';
import userRoutes from './handlers/user';
import orderRoutes from './handlers/order';
import productRoutes from './handlers/product';

const app: express.Application = express()
const address: string = "0.0.0.0:3000"

app.use(cors());
app.use(bodyParser.json())

userRoutes(app);
orderRoutes(app);
productRoutes(app);

// app.get('/', function (req: Request, res: Response) {
//     res.send('Hello World!')
// })

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
})

export default app;