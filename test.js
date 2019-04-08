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

// test('1')(26);
// testTwo('2')(27);

let dispatch = (action) => {
    console.log('action:', action);
}
const next = dispatch;

const surfaceMiddleWare = (next) => (action) => {
    console.log('surface', 'she is very beautiful!');
    next(action);
}

const infoMiddleWare = (next) => (action) => {
    console.log('info:', 'she is 26 years old');
    next(action);
}


dispatch = infoMiddleWare(surfaceMiddleWare(next));

dispatch('i`m a girl');


