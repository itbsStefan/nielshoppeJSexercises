import { afterAll, expect, test, vi } from "vitest"

import { add, substract, multiply, divide, umsatzsteuer } from "./basics.mjs"
import { area, fizzbuzz, fibonacci } from "./basics.mjs"

test('Adding 5 to 3 gives 8', () => {
    expect(add(3, 5)).toBe(8)
})

test('Substracting 5 from 8 gives 3', () => {
    expect(substract(8, 5)).toBe(3)
})

test('Multiplying 4 by 6 gives 24', () => {
    expect(multiply(4, 6)).toBe(24)
})

test('Dividing 12 by 4 gives 3', () => {
    expect(divide(12, 4)).toBe(3)
})

test('Umsatzsteuer 2005 (18k)', () => {
    expect(umsatzsteuer(18000, 2005)).toBe(80) //reguläre Mehrwertsteuersatz ab dem 01. Juli 2020 bis zum Ende des Jahres von 19 auf 16 Prozent gesenkt.
})

test('Umsatzsteuer 2020 (10k)', () => {
    expect(umsatzsteuer(10000, 2020)).toBe(0)
})

test('Umsatzsteuer 2020 (100k)', () => {
    expect(umsatzsteuer(100000, 2020)).toBe(14820) //.toBe(19000)
})

test('Umsatzsteuer 2023 (18k)', () => {
    expect(umsatzsteuer(18000, 2023)).toBe(0)
})

test('Area of unit circle', () => {
    expect(area('circle', { radius: 1 })).toBe(Math.PI)
})

test('Area of triangle', () => {
    expect(area('triangle', { base: 2, height: 1.8 })).toBe(1.8)
})

test('Area of rectangle', () => {
    expect(area('rectangle', { base: 2, height: 1.8 })).toBe(3.6)
})

test('FizzBuzz', () => {
    const consoleMock = vi.spyOn(console, 'log').mockImplementation(() => undefined)
    
    afterAll(consoleMock.mockReset)

    fizzbuzz(10)

    expect(consoleMock).toHaveBeenCalledWith(1)
    expect(consoleMock).toHaveBeenCalledWith(2)
    expect(consoleMock).toHaveBeenCalledWith('fizz')
    expect(consoleMock).toHaveBeenCalledWith(4)
    expect(consoleMock).toHaveBeenCalledWith('buzz')
    expect(consoleMock).toHaveBeenCalledWith('fizz')
    expect(consoleMock).toHaveBeenCalledWith(7)
    expect(consoleMock).toHaveBeenCalledWith(8)
    expect(consoleMock).toHaveBeenCalledWith('fizz')
    expect(consoleMock).toHaveBeenCalledWith('buzz')
})

test('Fibonacci sequence', () => {
    expect(fibonacci(0)).toBe(0)
    expect(fibonacci(1)).toBe(1)
    expect(fibonacci(2)).toBe(1)
    expect(fibonacci(3)).toBe(2)
    expect(fibonacci(4)).toBe(3)
    expect(fibonacci(5)).toBe(5)
    expect(fibonacci(10)).toBe(55)
    expect(fibonacci(15)).toBe(610)
})
