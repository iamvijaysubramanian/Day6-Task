class Uber{
    constructor(distance,waitingPeriod,rate,minimumFare){
        this.distance= distance;
        this.waitingPeriod=waitingPeriod;
        this.rate=rate;
        this.minimumFare=minimumFare;
    }
setDistance(dist){
        this.distance=dist;
    }
setMinimumfare(minfare){
    this.minimumfare=minfare;
}
getRideDetails(){
        return(`The distance of the ride is ${this.distance} KM with waiting period of 
        ${this.waitingPeriod} Minutes and rate of ${this.rate}.rs and minimumfare of car is ${this.minimumfare}.rs`)
    }
getRate(){
        let totalRate = (this.distance * this.rate)+ (this.waitingPeriod * 5)+(this.minimumfare)
        return totalRate;
    }
}
let customer1= new Uber (100,10,15,50)
console.log(customer1.getRate());
customer1.setDistance(180);
customer1.setMinimumfare(50);
console.log(customer1.getRate());
console.log(customer1.getRideDetails());
