/**
 * Created by youhandan on 2016/11/28.
 */

export const search = (searchText, staffItems) => {
    return staffItems.filter((staff) => {
        for (let InformationItem in staff) {
            const itemValue = staff[InformationItem]
            if (itemValue.toString().indexOf(searchText) !== -1) {
                return staff
            }
        }

    })
}

export const staffSelect = (staffSelectBy, staffItems) => {
    if (staffSelectBy !== '全部') {
        return staffItems.filter( (staff) => {
            if (staff.role === staffSelectBy) return staff
        })
    }
    return staffItems

}

export const staffSort = (staffSortBy, staffItems) => {
    switch (staffSortBy) {
        case '身份': {
            return sortByRole(staffItems)
        }
        case '年龄升': {
            break
        }
        case '年龄降': {
            break
        }
    }
}

const sortByRole = (staffItems) => {
    let sortResult = []
    let roleGroup = {}
    staffItems.forEach( (staff) => {
        const staffRole = staff.role
        const hasStaffRole = staffRole in roleGroup
        if (!hasStaffRole) {
            roleGroup[staffRole] = []
            roleGroup[staffRole].push(staff)
        }else roleGroup[staffRole].push(staff)
    } )

    for (let role in roleGroup ) {
        roleGroup[role].forEach((staff) => {
            sortResult.push(staff)
        })
    }
    return sortResult
}
