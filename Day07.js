
// Edit your script here
let company=
{
	Companyname : "JVT",
	Designation : "Programmer",
	Salary : "2.3 or 230000",
	Location : "Bangalore",
    Corporate()
    {
    console.log(this.Companyname,this.Salary)
    }
}
company.Corporate()
//----------------------------------------------------------------------
let info =
{
Name : "Jai Venkateswara Technologies",
EducationalQualification : "B TECH MCA MBA BSC MSC",
DateOfBirth : "2/6/1988",
CommunicationAddress : "233/3 Ground floor new thippasandra",
ResidenceNumber : 8025216666,
Mobile : 9900367097,
Email : "venkatesh.db@gmail.com",
TotalExp : "1 years",
SkillRelevantExperience : "C,CPP all Lang & 1 years",
ReportingManager : "Venkatesh",
PANCARDNO : "asu675901f",
}
console.log(info.Name,info.Mobile,info.PANCARDNO)

info.method = function()
{
    console.log(this.Name,this.Email,this.ResidenceNumber )
}
info.method()

//------------------------------------------------------------------------

let  Account =
{
AccountNo : 1135497,
BroadbandUserID : 11128550,
IPAddress : "10.245.97.123",
Accountdata()
{
    console.log(this.AccountNo,this.IPAddress)
}
}
Account.Accountdata()

//---------------------------------------------------------------------------
let usagedata=
{
TotalMBdownloaded : "21.26 GB",
MobiledownloadSpeed : "30.05 mbps",
MobileuploadSpeed : "32.06 mbps",
Usagedat()
{
    console.log(this.TotalMBdownloaded,this.MobiledownloadSpeed)
}
}
usagedata.Usagedat()

//-------------------------------------------------------------------------

let Ticket = 
{
TicketType : "Special Entry Darshan",
Date : "Dec 1st",
Day : "Tuesday",
Time : "3:30 Am",
PerSlotTickets : 2000,
BookingNo : "IS151110080016",
NameofthePilgrim: "venkatesh",
OrderNo : 10600013554,
Email : "venkateshprofessional7@gmail.com",
Amountinfigures : "220.00",
ProofofID: "Aadhaar Card 733498928758",
BookedDateTime: "11062015 11:36:46",
NoofPersons: 1,
NameoftheSevaDarshan : "Archana",
ReportingTime : "4:00 AM",
PerformanceDateTime : "12012015 AM 4:30:00",
PrivilegestotheSeva : "Two Small Laddu",
BookedTime: "11:36:46",
AccommodationType : "Rs 500 Tirumala",
Available : 350,
NoofTickets : 1,
Rate : "50 to 2000",
}
console.log(Ticket.NameofthePilgrim,Ticket.AccommodationType )

Ticket.tic = function()
{
    console.log(this.PerformanceDateTime ,this.Available)
}
Ticket.tic()

//----------------------------------------------------------------------------
let Basicinfo = 
{
Name : "JVT",
Age : 5,
Gender : "Male",
EmailAddress : "info@jvtechnologies.co.in",
PhotoIDCard : "Voter Id or Ration card ..",
IDCardNo : "ASUPB590F",
Name : "Mr. venkatesh",
Age : 25,
Gender : "Male",
EmailAddress : "venkatesh.db@gmail.com",
Address : "BEML Main Road",
City : "Bangalore",
State : "Karnataka",
ZipPincode : 560075,
Country : "India",
MobileNo : 9900367097,
PhotoIDNo : "G3839975",
}
console.log(Basicinfo.Gender,Basicinfo.City)
Basicinfo.inform = function()
{
    console.log(this.Country,this.Age)
}
Basicinfo.inform()

//----------------------------------------------------------------------
//array data structure

let outstanding = new Map()
outstanding.set("Total","Rs. 571.36")
outstanding.set("Unbilled", "Rs. 0")
console.log(outstanding.get("Total"))
console.log(outstanding.get("Unbilled"))

//-----------------------------------------------------------------------

let payment = new Map()
payment.set("Amount", "Rs. 0 Date")
console.log(payment.get("Amount"))
//------------------------------------------------------------------------

let credit = new Map()
credit.set("Total", "Rs. 18,000") 
credit.set("Available", "Rs. 17,428.64")
console.log(credit.get("Total"))
console.log(credit.get("Available"))

//--------------------------------------------------------------------------
let cashlimit = new Map()
cashlimit.set("Total", "Rs. 3,600") 
cashlimit.set("Available", "Rs. 3,600")
console.log(cashlimit.get("Total"))
console.log(cashlimit.get("Available"))

//--------------------------------------------------------------------------
