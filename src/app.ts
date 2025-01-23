import express, {Response, Request} from "express"
import authRouter from "./routes/auth.routes"
import userRouter from "./routes/user.routes"

const app = express()
app.use(express.json())
app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)

app.get('/', (req:Request, res:Response) => {
    res.send('Bienvenido al backend')
})

export default app 
