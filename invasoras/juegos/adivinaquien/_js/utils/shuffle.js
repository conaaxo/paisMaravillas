function shuffle(arrayObj) {
    var currentIndex = arrayObj.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = arrayObj[currentIndex];
        arrayObj[currentIndex] = arrayObj[randomIndex];
        arrayObj[randomIndex] = temporaryValue;
    }
    return arrayObj;
}

window.shuffle = shuffle;
