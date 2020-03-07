
// 1344. Angle Between Hands of a Clock
// Medium

// 69

// 13

// Add to List

// Share
// Given two numbers, hour and minutes.Return the smaller angle(in sexagesimal units) formed between the hour and the minute hand.


/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    let minuteangle = (minutes/60 * 360) %360
    let hourangle = (hour/12 * 360 + (minutes/60 * 1/12 * 360))%360

    if(Math.min(Math.abs(hourangle - minuteangle),Math.abs(minuteangle-hourangle)) <= 180){
   return Math.min(Math.abs(hourangle - minuteangle),Math.abs(minuteangle-hourangle))
    }else{
        return 360- Math.min(Math.abs(hourangle - minuteangle),Math.abs(minuteangle-hourangle))
    }
    
};

console.log(angleClock(12,30))
