import moment from "moment-jalaali"

export const formatNumber = (inputNumber) => {
    let formetedNumber = (Number(inputNumber)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    let splitArray = formetedNumber.split('.');
    if (splitArray.length > 1) {
        formetedNumber = splitArray[0];
    }
    return (formetedNumber);
};

export const dataUtcToShamsi = (data) => {
    const date = new Date(data);
    const JalaliDate = date.toLocaleDateString('fa-IR');
    const JalaliTime = date.toLocaleTimeString('fa-IR');
    const dateWithTime = JalaliDate + ' - ' + JalaliTime
    return dateWithTime
}

export const convertDateShamsiToMiladi = (date) => {
    console.log(date)
    let m = moment(date, 'jYYYY/jM/jD')
    let str = m.format('YYYY-M-D')
    return str
}

const randomizeTime = () => {
    return String(Date.now());
};

const randomizeNumbers = () => {
    let text = String(Math.random());
    for (let i = text.length; i < 19; ++i) {
        text += '0';
    }
    return text.substring(2, 19);
}

export const generateId = () => {
    return  randomizeTime() + '-' + randomizeNumbers();
};




export const convertPersianDigitInEnglish = (str) => {


    let persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g]
    let arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g]
    if (typeof str === 'string') {
        for (var i = 0; i < 10; i++) {
            str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
    }
    return str;
}



export const convertDateMiladiToShamsi = (date) => {
    let m = moment(date, 'YYYY/M/D') // Parse a Jalaali date
    let str = m.format('jYYYY/jM/jD')
    return str
}


export const convertEnglishNumberToPersian = (num)=>{
    let str =  num
    str =str.replaceAll("1","۱");
    str = str.replaceAll("2","۲");
    str =str.replaceAll("3","۳");
    str = str.replaceAll("4","۴");
    str = str.replaceAll("5","۵");
    str = str.replaceAll("6","۶");
    str = str.replaceAll("7","۷");
    str = str.replaceAll("8","۸");
    str = str.replaceAll("9","۹");
    str = str.replaceAll("0","۰");
    return str;
}