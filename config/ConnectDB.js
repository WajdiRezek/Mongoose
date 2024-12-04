const mongosse = require('mongoose')



const ConnectDB=async()=>{
    try {
        await mongosse.connect('mongodb://127.0.0.1:27017')
        console.log('Db is connected')


        
    } catch (error) {

        console.log(error)
        
    }

    
    
} 

module.exports=ConnectDB