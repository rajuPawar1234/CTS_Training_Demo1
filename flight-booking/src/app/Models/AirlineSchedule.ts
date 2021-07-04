export class AirlineSchedule{
    constructor(
        public id : number,
        public airlineName  :string, 
        public airlineNumber:string,
        public fromPlace: string,
        public toPlace:string,
        public departureTime: string,
        public seats:number
        ){}
}