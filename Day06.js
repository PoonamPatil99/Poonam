
class verify
{
constructor(OS,Chipset,CPU)
{
this.OS = OS 
this.Chipset = Chipset
this.CPU = CPU
}
display()
{
console.log(this.OS ,this.Chipset,this.CPU)
}
set(data)
{
this.data = data
}
}
let Data = new verify("iOS 9, upgradable to iOS 9.2","Apple A9","Dual-core 1.84 GHz Twister")
Data.display()
Data.set("Intimetec")

//-----------------------------------------------------------------------------

function TVdetails(Model,LEDlighting,Sizes,Types,WirelessHDMI,USB,Builtinvideoservice,price)
{
this.Model = Model 
this.LEDlighting = LEDlighting
this.Sizes =Sizes
this.Types =  Types
this.WirelessHDMI = WirelessHDMI
this.USB = USB
this.Builtinvideoservice = Builtinvideoservice 
this.price = price
console.log(this.Model ,this.LEDlighting,this.Sizes,this.Types,this.WirelessHDMI,this.USB,this.Builtinvideoservice,this.price)
if(Sizes >= 55)
{
    console.log("Big flat TV")
}
else
{
    console.log("Small sized TV")
}
}
var ret = TVdetails("LG55LHX","Backlight w/Local Dimming",55,"scanning Backlight (240 HZ “effect”)","yes","USB 2.0 (pictures, music,videos)","youtube", 55000)
document.writeln(ret)

//----------------------------------------------------------------------------------------------------
<script>
// Edit your script here
class Employee
{
constructor(name)
{
this.Name = name
}
set employeename(name)
{
this.Name = name
}
get employeename()
{
    console.log(this.Name)
}
}
let poo = new Employee("poonam")
poo.employeename

//----------------------------------------------------------------------------
class Library
{
constructor(BookID)
{
this.BookID= BookID
}
set librarydata(BookID)
{
this.BookID= BookID
}
get librarydata()
{
    console.log(this.BookID)
}
}
let library = new Library(12345634)
library.librarydata
//----------------------------------------------------------------------------
class librarydata
{
constructor(Bookname)
{
this.Bookname= Bookname
}
set Librarydat(Bookname)
{
this.Bookname= Bookname
}
get Librarydat()
{
    console.log(this.Bookname)
}
}
let librarie = new librarydata("C Dennis ritchie")
librarie.Librarydat
//-----------------------------------------------------------------------------

class corporate
{
static companyname = "Intimetec"
constructor(Companyname,Designation,Salary,Location)
{
this.Companyname = Companyname
this.Designation = Designation
this.Salary  = Salary
this.Location = Location
}
Ticketdetails(TicketType,Date,Day,Time ,PerSlotTickets,BookingNo,NameofthePilgrim,OrderNo,Email,Amountinfigures,ProofofIDAadhaarCard,BookedDateTime,NoofPersons,NameoftheSevaDarshan,ReportingTime,PerformanceDateTime,PrivilegestotheSeva,BookedTime,AccommodationType,Available,Rate,)
{
this.TicketType = TicketType
this.Date = Date
this.Day = Day
this.Time = Time
this.PerSlotTickets = PerSlotTickets
this.BookingNo = BookingNo 
this.NameofthePilgrim= NameofthePilgrim
this.OrderNo = OrderNo
this.Email = Email
this.Amountinfigures = Amountinfigures
this.ProofofIDAadhaarCard = ProofofIDAadhaarCard
this.BookedDateTime= BookedDateTime
this.NoofPersons= NoofPersons
this.NameoftheSevaDarshan = NameoftheSevaDarshan
this.ReportingTime = ReportingTime 
this.PerformanceDateTime = PerformanceDateTime
this.PrivilegestotheSeva = PrivilegestotheSeva
this.BookedTime= BookedTime
this.AccommodationType =AccommodationType
this.Available = Available
this.Rate = Rate
}
set(noofticketsdata)
{
this.tickets = noofticketsdata
console.log(this.tickets)
}
static cname()
{
    console.log(corporate.companyname)
}

display()
{
    console.log(this.Companyname,this.Designation,this.Salary ,this.Location)
    console.log(this.TicketType,this.Date,this.Day,this.Time ,this.PerSlotTickets,this.BookingNo,this.NameofthePilgrim,this.OrderNo,this.Email,this.Amountinfigures,this.ProofofIDAadhaarCard,this.BookedDateTime,this.NoofPersons,this.NameoftheSevaDarshan,this.ReportingTime,this.PerformanceDateTime,this.PrivilegestotheSeva,this.BookedTime,this.AccommodationType,this.Available,this.Rate)
}
}
let Corporate =new corporate("JVT","Programmer","2.3 or 230000","Bangalore")
Corporate.Ticketdetails("Special Entry Darshan","Dec 1st","Tuesday", "3:30 Am",2000,"IS151110080016","venkatesh",10600013554,"venkateshprofessional7@gmail.com","220.00",733498928758,"11062015 11:36:46",1,"Archana", "4:00 AM","12012015 AM 4:30:00", "Two Small Laddu","11:36:46","Rs 500 Tirumala","350", "50 to 2000")
Corporate.display()
Corporate.set("Tirupati")
corporate.cname()

//----------------------------------------------------------------------------------------------------------------------------------------------------------------


function Appearance(Weight,Hight,Eyecolour,Gender)
{
document.writeln(Weight,Hight,Eyecolour,Gender)
}

function appearance(callback)
{
callback(55,"5.8","brown","male")
}
appearance(Appearance)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

function Vehicledata(Vehicletype, carColour,Engine) 
{
document.write(Vehicletype,carColour,Engine)
}
function vehicle(callback)
{
callback("light motor" ,"vehicle,red" ,"kp98gtyihh457797")
}
vehicle(Vehicledata)

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

class demo 
{
    constructor(Brand,ProductCode)
    {
        this.Brand = Brand; 
        this.ProductCode = ProductCode;
    }
    method1(name,age,salary)
    {
        console.log(name,age,salary)
    }
   method2(callback)
    {
    
        callback("priya", 21,"23000")
    }
}
     
  let poonam = new demo("Scott International","APPSCOTT-INTERNSWIT610835D77A441")
  poonam.method2(poonam.method1)

//-----------------------------------------------------------------------------------------------------------
     




