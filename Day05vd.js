

function Cdetails()
{
	Theatrename="PSS "
	multiplexScreen = "screen 3 "
	moviename = "JVT [ C,CPP] "
	moviecertification = "U"
	mclass = "first"
	priceperticket = 1050
	Numberoftickets = 5
	seatnumbers ="c3,c4,c5"
	Totalamount ="Rs.750.00"
    
     if(moviecertification == 'U')
    {
        console.log("U certified film")
    }
    else
    {
        console.log("A certified film")
    }
     if(priceperticket <= 1500)
    {
        console.log("Take a Ticket")
    }
    else
    {
        console.log("dont go")
    }
    
    if(seatnumbers == 'c3,c4,c5')
    {
        console.log("You aare there in alotted seat")
    }
    else
    {
        console.log("not in alotted seat")
    }
    
    if(Numberoftickets == 5)
    {
   return "right numbers of tickets"
    }
    else
    {
        console.log("number are tickets differed")
    }
    
    
}
var res = Cdetails()
console.log(res)
//------------------------------------------------------------------------------------------------------------------------------------------------------------------  
function googleaccount(){
   FirstName = 'venkatesh'
   LastName : 'hk'
   ChooseUsername = 'jvt'
   CreataPassword = 'balu'
   ConfirmYourPassword = 'balu'
   Birthday = '2-6-1986'
   Gender = 'male'
   Mobile = 9900367097
   Yourcurrentemailaddress = 'venkatesh.db@gmail.com'
   if (FirstName == 'venkatesh')
   {
   		return FirstName
   }
   else
   {
   		return LastName
   }
  
}
var res = googleaccount()
console.log(res)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
function bloodR()
{
	PatientName = "Sathish"
	PatientID = 10567890890
	Patientphone = 044222738
	Billno = 56725
	Age =34
	DateofBirth ="15/05/1991"
	Gender = "Male"
	Fasting= "Yes"
	PatientAddress = "7f,kaveri road, velur."
	RoomNo = 105
	DateoftimeCollectedblood = "08/09/15 and 08:15"
	Enterdate = "08/09/15"
	DateandTimeRespond = "08/09/15 and 09:16"
    if(PatientName == "Sathish")
    {
    	return "patient name sathish"
    }
    else
    {
    	return "other patients data"
    }
}
        
var data =  bloodR()
console.log(data)
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------

class Appearance {
constructor(weight, height, Eyecolor, gender) 
{
 	this.weight =  weight
        this.height = height
        this.Eyecolor= Eyecolor
        this.gender =  gender
        
 }
contactdetails(address, phone, mobile, state, country) {
    	this.address = address 
        this.phone = phone
        this.mobile = mobile
        this.state = state
        this.country = country
        
        if(mobile == 8889994440)
        {
            console.log("valid Number")
        }
        else
        {
        	console.log("Invalid Number")
	
        }
	if( this.height == "5.8" )
        {
            console.log("Valid")     
        }
        else
        {
        	console.log( "InValid")  
        }
    }
display() 
{
    console.log(this.weight,this.height,this.Eyecolor, this.gender)
    console.log(this.address,this.phone,this.mobile,this.state,this.country)
}    
}
var information =  new Appearance("5.5", "5.8","brown", "male")
information.contactdetails("#6/96,rajapet,kadapa", 975545445, 8889994440, "Andrapradesh", "India") 
information.display()

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------

class library {
constructor(BookID,Bookname,BookAuthor,IssueDate,DueDate,IDNo,Name,Returnon,Fine)
{
	this.BookID = BookID 
	this.Bookname = Bookname
	this.BookAuthor = BookAuthor
	this.IssueDate = IssueDate
	this.DueDate = DueDate
	this.IDNo = IDNo 
	this.Name = Name
	this.Returnon =Returnon
	this.Fine = Fine 
}
postoffice(PostofficeDetails,trackingNumber,CounterNo,opcode,Fromaddress,ToAddress,wgt,Amt,datetime,Taxes)
{
	this.PostofficeDetails = PostofficeDetails 
	this.trackingNumber = trackingNumber
	this.CounterNo = CounterNo 
	this.opcode = opcode 
	this.Fromaddress =Fromaddress 
	this.ToAddress = ToAddress
	this.wgt = wgt
	this.Amt = Amt
	this.datetime = datetime
	this.Taxes = Taxes
}
display()
{
    console.log(this.BookID,this.Bookname,this.BookAuthor,this.IssueDate,this.DueDate,this.IDNo,this.Name,this.Returnon,this.Fine)
    console.log(this.PostofficeDetails,this.trackingNumber ,this.CounterNo,this.opcode,this.Fromaddress,this.ToAddress ,this.wgt,this.Amt,this.datetime,this.Taxes)

}
}
let Library = new library(12345634,"C Programming","Dennis Ritche","14/01/2012","13/02/2012", "2008Ec027", "Saravanan","25/02/2012",12)
Library.display()
Library.postoffice("New Thipasundra<423203>","EM423395510IN",1,12,"xxxxxx","xxxxxx","20grms","39.00", "08/04/2013 16:01", "Rs.4.00")
//----------------------------------------------------------------------------------------------------------------------------------------------------------------------