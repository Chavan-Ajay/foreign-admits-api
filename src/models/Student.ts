import mongoose, { Schema, Document } from 'mongoose';

export interface IStudent extends Document {
    name: string;
    email: string;
    selectedUniversities: {
        university: mongoose.Types.ObjectId;
        banks: mongoose.Types.ObjectId[];
    }[];
}

const StudentSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    selectedUniversities: [
        {
            university: { type: mongoose.Schema.Types.ObjectId, ref: 'University', required: true },
            banks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bank', required: true }],
        },
    ],
});

export default mongoose.model<IStudent>('Student', StudentSchema);
