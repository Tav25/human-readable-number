module.exports = function toReadable(number) {
    if (number === 0) { return "zero" }

    let unitsHumans;
    let hundredsHumans;
    let dozensHumans;


    let units = number % 10;
    let dozens = number % 100 - units;
    if (units + dozens < 20) {
        units = units + dozens;
        dozens = 0;
    }
    let hundreds = number % 1000 - dozens - units;

    if (units === 0) { unitsHumans = ""; }
    else if (units === 1) { unitsHumans = 'one'; }
    else if (units === 2) { unitsHumans = 'two'; }
    else if (units === 3) { unitsHumans = 'three'; }
    else if (units === 4) { unitsHumans = 'four'; }
    else if (units === 5) { unitsHumans = 'five'; }
    else if (units === 6) { unitsHumans = 'six'; }
    else if (units === 7) { unitsHumans = 'seven'; }
    else if (units === 8) { unitsHumans = 'eight'; }
    else if (units === 9) { unitsHumans = 'nine'; }
    else if (units === 10) { unitsHumans = 'ten'; }
    else if (units === 11) { unitsHumans = 'eleven'; }
    else if (units === 12) { unitsHumans = 'twelve'; }
    else if (units === 13) { unitsHumans = 'thirteen'; }
    else if (units === 14) { unitsHumans = 'fourteen'; }
    else if (units === 15) { unitsHumans = 'fifteen'; }
    else if (units === 16) { unitsHumans = 'sixteen'; }
    else if (units === 17) { unitsHumans = 'seventeen'; }
    else if (units === 18) { unitsHumans = 'eighteen'; }
    else if (units === 19) { unitsHumans = 'nineteen'; }

        if (dozens === 0) { dozensHumans = ''; }
    else if (dozens === 20) { dozensHumans = 'twenty'; }
    else if (dozens === 30) { dozensHumans = 'thirty'; }
    else if (dozens === 40) { dozensHumans = 'forty'; }
    else if (dozens === 50) { dozensHumans = 'fifty'; }
    else if (dozens === 60) { dozensHumans = 'sixty'; }
    else if (dozens === 70) { dozensHumans = 'seventy'; }
    else if (dozens === 80) { dozensHumans = 'eighty'; }
    else if (dozens === 90) { dozensHumans = 'ninety'; }


    if (hundreds === 0) { hundredsHumans = ""; }
    else if (hundreds === 100) { hundredsHumans = 'one hundred'; }
    else if (hundreds === 200) { hundredsHumans = 'two hundred'; }
    else if (hundreds === 300) { hundredsHumans = 'three hundred'; }
    else if (hundreds === 400) { hundredsHumans = 'four hundred'; }
    else if (hundreds === 500) { hundredsHumans = 'five hundred'; }
    else if (hundreds === 600) { hundredsHumans = 'six hundred'; }
    else if (hundreds === 700) { hundredsHumans = 'seven hundred'; }
    else if (hundreds === 800) { hundredsHumans = 'eight hundred'; }
    else if (hundreds === 900) { hundredsHumans = 'nine hundred'; }



    //   console.log(`* ${hundreds} ${dozens} ${units}`)
    //   console.log(`${hundredsHumans} ${dozensHumans} ${unitsHumans}`)
    return (`${hundredsHumans} ${dozensHumans} ${unitsHumans}`).replace(/\s+/g, ' ').trim();// delete 2 space
}
