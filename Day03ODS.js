
function library(BookID,Bookname,BookAuthor)
{
//return 0
console.log(BookID,Bookname,BookAuthor)
}
var ret = library(12345634,"C Programming","Dennis Ritche")

function Library(IssueDate,DueDate,IDNo)
{
	this.IssueDate= IssueDate
	this.DueDate = DueDate
    this.IDNo =IDNo
    console.log(this.IssueDate,this.DueDate,this.IDNo )
	return 0
}
var LIB = new Library("14/01/2012","13/02/2012","2008Ec027")
console.log(LIB.IssueDate)

class supercoder{
static Name= "Saravanan"
constructor(fine)
{
	this.fine = fine
	console.log(this.fine)
}
goal(retday)
{
	this.lineofcode = retday
	console.log(this.lineofcode)
}
static nname()
{
	console.log(supercoder.Name)
}
}

let Lcode = new supercoder(12)
Lcode.goal("12-10")
supercoder.nname()

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

let venkatesh = {
	company:"jv tech",
    exp:14,
    location:"bangalore",
    verifytrainer()
    {
    	console.log(this.company)
    }
    }
    venkatesh.verifytrainer()
    
let p1 = {
	tablet:"dolo 650 mg",
    persheet:15,
    }
    console.log(p1.tablet)
    p1.method = function()
    {
    	console.log(this.tablet,this.method)
    }
    p1.method()
    
let p3 = {
	tablet:"micromax 650 mg",
    persheet:10,
    }
    p3.method=function()
    {
    	console.log(this.tablet,this.method)
    }
    p3.method()
//--------------------------------------------------------------------------------------------------
let basicinfo = {
	Name : "JVT",
	Age : 5,
	Gender : "Male",
	EmailAddress : "info@jvtechnologies.co.in",
	PhotoIDCard : "Voter Id or Ration card",
	IDCardNo : "ASUPB590F",
	name : "Mr. venkatesh",
	age : 25,
	gender : "Male",
	emailAddress : "venkatesh.db@gmail.com",
	Address : "BEML Main Road",
	City : "Bangalore",
	State : "Karnataka",
	ZipPincode : 560075,
	Country : "India",
	MobileNo : 09900367097,
	PhotoIDNo : "G3839975",
    }
    //console.log(basicinfo.Name,basicinfo.Age,basicinfo.Gender,basicinfo.EmailAddress,basicinfo.PhotoIDCard,basicinfo.IDCardNo,basicinfo.name,basicinfo.age,basicinfo,basicinfo.gender,basicinfo.emailAddress,basicinfo.Address,basicinfo.City,basicinfo.State,basicinfo.ZipPincode,
    //basicinfo.Country,basicinfo.MobileNo,basicinfo.PhotoIDNo)

	basicinfo.method = function()
    {
   	 console.log(this.Name,this.Age,this.Gender,this.EmailAddress,this.PhotoIDCard,this.IDCardNo,this.name,this.age,this.gender,this.emailAddress,this.Address,this.City,this.State,this.ZipPincode,
    this.Country,this.MobileNo,this.PhotoIDNo)
    }
    basicinfo.method()
 //---------------------------------------------------------------------------------------------------
    //object data structure
    let creditd={
    	CreditCardNumber :6146496758938152,
		Outstanding :"571.36",
		Minimum :"272.36",
                }
                console.log(creditd.CreditCardNumber,creditd.Outstanding,creditd.Minimum )
     //Array data structure
     let arr = [112233,12345678,"12.34"]
     console.log(arr[0])   
     let arr1 = new Map()
     arr1.set("c",1)
     console.log(arr1.get("c"))
//----------------------------------------------------------------------------------------------------
      let Apprnc={
      	Weight:55,
        Hight:5.8,
        Eyecolour:"brown",
        Gender:"male",
        Homeaddress:"#6/96,rajampet,kadapa",
        Homephone:975545445 ,
        Mobile:8553577745 ,
        State:"andhrapradesh" ,
        Country:"india",
        Apperance()
        {
            console.log(this.Weight,this.Hight,this.Eyecolour,this.Gender,this.Homeaddress,this.Homephone,this.Mobile,this.State,this.Country)
        }
        }
        Apprnc.Apperance()
        
  //-------------------------------------------------------------------------------------------------------------------------
  let vehicleinfo = {
  	    Vehicletype:"light motor vehicle",
        carColour:"red",
        Enginenumber:"kp98gtyihh457797",
        Chassisnumber:"tc5678898335r45",
        Company:"BMW",
        V_info()
        {
            console.log(this.Vehicletype,this.carColour,this.Enginenumber,this.Chassisnumber,this.Company)
        }
        }
        vehicleinfo.V_info()
  //------------------------------------------------------------------------------------------------------------------------------
  let system = {
		Rating : "4.5",
		Processor : "Intel® Core™ i5-2450 CPU",
		InstalledMemoryRAM: "4.00GB",
		SystemType : "64-bit Operating System",
		PenandTouch : "No Pen or Touch Input is available for this Display",
		ComputerName : "BALU-PC",
		ComputerDescription : "WORKGROUP",
		WindowsEdition : "Windows 7 Ultimate",
		WindowsProductID: "00426-OEM-8992662-00497",
        }
        console.log(system.Rating,system.Processor,system.InstalledMemoryRAM,system.SystemType,system.PenandTouch,system.ComputerName,system.ComputerDescription,system.WindowsEdition,system.WindowsProductID)
        system.method = function()
        {
        	console.log(system.Rating,system.Processor,system.InstalledMemoryRAM,system.SystemType,system.PenandTouch,system.ComputerName,system.ComputerDescription,system.WindowsEdition,system.WindowsProductID)
        }
        system.method()
  //------------------------------------------------------------------------------------------------------------------------------------------------------------------
  //object data structure
  	let theatret = {
        	    Theatrename: "PSS multiplex",
            	Screen : "screen 3",
            	moviename : "JVT [ C,CPP] movie",
            	certification : "U",
            	class : "first",
            	priceperticket : "Rs.1050.00",
            	Numberoftickets : 5,
            	seatnumbers :"c1,c2,c3,c4,c5",
            	Totalamount :"Rs.750.00",
            }
            console.log(theatret.Theatrename,theatret.Screen)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Array data structure
    let arrd = ["21GB","30mbps","32mbps"]
    console.log(arrd[0],arrd[2])
    let arr1d = new Map()
   	arr1d.set("a",5)
       console.log(arr1d.get("a"))
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
	
/*function netC()
{
	TotalMBdownloaded = "21.05 GB"
	MobiledownloadSpeed = "30.05 mbps"
	MobileuploadSpeed = "32.06 mbps"
	return TotalMBdownload
}*/
//var n_net = new cnetc()
function usagenet(TotalMBdownloaded,MobiledownloadSpeed)
{
	MobileuploadSpeed = "32.06 mbps"
    		if(TotalMBdownloaded >= 100)
   		 {
    			return "usage is completed"
   		 }
   		else
   		 {
            console.log(TotalMBdownloaded,MobiledownloadSpeed)
   		 }
}
var result = usagenet(111,"34.06mbps")
console.log(result)
  

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var quote = "hard work beats talent"
var emotion = "caring u"
var happy = "first job"
var thankful = "intimetec"
var parent = "mother father"

mother = ["hard work beats talent","caring u","first job"]
console.log(mother[0])

class Mom{
constructor()
{
	this.jamesbond = "007"
}
display()
{
	console.log(this.jamesbond)
}
set(superhero)
{
	this.hero = superhero
}
}
let amaa = new Mom()
console.log(amaa)
amaa.display()
amaa.set("Daddy")

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

class Dlic{
    Lastname="kumar"
    Firstname= "Pavan"
    Middlename="Bijjavaram"
    Driverlicensenumber="ka50201500006939"
    Driverslicensestate="karnataka "
    Driverslicensecountry="india"
    Civiliantype= "around india"
    Employeetype="software engineer"
    Dateofbirth="12-07-1992"
    Cityofbirth="rajampet"
constructor()
{
	console.log(this.Lastname,this.Firstname,this.Middlename,this.Driverlicensenumber,this.Driverslicensestate,this.Driverslicensecountry,this.Civiliantype,this.Employeetype,this.Dateofbirth,this.Cityofbirth)
}
}
var DL1= new Dlic()

//----------------------------------------------------------------------------------------------------------------------------------------------------------------
class google{
	FirstName = "venkatesh"
	LastName = "d b"
	ChooseUsername = "jvt"
	CreataPassword = "balu"
	ConfirmYourPassword = "balu"
	Birthday ="2-6-1986"
	Gender = "male"
	Mobile = 9900367097
	emailaddress = "venkatesh.db@gmail.com"
constructor()
{
	console.log(this.FirstName,this.LastName,this.ChooseUsername,this.CreataPassword,this.ConfirmYourPassword,this.Birthday,this.Gender,this.Gender,this.Mobile,this.emailaddress)
}
}
var Googleadd = new google()

//---------------------------------------------------------------------------------------------------------------------------------------------------------------

let pdetails = {
	PatientName: "Sathish",
	PatientID: 10567890890,
	Patientphone: 044222738,
	Billno: 56725,
	Age:34,
	DateofBirth:"15/05/1991",
	Gender :"Male",
	Fasting:"Yes",
	PatientAddress: "7f,kaveri road, velur",
	RoomNo: 105,
	DateoftimeCollectedblood :"08/09/15 08:15",
	Enterdate:"08/09/15",
	DateandTimeRespond: "08/09/15 and 09:16",
    }
    console.log(pdetails.PatientName,pdetails.PatientID,pdetails.Patientphone,pdetails.Billno,pdetails.Age,pdetails.DateofBirth,pdetails.Gender,pdetails.Fasting,pdetails.PatientAddress,pdetails.RoomNo,pdetails.DateoftimeCollectedblood,pdetails.Enterdate,pdetails.DateandTimeRespond)
pdetails.method = function()
{
	console.log(pdetails.PatientName,pdetails.PatientID,pdetails.Patientphone,pdetails.Billno,pdetails.Age,pdetails.DateofBirth,pdetails.Gender,pdetails.Fasting,pdetails.PatientAddress,pdetails.RoomNo,pdetails.DateoftimeCollectedblood,pdetails.Enterdate,pdetails.DateandTimeRespond)
}

pdetails.method()
//--------------------------------------------------------------------------------------------------------------------------------------------------------------
let Banking = {

	BankName : "SBI Bank",
	Date: "29/05/14",
	Time: "19:48",
	ATMNo : "SJNBL48",
	CARDNo: "xxxx xxxxx xxxx 0516",
	BRANCHNAME: "Bangalore Main Branch",
	TxnNo :2907,
	Responsecode : 072,
	WithDrawl : "500.00",
	FromAC : "xxxxxxxxxx05 xx01",
	ModRS : "0.00",
	AvailableBalRs: "1000.00",
	Website : "www.statebankof india.com",
    b_details()
    {
    	console.log(this.BankName,this.Date,this.Time,this.ATMNo,this.CARDNo,this.BRANCHNAME,this.TxnNo,this.Responsecode ,this.WithDrawl ,this.FromAC,this.ModRS,this.AvailableBalRs,this.Website)
    }
    }
    Banking.b_details()

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

//object data structure
let Appearance={
    Weight:55 ,
    Hight:5.8,
    Eyecolour:"brown",
    Gender:"male",
    Homeaddress:"#6/96,rajampet,kadapa",
    Homephone:975545445,
    Mobile:8553577745,
    State:"andhrapradesh",
    County:"india",
    }
    console.log(Appearance.Weight,Appearance.Hight,Appearance.Eyecolour,Appearance.Gender,Appearance.Homeaddress,Appearance.Homephone)
//------------------------------------------------------------------------------------------------------------------------------------------------------------------

let Vehicle = {
    Vehicletype:"light motor vehicle",
    Colour:"red" ,
    Enginenumber:"kp98gtyihh457797 ",
    Chassisnumber:"tc5678898335r45 ",
    Company:"BMW",
    }
    console.log(Vehicle.Vehicletype,Vehicle.Colour,Vehicle.Enginenumber,Vehicle.Chassisnumber)
//------------------------------------------------------------------------------------------------------------------------------------------------------------------

let System = {
	
 	Rating : "4.5",
	Processor : "Intel® Core™ i5-2450 CPU",
	InstalledMemory: "4.00GB",
	SystemType : "64-bit Operating System",
	PenandTouch : "No Pen or Touch Input is available for this Display",
	ComputerName : "BALU-PC",
	ComputerDescription : "WORKGROUP",
	WindowsEdition : "Windows 7 Ultimate",
	WindowsProductID: "00426-OEM-8992662-00497"
    }
    console.log(System.Rating,System.Processor,System.InstalledMemory,System.SystemType,System.PenandTouch,System.ComputerName,System.ComputerDescription ,System.WindowsEdition)
//------------------------------------------------------------------------------------------------------------------------------------------------------------------

let Theatre = {
	Theatrename: "PSS multiplex ",
	Screen : "screen 3", 
	moviename : "JVT [ C,CPP]",
	moviecertification : "U ",
	class : "first ",
	priceperticket : "Rs.1050.00 ",
	Numberoftickets : 5 ,
	seatnumbers :"c1,c2,c3,c4,c5",
	Totalamount :"Rs.750.00",
    }
    console.log(Theatre.Theatrename,Theatre.Screen,Theatre.moviename,Theatre.moviecertification,Theatre.class,Theatre.priceperticket,Theatre.Numberoftickets,Theatre.seatnumbers,Theatre.Totalamount)
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

let OS = ["iOS 9, upgradable to iOS 9.2","Apple A9","Dual-core 1.84 GHz Twister"]
console.log(OS[1])

let Demat = [" Naresh7$",12256444009]
console.log(Demat[0])

let ElectricityBill = ["1-121-008-54","20/06/2012",1, 12100854]
console.log(ElectricityBill[2])

let Busdepo = ["Kanchipuram/01","00086655","06/11/2014 14:58:47","Chennai","pondichery",2,"00.33"]
console.log(Busdepo[4])

let Licpolicy = [309,"07/11/2013-12:51","6713.00","saravanan"]
console.log(Licpolicy[3])

let Medical = ["Apollo Pramcy",35,"16.10.2012","Manisha patel","Dr.Rawther Nithin"]
console.log(Medical[2])

let Food = ["KFC","NON-AC",2,6,"Vijay",2]
console.log(Food[5])

let Item = [3,7,"735.00","73.50",77,"36.50",922]
console.log(Item[4])

let ticketdetails = [100000380284535,4115023549,"TIRUPATI PASSR","14-Dec-2015","SLEEPERCLASS","GENERAL","04-Jan-2016","KJM","TPTY","04-Jan-2016","TPTY","21:00 Hrs"]
console.log(ticketdetails[7])

let Faredetails = ["323 KM"," Rs. 420.00","Rs. 22.90","Rs. 442.90"]
console.log(Faredetails[2])

let Corporateinfo = new Map()
Corporateinfo.set("Companyname","JVT")
Corporateinfo.set("Designation","Programmer")
Corporateinfo.set("Salary","2.3 or 230000")
Corporateinfo.set("Location","Bangalore")

console.log(Corporateinfo.get("Companyname"))
console.log(Corporateinfo.get("Designation"))
console.log(Corporateinfo.get("Salary"))
console.log(Corporateinfo.get("Location"))

let account = new Map()
account.set("AccountNo", 1135497)
account.set("BroadbandUserID" , 11128550)
account.set("IPAddress"," 10.245.97.123")
console.log(account.get("AccountNo"))
console.log(account.get("BroadbandUserID"))
console.log(account.get("IPAddress"))

let datausage = new Map()
datausage.set("TotalMBdownloaded",  "21.26 GB")
datausage.set("MobiledownloadSpeed",  "30.05 mbps")
datausage.set("MobileuploadSpeed" , "32.06 mbps")
console.log(datausage.get("TotalMBdownloaded")) 
console.log(datausage.get("MobiledownloadSpeed"))
console.log(datausage.get("MobileuploadSpeed")) 

let systemproperties = new Map()
systemproperties.set("Rating" , "4.5")
systemproperties.set("Processor" , "Intel® Core™ i5-2450 CPU")
systemproperties.set("InstalledMemory(RAM)" , "4.00GB")
systemproperties.set("SystemType" , "64-bit Operating System")
systemproperties.set("PenandTouch" , "No Pen or Touch Input is available for this Display")
systemproperties.set("ComputerName" , "BALU-PC")
systemproperties.set("ComputerDescription" , "WORKGROUP")
systemproperties.set("WindowsEdition" , "Windows 7 Ultimate")
systemproperties.set("WindowsProductID" , "00426-OEM-8992662-00497")

console.log(systemproperties.get("Rating"))
console.log(systemproperties.get("Processor"))
console.log(systemproperties.get("InstalledMemory(RAM)"))
console.log(systemproperties.get("SystemType"))
console.log(systemproperties.get("PenandTouch"))
console.log(systemproperties.get("ComputerName"))
console.log(systemproperties.get("ComputerDescription"))
console.log(systemproperties.get("WindowsEdition"))
console.log(systemproperties.get("WindowsProductID"))

//-------------------------------------------------------------------------------------------------
let theatre = new Map()
theatre.set("Theatrename" , "PSS multiplex ")
theatre.set("Screen" , "screen 3")
theatre.set("moviename" , "JVT [ C,CPP]")
theatre.set("moviecertification",  "U ")
theatre.set("class" , "first")
theatre.set("priceperticket" , "Rs.1050.00  ")
theatre.set("Numberoftickets" , 5  )
theatre.set("seatnumbers" , "c1,c2,c3,c4,c5 ")
theatre.set("Totalamount" , "Rs.750.00")

console.log(theatre.get("Theatrename"))
console.log(theatre.get("Screen"))
console.log(theatre.get("moviename"))
console.log(theatre.get("moviecertification"))
console.log(theatre.get("class"))
console.log(theatre.get("priceperticket"))
console.log(theatre.get("Numberoftickets"))
console.log(theatre.get("seatnumbers"))
console.log(theatre.get("Totalamount"))

//-----------------------------------------------------------------------------------------------
let googleaccount = new Map()
googleaccount.set("FirstName" , "venkatesh")
googleaccount.set("LastName" , "d b")
googleaccount.set("ChooseUsername" , "jvt")
googleaccount.set("CreataPassword" , "balu")
googleaccount.set("ConfirmYourPassword" , "balu")
googleaccount.set("Birthday" , "2-6-1986")
googleaccount.set("Gender" , "male")
googleaccount.set("Mobile" , 9900367097)
googleaccount.set("Yourcurrentemailaddress" , "venkatesh.db@gmail.com")

console.log(googleaccount.get("FirstName"))
console.log(googleaccount.get("LastName"))
console.log(googleaccount.get("ChooseUsername"))
console.log(googleaccount.get("CreataPassword"))
console.log(googleaccount.get("ConfirmYourPassword"))
console.log(googleaccount.get("Birthday"))
console.log(googleaccount.get("Gender"))
console.log(googleaccount.get("Mobile"))
console.log(googleaccount.get("Yourcurrentemailaddress"))

//------------------------------------------------------------------------------
