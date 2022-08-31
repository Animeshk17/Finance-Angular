export interface Transaction {
    transactionId : number;
    userId : number;
    orderId : number;
    productId : number;
    transactionDate : Date;
    transactionAmount : number;
};