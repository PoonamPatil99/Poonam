class corp {
    Cropo:object;
    constructor(obj:{ Companyname:string,Designation:string,Salary:string,Location:string,Name:string,EducationalQualification:string,DateOfBirth:string,CommunicationAddress:string,ResidencNumber:number,Mobile:number,Email:string,TotalITExp:string,SkillRelevantExperience:string,ReportingManager:string,PANCARDNO:string})
{
    this.Cropo=obj;
}
validte()
{
    console.log(typeof(this.Cropo));
    if(typeof this.Cropo != "string")
    {
        console.log("object should be of string type");
    }
    
}
display()
{
    console.log(this.Cropo);
}
}

var Cp = new corp({Companyname:"JVT",Designation:"Programmer",Salary :"2.3 or 230000",Location : "Bangalore",Name : "Jai Venkateswara Technologies",EducationalQualification : "B TECH MCA MBA BSC MSC",DateOfBirth : "2/6/1988",CommunicationAddress : "233/3 Ground floor new thippasandra",ResidencNumber : 08025216666,Mobile : 9900367097,Email : "venkatesh.db@gmail.com",TotalITExp : "1 year",SkillRelevantExperience : "C,CPP all Lang & 1 years",ReportingManager: "Venkatesh",PANCARDNO : "asu675901f"})
Cp.display();
Cp.validte();

//-----------------------------------------------------------------------------------------------------------

class Acc {
    acc:object;
    constructor(obj:{AccountNo: number,BroadbandUserID :number,IPAddress:string})
    {
        this.acc=obj;

    }
    display()
    {

        console.log(this.acc);
    }
}

var P = new Acc({AccountNo: 1135497,BroadbandUserID : 11128550,IPAddress: "10.245.97.123"});
P.display();

//------------------------------------------------------------------------------------------------------

class datause{
    Datause:object;
    constructor(obj:{TotalMBdownloaded : string,MobiledownloadSpeed : string,MobileuploadSpeed : string})
    {
        this.Datause=obj;
    }
    display()
    {
        console.log(this.Datause);
    }
}

var usage = new datause({TotalMBdownloaded : "21.26 GB",MobiledownloadSpeed : "30.05 mbps",MobileuploadSpeed : "32.06 mbps"})
usage.display();

//---------------------------------------------------------------------------------------------------------

class oss{
    Os:object;
    constructor(obj:{OS : string,Chipset :string,CPU :string})
    {
        this.Os=obj;
    }
    display()
    {
        console.log(this.Os);
    }
} 
var opera = new oss({OS : "iOS 9, upgradable to iOS 9.2",Chipset : "Apple A9",CPU :"Dual-core 1.84 GHz Twister"})
opera.display();

//--------------------------------------------------------------------------------------------------------

    interface animal{
        stay( ):any
    }
    class Dog implements animal {
    bone: Number ;
    food : string[]
    constructor ( typ :number ) {
        this.bone =typ;
        this.food = ["pedigree","egg"] 
    }
    stay( ):any {
         console.log(this.bone);
         console.log(this.food);
     }
    }
    class horse implements animal {
    bone : Number ;
    food :string[]
    constructor ( typ :number ) {
        this.bone= typ;
         this.food = [ "grass" , "feed"]
    }
     stay( ):any {
         console.log(this.bone )
         console.log(this.food);
     }
    }
    class lion implements animal{
        bone :Number;
        food : string[];
        constructor(typ:number)
        {
            this.bone=typ;
            this.food =[ "flesh"]
        }
        stay():any{
            console.log(this.bone);
            console.log(this.food);
        }
    }
    let dec = new Dog( 3 )
    let dum = new horse ( 1 )
    let duk = new lion(4)
    let freed : animal = dec;
    let free :animal =dum;
    let flessh:animal = duk;
    dec.stay()
    dum.stay();
    duk.stay();

    //----------------------------------------------------------------------------------------------------------

    var informe =[
        {
            Name : "Naga Lalitha Kumari Bezawada",
            Dob :"18-02-1989",
            TimeOfBirth :"7.30-8PM",
            PlaceOfBirth : "Samalkota",
            Nativity : "Rajahmundry",
            MartialStatus : "UnMarried",
            Religion : "Hindu",
            Community : "Telugu",
            Caste : "Balija",
            SubSect : "Krishna Balija",
            MotherTongue :"Telugu",
            Gothram : "Mathala",
            Star :"Pushyami 3,4P",
            Height : 5.1,
            Complexion :"Medium",
            Qualification :"B.Tech(CS)",
            University : "KIET,Kakinada",
            BloodGroup : "B+ve",
        },
        {
            Distance : "323 KM",
            TicketFare : "Rs. 420.00",
            ServiceCharge :"Rs. 22.90",
            TotalFare :"Rs. 442.90 *",
        },
        {
            TransactionID:100000380284535,
            PNRNo:4115023549,
            TrainNoName :"56213 / TIRUPATI PASSR",
            DateofBooking :"14-Dec-2015",
            Class:"SLEEPERCLASS",
            Quota:"GENERAL",
            DateofJourney :"04-Jan-2016",
            From :"KJM",
            To :"TPTY",
            BoardingAt :"KJM",
            DateOfBoarding:"04-Jan-2016",
            ReservationUpto :"TPTY",
            ScheduledDeparture :"21:00 Hrs",
        },
        {
            TotalItem : 3,
            TotalQty : 7,
            FoodAmount: 735.00,
            serviceCharge10: 73.50,
            VATon80850: 77,
            ServiceTax: 36.50,
            Totalcost:922,
        },
        {
            NameofMedical: "Apollo Pramcy",
            Billno: 35,
            Date: "16.10.2012",
            Name:"Manisha patel",
            RefBY: "Dr.Rawther Nithin",
        }
    ]

    console.log(informe)
    //-------------------------------------------------------------------------------------------------------