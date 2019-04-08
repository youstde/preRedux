const test = (type) => (age) => {
    // 这里的内容是最后一个函数的
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