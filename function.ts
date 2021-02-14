function Cdetail()
{
	var Theatrename='PSS';
	var multiplexScreen= 'screen 3';
    var moviename ='JVT [ C,CPP] ';
	var moviecertification ='U';
	var cclass = 'first';
	var priceperticket = 1050;
	var Numberoftickets = 5;
	var seatnumbers ='c3,c4,c5';
	var Totalamount ='Rs.750.00';
    
    if(moviecertification == 'U')
    {
        console.log("U certified film");
    }
    else
    {
        console.log("A certified film");
    }
     if(priceperticket <= 1500)
    {
        console.log("Take a Ticket");
    }
    else
    {
        console.log("dont go");
    }
    
    if(seatnumbers == 'c3,c4,c5')
    {
        console.log("You aare there in alotted seat");
    }
    else
    {
        console.log("not in alotted seat");
    }
    
    if(Numberoftickets == 5)
    {
       return "right numbers of tickets"
    }
    else
    {
        return "wrong number of tickets"
    }
    
    
}
var res = Cdetail();
console.log(res)
//-------------------------------------------------------------------------------------------------------
function googleaccountt(){
    var FirstName = 'venkatesh';
    var LastName = 'hk';
    var ChooseUsername = 'jvt';
    var CreataPassword = 'balu';
    var ConfirmYourPassword = 'balu';
    var Birthday = '2-6-1986';
    var Gender = 'male';
    var Mobile = 9900367097;
    var Yourcurrentemailaddress = 'venkatesh.db@gmail.com';
    if (FirstName == 'venkatesh')
    {
            return FirstName;
    }
    else
    {
            return LastName;
    }
   
 }
var resi= googleaccountt()
console.log(resi)

//--------------------------------------------------------------------------------------------------

  function bloodd(){
	var Patient_Name = "Sathish";
	var Patient_ID = 10567890890;
	var Patient_phone = 44222738;
	var Billno = 56725;
	var Age =34;
	var Date_of_Birth ="15/05/1991";
	var Gender = "Male";
	var Fasting= "Yes";
	var Patient_Address = "7f,kaveri road, velur.";
	var Room_No = 105;
	var Date_of_time_Collected_blood = "08/09/15 and 08:15";
	var Enter_date = "08/09/15";
	var Date_and_Time_Respond = "08/09/15 and 09:16";
    if(Patient_Name == "Sathish")
    {
    	return "patient name sathish";
    }
    else
    {
    	return "other patients data";
    }
}
        
var dat=  bloodd()
console.log(dat)
//----------------------------------------------------------------------------------------------------------
let detailss = {
    name : "Poonam",
    age  : "24",
    id   : "1289",
    
    details1 : {
        companyname : "Intimetec",
        location    : "Bangalore",
        designation : "Trainee",
        
    }
}
console.log(detailss.details1.companyname);
if(detailss.name == 'Poonam')
{
    console.log("valid data");
}
else
{
    console.log("Invalid info");
}
//------------------------------------------------------------------------------------------------------------
let Appeara = {
    Weight:55, 
    Hight:5.8, 
    Eyecolour:"brown",
    Gender:"male",
    Homeaddress:"#6/96,rajampet,kadapa",
    phone:675545445 ,
    Mobile:8553577745 ,
    State:"andhra pradesh",
    County:"india",
    
}
if (Appeara.Hight != 5.8)
    {
        console.log('yes');
        
    }
else{
    console.log('No')
    } 
if (Appeara.phone == 675545445)
{
    console.log('Phone Number is Valid');
}
else
{
    console.log('invalid Number');
}
//--------------------------------------------------------------------------------------------------------------
let Bankingdat = { 
BankName : "SBI Bank",
Date     : "29/05/14",
Time     : "19:48",
ATMNo    : "SJNBL48",
CARDNo   : "xxxx xxxxx xxxx 0516",
BRNCHNAME: "Bangalore Main Branch",
TxnNo    : 2907,
Responsecode : 72,
WithDrawl: "500.00",
FromAC   : "xxxxxxxxxx05 xx01",
ModRS    : "0.00",
AvlBal   : "1000.00",
Website  : "www.statebankof india.com",
}
if(Bankingdat.CARDNo.length == 20)
{
    console.log("valid data");

}
else
{
    console.log("Invalid data");

}
if(Bankingdat.BankName == "SBI Bank" )
{
    console.log("SBI Branch");
}
else{
    console.log("other banks");
}
//------------------------------------------------------------------------------------------------------------
let specification = {
    model       :"exide-digital600 ",
    ipvoltage   :"230v ac", 
    frequency   :"50hz",
    opvoltage   :"230v ",
    rechargetime:"5 to 6 hours ",
    weight      :"6.1 kg",
}
console.log(specification.model,specification.weight,specification.frequency);

if(specification.frequency == "50hz")
{
    console.log("computer specifications with valid freq");
}
else
{
    console.log("computer specifications down");
}

//---------------------------------------------------------------------------------------------------------

class Appearan{
    weight:string;
    height:number;
    Eyecolor:string;
    gender:string;
    address:string;
    phone:number;
    mobile:number;
    state:string;
    country:string;
 constructor(weight:string, height:number, Eyecolor:string, gender:string,address:string, phone:number,mobile:number,state:string,country:string) 
{
 		this.weight =  weight;
        this.height = height;
        this.Eyecolor= Eyecolor;
        this.gender =  gender;
        this.address= address;
        this.phone = phone;
        this.mobile = mobile;
        this.state = state;
        this.country = country;
        
 }
datav()
{
    if( this.height == 5.8 )
        {
 			console.log("Valid");     
        }
        else
        {
        	console.log( "InValid");  
        }
}
appinfo()
{
    if(this.weight == "55")
    {
        console.log("Average weight");
    }
    else
    {
        console.log("Excide weight");
    }
}
Geninfo()
{
    if(this.gender == "M")
    {
        console.log("Male");
    }
    else
    {
        console.log("female");
    }
}
Mobile()
{
    if(this.mobile == 8889994440)
    {
        console.log("valid mobile number");
    }
    else
    {
        console.log("Invalid mobile number");

    }
}
State()
{
    if(this.state == "Andrapradesh")
    {
        console.log("state matches in the given data");

    }
    else
    {
        console.log("other states");
    }
}
Phone()
{
    if(this.phone ==  975545445)
    {
        console.log("valid phone number");
    }
    else
    {
        console.log("Invalid phone number");

    }
}
display():void
{
    	console.log(this.weight,this.height,this.Eyecolor, this.gender,this.address,this.phone,this.mobile,this.state, this.country);
           
}
}
let informat =  new Appearan("56kg", 5.8,"brown", "M","#6/96,rajapet,kadapa", 975545445, 8889994440, "Andrapradesh", "India")
informat.display()
informat.datav()
informat.appinfo()
informat.Geninfo()
informat.Mobile()
informat.State()
informat.Phone()

//-------------------------------------------------------------------------------------------------------------


function cdetail()
{
	let Theatrename:string  = "PSS";
	let multiplexScreen:string = "screen 3 ";
	let moviename:string = "JVT [ C,CPP] ";
	let moviecertification:string = "U";
	let mclass:string = "first";
	let priceperticket:number = 1050;
	let Numberoftickets:number= 5;
	let seatnumbers:string ="c3,c4,c5";
	let Totalamount:string ="Rs.750.00";
    
     if(moviecertification == 'U')
    {
        console.log("U certified film");
    }
    else
    {
        console.log("A certified film");
    }
     if(priceperticket <= 1500)
    {
        console.log("Take a Ticket");
    }
    else
    {
        console.log("dont go");
    }
    
    if(seatnumbers == 'c3,c4,c5')
    {
        console.log("You aare there in alotted seat");
    }
    else
    {
        console.log("not in alotted seat");
    }
    
    if(Numberoftickets == 5)
    {
        return "right numbers of tickets"
    }
    else
    {
        console.log("number are tickets differed");
    }
    
    
}
var ress = cdetail()
console.log(ress);
//------------------------------------------------------------------------------------------------------------------------------------------------------------------  
function googleac(){
   let FirstName:string = 'venkatesh';
   let LastName:string = 'hk';
   let ChooseUsername:string = 'jvt';
   let CreataPassword:string = 'balu';
   let ConfirmYourPassword:string = 'balu';
   let Birthday:string = '2-6-1986';
   let Gender:string = 'male';
   let Mobile:number = 9900367097;
   let Yourcurrentemailaddress:string = 'venkatesh.db@gmail.com';
   if (FirstName == 'venkatesh')
   {
   		return FirstName;
   }
   else
   {
   		return LastName;
   }
  
}
var Res = googleac()
console.log(Res);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function bloodtest()
{
	let PatientName:string = "Sathish";
	let PatientID:number = 10567890890;
	let Patientphone:number = 44222738;
	let Billno:number = 56725;
	let Age:number =34;
	let DateofBirth:string ="15/05/1991";
	let Gender:string = "Male";
	let Fasting:string= "Yes";
	let PatientAddress:string = "7f,kaveri road, velur.";
	let RoomNo:number = 105;
	let DateoftimeCollectedblood:string = "08/09/15 and 08:15";
	let Enterdate:string = "08/09/15";
	let DateandTimeRespond:string = "08/09/15 and 09:16";
    if(PatientName == "Sathish")
    {
    	return "patient name sathish";
    }
    else
    {
    	return "other patients data";
    }
}
        
var dataa =  bloodtest()
console.log(dataa)
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Edit your script here
class Appea
{
    weight:number;
    height:number;
    Eyecolor:string;
    gender:string;
    address:string;
    phone: number;
    mobile:number;
    state:string;
    country:string;
constructor(weight:number, height:number, Eyecolor:string, gender:string,address:string, phone:number, mobile:number, state:string, country:string) 
{
 	this.weight =  weight;
    this.height = height;
    this.Eyecolor= Eyecolor;
    this.gender =  gender;
    this.address = address;
    this.phone =  phone;
    this.mobile =mobile;
    this.state = state;
    this.country =country;
        
 }
contactdetails() 
{
        if(this.mobile == 8889994440)
        {
            console.log("valid Number");
        }
        else
        {
        	console.log("Invalid Number");
	
        }
	    if( this.height == 5.8)
        {
            console.log("Valid");     
        }
        else
        {
            console.log( "InValid");  
        }
    }
display() 
{
    console.log(this.weight,this.height,this.Eyecolor, this.gender);
    console.log(this.address,this.phone,this.mobile,this.state,this.country);
}    
}
var infor =  new Appea(5.5, 5.8,"brown", "male","#6/96,rajapet,kadapa", 975545445, 8889994440, "Andrapradesh", "India");
infor.contactdetails(); 
infor.display();

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//<script>
// Edit your script here
class librarii
{
    BookID:number;
    Bookname:string;
    BookAuthor:string;
    IssueDate:string;
    DueDate:string;
    IDNo:string;
    Name:string;
    Returnon:string;
    Fine:number;
    PostofficeDetails: string;
    trackingNumber: string;
    CounterNo: number;
    opcode: number;
    Fromaddress: string;
    ToAddress: string;
    wgt: string;
    Amt: string;
    datetime: string;
    Taxes: string;


constructor(BookID:number,Bookname:string,BookAuthor:string,IssueDate:string,DueDate:string,IDNo:string,Name:string,Returnon:string,Fine:number,PostofficeDetails:string,trackingNumber:string,CounterNo:number,opcode:number,Fromaddress:string,ToAddress:string,wgt:string,Amt:string,datetime:string,Taxes:string)
{
	this.BookID = BookID; 
	this.Bookname = Bookname;
	this.BookAuthor = BookAuthor;
	this.IssueDate = IssueDate;
	this.DueDate = DueDate;
	this.IDNo = IDNo; 
	this.Name = Name;
	this.Returnon =Returnon;
	this.Fine = Fine; 
    this.PostofficeDetails = PostofficeDetails; 
	this.trackingNumber = trackingNumber;
	this.CounterNo = CounterNo; 
	this.opcode = opcode; 
	this.Fromaddress =Fromaddress; 
	this.ToAddress = ToAddress;
	this.wgt = wgt;
	this.Amt = Amt;
	this.datetime = datetime;
	this.Taxes = Taxes;
}
postoffice()
{
    if(this.Bookname  == "")
    {
        console.log("Enter the book name");
    }
    if(this.Bookname == "C Programming" &&  this.BookAuthor == "Dennis Ritche")
    {
        console.log("valid book");
    }
	
}
display()
{
	console.log(this.BookID,this.Bookname,this.BookAuthor,this.IssueDate,this.DueDate,this.IDNo,this.Name,this.Returnon,this.Fine,this.PostofficeDetails,this.trackingNumber ,this.CounterNo,this.opcode,this.Fromaddress,this.ToAddress ,this.wgt,this.Amt,this.datetime,this.Taxes)
}
}
let Librari = new librarii(12345634,"C Programming","Dennis Ritche","14/01/2012","13/02/2012", "2008Ec027", "Saravanan","25/02/2012",12,"New Thipasundra<423203>","EM423395510IN",1,12,"xxxxxx","xxxxxx","20grms","39.00", "08/04/2013 16:01", "Rs.4.00")
Librari.display()
Librari.postoffice()
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------
