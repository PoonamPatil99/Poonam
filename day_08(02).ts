
class corporatee
{
    Companyname:string;
    Designation:string;
    Salary:string;
    Location:string;

constructor (Companyname:string,Designation:string,Salary:string,Location:string)
{
	this.Companyname = Companyname;
	this.Designation = Designation;
	this.Salary = Salary;
	this.Location = Location; 
	console.log(this.Companyname,this.Designation,this.Salary,this.Location);
}
}
new corporatee("JVT","Programmer","2.3 or 230000","Bangalore");
//-----------------------------------------------------------------------------------------------------------------
class BasicInformation
{
    Name : string;
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
    AccountNo: number;
    BroadbandUserID: number;
    IPAddress: string;
    TotalMBdownloaded: number;
    MobiledownloadSpeed: string;
    MobileuploadSpeed: string;

constructor(Name:string,EducationalQualification:string,DateOfBirth:string,CommunicationAddress:string,ResidenceNumber:number,Mobile:number,Email:string ,TotalITExp:string,SkillRelevantExperience:string,ReportingManager:string,PANCARDNO:string,AccountNo:number,BroadbandUserID:number,IPAddress:string,TotalMBdownloaded:number,MobiledownloadSpeed:string,MobileuploadSpeed:string)
{
	this.Name = Name;
	this.EducationalQualification = EducationalQualification;
	this.DateOfBirth = DateOfBirth;
	this.CommunicationAddress = CommunicationAddress;
	this.ResidenceNumber = ResidenceNumber;
	this.Mobile = Mobile;
	this.Email = Email;
	this.TotalITExp = TotalITExp;
	this.SkillRelevantExperience = SkillRelevantExperience;
	this.ReportingManager = ReportingManager;
	this.PANCARDNO = PANCARDNO;
    this.AccountNo = AccountNo;
	this.BroadbandUserID = BroadbandUserID;
	this.IPAddress= IPAddress;
    this.TotalMBdownloaded = TotalMBdownloaded;
	this.MobiledownloadSpeed =MobiledownloadSpeed;
	this.MobileuploadSpeed = MobileuploadSpeed;
	
}
Accountdetails()
{
    if( this.AccountNo == 1135497)
    {
        console.log("valid data");
    }
    else
    {
        console.log("Invalid data");

    }
    
}
netusage()
{
    if(this.TotalMBdownloaded >= 21)
    {
        console.log("Usage completed");
    }
	else
    {
        console.log("usage totalmbdownloaded");

    }
	
}

display()
{
	console.log(this.Name ,this.EducationalQualification,this.DateOfBirth,this.CommunicationAddress ,this.ResidenceNumber ,this.Mobile,this.Email,this.TotalITExp,this.SkillRelevantExperience,this.ReportingManager ,this.PANCARDNO,this.AccountNo,this.BroadbandUserID,this.IPAddress,this.TotalMBdownloaded ,this.MobiledownloadSpeed,this.MobileuploadSpeed);
  
}
}
let Informa = new BasicInformation("Jai Venkateswara Technologies","B TECH MCA MBA BSC MSC", "2/6/1988","233/3 Ground floor new thippasandra", 8025216666,9900367097,"venkatesh.db@gmail.com","1 years","C,CPP all Lang & 1 years","Venkatesh","asu675901f",1135497,11128550,"10.245.97.123",21,"30.05 mbps","32.06 mbps");
//Informa.display();
Informa.Accountdetails();
Informa.netusage();
Informa.display();
//----------------------------------------------------------------------------------------------------

class Ticket
{
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
    NameoftheSeva: string;
    ReportingTime: string;
    PerformanceDateTime: string;
    PrivilegestotheSeva: string;
    BookedTime: string;
    AccommodationType: string;
    Available: number;
    NoofTickets: number;
    Rate: string;

constructor(TicketType:string,Date:string,Day:string,Time:string,PerSlotTickets:number,BookingNo:string,NameofthePilgrim:string,OrderNo:number,Email:string,Amountinfigures:string,ProofofIDAadhaarCard:number,BookedDateTime:string,NoofPersons:number,NameoftheSeva:string,ReportingTime:string,PerformanceDateTime:string,PrivilegestotheSeva:string ,BookedTime:string,AccommodationType:string,Available:number,NoofTickets:number,Rate:string)
{
	this.TicketType = TicketType;
	this.Date = Date;
	this.Day = Day;
	this.Time = Time;
	this.PerSlotTickets =PerSlotTickets;
	this.BookingNo = BookingNo;
	this.NameofthePilgrim = NameofthePilgrim;
	this.OrderNo = OrderNo;
	this.Email = Email; 
	this.Amountinfigures = Amountinfigures;
	this.ProofofIDAadhaarCard =ProofofIDAadhaarCard;
	this.BookedDateTime = BookedDateTime;
	this.NoofPersons = NoofPersons;
    this.NameoftheSeva  = NameoftheSeva;
	this.ReportingTime = ReportingTime;
	this.PerformanceDateTime =PerformanceDateTime;
	this.PrivilegestotheSeva =PrivilegestotheSeva;
	this.BookedTime = BookedTime;
	this.AccommodationType = AccommodationType;
	this.Available =Available;
	this.NoofTickets =NoofTickets;
	this.Rate = Rate;
}

Seva()
{
    if(this.TicketType == "Special Entry Darshan")
    {
        if(this.Date == "")
        {
            console.log("Enter the date for tickets");
        }
        else if(this.Day == "")
        {
            console.log("Enter the day");
        }
        else 
        {
            console.log("valid data");
        }

        if(this.NameofthePilgrim == "venkatesh")
        {
            if(this.Email == "")
            {
                console.log("enter a valid emailid");
            }
        }
        else
        {
            console.log("enter a valid name");

        }
    }
    else
    {
        console.log("enter a seva type");

    }
	
}
display()
{
   console.log(this.TicketType ,this.Date,this.Day,this.Time,this.PerSlotTickets,this.BookingNo ,this.NameofthePilgrim,this.OrderNo,this.Email,this.Amountinfigures,this.ProofofIDAadhaarCard,this.BookedDateTime,this.NoofPersons,this.NameoftheSeva ,this.ReportingTime,this.PerformanceDateTime,this.PrivilegestotheSeva ,this.BookedTime,this.AccommodationType,this.Available,this.NoofTickets,this.Rate);
}
}

let Ticketdata = new Ticket("Special Entry Darshan","Dec 1st","Tuesday","3:30 Am",2000,"IS151110080016","venkatesh",10600013554,"venkateshprofessional7@gmail.com","220.00",7334989287,"11062015 11:36:46",1,"Archana","4:00 AM","12012015 AM 4:30:00", "Two Small Laddu","11:36:46","Rs 500 Tirumala",350,1,"50 to 2000");
//Ticketdata.display();
Ticketdata.Seva();
Ticketdata.display();
//--------------------------------------------------------------------------------------------------

class Information
{
    Weight:string;
    Hight:string;
    Eyecolour:string;
    Gender:string;
    Homeaddress:string;
    phone:number;
    Mobile:number;
    State:string;
    Country:string; 
    Vehicletype: string;
    Colour: string;
    Enginenumber: string;
    Chassisnumber: string;
    Company: string;
    Rating: string;
    Processor: string;
    InstalledMemory: string;
    SystemType: string;
    PenandTouch: string;
    ComputerName: string;
    ComputerDescription: string;
    WindowsEdition: string;
    WindowsProductID: string;

constructor(Weight:string,Hight:string,Eyecolour:string,Gender:string,Homeaddress:string,phone:number,Mobile:number,State:string,Country:string,Vehicletype:string,Colour:string,Enginenumber:string ,Chassisnumber:string,Company:string,Rating:string,Processor:string,InstalledMemory:string,SystemType:string,PenandTouch:string,ComputerName:string,ComputerDescription:string,WindowsEdition:string,WindowsProductID:string,)
{
	this.Weight = Weight;
	this.Hight = Hight;
	this.Eyecolour =Eyecolour;
	this.Gender =Gender;
	this.Homeaddress = Homeaddress;
	this.phone = phone;
	this.Mobile = Mobile;
	this.State = State; 
	this.Country = Country;
    this.Vehicletype = Vehicletype;
	this.Colour = Colour; 
	this.Enginenumber = Enginenumber;
	this.Chassisnumber = Chassisnumber; 
	this.Company = Company;
    this.Rating = Rating;
	this.Processor = Processor;
	this.InstalledMemory = InstalledMemory;
	this.SystemType = SystemType;
	this.PenandTouch = PenandTouch;
	this.ComputerName = ComputerName;
	this.ComputerDescription = ComputerDescription;
	this.WindowsEdition = WindowsEdition;
	this.WindowsProductID = WindowsProductID;
}
Vehicle()
{
    if(this.Colour == "red")
    {
        console.log("data matches");
    }
	
}
system()
{
    if(this.WindowsEdition == "Windows 7 Ultimate")
    {
        console.log("system edition matches");
    }

}
display()
{
	console.log(this.Weight, this.Hight,this.Eyecolour,this.Gender,this.Homeaddress,this.phone ,this.Mobile,this.State,this.Country,this.Vehicletype ,this.Colour,this.Enginenumber,this.Chassisnumber,this.Company,this.Rating,this.Processor,this.InstalledMemory,this.SystemType,this.PenandTouch,this.ComputerName,this.ComputerDescription,this.WindowsEdition,this.WindowsProductID);
}
}
let info = new Information("55", "5.8","brown","male","#6/96,rajampet,kadapa",975545445 ,8553577745 ,"andhrapradesh" ,"india","light motor vehicle- car","red" , "kp98gtyihh457797","tc5678898335r45 ","BMW","4.5", "Intel® Core™ i5-2450 CPU", "4.00GB","64-bit Operating System","No Pen or Touch Input is available for this Display","BALU-PC","WORKGROUP", "Windows 7 Ultimate","00426-OEM-8992662-00497");
info.Vehicle();
info.system();
info.display();
//<script>------------------------------------------------------------------------------------------------------------------------------------------------------
// Edit your script here
class Informac
{
    Theatrename:string;
    multiplexScreen:string;
    moviename:string;
    moviecertification:string;
    classs:string;
    priceperticket:string;
    Numberoftickets:number;
    seatnumbers:string;
    Totalamount:string;
    FirstName: string;
    LastName: string;
    ChooseUsername: string;
    CreataPassword: string;
    ConfirmYourPassword: string;
    Birthday: string;
    Gender: string;
    Mobile: number;
    emailaddress: string;
    PatientName: string;
    PatientID: number;
    Patientphone: number;
    Billno: number;
    Age: number;
    DateofBirth: string;
    gender: string;
    Fasting: string;
    PatientAddress: string;
    RoomNo: number;
    DateoftimeCollectedblood: string;
    Enterdate: string;
    DateandTimeRespond: string;
    BankName: string;
    Date: string;
    Time: string;
    ATMNo: string;
    CARDNo: string;
    BRANCHNAME: string;
    TxnNo: number;
    Responsecode: number;
    WithDrawl: string;
    FromAC: string;
    ModRS: string;
    AvailableBalRs: string;
    Website: string;

constructor(Theatrename:string,multiplexScreen:string,moviename:string,moviecertification:string,classs:string,priceperticket:string,Numberoftickets:number,seatnumbers:string,Totalamount:string,FirstName:string,LastName:string,ChooseUsername:string,CreataPassword:string,ConfirmYourPassword:string,Birthday:string,Gender:string,Mobile:number,emailaddress:string,PatientName:string,PatientID:number,Patientphone:number,Billno:number,Age:number,DateofBirth:string,gender:string,Fasting:string,PatientAddress:string,RoomNo:number,DateoftimeCollectedblood:string,Enterdate:string,DateandTimeRespond:string,BankName:string,Date:string,Time:string,ATMNo:string,CARDNo:string,BRANCHNAME:string,TxnNo:number ,Responsecode:number,WithDrawl:string,FromAC:string,ModRS:string ,AvailableBalRs:string,Website:string)
{
	this.Theatrename = Theatrename;
	this.multiplexScreen = multiplexScreen; 
	this.moviename =moviename;
	this.moviecertification =moviecertification;
	this.classs = classs;
	this.priceperticket = priceperticket;
	this.Numberoftickets = Numberoftickets; 
	this.seatnumbers =seatnumbers;
	this.Totalamount =Totalamount;
    this.FirstName =FirstName; 
	this.LastName = LastName;
	this.ChooseUsername = ChooseUsername;
	this.CreataPassword = CreataPassword;
	this.ConfirmYourPassword = ConfirmYourPassword;
	this.Birthday = Birthday;
	this.Gender = Gender;
	this.Mobile = Mobile;
	this.emailaddress =emailaddress;
    this.PatientName = PatientName; 
	this.PatientID = PatientID;
	this.Patientphone = Patientphone;
	this.Billno = Billno;
	this.Age = Age;
	this.DateofBirth = DateofBirth;
	this.gender  =gender;
	this.Fasting = Fasting;
	this.PatientAddress = PatientAddress;
	this.RoomNo = RoomNo;
	this.DateoftimeCollectedblood  = DateoftimeCollectedblood;
	this.Enterdate =Enterdate;
	this.DateandTimeRespond = DateandTimeRespond;
	this.BankName = BankName;
	this.Date = Date;
	this.Time = Time;
	this.ATMNo = ATMNo;
	this.CARDNo = CARDNo;
	this.BRANCHNAME = BRANCHNAME;
	this.TxnNo = TxnNo;
	this.Responsecode = Responsecode;
	this.WithDrawl = WithDrawl;
	this.FromAC = FromAC; 
	this.ModRS = ModRS;
	this.AvailableBalRs = AvailableBalRs;
    this.Website = Website;
}

banking()
{
    if(this.BankName == "SBI Bank")
    {
    	if(this.ATMNo == "")
        {
        console.log("Enter the ATMNo");
        }
        else if(this.CARDNo == "")
        {
            console.log("Enter the card number");
        }
        else if(this.BRANCHNAME == "")
        {
            console.log("Enter the branch name");
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
}
	
display()
{
	console.log(this.Theatrename,this.multiplexScreen ,this.moviename,this.moviecertification,this.classs,this.priceperticket,this.Numberoftickets,this.seatnumbers,this.Totalamount,this.FirstName,this.LastName,this.ChooseUsername,this.CreataPassword,this.ConfirmYourPassword ,this.Birthday,this.Gender,this.Mobile,this.emailaddress,this.PatientName,this.PatientID,this.Patientphone,this.Billno,this.Age,this.DateofBirth,this.gender,this.Fasting,this.PatientAddress,this.RoomNo,this.DateoftimeCollectedblood,this.Enterdate,this.DateandTimeRespond,this.BankName ,this.Date,this.Time,this.ATMNo,this.CARDNo,this.BRANCHNAME,this.TxnNo,this.Responsecode,this.WithDrawl,this.FromAC,this.ModRS ,this.AvailableBalRs,this.Website);
}
}

let infoo = new Informac("PSS" , "screen 3" ,"JVT [ C,CPP] ", "U ","first" ,"Rs.1050.00" ,5 ,"c1,c2,c3,c4,c5" ,"Rs.750.00","venkatesh","d b","jvt","balu","balu","2-6-1986","male",9900367097,"venkatesh.db@gmail.com","Sathish",10567890890,44222738,56725,34, "15/05/1991", "Male","Yes", "7f,kaveri road, velur",105,"08/09/15 and 08:15","08/09/15","08/09/15 and 09:16","SBI Bank","29/05/14","19:48","SJNBL48","xxxx xxxxx xxxx 0516", "Bangalore Main Branch",2907, 72,"500.00","xxxxxxxxxx05 xx01","0.00","1000.00","www.statebankof india.com");
//infoo.Account();
//infoo.healthcare();
infoo.banking();
infoo.display();