import { RandToken } from '@src/lib/vendors/node-rand-token'

describe('methods correctly in the RandToken', () => {
    test('should return string correctly invoked RandToken', () => {
        const token = new RandToken().generate(32)
        expect(32).toEqual(token.length)
    })
})
