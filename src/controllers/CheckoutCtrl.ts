import { Request, Response } from 'express';
export class CheckoutCtrl {
    public post(req: Request, res: Response) {
        res.status(201).json({ success: true });
    }
}

export default CheckoutCtrl;