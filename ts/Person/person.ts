class Person{
  name:string;
  age:number;
  amount:number;

  constructor(name:string,age:number,amount:number){
    this.name = name;
    this.age = age;
    this.amount = amount;
  }

  getName():string{
    return this.name;
  }
  getAge():number{
    return this.age;
  }
  getAmount():number{
    return this.amount;
  }

  toString(): string{
    return "<br>Name: "+this.name+"<br>Age: "+this.age+"<br>Amount: "+this.amount;
  }
}
