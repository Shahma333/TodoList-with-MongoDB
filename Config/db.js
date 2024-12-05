const {connect}=require("mongoose")
const connectDB=async()=>{
    try {
        const {connection}=await connect(`mongodb://127.0.0.1:27017`,{
            dbName:"sample_1"
        })
        console.log("connected DB=",connection.db.databaseName);
        
    } catch (err) {
        console.log(err);   
    }
}
module.exports={connectDB}