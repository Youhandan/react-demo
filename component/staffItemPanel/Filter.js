/**
 * Created by youhandan on 2016/11/28.
 */
import { sortBy, orderBy, filter, values } from 'lodash'
import { ageDown, ageUp, role, whole} from '../managerSystemLayout/managerSystemConstants'

export const search = (searchText, staffItems) => {
    return filter(staffItems, (staff) => {
        const hasSearchTextIndex = values(staff).join('').indexOf(searchText)
        if(hasSearchTextIndex !== -1) return staff
    })
}

export const staffSelect = (staffSelectBy, staffItems) => {
    if (staffSelectBy !== whole) {
        return staffItems.filter( (staff) => {
            if (staff.role === staffSelectBy) return staff
        })
    }
    return staffItems

}

export const staffSort = (staffSortBy, staffItems) => {
    switch (staffSortBy) {
        case role: {
            return sortByRole(staffItems)
        }
        case ageUp: {
            return sortByAge(staffItems, 'asc')
        }
        case ageDown: {
            return sortByAge(staffItems, 'desc')
        }
    }
}

const sortByRole = (staffItems) => {
    return sortBy(staffItems, 'role')
}

const sortByAge = (staffItems, sortMethod) => {
    return orderBy(staffItems, 'age', sortMethod)
}