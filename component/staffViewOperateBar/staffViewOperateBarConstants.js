/**
 * Created by youhandan on 2016/11/23.
 */
import { roles, whole, ageDown, ageUp, role} from '../managerSystemLayout/managerSystemConstants'


export const staffSelectOptions = [
    { text: whole, value: whole }
].concat(roles)

export const sortMethodOptions = [
    { text: role, value: role },
    { text: ageUp, value: ageUp },
    { text: ageDown, value: ageDown }
]