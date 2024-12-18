import { Request, Response } from 'express';
import Bank, { IBank } from '../models/Bank';

export const getAllBanks = async (req: Request, res: Response): Promise<void> => {
    try {
        const banks = await Bank.find();
        res.status(200).json({
            success: true,
            data: banks
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const addBank = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.body;
        if (!name) {
            res.status(400).json({
                message: 'Name is required'
            });
            return
        }

        const existingBank = await Bank.findOne({ name });
        if (existingBank) {
            res.status(400).json({
                message: 'Bank with this name already exists'
            });
            return
        }

        const bank: IBank = new Bank({ name: name });
        await bank.save();
        res.status(201).json({
            success: true,
            data: bank
        });
    } catch (error: any) {
        res.status(400).json({
            message: error.message
        });
    }
};
