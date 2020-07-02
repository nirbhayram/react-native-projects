const TIME_ZONE = {
    IST: {
        offset: 0
    },
    GMT: {
        offset: (-1)*(((5*60)+60)*60*1000)
    },
    HKT: {
        offset: ((2*60)+60)*60*1000
    }
}

const getAllTime = (_timeZone, _date, _wanted=['IST','GMT','HKT'])=>{
    console.log(_date)
    const _retObject = new Map();
    _wanted.map((timeZone)=>{
        // console.log(`${TIME_ZONE[timeZone]['offset']} ${TIME_ZONE[_timeZone]['offset']}`)
        let convertedTime = addOffsetToDate(_date, TIME_ZONE[timeZone]['offset']-TIME_ZONE[_timeZone]['offset'])
        _retObject.set(timeZone, convertedTime)
        // console.log(_retObject);
    })
    return _retObject
}

const addOffsetToDate = (_date,_offset)=>{
    // console.log(_date+" "+_offset+"*******")
    return new Date(_date.getTime()+_offset);
}

console.log( getAllTime('IST',new Date()))