var a=[];
class Person{
    constructor(firstName,lastName,age,place){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.place=place;
    }
    getDetails(){
        return (`The name of the person is ${this.firstName} ${this.lastName} with age of ${this.age} born at ${this.place}`)
}
getAllNames(){
    return(`All the Names are ${this.firstName}`)
}
    }

let person1 = new Person ("aravind","sekar","20","chennai");
let person2 = new Person ("sankar","gopi","21", "coimbatore");
let person3 = new Person ("saravana","sundar","22","mumbai");

a[0] = new Person ("aravind","sekar","20","chennai");
a[1] = new Person ("sankar","gopi","21", "chennai");
a[2] = new Person ("saravana","sundar","22","mumbai");

for (let i=0; i<a.length;i++){
    console.log(a[i].firstName)
}
