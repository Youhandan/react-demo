/**
 * Created by youhandan on 2016/11/28.
 */

export const search = (searchText, staffItems) => {
    let searchFilteredStaffData = {}
    for (let staffIndex in staffItems) {
        for (let InformationItem in staffItems[staffIndex]) {
            const itemValue = staffItems[staffIndex][InformationItem]
            if (itemValue.toString().indexOf(searchText) !== -1) {
                searchFilteredStaffData[staffIndex] = staffItems[staffIndex]
            }
        }
    }
    return searchFilteredStaffData
}

export const staffSelect = (staffSelectBy, staffItems) => {
    let selectFilteredStaffData = {}
    if (staffSelectBy !== '全部') {
        for (let staffIndex in staffItems) {
            const staffRole = staffItems[staffIndex]['role']
            if (staffRole === staffSelectBy) selectFilteredStaffData[staffIndex] = staffItems[staffIndex]
        }
        return selectFilteredStaffData

    }
    return staffItems

}
