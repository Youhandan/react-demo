/**
 * Created by youhandan on 2016/11/23.
 */
import React ,{ PropTypes } from 'react'
import { Table } from 'semantic-ui-react'

class StaffItem extends React.Component {

    static propTypes = {
        staffItem: React.PropTypes.object.isRequired,
        onStaffItemDelete: React.PropTypes.func.isRequired,
        onModifyStaffItem: React.PropTypes.func.isRequired,
    }

    constructor(props) {
        super (props)
        this.handleShowStaffDetail = this.handleShowStaffDetail.bind(this)
        this.handleStaffDelete = this.handleStaffDelete.bind(this)


    }

    handleShowStaffDetail() {
        this.props.onModifyStaffItem(this.props.staffItem.id)
    }

    handleStaffDelete() {
        this.props.onStaffItemDelete(this.props.staffItem.id)
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
            </Table.Row>
        )
    }

}

export default StaffItem