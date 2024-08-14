function dateExampleOne(){
    let currentDate = Date.now();
    
    console.log('date now from 1790 : ' , Date.now() , ' millisecond ');
    
    let seconds = currentDate / 1000;
    console.log('date in second: ' , seconds);

    let minutes = seconds / 60;
    console.log('date in minute: ' , minutes);

    let hours = minutes / 60;
    console.log('date in hours: ' , hours);

    let days = hours / 24;
    console.log('date in days: ' , days);

    let months = days / 30;
    console.log('date in days: ' , months);

    let years = days / 365;
    console.log('date in days: ' , years);
}

function dateExampleTwo(){
    let currentDate = new Date();
    let birthDay = new Date('OCT 13 , 2003');

    let yourAge = currentDate - birthDay;
    let inSeconds  = yourAge / 1000; // same getTime()
    
    let inMinutes =  inSeconds / 60;
    let inHours = inMinutes / 60;

    let inDays = inHours / 24;
    let inYears = inDays / 365;
    
    console.log("your age in years: " , inYears)
}

function dateINMethods(){
    let currentDate = new Date();
    let inSeconds = currentDate.getTime()
    
    console.log(currentDate)
    
    console.log('The day form 1970 in seconds: ' , inSeconds);
    console.log('the current day: ' , currentDate.getDate());
    
    console.log('the current years: ' , currentDate.getFullYear());
    console.log('the current month: ' , currentDate.getMonth()+1); // + because started from 0 index
    
    console.log('the current day in week: ' , currentDate.getDay()+1); // + because started from 0 index
    console.log('the current hour: ' , currentDate.getHours()); // + because started from 0 index

    // way one :
    // When you want to change time as a customization time as you want 
    // you needed to think about using setTime(); where ever for day or month or ...

    // way two :
    // you can custom your needed time through this way: 
    // let currentDate = new Date(13 10 2003)
    // let currentDate = new Date(13-10-2003)
    // let currentDate = new Date(13-10)
    // and more ...

}

export default function(){
    return 'ahmed nayel al darabee';
}

export {
    dateExampleOne,
    dateExampleTwo,
    dateINMethods
}