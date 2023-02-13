
// Print number every 3 seconds

function generateNumbers(value, incrementBy, stopValue) {
    if (value === stopValue) return;
    value = value + incrementBy;
    setTimeout(() => {
        console.log(value)
    }, 3000);
    console.log("Before setTimeout", value)
    generateNumbers(value, incrementBy, stopValue)
}

generateNumbers(2, 2, 10)