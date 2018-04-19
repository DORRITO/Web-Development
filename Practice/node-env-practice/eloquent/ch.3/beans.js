const countBs = (word) => {
    let count = 0;
    for (let i of word){
        if (i === "B") count += 1;
    }
    console.log(count)
}

const countChar = (word, char) => {
    let count = 0;
    for (let i of word){
        if (i === char) count += 1;
    }
    console.log(count);
}

countBs("BBCA");
countChar('shakaa', 'a');