var nummerArray = [];
function randomization(randomizedNummer)
{  
    var loops = 0;
    for(loops; loops < 10; loops++){
        sammaNummer = -1;
        minstaTal = 0;
        störstaTal = 99;
        randomizedNummer = Math.round(Math.random(minstaTal, störstaTal) * 100);
        if(nummerArray.indexOf(randomizedNummer) == sammaNummer) {
            nummerArray.push(randomizedNummer);
        }
        else {
            console.log("<-- Antal gånger det blev samma nummer");
            loops = (loops - 1);
        }
    }
}
randomization();
console.log(nummerArray);
nummerArray.sort(function(a, b) {
    return a - b;
});
console.log(nummerArray)