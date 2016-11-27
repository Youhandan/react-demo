/**
 * Created by youhandan on 2016/11/23.
 */
import { roles } from '../managerSystem/managerSystemConstants'


export const staffSelectOptions = [
    { text: '全部', value: 'whole' }
].concat(roles)

export const sortMethodOptions = [
    { text: '身份', value: 'role' },
    { text: '年龄升', value: 'ageUp' },
    { text: '年龄降', value: 'ageDown' }
]