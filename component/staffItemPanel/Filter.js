/**
 * Created by youhandan on 2016/11/28.
 */

export const search = (searchText, staffItems) =>{
    let filteredStaffData = {}
    for (let staffIndex in staffItems) {
        for (let InformationItem in staffItems[staffIndex]) {
            const itemValue = staffItems[staffIndex][InformationItem]
            if (itemValue.toString().indexOf(searchText) !== -1){
                filteredStaffData[staffIndex] = staffItems[staffIndex]
            }
        }
    }
    return filteredStaffData
}

