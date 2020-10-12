export type CustomerOrder = {
    id?: number,
    customerId: number,
    orderTypeId: number,
    addressMovingTo: number,
    addressMovingFrom: number,
    completionDate: Date,
    comment: string;
}
