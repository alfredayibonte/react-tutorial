import {isEmpty, isNotValidPasswordLength, doesNotMatchEmailRegex} from './signin.utils';
describe('isEmpty', () => {
    it('should equal true if value is undefined', () => {
        expect(isEmpty(undefined)).toBe(true)
    })
    it('should equal true if value is empty string', () => {
        expect(isEmpty('        ')).toBe(true)
    })
})

describe('isNotValidPasswordLength', () => {
    test('isNotValidPasswordLength undefined to equal true', () => {
        expect(isNotValidPasswordLength(undefined)).toBe(true)
    })
    test('isNotValidPasswordLength alfr to equal true', () => {
        expect(isNotValidPasswordLength('alfr')).toBe(true)
    })
    test('isNotValidPasswordLength alfrsdalfdlkndf return false', () => {
        expect(isNotValidPasswordLength('alfrsdalfdlkndf')).toBe(false)
    })
})
describe('doesNotMatchEmailRegex', () => {
    test('doesNotMatchEmailRegex alfred to equal true', () => {
        expect(doesNotMatchEmailRegex('alfred')).toBe(true)
    })
    test('doesNotMatchEmailRegex alfred@ to equal true', () => {
        expect(doesNotMatchEmailRegex('alfred@')).toBe(true)
    })
    test('doesNotMatchEmailRegex alfred@alfred. to equal true', () => {
        expect(doesNotMatchEmailRegex('alfred@alfred.')).toBe(true)
    })
    test('doesNotMatchEmailRegex alfred@gmail.com to equal false', () => {
        expect(doesNotMatchEmailRegex('alfred@gmail.com')).toBe(false)
    })
    
})