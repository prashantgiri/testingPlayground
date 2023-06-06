// import { compute } './compute'

import { compute } from "./compute"

// describe('compute', ()=>{
//     it('should return 0 if value is negative', ()=>{
//         const result = compute(-1);
//         expect(result).toBe()
//     })
// })

describe('compute', ()=>{
    it('should return 0 when input is negative', ()=>{
        const result = compute(-1);
        expect(result).toBe(0);
    })
})
describe('compute', ()=>{
    it('should return incremented when input is positive', ()=>{
        const result = compute(1);
        expect(result).toBe(2);
    })
})