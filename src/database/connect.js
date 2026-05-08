import mongoose from "mongoose";

const connection = async() => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/Users`)
    } catch (error)

    {
        console.log(error)

    }

}
export default connection;