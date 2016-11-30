/**
 * Created by youhandan on 2016/11/23.
 */
import React ,{ PropTypes } from 'react'
import { Table } from 'semantic-ui-react'
import StaffDetail from './StaffDetail'

class StaffItem extends React.Component {

    static propTypes = {
        staffItem: React.PropTypes.object.isRequired,
        onStaffItemDelete: React.PropTypes.func.isRequired,
        onModifyStaffItem: React.PropTypes.func.isRequired,
        staffId :React.PropTypes.number.isRequired
    }

    constructor(props) {
        super (props)
        this.state = {
            staffDetailOpen: false
        }
        this.handleShowStaffDetail = this.handleShowStaffDetail.bind(this)
        this.handleStaffDetailComplete = this.handleStaffDetailComplete.bind(this)
        this.handleStaffDetailClose = this.handleStaffDetailClose.bind(this)
        this.handleStaffDelete = this.handleStaffDelete.bind(this)


    }

    handleShowStaffDetail() {

        this.setState({ staffDetailOpen: true })
    }

    handleStaffDetailComplete(modifiedStaffInformation, staffId) {

        this.props.onModifyStaffItem(modifiedStaffInformation, staffId)
    }

    handleStaffDetailClose() {

        this.setState({ staffDetailOpen: false })

    }

    handleStaffDelete() {

        this.props.onStaffItemDelete(this.props.staffId)
    }

    render() {
        return (
            <Table.Row textAlign='center'>
                <Table.Cell>{ this.props.staffItem.name }</Table.Cell>
                <Table.Cell>{ this.props.staffItem.age }</Table.Cell>
                <Table.Cell>{ this.props.staffItem.role }</Table.Cell>
                <Table.Cell>{ this.props.staffItem.sex }</Table.Cell>
                <Table.Cell>
                    <a style={{margin: 10, cursor: 'pointer'}} onClick={this.handleStaffDelete}>删除</a>
                    <a style={{margin: 10, cursor: 'pointer'}} onClick={this.handleShowStaffDetail}>详情</a>
                </Table.Cell>
                <StaffDetail
                    staffId={this.props.staffId}
                    isOpen={this.state.staffDetailOpen}
                    onComplete={this.handleStaffDetailComplete}
                    onClose={this.handleStaffDetailClose}
                    staffInformation={this.props.staffItem}
                />
            </Table.Row>
        )
    }

}

export default StaffItem