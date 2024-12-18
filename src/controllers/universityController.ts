import { Request, Response } from 'express';
import University, { IUniversity } from '../models/University';

export const getAllUniversities = async (req: Request, res: Response): Promise<void> => {
    try {
        const universities = await University.find();
        res.status(200).json({
            success: true,
            data: universities,
        });

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const addUniversity = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, country } = req.body;
        if (!name || !country) {
            res.status(400).json({ message: 'Please provide both name and country.' });
            return
        }

        const existingUniversity = await University.findOne({ name });
        if (existingUniversity) {
            res.status(400).json({ message: 'University already exists.' });
            return
        }

        const university: IUniversity = new University({ name, country });
        await university.save();

        res.status(201).json({
            success: true,
            data: university,
        });

    } catch (error: any) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
