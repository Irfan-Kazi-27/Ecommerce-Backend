import { connectDB } from "./db/connection.js"
import { app } from "./app.js"

connectDB().then(()=>{
    app.listen(process.env.PORT||3000,()=>{
        console.log(`Server is running On ${process.env.PORT}`);
    })
}).catch((err)=>console.log(err))