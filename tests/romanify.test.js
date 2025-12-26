import test from 'node:test';
import { strictEqual } from 'node:assert';
import { romanToInt, intToRoman } from './../src/Romanify.js';

// Translation from Roman numbers to Integers
test('it should translate I', () => {
  const number = romanToInt('I');
  strictEqual(number, 1);
});

test('it should translate II', () => {
  const number = romanToInt('II');
  strictEqual(number, 2);
});

test('it should translate III', () => {
  const number = romanToInt('III');
  strictEqual(number, 3);
});

test('it should translate V', () => {
  const number = romanToInt('V');
  strictEqual(number, 5);
});

test('it should translate VII', () => {
  const number = romanToInt('VII');
  strictEqual(number, 7);
});

test('it should translate X', () => {
  const number = romanToInt('X');
  strictEqual(number, 10);
});

test('it should translate IXX', () => {
  const number = romanToInt('IXX');
  strictEqual(number, 19);
});

test('it should translate L', () => {
  const number = romanToInt('L');
  strictEqual(number, 50);
})

test('it should translate CXXIV', () => {
  const number = romanToInt('CXXIV');
  strictEqual(number, 124);
});

test('it should translate MDII', () => {
  const number = romanToInt('MDII');
  strictEqual(number, 1502);
});

// Translation from Integer to Roman number
test('it should translate 1', () => {
  const roman = intToRoman(1);
  strictEqual(roman, 'I');
});

test('it should translate 2', () => {
  const roman = intToRoman(2);
  strictEqual(roman, 'II');
});

test('it should translate 4', () => {
  const roman = intToRoman(4);
  strictEqual(roman, 'IV');
});

test('it should translate 8', () => {
  const roman = intToRoman(8);
  strictEqual(roman, 'VIII');
});

test('it should translate 27', () => {
  const roman = intToRoman(27);
  strictEqual(roman, 'XXVII');
});

test('it should translate 99', () => {
  const roman = intToRoman(99);
  strictEqual(roman, 'XCIX');
});

test('it should translate 1202', () => {
  const roman = intToRoman(1202);
  strictEqual(roman, 'MCCII');
});
