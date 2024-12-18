import { Request, Response } from 'express';
import Student, { IStudent } from '../models/Student';

export const registerStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            res.status(400).json({ message: 'Name and email are required' });
            return;
        }

        const existingStudent = await Student.findOne({ email: email });
        if (existingStudent) {
            res.status(400).json({ message: 'Email already exists' });
            return;
        }

        const student: IStudent = new Student({ name, email });

        await student.save();

        res.status(201).json({
            success: true,
            data: student,
            message: 'Student registered successfully'
        });

    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export const updateStudentSelection = async (req: Request, res: Response): Promise<void> => {
    try {
        const { selectedUniversities } = req.body;
        if (!selectedUniversities) {
            res.status(400).json({ message: 'Selected universities are required' });
            return;
        }
        
        const student = await Student.findById({_id : req.params.id});

        if (!student) {
            res.status(404).json({ message: 'Student not found' });
            return;
        }

        student.selectedUniversities = selectedUniversities;
        await student.save();

        res.status(201).json({
            success: true,
            data: student,
            message: 'Student updated successfully'
        });

    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

export const getStudentDetails = async (req: Request, res: Response): Promise<void> => {
    try {
        const student = await Student.findById(req.params.id)
            .populate('selectedUniversities.university selectedUniversities.banks');

        if (!student) {
            res.status(404).json({ message: 'Student not found' });
            return;
        }

        res.status(200).json({
            success: true,
            data: student,
            message: 'Student details retrieved successfully'
        });

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
