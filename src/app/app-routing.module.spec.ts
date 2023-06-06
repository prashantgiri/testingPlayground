import {routes} from './app-routing.module'
import { UserComponent } from './user/user.component'

describe('routes', ()=>{
    it('should contain a route for /user', ()=>{
        expect(routes).toContain({path: 'user', component: UserComponent})
    })
})