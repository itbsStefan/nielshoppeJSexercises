import { expect, test } from "vitest"

import { officialName, isEurope, allNames } from "./countries.mjs"

const countries = require('./countries.json')

test('Cyprus is in Europe', () => {
    expect(isEurope(countries[0])).toBe(true)
})

test('Eritrea is not in Europe', () => {
    expect(isEurope(countries[1])).toBe(false)
})

test('Official name of Liberia is Republic of Liberia', () => {
    expect(officialName(countries[2])).toBe('Republic of Liberia')
})

test('Bermuda\'s only name is Bermuda', () => {
    expect(allNames(countries[3])).toEqual([ 'Bermuda' ])
})

test('Vatican City has six names', () => {
    expect(allNames(countries[4])).toEqual([
        'Vatican City',
        'Vatican City State',
        'Vaticano',
        'Stato della Città del Vaticano',
        'Vaticanæ',
        'Status Civitatis Vaticanæ'
    ])
})