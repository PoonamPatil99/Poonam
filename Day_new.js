class details{
constructor(...args)
{
this.data = []
for(var i=0; i<args.length; i++)
{
this.data.push(args[i])
}
}
}
let Info = new details("Jai Venkateswara Technologies","B TECH MCA MBA BSC MSC","2/6/1988","233/3 Ground floor new thippasandra",08025216666, 9900367097,"venkatesh.db@gmail.com","1 years","C,CPP all Lang & 1 years")
console.log(Info.data)

//-------------------------------------------------------------------------

class company{
constructor(...args)
{
this.jvt = []
for(var i=0; i<args.length;i++)
{
this.jvt.push(args[i])
}
}
}

let dem = new company("JVT","programmer","2.3 or 230000","bangalore")
console.log(dem.jvt)
//-------------------------------------------------------------------------

class ceo {
constructor(...args)
{
 this.details=[]
 for(var i=0;i<args.length;i++)
 {
 this.details.push(args[i])
 }
 }
 }
 let dat = new ceo("sundar pichai",51,234567)
 console.log(dat.details)

//---------------------------------------------------------------------------------------------------------------------------------------------------
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

let animal = new Animal("My animal");

class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
}

let rabbit = new Rabbit("White Rabbit");

rabbit.run(5); 
rabbit.hide();

//----------------------------------------------------------------------------

function data(sentence,wrod) {
  return class {
    sayHi()
    { 
        console.log(sentence,wrod); 
    }
  };
}

class User extends data("I m Poonam","poo") {}

new User().sayHi();


//-----------------------------------------------------------------------------
function corp(Companyname,Designation,Salary,Location)
{
return class{
cropdata()
{
    console.log(Companyname,Designation,Salary,Location);
}
};
}
class cropinfo extends corp("JVT","Programmer","2.3 or 230000","Bangalore"){}
new cropinfo().cropdata();

//---------------------------------------------------------------------------
class corpor {
	constructor( Companyname,Designation,Salary,Location)
    {
    this.Companyname =Companyname
	this.Designation= Designation
	this.Salary =Salary
	this.Location =Location
    }

 salary(amount) {
    this.Salary =0;
    console.log(this.Companyname + "salary is" + this.Salary);
  }

  location() {
    this.Salary = 0;
    console.log(`${this.Companyname} located in ${this.Location}.`);
  }
  display()
  {
    console.log(this.Companyname,this.Designation,this.Salary,this.Location)
  }

}

class address extends corpor {
 addd() {
    console.log(`${this.Companyname} addressd at BTM`);
  }

 location() {
    super.location(); 
    this.addd(); 
  }
}

let Addd = new address("JVT","Programmer","2.3 or 230000"," Bangalore");
 Addd.display();
 Addd.salary(); 
 Addd.location(); 

//---------------------------------------------------------------------------------------------------------------------------------------------

class CoffeeMachine {
  _waterAmount = 0;

  set waterAmount(value) {
    if (value < 0) {
      value = 0;
     
    }
    this._waterAmount = value;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  constructor(power) {
    this._power = power;
  }
  display()
  {
    console.log("value")
  }

}

let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.display();

coffeeMachine.waterAmount = -10; 

//-----------------------------------------------------------------------------------------------------------------------------------------------------

