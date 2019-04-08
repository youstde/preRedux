const test = (type) => (age) => {
    console.log(type);
    console.log(age);
}

const testTwo = (type) => {
    return (age) => {
        console.log(type);
        console.log(age);
    }
}

test('1')(26);
testTwo('2')(27);