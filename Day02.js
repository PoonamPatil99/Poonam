
class corporate{
constructor (Companyname,Designation,Salary,Location)
{
	this.Companyname = Companyname
	this.Designation = Designation
	this.Salary = Salary
	this.Location = Location 
	console.log(this.Companyname,this.Designation,this.Salary,this.Location)
}
}
new corporate("JVT","Programmer","2.3 or 230000","Bangalore")
//---------------------------------------------------------------------------------------------------
class BasicInformation{
constructor()
{
	this.Name = "Jai Venkateswara Technologies"
	this.EducationalQualification = "B TECH MCA MBA BSC MSC"
	this.DateOfBirth = "2/6/1988"
	this.CommunicationAddress = "233/3 Ground floor new thippasandra"
	this.ResidenceNumber = 8025216666
	this.Mobile = 9900367097
	this.Email = "venkatesh.db@gmail.com"
	this.TotalITExp = "1 years"
	this.SkillRelevantExperience = "C,CPP all Lang & 1 years"
	this.ReportingManager = "Venkatesh"
	this.PANCARDNO = "asu675901f"
}
Accountdetails(AccountNo,BroadbandUserID,IPAddress)
{
	this.AccountNo = AccountNo
	this.BroadbandUserID = BroadbandUserID
	this.IPAddress= IPAddress
	
}
netusage(TotalMBdownloaded,MobiledownloadSpeed,MobileuploadSpeed)
{
	this.TotalMBdownloaded = TotalMBdownloaded
	this.MobiledownloadSpeed =MobiledownloadSpeed
	this.MobileuploadSpeed = MobileuploadSpeed 
}
display()
{
	console.log(this.Name ,this.EducationalQualification,this.DateOfBirth,this.CommunicationAddress ,this.ResidenceNumber ,this.Mobile,this.Email,this.TotalITExp,this.SkillRelevantExperience,this.ReportingManager ,this.PANCARDNO)
    console.log(this.AccountNo,this.BroadbandUserID,this.IPAddress)
    console.log(this.TotalMBdownloaded ,this.MobiledownloadSpeed,this.MobileuploadSpeed)
}
}
let information = new BasicInformation()
//information.display()
information.Accountdetails(1135497,11128550,"10.245.97.123")
information.netusage("21.26 GB","30.05 mbps","32.06 mbps")
information.display()

//----------------------------------------------------------------------------------------------------

class Ticket{
constructor(TicketType,Date,Day,Time,PerSlotTickets,BookingNo,NameofthePilgrim,OrderNo,Email,Amountinfigures,ProofofIDAadhaarCard ,BookedDateTime,NoofPersons)
{
	this.TicketType = TicketType
	this.Date = Date
	this.Day = Day
	this.Time = Time
	this.PerSlotTickets =PerSlotTickets
	this.BookingNo = BookingNo
	this.NameofthePilgrim = NameofthePilgrim 
	this.OrderNo = OrderNo
	this.Email = Email 
	this.Amountinfigures = Amountinfigures
	this.ProofofIDAadhaarCard =ProofofIDAadhaarCard
	this.BookedDateTime = BookedDateTime
	this.NoofPersons = NoofPersons
//document.writeln(this.TicketType ,this.Date,this.Day,this.Time,this.PerSlotTickets,this.BookingNo ,this.NameofthePilgrim,this.OrderNo,this.Email,this.Amountinfigures,this.ProofofIDAadhaarCard,this.BookedDateTime,this.NoofPersons)
}
//("Special Entry Darshan","Dec 1st","Tuesday","3:30 Am",2000,"IS151110080016","venkatesh",010600013554,"venkateshprofessional7@gmail.com","220.00",733498928758,"11062015 11:36:46",1)
Seva(NameoftheSeva,ReportingTime,PerformanceDateTime,PrivilegestotheSeva ,BookedTime,AccommodationType ,Available,NoofTickets ,Rate )
{
	this.NameoftheSeva  = NameoftheSeva 
	this.ReportingTime = ReportingTime 
	this.PerformanceDateTime =PerformanceDateTime
	this.PrivilegestotheSeva =PrivilegestotheSeva 
	this.BookedTime = BookedTime
	this.AccommodationType = AccommodationType
	this.Available =Available
	this.NoofTickets =NoofTickets
	this.Rate = Rate
}
display()
{
	console.log(this.TicketType ,this.Date,this.Day,this.Time,this.PerSlotTickets,this.BookingNo ,this.NameofthePilgrim,this.OrderNo,this.Email,this.Amountinfigures,this.ProofofIDAadhaarCard,this.BookedDateTime,this.NoofPersons)
    console.log(this.NameoftheSeva ,this.ReportingTime,this.PerformanceDateTime,this.PrivilegestotheSeva ,this.BookedTime,this.AccommodationType,this.Available,this.NoofTickets,this.Rate)

}
}
let Ticketdata = new Ticket("Special Entry Darshan","Dec 1st","Tuesday","3:30 Am",2000,"IS151110080016","venkatesh",10600013554,"venkateshprofessional7@gmail.com","220.00",7334989287,"11062015 11:36:46",1)
//Ticketdata.display()
Ticketdata.Seva("Archana","4:00 AM","12012015 AM 4:30:00", "Two Small Laddu","11:36:46","Rs 500 Tirumala",350,1,"50 to 2000")
Ticketdata.display()
//--------------------------------------------------------------------------------------------------

class Information{
constructor(Weight,Hight,Eyecolour,Gender,Homeaddress,phone,Mobile,State,Country )
{
	this.Weight = Weight
	this.Hight = Hight
	this.Eyecolour =Eyecolour
	this.Gender =Gender
	this.Homeaddress = Homeaddress
	this.phone = phone
	this.Mobile = Mobile 
	this.State = State 
	this.Country = Country
}
Vehicle(Vehicletype,Colour,Enginenumber ,Chassisnumber,Company)
{
	this.Vehicletype = Vehicletype
	this.Colour = Colour 
	this.Enginenumber = Enginenumber 
	this.Chassisnumber = Chassisnumber 
	this.Company = Company
	
}
system(Rating,Processor,InstalledMemory,SystemType,PenandTouch,ComputerName,ComputerDescription,WindowsEdition,WindowsProductID)
{
	this.Rating = Rating
	this.Processor = Processor 
	this.InstalledMemory = InstalledMemory
	this.SystemType = SystemType
	this.PenandTouch = PenandTouch
	this.ComputerName = ComputerName
	this.ComputerDescription = ComputerDescription
	this.WindowsEdition = WindowsEdition
	this.WindowsProductID = WindowsProductID
}
display()
{
   
	console.log(this.Weight,this.Hight,this.Eyecolour,this.Gender,this.Homeaddress,this.phone,this.Mobile,this.State,this.Country )
    console.log(this.Vehicletype ,this.Colour,this.Enginenumber,this.Chassisnumber,this.Company )
    console.log(this.Rating,this.Processor,this.InstalledMemory,this.SystemType,this.PenandTouch,this.ComputerName,this.ComputerDescription,this.WindowsEdition,this.WindowsProductID)
    
}
}
let info = new Information("55", "5.8","brown","male","#6/96,rajampet,kadapa",975545445 ,8553577745 ,"andhrapradesh" ,"india")
//info.display()
info.Vehicle("light motor vehicle- car","red" , "kp98gtyihh457797","tc5678898335r45 ","BMW")
info.system("4.5", "Intel® Core™ i5-2450 CPU", "4.00GB","64-bit Operating System","No Pen or Touch Input is available for this Display","BALU-PC","WORKGROUP", "Windows 7 Ultimate","00426-OEM-8992662-00497")
info.display()
//<script>------------------------------------------------------------------------------------------------------------------------------------------------------
// Edit your script here
class Informations{
constructor(Theatrename,multiplexScreen,moviename,moviecertification,classs,priceperticket,Numberoftickets,seatnumbers,Totalamount )
{
	this.Theatrename = Theatrename
	this.multiplexScreen = multiplexScreen 
	this.moviename =moviename
	this.moviecertification =moviecertification
	this.classs = classs 
	this.priceperticket = priceperticket 
	this.Numberoftickets = Numberoftickets 
	this.seatnumbers =seatnumbers
	this.Totalamount =Totalamount
}
Account(FirstName,LastName,ChooseUsername,CreataPassword,ConfirmYourPassword,Birthday,Gender,Mobile,emailaddress)
{
	this.FirstName =FirstName 
	this.LastName = LastName
	this.ChooseUsername = ChooseUsername
	this.CreataPassword = CreataPassword
	this.ConfirmYourPassword = ConfirmYourPassword
	this.Birthday = Birthday
	this.Gender = Gender
	this.Mobile = Mobile
	this.emailaddress =emailaddress
	
}
healthcare(PatientName,PatientID,Patientphone,Billno,Age,DateofBirth,Gender,Fasting,PatientAddress,RoomNo,DateoftimeCollectedblood,Enterdate,DateandTimeRespond)
{
	this.PatientName = PatientName 
	this.PatientID = PatientID
	this.Patientphone = Patientphone
	this.Billno = Billno
	this.Age = Age
	this.DateofBirth = DateofBirth
	this.Gender  =Gender 
	this.Fasting = Fasting
	this.PatientAddress = PatientAddress
	this.RoomNo = RoomNo 
	this.DateoftimeCollectedblood  = DateoftimeCollectedblood
	this.Enterdate =Enterdate
	this.DateandTimeRespond = DateandTimeRespond
	
}
banking(BankName,Date,Time,ATMNo,CARDNo,BRANCHNAME,TxnNo ,Responsecode,WithDrawl,FromAC,ModRS ,AvailableBalRs,Website)
{
	this.BankName = BankName
	this.Date = Date
	this.Time = Time
	this.ATMNo = ATMNo
	this.CARDNo = CARDNo
	this.BRANCHNAME = BRANCHNAME
	this.TxnNo = TxnNo
	this.Responsecode = Responsecode
	this.WithDrawl = WithDrawl
	this.FromAC = FromAC 
	this.ModRS = ModRS
	this.AvailableBalRs = AvailableBalRs
	this.Website = Website

	
}
display()
{
	console.log(this.Theatrename,this.multiplexScreen ,this.moviename,this.moviecertification,this.classs,this.priceperticket,this.Numberoftickets,this.seatnumbers,this.Totalamount)
    console.log(this.FirstName,this.LastName,this.ChooseUsername,this.CreataPassword,this.ConfirmYourPassword ,this.Birthday,this.Gender,this.Mobile,this.emailaddress )
    console.log(this.PatientName,this.PatientID,this.Patientphone,this.Billno,this.Age,this.DateofBirth,this.Gender,this.Fasting,this.PatientAddress,this.RoomNo,this.DateoftimeCollectedblood,this.Enterdate,this.DateandTimeRespond)
    console.log(this.BankName ,this.Date,this.Time,this.ATMNo,this.CARDNo,this.BRANCHNAME,this.TxnNo,this.Responsecode,this.WithDrawl,this.FromAC,this.ModRS ,this.AvailableBalRs,this.Website)


}
}

let infoo = new Informations("PSS" , "screen 3" ,"JVT [ C,CPP] ", "U ","first" ,"Rs.1050.00" ,5 ,"c1,c2,c3,c4,c5" ,"Rs.750.00")
//infoo.display()
infoo.Account("venkatesh","d b","jvt","balu","balu","2-6-1986","male",9900367097,"venkatesh.db@gmail.com")
infoo.healthcare("Sathish",10567890890,44222738,56725,34, "15/05/1991", "Male","Yes", "7f,kaveri road, velur",105,"08/09/15 and 08:15","08/09/15","08/09/15 and 09:16")
infoo.banking("SBI Bank","29/05/14","19:48","SJNBL48","xxxx xxxxx xxxx 0516", "Bangalore Main Branch",2907, 72,"500.00","xxxxxxxxxx05 xx01","0.00","1000.00","www.statebankof india.com")
infoo.display()

