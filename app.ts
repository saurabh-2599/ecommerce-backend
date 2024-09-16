import express,{Request,Response,NextFunction} from 'express'
const app = express()

//setting  up middlewares

app.use(express.json({}))


app.use('/api/v1/health-check',async(req:Request,res:Response) => {
    return res.status(200).json({
        status:'Success',
        message:'Health Is Fine',
        data:null
    })
})

//unhandled routes
app.all('*',async(req:Request,res:Response) => {
    return res.status(404).json({
        status:"Fail",
        message:"Path Not Found",
        data:null
    })
})

//global error handling middleware
app.use((err:Error,req:Request,res:Response,next:NextFunction) => {
    return res.status(500).json({
        status:'Fail',
        message:"Something went wrong",

    })
})



export default app;