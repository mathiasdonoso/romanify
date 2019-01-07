const { romanToInt, intToRoman } = require('./../src/Romanify')

describe('Translation from Roman numbers to Integers', () => {
  test('it should translate I', () => {
    const number = romanToInt('I')
    expect(number).toBe(1)
  })

  test('it should translate II', () => {
    const number = romanToInt('II')
    expect(number).toBe(2)
  })

  test('it should translate III', () => {
    const number = romanToInt('III')
    expect(number).toBe(3)
  })

  test('it should translate V', () => {
    const number = romanToInt('V')
    expect(number).toBe(5)
  })

  test('it should translate VII', () => {
    const number = romanToInt('VII')
    expect(number).toBe(7)
  })

  test('it should translate X', () => {
    const number = romanToInt('X')
    expect(number).toBe(10)
  })

  test('it should translate IXX', () => {
    const number = romanToInt('IXX')
    expect(number).toBe(19)
  })

  test('it should translate L', () => {
    const number = romanToInt('L')
    expect(number).toBe(50)
  })

  test('it should translate CXXIV', () => {
    const number = romanToInt('CXXIV')
    expect(number).toBe(124)
  })

  test('it should translate MDII', () => {
    const number = romanToInt('MDII')
    expect(number).toBe(1502)
  })
})

describe('Translation from Integer to Roman number', () => {
  test('it should translate 1', () => {
    const roman = intToRoman(1)
    expect(roman).toBe('I')
  })

  test('it should translate 2', () => {
    const roman = intToRoman(2)
    expect(roman).toBe('II')
  })

  test('it should translate 4', () => {
    const roman = intToRoman(4)
    expect(roman).toBe('IV')
  })

  test('it should translate 8', () => {
    const roman = intToRoman(8)
    expect(roman).toBe('VIII')
  })

  test('it should translate 27', () => {
    const roman = intToRoman(27)
    expect(roman).toBe('XXVII')
  })

  test('it should translate 99', () => {
    const roman = intToRoman(99)
    expect(roman).toBe('XCIX')
  })

  test('it should translate 1202', () => {
    const roman = intToRoman(1202)
    expect(roman).toBe('MCCII')
  })
})
