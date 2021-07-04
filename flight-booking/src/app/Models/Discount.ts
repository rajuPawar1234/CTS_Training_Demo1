export class Discount{
    constructor(
        public id : number,
        public discountName : string, 
        public discountCode : string,
        public discountPercentage : number,
        public discountAmount : number
        ){}
}