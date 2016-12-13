/**
 * Created by youhandan on 2016/11/23.
 */
import React from 'react'
import {isEmpty} from 'lodash'
import {Table} from 'semantic-ui-react'
import StaffItem from './StaffItem'
import StaffDetailDialog from './StaffDetailDialog'
import {search, staffSelect, staffSort} from './Filter'

class StaffItemPanel extends React.Component {

    static propTypes = {
        staffItems: React.PropTypes.array.isRequired,
        onStaffChange: React.PropTypes.func.isRequired,
        searchText: React.PropTypes.string.isRequired,
        staffSelectBy: React.PropTypes.string.isRequired,
        staffSortBy: React.PropTypes.string.isRequired,
    }

    constructor(props) {
        super(props)
        this.state = {
            isOpenStaffDetailDialog: false,
            staffDetail: {}
        }
        this.handleDeleteStaffItem = this.handleDeleteStaffItem.bind(this)
        this.handleModifyStaffItemInformation = this.handleModifyStaffItemInformation.bind(this)
        this.handleStaffDetailComplete = this.handleStaffDetailComplete.bind(this)
        this.handleStaffDetailClose = this.handleStaffDetailClose.bind(this)

    }

    handleDeleteStaffItem(staffId) {
        let newStaffData = this.props.staffItems
        newStaffData.forEach((staff, staffIndex) => {
            if (staff.id === staffId) {
                newStaffData.splice(staffIndex, 1)
            }
        })
        this.props.onStaffChange(newStaffData)
    }

    handleModifyStaffItemInformation(staffId) {
        this.props.staffItems.forEach((staff) => {
            if (staff.id === staffId) {
                this.setState({
                    staffDetail: staff,
                    isOpenStaffDetailDialog: true
                })
            }
        })
    }

    handleStaffDetailComplete(modifiedStaffInformation) {
        const newStaffItems = [...this.props.staffItems]
        newStaffItems.forEach((staff, staffIndex) => {
            if (staff.id === modifiedStaffInformation.id) {
                newStaffItems[staffIndex] = modifiedStaffInformation
            }
        })
        this.props.onStaffChange(newStaffItems)
        this.handleStaffDetailClose()
    }

    handleStaffDetailClose() {
        this.setState({
            isOpenStaffDetailDialog: false,
            staffDetail: {}
        })

    }

    render() {
        let searchFilteredStaffItem = search(this.props.searchText, this.props.staffItems)
        let selectStaffItem = staffSelect(this.props.staffSelectBy, searchFilteredStaffItem)
        let filteredStaffItem = staffSort(this.props.staffSortBy, selectStaffItem)
        let staffViewItems = []
        if (isEmpty(filteredStaffItem)) {
            staffViewItems.push(
                <Table.Row textAlign='center' key='no'>
                    <Table.Cell colSpan='16'>暂无用户</Table.Cell>
                </Table.Row>
            )
        } else {
            staffViewItems = filteredStaffItem.map((staff) => {
                return (
                    <StaffItem
                        key={staff.id}
                        staffItem={staff}
                        onStaffItemDelete={this.handleDeleteStaffItem}
                        onModifyStaffItem={this.handleModifyStaffItemInformation}
                    />

                )
            })
        }
        return (
            <div>
                <Table striped attached>
                    <Table.Header>
                        <Table.Row textAlign='center'>
                            <Table.HeaderCell>姓名</Table.HeaderCell>
                            <Table.HeaderCell>年龄</Table.HeaderCell>
                            <Table.HeaderCell>身份</Table.HeaderCell>
                            <Table.HeaderCell>性别</Table.HeaderCell>
                            <Table.HeaderCell>操作</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        { staffViewItems }
                    </Table.Body>
                </Table>
                {this.renderStaffDetailDialog()}
            </div>
        )
    }

    renderStaffDetailDialog() {
        const {isOpenStaffDetailDialog, staffDetail} = this.state
        if (isOpenStaffDetailDialog) {
            return (
                <StaffDetailDialog
                    isOpen={isOpenStaffDetailDialog}
                    onComplete={this.handleStaffDetailComplete}
                    onClose={this.handleStaffDetailClose}
                    staffInformation={staffDetail}
                />
            )
        }
    }
}

export default StaffItemPanel
