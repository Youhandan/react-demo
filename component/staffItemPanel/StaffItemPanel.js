/**
 * Created by youhandan on 2016/11/23.
 */
import React from 'react'
import { isEmpty } from 'lodash'
import {Table} from 'semantic-ui-react'
import StaffItem from './StaffItem'

class StaffItemPanel extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteStaffItem = this.handleDeleteStaffItem.bind(this)
    }

    handleDeleteStaffItem(key) {
        let newStaffData = this.props.items
        delete newStaffData[key]
        this.props.onStaffChange(newStaffData)
    }

    render() {
        let staffItems = []
        if (isEmpty(this.props.items)) {
            staffItems.push(
                <Table.Row textAlign='center'>
                    <Table.Cell>暂无用户</Table.Cell>
                </Table.Row>
            )
        } else {
            for (let index in this.props.items) {
                staffItems.push(
                    <StaffItem
                        key={index}
                        index={index}
                        item={this.props.items[index]}
                        onStaffItemDelete={this.handleDeleteStaffItem}

                    />
                )
            }
        }
        return (
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
                    { staffItems }
                </Table.Body>
            </Table>
        )
    }

}

export default StaffItemPanel
