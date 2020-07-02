const TIME_ZONE = {
    IST: {
        offset: 0
    },
    GMT: {
        offset: (-1) * (((5 * 60) + 30) * 60 * 1000)
    },
    HKT: {
        offset: ((2 * 60) + 30) * 60 * 1000
    }
}

const getAllTime = (_timeZone, _date, _wanted = ['IST', 'GMT', 'HKT']) => {
    console.log(_date.getTime())
    const _retObject = new Map();
    _wanted.map((timeZone) => {
        // console.log(`${TIME_ZONE[timeZone]['offset']} ${TIME_ZONE[_timeZone]['offset']}`)
        let convertedTime = addOffsetToDate(_date, TIME_ZONE[timeZone]['offset'] - TIME_ZONE[_timeZone]['offset'])
        _retObject.set(timeZone, convertedTime)
        // console.log(_retObject);
    })
    return _retObject
}

const addOffsetToDate = (_date, _offset) => {
    // console.log(_date+" "+_offset+"*******")
    return new Date(_date.getTime() + _offset);
}

const getMonthString = (num) => {
    switch (num) {
        case 0:
            return "Jan"
        case 1:
            return "Feb"
        case 2:
            return "Mar"
        case 3:
            return "Apr"
        case 4:
            return "May"
        case 5:
            return "Jun"
        case 6:
            return "Jul"
        case 7:
            return "Aug"
        case 8:
            return "Sep"
        case 9:
            return "Oct"
        case 10:
            return "Nov"
        case 11:
            return "Dec"
        default:
            return "Jan";
    }
}

const getDayString = (num) => {
    switch (num) {
        case 0:
            return "Sun"
        case 1:
            return "Mon"
        case 2:
            return "Tue"
        case 3:
            return "Wed"
        case 4:
            return "Thu"
        case 5:
            return "Fri"
        case 6:
            return "Sat"
        default:
            return "Sun";
    }
}

let times = getAllTime('IST', new Date())
times.forEach((value, key) => {

})
