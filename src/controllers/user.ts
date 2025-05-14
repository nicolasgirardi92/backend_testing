import { Request, Response } from 'express';

export const createUser = (req: Request, res: Response) => {
    console.log(req.body);
    res.json({ message: 'Hello from the API!' });
}
