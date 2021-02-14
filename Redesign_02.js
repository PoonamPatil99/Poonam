class Informationn{
constructor(Name,EducationalQualification,DateOfBirth,CommunicationAddress,ResidenceNumber,Mobile,Email,TotalITExp,SkillRelevantExperience,ReportingManager,PANCARDNO)
{
	this.Name = Name
	this.EducationalQualification = EducationalQualification
	this.DateOfBirth = DateOfBirth
	this.CommunicationAddress = CommunicationAddress
	this.ResidenceNumber = ResidenceNumber
	this.Mobile =Mobile
	this.Email =Email 
	this.TotalITExp =TotalITExp
	this.SkillRelevantExperience = SkillRelevantExperience
	this.ReportingManager = ReportingManager 
	this.PANCARDNO =PANCARDNO
    if(Name == "JVT")
    {
    	if(EducationalQualification == "")
        {
        console.log("enter the education details");
        }
        else if(DateOfBirth == "")
        {
            console.log("enter the date of birth");
        }
        else if(CommunicationAddress == "")
        {
            console.log("enter the address");
        }
        /*else if(ResidenceNumber == "")
        {
        document.writeln("enter the residence number")
        }
        else if(Mobile != length.Mobile)
        {
        document.writeln("enter the valid mobile number")
        }*/
        else if(Email == "")
        {
            console.log("enter the emailid");
        }
        else if(TotalITExp == "")
        {
            console.log("enter the total experience");
        }
        else if(PANCARDNO == "")
        {
            console.log("enter the pancard number");
        }
        else
        {
            console.log("Data found");
        }
        }
        else
        {
            console.log("Data not found");
        }
   
    }
Accountdetails(AccountNo,BroadbandUserID,IPAddress)
{
	this.AccountNo = AccountNo
	this.BroadbandUserID = BroadbandUserID
	this.IPAddress= IPAddress
    if(AccountNo == 1135497)
    {
        console.log("valid Accountnumber");
    }
   
	console.log(this.AccountNo,this.BroadbandUserID,this.IPAddress)
}
netusage(TotalMBdownloaded,MobiledownloadSpeed,MobileuploadSpeed)
{
	this.TotalMBdownloaded = TotalMBdownloaded
	this.MobiledownloadSpeed =MobiledownloadSpeed
	this.MobileuploadSpeed = MobileuploadSpeed 
    if(TotalMBdownloaded > 21)
    {
        console.log("Data usage exceeds");
    }
    else
    {
        console.log("data usage in limit");
    }
	console.log(this.TotalMBdownloaded ,this.MobiledownloadSpeed,this.MobileuploadSpeed)
}

display()
{
	console.log(this.Name ,this.EducationalQualification,this.DateOfBirth,this.CommunicationAddress ,this.ResidenceNumber ,this.Mobile,this.Email,this.TotalITExp,this.SkillRelevantExperience,this.ReportingManager ,this.PANCARDNO)
}
}
let information = new Informationn("JVT","B TECH MCA MBA BSC MSC","2/6/1988","233/3 Ground floor new thippasandra",8025216666,9900367011, "venkatesh.db@gmail.com", "1 years","C,CPP all Lang & 1 years","Venkatesh", "dhf1213")
information.display()
information.Accountdetails(1135497,11128550,"10.245.97.123")
information.netusage(22,"30.05 mbps","32.06 mbps")

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
    if(TicketType == "Special Entry Darshan")
    {
    	if(Date == "" && Day == "" && Time == "")
        {
            console.log("Enter the date day and time of the darshan seva");
        }
        else
        {
            console.log("Slot allocated for darshan");
        }
        }
    else
    {
        console.log("No special entry seva provided");
    }
}
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
    if(this.TicketType == "Special Entry Darshan")
    {
    	if(NameoftheSeva == "")
        {
            console.log("enter the name of the seva to be provided");
        }
        else
        {
            console.log("Seva is done");
        }
        }
    else
    {
        console.log("No seva available");
    }
	//document.writeln(this.NameoftheSeva ,this.ReportingTime,this.PerformanceDateTime,this.PrivilegestotheSeva ,this.BookedTime,this.AccommodationType,this.Available,this.NoofTickets,this.Rate)
}
/*display()
{
	document.writeln(this.TicketType,this.Date,this.Day,this.Time,this.PerSlotTickets,this.BookingNo,this.NameofthePilgrim,this.OrderNo,this.Email,this.Amountinfigures,this.ProofofIDAadhaarCard ,this.BookedDateTime,this.NoofPersons)
}*/
}
let Ticketdata = new Ticket("Special Entry Darshan","Dec 1st","Tuesday","3:30 Am",2000,"IS151110080016","venkatesh",10600013554,"venkateshprofessional7@gmail.com","220.00",7334989287,"11062015 11:36:46",1)
//Ticketdata.display()
Ticketdata.Seva("Archana","4:00 AM","12012015 AM 4:30:00", "Two Small Laddu","11:36:46","Rs 500 Tirumala",350,1,"50 to 2000")

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
    if(Weight >= 50 && Weight <= 60)
    {
        console.log("Balanced weight");
    }
    else
    {
        console.log("unbalanced weight");
    }
    
}
Vehicle(Vehicletype,Colour,Enginenumber ,Chassisnumber,Company)
{
	this.Vehicletype = Vehicletype
	this.Colour = Colour 
	this.Enginenumber = Enginenumber 
	this.Chassisnumber = Chassisnumber 
	this.Company = Company
    if(Colour == "red" || Colour == "black" || Colour == "white" || Colour == "grey")
    {
        console.log("Colours of car available");
    }
    else
    {
        console.log("Colours are not available");
    }
	console.log(this.Vehicletype ,this.Colour,this.Enginenumber,this.Chassisnumber,this.Company )
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
    if(Processor == "Intel® Core™ i5-2450 CPU")
    {
    	if(Rating >= 5)
        {
            console.log("Good rating");
        }
        if(SystemType == "64-bit Operating System")
        {
            console.log("Its a 64 bit os");
        }
    }
}
display()
{
	console.log(this.Weight, this.Hight,this.Eyecolour,this.Gender,this.Homeaddress,this.phone ,this.Mobile ,this.State ,this.Country)
}
}
let info = new Information(55, "5.8","brown","male","#6/96,rajampet,kadapa",975545445 ,8553577745 ,"andhrapradesh" ,"india")
info.display()
info.Vehicle("light motor vehicle- car","red" , "kp98gtyihh457797","tc5678898335r45 ","BMW")
info.system(5, "Intel® Core™ i5-2450 CPU", "4.00GB","64-bit Operating System","No Pen or Touch Input is available for this Display","BALU-PC","WORKGROUP", "Windows 7 Ultimate","00426-OEM-8992662-00497")

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

class bankdata
{
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
    if(BankName == "")
    {
        console.log("Enter a valid bank name");
    return false
    }
    if(BankName == "SBI Bank")
    {
    	if(ATMNo == "")
        {
            console.log("Enter the ATMNo");
        }
        else if(CARDNo == "")
        {
            console.log("Enter the card number");
        }
        else if(BRANCHNAME == "")
        {
            console.log("Enter the branch name");
        }
        else if(TxnNo == "")
        {
            console.log("enter the transaction number");
        }
        else
        {
            console.log("Data coolected");
        }
        }
        else
        {
            console.log("Bank name not matched");
        }
	//document.writeln(this.BankName ,this.Date,this.Time,this.ATMNo,this.CARDNo,this.BRANCHNAME,this.TxnNo,this.Responsecode,this.WithDrawl,this.FromAC,this.ModRS ,this.AvailableBalRs,this.Website)
}

}
let inf = new bankdata()
inf.banking("Bank","29/05/14","19:48","SJNBL48","xxxx xxxxx xxxx 0516", "Bangalore Main Branch",2907, 72,"500.00","xxxxxxxxxx05 xx01","0.00","1000.00","www.statebankof india.com")

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------