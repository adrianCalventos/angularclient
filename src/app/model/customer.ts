import { Product } from "./product";

export class Customer {

    customer_id: string;
    nif: string
    docNum: string
    email: string;
    givenName: string;
    products: Product[];

}
