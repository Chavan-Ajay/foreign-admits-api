import mongoose from 'mongoose';


const connectDB = async (): Promise<void> => {
    try {
        if (!process.env.MONGO_URI) {
            throw new Error('Missing MONGO_URI environment variable');
        }
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected...');
    } catch (error:any) {
        console.error(error.message);
        process.exit(1);
    }
};

export default connectDB;
