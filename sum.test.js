const sum = require('./sum')

test('test sum is return correctly',()=>{
    expect(sum(1,2)).toBe(3)
})