export class AirlineSchedule{
    constructor(
        public id : number,
        public airlinename  :string, 
        public airlinenumber:string,
        public fromplace: string,
        public toplace:string,
        public departuretime: string,
        public seats:number,
        public price : number
        ){}
}