import mongoose from 'mongoose'


type Connectionobject = {
    isConnected?: number
}


const connection: Connectionobject = {}

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("already connected to database")
        return

    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})


        connection.isConnected = db.connections[0].readyState
        console.log("DB Connected succcessfully")

    } catch (error) {
        console.log("database connection failed", error)

        process.exit(1)




    }
}


export default dbConnect; 