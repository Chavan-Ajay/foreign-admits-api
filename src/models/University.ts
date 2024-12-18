import mongoose, { Schema, Document } from 'mongoose';

export interface IUniversity extends Document {
    name: string;
    country: string;
}

const UniversitySchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    country: { type: String, required: true },
});

export default mongoose.model<IUniversity>('University', UniversitySchema);
