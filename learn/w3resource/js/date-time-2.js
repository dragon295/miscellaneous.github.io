//1 

const check_date = (d) => 
Object.prototype.toString.call(d) === "[object Date]" && !isNaN(d.getTime())

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2

const addCharac = (char) => {
	const now = new Date();
	let date = now.getDate();
	let month = now.getMonth() + 1;
	let year = now.getFullYear();
	if (date < 10) date = 0 + date;
	if(month < 10) month = 0 + month;
	console.log(date+char+month+char+year)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3

const get_day = (month, year) => new Date(year, month, 0).getDate();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4

const getMonth = (val) => {
	const mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
	console.log(mlist[val.getMonth()])
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 5

const compare_date = (date1, date2) => 
date1 > date2 ?  "Date1 > Date2" : date1 < date2 ? "Date2 > Date1" : "Date1 = Date2";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6

const add_minutes = (time, minutes) => new Date(time.getTime() + minutes * 60000);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 7

const is_weekend = (day) => 
new Date(day).getDay() === 6 || new Date(day).getDay() === 0 ? "weekend" : undefined;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 8

const date_diff_indays = (date1, date2) => {
	let dt1 = new Date(date1);
	let dt2 = new Date(date2);
	return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 9

const lastday = (year, month) => new Date(year, month + 1, 0).getDate();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 10

const yesterday = (date) => {
	let timer = new Date(date);
	return new Date(timer.setDate(timer.getDate() - 1))
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 11

const max_date = (arr) => arr.sort((a, b) => new Date(a) - new Date(b)).pop();


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 12

const min_date = (arr) => arr.sort((a, b) => new Date(a) - new Date(b)).shift();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 13

const timeConvert = (num) => {
	let count = 0, sec = 60;
	while (num - sec >= 0) {
		count++;
		sec+=60
	}
	console.log(`${count}hour(s) and ${num % 60} minute(s)`)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 14

const days_of_a_year = (year) =>
year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0) ? 366 : 365;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15

const quarter_of_the_year = (val) => {
	let month = new Date(val).getMonth() + 1;
	return Math.ceil(month / 3)
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 16

const days_passed = (val) => {
	let day = val;
	let first = new Date(day.getFullYear(), 0,1);
	return Math.floor((day - first + 1) / (1000*60*60*24));
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 17

const Unix_timestamp = (t) =>{
	let dt = new Date(t*1000);
	let hr = dt.getHours();
	let m = "0" + dt.getMinutes();
	let s = "0" + dt.getSeconds();
	return hr+ ':' + m.substr(-2) + ':' + s.substr(-2);  
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 18

const calculate_age = (dob) => {
	let diff_ms = Date.now() - dob.getTime();
	let age_dt = new Date(diff_ms);
	return Math.abs(age_dt.getUTCFullYear() - 1970);
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 19

const day_of_the_month = (d) => (d.getDate() < 10 ? "0" : "") + d.getDate();


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 20

const short_Days = (dt) => {
	const date = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	console.log(date[dt.getDay()])
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 21

const long_Days = (dt) => {
	const date = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	console.log(date[dt.getDay()])
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 22

const ISO_numeric_date = (dt) => dt.getDay() === 0 ? 7 : dt.getDay();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 23

const english_ordinal_suffix = (dt) => 
dt.getDate() + (dt.getDate() % 10 === 1 && dt.getDate() !== 11 
	? "st" 
	: dt.getDate() % 10 === 2 && dt.getDate() !== 12
	? "nd"
	: dt.getDate() % 10 === 3 && dt.getDate() !== 13
	? "rd"
	: "th")

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 24

const ISO8601_week_no = (dt) => {
	let first = new Date(dt.getFullYear(), 0, 1);
	console.log(Math.ceil((dt.getTime() - first.getTime()) / (1000 * 60 * 60 * 24 * 7) ))
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 25

const full_month = (dt) => {
	const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	return month[dt.getMonth()];
} 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 26

const numeric_month = (dt) => (dt.getMonth() < 9 ? '0' : '') + (dt.getMonth() + 1);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 27

const short_month = (dt) => {
	const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	return month[dt.getMonth()]
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 28

const full_year = (dt) => dt.getFullYear(); 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 29

const sort_year = (dt) => parseInt((""+dt.getFullYear()).slice(-2))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 30

const  lower_am_pm = (dt) => dt.getHours() < 12 ? 'AM' : 'PM';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 31

const  upper_am_pm = (dt) =>  dt.getHours() < 12 ? 'AM' : 'PM';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 32

const internet_time = (dt) => 
Math.floor((((dt.getUTCHours() + 1) % 24) + dt.getUTCMinutes() / 60 + dt.getUTCSeconds() / 3600) * 1000 / 24);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 33

const hours_with_zeroes = (dt) => {
	return ((dt.getHours() % 12 || 12) < 10 ? '0' : '') + (dt.getHours() % 12 || 12);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 34

const hours_without_zeroes = (dt) => dt.getHours();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 35

const minutes_with_leading_zeros = (dt) => 
dt.getMinutes() < 10 ? "0" + dt.getMinutes() : "" + dt.getMinutes();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 36

const seconds_with_leading_zeros = (dt) => 
dt.getSeconds() < 10 ? "0" + dt.getSeconds() : "" + dt.getSeconds();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 37

const timeZone = (dt) =>  /\((.*)\)/.exec(new Date())[1];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 38

const daylights_savings = (dt) => { 
	let dst = null;
	for (let i = 0; i < 12; ++i) {
		let d = new Date(dt.getFullYear(), i, 1);
		let offset = dt.getTimezoneOffset();

		if (dst === null) dst = offset;
		else if (offset < dst) {
			dst = offset; 
			break;
		} 
		else if (offset > dst) 
			break;
	}
	return (dt.getTimezoneOffset() == dst) || 0;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 39

const diff_to_GMT = (dt) => 
(-dt.getTimezoneOffset() < 0 ? '-' : '+') + (Math.abs(dt.getTimezoneOffset() / 60) < 10 ? '0' : '') + (Math.abs(dt.getTimezoneOffset() / 60)) + '00';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 40


const timezone_offset_in_seconds = (dt) => -dt.getTimezoneOffset() * 60;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 41

const add_years = (dt, n) => new Date(dt.setFullYear(dt.getFullYear() + n));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 42

const add_weeks = (dt, n) => 
week !== null ? new Date(dt.setDate(dt.getDate() + (n * 7))) : undefined;


//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 43

const add_months = (dt, n) => new Date(dt.setMonth(dt.getMonth() + n));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 44

const diff_minutes = (dt1, dt2) => Math.abs(dt1.getMinutes() - dt2.getMinutes());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 45

const diff_hours = (dt1, dt2) => Math.abs(dt1.getHours() - dt2.getHours());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 46

const diff_days = (dt1, dt2) => Math.floor(Math.abs((dt1.getTime() - dt2.getTime()) / (1000 * 60 * 60 * 24)));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 47

const diff_weeks = (dt1, dt2) => Math.floor(Math.abs((dt1.getTime() - dt2.getTime()) / (1000 * 60 * 60 * 24 * 7)))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 48

const diff_months = (dt1, dt2) => Math.floor(Math.abs(dt1.getMonth() - dt2.getMonth()) + 1);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 49

const diff_years = (dt1, dt2) => Math.floor(Math.abs(dt1.getFullYear() - dt2.getFullYear()));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 50

const startOfWeek = (dt) => {
	let diff = dt.getDate() - dt.getDay() + (dt.getDay() === 0 ? -6 : 1);
	return new Date(dt.setDate(diff));
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 51

const endOfWeek = (dt) => new Date(dt.setDate(dt.getDate() - (dt.getDay()-  1) + 6));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 52

const startOfMonth = (dt) => new Date(dt.getFullYear(), dt.getMonth(), 1);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 53

const endOfMonth = (dt) => new Date(dt.getFullYear(), dt.getMonth() + 1, 0)
