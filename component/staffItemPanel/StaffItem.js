/**
 * Created by youhandan on 2016/11/23.
 */
import React ,{ PropTypes } from 'react'
import { Table } from 'semantic-ui-react'
import StaffDetail from './StaffDetail'

class StaffItem extends React.Component {

    static propTypes = {
        item: React.PropTypes.object.isRequired,
        onStaffItemDelete: React.PropTypes.func.isRequired,
        onModifyStaffItem: React.PropTypes.func.isRequired,
        index :React.PropTypes.string.isRequired
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

    handleStaffDetailComplete(modifiedStaffInformation, index) {

        this.props.onModifyStaffItem(modifiedStaffInformation, index)
    }

    handleStaffDetailClose() {

        this.setState({ staffDetailOpen: false })

    }

    handleStaffDelete() {

        this.props.onStaffItemDelete(this.props.index)
    }

    render() {
        return (
            <Table.Row textAlign='center'>
                <Table.Cell>{ this.props.item.name }</Table.Cell>
                <Table.Cell>{ this.props.item.age }</Table.Cell>
                <Table.Cell>{ this.props.item.role }</Table.Cell>
                <Table.Cell>{ this.props.item.sex }</Table.Cell>
                <Table.Cell>
                    <a style={{margin: 10, cursor: 'pointer'}} onClick={this.handleStaffDelete}>删除</a>
                    <a style={{margin: 10, cursor: 'pointer'}} onClick={this.handleShowStaffDetail}>详情</a>
                </Table.Cell>
                <StaffDetail
                    index={this.props.index}
                    isOpen={this.state.staffDetailOpen}
                    onComplete={this.handleStaffDetailComplete}
                    onClose={this.handleStaffDetailClose}
                    staffInformation={this.props.item}
                />
            </Table.Row>
        )
    }

}

export default StaffItem