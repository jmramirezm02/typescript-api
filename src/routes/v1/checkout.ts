import { CheckoutCtrl } from '../../controllers/checkoutCtrl'

export class CheckoutRoutes {
    public checkoutCtrl = new CheckoutCtrl();
    public routes(app: any): void {
        app
            .route('/api/v1/checkout')
            .post(this.checkoutCtrl.post)
    }
}