
function bankS()
{

	BankName = "SBI Bank"
	Date="29/05/14"
	Time="19:48"
	ATMNo = "SJNBL48"
	CARDNo= "xxxx xxxxx xxxx 0516"
	BRANCHNAME= "Bangalore Main Branch"
	TxnNo =2907
	Responsecode = 072
	WithDrawl = "500.00"
	FromAC = "xxxxxxxxxx05 xx01"
	ModRS = "0.00"
	AvailableBalRs= "1000.00"
	Website = "www.statebankof india.com"
    	console.log(BankName,Date,Time,ATMNo,CARDNo,BRANCHNAME,TxnNo,Responsecode,WithDrawl,FromAC,ModRS,AvailableBalRs,Website)
}
bankS()
//------------------------------------------------------------------------------------------------------------------------------------------------------------
function Cardd(name,mailid,contactno,companyname,designation)
{
	address="230/3 2nd floor hal3rd stage new thippasandra bangalore-560075"
    console.log(name,mailid,contactno,companyname,designation,address)
}
Cardd("naresh","naresh.jvt@gmail.com" ,919944860792 ,"jvt" ,"programmer")
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
function Ebill()
{
	website="www.tnebnet.org "
	busername="agilan "
	password=1234567 
	consumernumber=23456123 
	Billingstatus="paid/unpaid "
	modeofpayment ="netbanking "
	choosebank="sbi" 
	username="kumar007" 
	password=1234567 
	Transactionno="18cv21828578437 "
	paymentstatus= "successful"
	console.log(website,busername,password,consumernumber,Billingstatus,modeofpayment,choosebank,username,password,Transactionno,paymentstatus)
}
Ebill()

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------


function cspecification(model,ipvoltage,frequency,opvoltage,acbatterytype,batterycapacity,batterybackup,rechargetime,weight)
{
	model= model
	ipvoltage = ipvoltage 
	frequency = frequency
	opvoltage  = opvoltage 
	acbatterytype = acbatterytype
	batterycapacity = batterycapacity 
	batterybackup = batterybackup 
	rechargetime = rechargetime 
	weight = weight
    console.log(model,ipvoltage,frequency,opvoltage,acbatterytype,batterycapacity,batterybackup,rechargetime,weight)
}

cspecification("exide-digital600","230v ac","50hz","230v","sealed maintenance free","12volt 7Ah","12 to 20 mints","5 to 6 hours ","6.1 kg")

function visitingcarddetails(){
	name = "naresh" 
	mailid = "naresh.jvt@gmail.com" 
	contactno = 9944860792 
	companyname = "jvt" 
	designation = "programmer" 
	address = "230/3 2nd floor hal3rd stage new thippasandra bangalore-560075."
    console.log(name,mailid,contactno,companyname,designation,address)
}

visitingcarddetails()

function electricbillpaid(website,tnebusername,password,consumernumber,Billingstatus,modeofpayment,choosebank,username,Transactionno)
{
    	website = website 
    	tnebusername = tnebusername
    	password = password 
    	consumernumber = consumernumber 
   	    Billingstatus = Billingstatus 
    	modeofpayment = modeofpayment 
    	choosebank = choosebank 
    	username = username 
        password = password 
        Transactionno = Transactionno 
    	paymentstatus: "successful"
	    MobileuploadSpeed = "32.06 mbps"
    		if(password  == 1234567)
   		 {
    			return "Valid Password"
   		 }
   		else
   		 {
            console.log(website,tnebusername,password,consumernumber,Billingstatus,modeofpayment,choosebank,username,Transactionno)
   		 }
}

var res = electricbillpaid("www.tnebnet.org","agilan",1234567,23456123,"paid","netbanking","sbi","kumar007","18cv21828578437")
console.log(res)
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
function shopping(){
	Brand = "Scott International"
	ProductCode = "APPSCOTT-INTERNSWIT610835D77A441"
	Color = "Black"
	Size = 'S'
	Material = 'Cotton'
	Occasion = 'Casual'
	Pattern = 'Solid'
	Sleeve = 'Full Sleeves'
	NeckType = 'Hooded'
	Fit = 'Slim'
	Gender = 'Men'
	Estimated_Arrival = ' 9 days'
	ReturnPolicy = 'Seller will accept returns within a 15 days from date of delivery of the item'
	totaalamount = 824
	console.log(Brand,Color,NeckType,Fit,Gender,totaalamount)

	if(totaalamount  <= 500)
   		 {
    			return "Buy  the Product"
   		 }
   		else
   		 {
            console.log(totaalamount+" totaalamount")
   		 }
}

shopping()
//-----------------------------------------------------------------------------------------------------------------------------------------------------------
function workshopbill()
{
	billno = '15/wb/611'
	date = '16-12-2015'
	model = 'bajaj 09'
	serialno = 'ka03 hs 7441'
    console.log(serialno,date,model)
 	return " Bill Details Recorded"
}

var result = workshopbill()
console.log(result)
//------------------------------------------------------------------------------------------------------------------------------------------------------------

//<script>
// Edit your script here
//callback function
function AI(identifier,automation)
{
	console.log(identifier,automation)
}
function datascience(callback)
{
	console.log("intimetec","attendance")
}
datascience(AI)
//----------------------------------------------------------------------------------------------------------------------------------------------------------------

function Cclothing(Brand,ProductCode,Color,Size ,Material,Occasion,Pattern,Sleeve,NeckType,Fit ,Gender)
{
	console.log(Brand,ProductCode,Color,Size ,Material,Occasion,Pattern,Sleeve,NeckType,Fit ,Gender)

}
function CG(callback)
{
	callback("Scott International","APPSCOTT-INTERNSWIT610835D77A441","Black","S","Cotton","Casual","Solid","Full Sleeves","Hooded","Slim","Men")
}
CG(Cclothing)
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
function shippingd(EstimatedArrival,ReturnPolicy)
{
	console.log(EstimatedArrival,ReturnPolicy)
}
function shipD(callback)
{
	callback("9 days","Seller will accept returns within a 15 days from date of delivery of the item")
}
shipD(shippingd)
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

function ios(OS,Chipset,CPU)
{
	console.log(OS,Chipset,CPU)
}
function iosf(callback)
{
	callback("iOS 9, upgradable to iOS 9.2","Apple A9","Dual-core 1.84 GHz Twister")
}
iosf(ios)
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

function battery(NonremovableLiPo,Standby,Talktime,Musicplay)
{
	console.log(NonremovableLiPo,Standby,Talktime,Musicplay)
}
function Battery(callback)
{
	callback("1715 mAh battery (6.9 Wh)","Up to 240 h (3G)","Up to 14 h (3G)"," Up to 50 h")
}
Battery(battery)
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------

//<script>
// Edit your script here
function TVdetails(Model,LEDlighting,Sizes)
{
    console.log(Model,LEDlighting,Sizes)
}
function tvdetail(callback)
{
callback("LG55LHX","Backlight w/Local Dimming","55 inches")
}
tvdetail(TVdetails)

//--------------------------------------------------------------------------------------

function laptopspc(model,os,Processor,RAM)
{
    console.log(model,os,Processor,RAM)
}
function Laptop(callback)
{
callback("LGp430"," Windows 7 home base, Premium or professional","Second Generation Intel Core i3,i5 or i7 processor","upto 8GB")
}
Laptop(laptopspc)
//------------------------------------------------------------------------------------------