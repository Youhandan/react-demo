/**
 * Created by youhandan on 2016/12/14.
 */
import {max} from 'lodash'

export const addNewStaff = (originStaffData, newStaff) => {
    let newStaffData = [...originStaffData]
    const staffIds = newStaffData.map((staff) => staff.id)
    const newStaffId = max(staffIds) + 1
    newStaffData.push({
        ...newStaff,
        id: newStaffId
    })
    return newStaffData
}