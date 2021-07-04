export class SaveBooking{
    constructor(
            public id : number,
            public name:string, 
            public mobile:number, 
            public email:string, 
            public password:string,
            public trip : string,
            public fromplace : string,
            public toplace : string,
            public onworddate : string,
            public returndate : string,
            
        ){}
}