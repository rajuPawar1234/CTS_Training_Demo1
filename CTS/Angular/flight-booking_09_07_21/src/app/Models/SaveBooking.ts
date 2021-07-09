export class SaveBooking{
    constructor(
            public id : number,
            public name:string, 
            public mobile:string, 
            public email:string, 
            public password:string,
            public trip : string,
            public fromplace : string,
            public toplace : string,
            public onworddate : string,
            public returndate : string,
            public persons:number,
            public total : number,
            public airlineid : number,
            public discountname : string,
        ){}
}