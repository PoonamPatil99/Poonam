
class Intimetec{
login = "8.30am"
logout = "5.30pm"
constructor()
{
console.log("constructor");
console.log(this.login,this.logout);
}
display()
{
    console.log(this.login,this.logout)
}
set init(log)
{
this.login = log
}
set initlogout(log)
{
this.logout = log
}
get getter()
{
return this.login
}
}

class javascript extends Intimetec
{
static office = "wfh"
constructor (goal = 3000)
{
    console.log("javascript constructor")
super()
this.weekgoal = goal
}
static method()
{
    console.log(javascript.office)
}
}
let manager= new javascript()
console.log(manager.getter)
javascript.method()
//-----------------------------------------------------------------------------
class Electricitybill
{
Billingdate = "20/06/2012"
SubDivision = 1
RRNo = 12100854
constructor()
{
    console.log(this.Billingdate,this.SubDivision,this.RRNo)
}
display()
{
    console.log(this.Billingdate,this.SubDivision,this.RRNo)
}
set electricity(sub)
{
this.SubDivision = sub
}
set subdivision(sub)
{
this.Billingdate = sub
}
get subb()
{
return this.Billingdate
}
}

class electricty extends Electricitybill
{
static work = "Angular"
constructor (SelectAccount = "1-121-008-54")
{
    console.log("js constructor")
super()
this.SelectAccount = SelectAccount
}
static dataa()
{
    console.log( electricty.work)
}
}
let Electrecity= new electricty ()
console.log(Electrecity.subb)
electricty.dataa()


//-----------------------------------------------------------------------------

class Laptopspecification{
model = "LGp430"
os = "Windows 7 home base, Premium or professional"
constructor()
{
    console.log("Data passed")
    console.log(this.model,this.os)
}
display()
{
    console.log(this.model,this.os)
}
set indata(data)
{
this.model = data
}
set outdata(data)
{
this.os =data
}
get outer()
{
return this.model
}
}

class lapspecific extends Laptopspecification
{
static laptop = "dell"
constructor (ram = 8)
{
    console.log("JaVascript")
super()
this.lapdata = ram
}
static method()
{
    console.log(lapspecific.laptop)
}
}
let lapinfo = new  lapspecific ()
console.log(lapinfo.outer)
lapspecific.method()

//----------------------------------------------------------------------------

class Library{
BookID = 12345634
Bookname = "C Programming"

constructor()
{
    console.log("Libraray data is passed")
    console.log(this.BookID,this.Bookname)
}
display()
{
    console.log(this.BookID,this.Bookname)
}
set input(book)
{
this.BookID = book
}
set inputid(book)
{
this.Bookname =book
}
get Book()
{
return this.Bookname
}
}

class speedPost extends Library
{
static taxes = "Rs 4.0"
constructor (PostofficeDetails = "New Thipasundra<423203>")
{
    console.log("Post office information")
super()
this.post = PostofficeDetails 
}
static info()
{
    console.log(speedpost.taxes)
}
}
let speedpost = new speedPost()
console.log(speedpost.Book)
speedPost.info
//--------------------------------------------------------------------------------------------------------------------------------------

function Appearance(Weight,Hight,Eyecolour,Gender)
{
    console.log(Weight,Hight,Eyecolour,Gender)
}

function appearance(callback)
{
callback(55,"5.8","brown","male")
}
appearance(Appearance)

//-------------------------------------------------------------------------------

function Vehicledata(Vehicletype, carColour,Engine) 
{
    console.log(Vehicletype,carColour,Engine)
}
function vehicle(callback)
{
callback("light motor" ,"vehicle,red" ,"kp98gtyihh457797")
}
vehicle(Vehicledata)
//--------------------------------------------------------------------------
class LIC
{
constructor(BranchCode,Date,AddressofBranchoffice)
{
    this.BranchCode= BranchCode
	this.Date= Date
	this.AddressofBranchoffice=AddressofBranchoffice
}
lic(Totalcost,name)
{
    console.log(Totalcost,name)
}
licp(callback)
{
callback("6713.00","saravanan")
}
display()
{
    console.log(this.BranchCode,this.Date,this.AddressofBranchoffice)
}
}
let libpolicy = new LIC( 309,"07/11/2013-12:51","delhi")
libpolicy.display()
libpolicy.licp(libpolicy.lic)

//------------------------------------------------------------------------------------------------------------


var Healthcare = [
	{test : "WBc", result: "4.4" , flag:"low", units:"X10E3/U", Refernce_Interval: "4.0-10.5" , LAB : 01},
    {test : "RBC", result: "4.05" , flag:"low", units:"X10E6/UL" , Refernce_Interval: "4.10 -5.60", LAB :01},
	{test : "Hemoglobin_1", result: "14.83", flag:"low" , units:"g/dl" , Refernce_Interval:"12.5 -17.0", LAB :01},
	{test :"Hematocrit", result: "41.8" , flag: "low", units:"%", Refernce_Interval:"36.0-50.0" , LAB :01},
	{test : "MCV", result: 86 , flag: "low", units: "Fl", Refernce_Interval:"80-98" , LAB :01},
	{test : "MCH", result:"30.9" , flag: "low", units: "Pg" , Refernce_Interval:"27.0-34.0", LAB :01},
]
Healthcare.map(getdetails)
function getdetails(data)
{
if(data.test == "MCH")
{
    console.log(data.flag)
}
if(data.result == 86)
{
    console.log(data.test)
}
if(data.units == "Pg")
{
    console.log(data.flag)
}
console.log(data.test)
}

//-------------------------------------------------------------------------------------------------
 var demat = [
 {Date:"06/01/2015", Particular:"Nsdl Dp Bill-Dec-14", voucher:"K04424462", debit:"45.00", credit:"0.00", balance:"584.29 Cr"},
 {Date:"10/01/2015", Particular:"TRANSFERRED BETWEENNSE AND BSE", voucher:"J02697409", debit:"45.00", credit:"0.00", balance:"539.29 Cr"},
 {Date:"21/01/2015", Particular:"BILL FOR BC1415199", voucher:"B00000695", debit:"280.84", credit:"0.00", balance:"865.13 Cr"},
 {Date:"04/02/2015", Particular:"Nsdl Dp Bill-Jan-15", voucher:"K04573521", debit:"73.00", credit:"0.00", balance:"792.13 Cr"},
 {Date:"18/02/2015", Particular:"BILL FOR NN2015033", voucher:"B00012559", debit:"0.00", credit:"3527.42", balance:"319.55 Cr"},
]
demat.map(getbalance)
function getbalance(dataa)
{
/*if(dataa.Date == "04/02/2015")
{
    console.log(dataa.Particular)
}
if(dataa.credit == "3527.42")
{
    console.log(dataa.date)
}*/
console.log(dataa.Date)
}


//--------------------------------------------------------------------------------------------------------


