class Informations{
    Name:string;
    EducationalQualification:string;
    DateOfBirth:string;
    CommunicationAddress:string;
    ResidenceNumber:number;
    Mobile:number;
    Email:string;
    TotalITExp:string;
    SkillRelevantExperience:string;
    ReportingManager:string;
    PANCARDNO:string;
    AccountNo:number;
	BroadbandUserID:number;
	IPAddress:string;
    TotalMBdownloaded:number;
	MobiledownloadSpeed:string;
	MobileuploadSpeed:string;

constructor(Name:string,EducationalQualification:string,DateOfBirth:string,CommunicationAddress:string,ResidenceNumber:number,Mobile:number,Email:string,TotalITExp:string,SkillRelevantExperience:string,ReportingManager:string,PANCARDNO:string,AccountNo:number,BroadbandUserID:number,IPAddress:string,TotalMBdownloaded:number,MobiledownloadSpeed:string,MobileuploadSpeed:string)
{
	this.Name = Name;
	this.EducationalQualification  = EducationalQualification;
	this.DateOfBirth = DateOfBirth;
	this.CommunicationAddress = CommunicationAddress;
	this.ResidenceNumber  = ResidenceNumber;
	this.Mobile =Mobile;
	this.Email =Email; 
	this.TotalITExp  =TotalITExp;
	this.SkillRelevantExperience = SkillRelevantExperience;
	this.ReportingManager  = ReportingManager;
	this.PANCARDNO  =PANCARDNO;
    this.AccountNo=AccountNo;
	this.BroadbandUserID=BroadbandUserID;
	this.IPAddress=IPAddress
    this.TotalMBdownloaded = TotalMBdownloaded;
	this.MobiledownloadSpeed =MobiledownloadSpeed;
	this.MobileuploadSpeed = MobileuploadSpeed; 

    if(Name = "JVT")
    {
    	if(EducationalQualification = "")
        {
        console.log("enter the education details")
        }
        else if(DateOfBirth  = "")
        {
            console.log("enter the date of birth")
        }
        else if(CommunicationAddress = "")
        {
            console.log("enter the address")
        }
        /*else if(ResidenceNumber :string =:string = "")
        {
        document.writeln("enter the residence number")
        }
        else if(Mobile !:string = length.Mobile)
        {
        document.writeln("enter the valid mobile number")
        }*/
        else if(Email = "")
        {
            console.log("enter the emailid")
        }
        else if(TotalITExp = "")
        {
            console.log("enter the total experience")
        }
        else if(PANCARDNO = "")
        {
            console.log("enter the pancard number")
        }
        else
        {
            console.log("Data found")
        }
        }
        else
        {
            console.log("Data not found")
        }
   
    }

Accountdetails()
{
    if(this.AccountNo= 1135497)
    {
    console.log("valid Accountnumber")
    }
   
	console.log(this.AccountNo,this.BroadbandUserID,this.IPAddress)
}
netusage()
{

    if(this.TotalMBdownloaded > 21)
    {
        console.log("Data usage exceeds")
    }
    else
    {
        console.log("data usage in limit")
    }
	console.log(this.TotalMBdownloaded ,this.MobiledownloadSpeed,this.MobileuploadSpeed)
}

display()
{
	console.log(this.Name ,this.EducationalQualification,this.DateOfBirth,this.CommunicationAddress ,this.ResidenceNumber ,this.Mobile,this.Email,this.TotalITExp,this.SkillRelevantExperience,this.ReportingManager ,this.PANCARDNO)
}
}
let Infor = new Informations("JVT","B TECH MCA MBA BSC MSC","2/6/1988","233/3 Ground floor new thippasandra",
8025216666,9900367011, "venkatesh.db@gmail.com", "1 years","C,CPP all Lang & 1 years","Venkatesh", "dhf1213", 1234567891, 1234, "Ip 12:34:56",
124, "120kbps", "220kbps")
Infor.display()
Infor.Accountdetails()
Infor.netusage()

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Tickets{
    TicketType:string;
    Date:string;
    Day:string;
    Time:string;
    PerSlotTickets:number;
    BookingNo:string;
    NameofthePilgrim:string;
    OrderNo:number;
    Email:string;
    Amountinfigures:string;
    ProofofIDAadhaarCard:number;
    BookedDateTime:string;
	NoofPersons:number;
    NameoftheSeva:string;
    ReportingTime:string;
    PerformanceDateTime:string;
    PrivilegestotheSeva:string;
    BookedTime:string;
    AccommodationType:string;
    Available:number;
    NoofTickets:number;
    Rate:string;
	
constructor(TicketType:string,Date:string,Day:string,Time:string,PerSlotTickets:number,BookingNo:string,NameofthePilgrim:string,OrderNo:number,
    Email:string,Amountinfigures:string,ProofofIDAadhaarCard:number,BookedDateTime:string,NoofPersons:number,NameoftheSeva:string,ReportingTime:string,PerformanceDateTime:string,PrivilegestotheSeva:string,BookedTime:string,AccommodationType:string,
    Available:number,NoofTickets:number ,Rate:string)
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
    this.NameoftheSeva=NameoftheSeva;
    this.ReportingTime=ReportingTime;
    this.PerformanceDateTime=PerformanceDateTime;
    this.PrivilegestotheSeva=PrivilegestotheSeva;
    this.BookedTime=BookedTime;
    this.AccommodationType=AccommodationType;
    this.Available=Available;
    this.NoofTickets=NoofTickets;
    this.Rate=Rate;
    if(this.TicketType  = "Special Entry Darshan")
    {
    	if(this.Date == "" && this.Day == "" && this.Time == "")
        {
        console.log("Enter the date day and time of the darshan seva")
        }
        else
        {
            console.log("Slot allocated for darshan")
        }
        }
    else
    {
    console.log("No special entry seva provided")
    }
}
Seva( )
{
    if(this.NoofTickets > 0)
    {
    	if(this.NameoftheSeva = "")
        {
        console.log("enter the name of the seva to be provided")
        }
        else
        {
            console.log("Seva is done")
        }
        }
    else
    {
    document.writeln("No seva available")
    }
	//document.writeln(this.NameoftheSeva ,this.ReportingTime,this.PerformanceDateTime,this.PrivilegestotheSeva ,this.BookedTime,this.AccommodationType,this.Available,this.NoofTickets,this.Rate)
}
/*display()
{
	document.writeln(this.TicketType,this.Date,this.Day,this.Time,this.PerSlotTickets,this.BookingNo,this.NameofthePilgrim,this.OrderNo,this.Email,this.Amountinfigures,this.ProofofIDAadhaarCard ,this.BookedDateTime,this.NoofPersons)
}*/
}
let Ticketdataa = new Tickets("Special Entry Darshan","Dec 1st","Tuesday","3:string =30 Am",2000,"IS151110080016","venkatesh",10600013554,"venkateshprofessional7@gmail.com","220.00",7334989287,"11062015 11:string =36:string =46",1,"Archana","4:string =00 AM","12012015 AM 4:string =30:string =00", "Two Small Laddu","11:string =36:string =46","Rs 500 Tirumala",350,1,"50 to 2000")

//Ticketdata.display()
Ticketdataa.Seva()
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Informat{
    Weight :number;
	Hight :string;
    Eyecolour :string;
    Gender :string;
    Homeaddress :string;
    phone :number;
    Mobile :number;
    State :string;
    Country :string; 

constructor(Weight:number,Hight:string,Eyecolour:string,Gender:string,Homeaddress:string,phone:number,Mobile:number,State:string,Country:string)
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
    console.log("Balanced weight")
    }
    else
    {
        console.log("unbalanced weight")
    }
    
}
Vehicle(Vehicletype:string,Colour:string,Enginenumber:string,Chassisnumber:string,Company:string)
{
    if(Colour == "red" || Colour == "black" || Colour == "white" || Colour == "grey")
    {
    console.log("Colours of car available")
    }
    else
    {
        console.log("Colours are not available")
    }
	console.log(Vehicletype ,Colour,Enginenumber,Chassisnumber,Company )
}
system(Rating:string,Processor:string,InstalledMemory:string,SystemType:string,PenandTouch:string,ComputerName:string,ComputerDescription:string,
    WindowsEdition:string,WindowsProductID:string)
{

    if(Processor == "Intel® Core™ i5-2450 CPU")
    {
    	if(Rating == "5")
        {
        console.log("Good rating")
        }
        if(SystemType == "64-bit Operating System")
        {
            console.log("Its a 64 bit os")
        }
    }
}
display()
{
	console.log(this.Weight, this.Hight,this.Eyecolour,this.Gender,this.Homeaddress,this.phone ,this.Mobile ,this.State ,this.Country)
}
}
let infodata = new Informat(55, "5.8","brown","male","#6/96,rajampet,kadapa",975545445 ,8553577745 ,"andhrapradesh" ,"india")
infodata.display()
infodata.Vehicle("light motor vehicle- car","red" , "kp98gtyihh457797","tc5678898335r45","BMW")
infodata.system("5", "Intel® Core™ i5-2450 CPU", "4.00GB","64-bit Operating System","No Pen or Touch Input is available for this Display","BALU-PC","WORKGROUP", "Windows 7 Ultimate","00426-OEM-8992662-00497")

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

class bankdata
{
    BankName:string;
    Date:string;
    Time:string;
    ATMNo:string;
    CARDNo:string;
    BRANCHNAME:string;
    TxnNo:number;
    Responsecode:number;
    WithDrawl:string;
    FromAC:string;
    ModRS:string;
    AvailableBalRs:string;
    Website:string;

constructor(BankName:string,Date:string,Time:string,ATMNo:string,CARDNo:string,BRANCHNAME:string,TxnNo:number,Responsecode:number,WithDrawl:string,FromAC:string,ModRS:string ,AvailableBalRs:string,Website:string)
{
	this.BankName = BankName;
	this.Date = Date
	this.Time  = Time
	this.ATMNo = ATMNo
	this.CARDNo  = CARDNo
	this.BRANCHNAME = BRANCHNAME
	this.TxnNo = TxnNo
	this.Responsecode= Responsecode
	this.WithDrawl  = WithDrawl
	this.FromAC = FromAC 
	this.ModRS = ModRS
	this.AvailableBalRs = AvailableBalRs
	this.Website = Website

    if(BankName  == "")
    {
    console.log("Enter a valid bank name")
    //return false;
    }
    if(BankName == "SBI Bank")
    {
    	if(ATMNo  == "")
        {
            console.log("Enter the ATMNo")
        }
        else if(CARDNo == "")
        {
            console.log("Enter the card number")
        }
        else if(BRANCHNAME == "")
        {
            console.log("Enter the branch name")
        }
        else if(TxnNo == 2907)
        {
            console.log("valid number")
        }
        else
        {
            console.log("Data coolected")
        }
        }
        else
        {
            console.log("Bank name not matched")
        }
	//document.writeln(this.BankName ,this.Date,this.Time,this.ATMNo,this.CARDNo,this.BRANCHNAME,this.TxnNo,this.Responsecode,this.WithDrawl,this.FromAC,this.ModRS ,this.AvailableBalRs,this.Website)
}
}

let infop= new bankdata("Bank","29/05/14","19:string =48","SJNBL48","xxxx xxxxx xxxx 0516", "Bangalore Main Branch",2907, 72,"500.00","xxxxxxxxxx05 xx01","0.00","1000.00","www.statebankof india.com")

//info.banking()
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------