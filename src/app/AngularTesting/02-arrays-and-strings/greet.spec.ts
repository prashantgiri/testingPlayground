import { greet } from "./greet"

describe('greet',()=>{
    it('should include name',()=>{
        const result = greet('Prashant');
        expect(result).toContain('Prashant');
    })
})