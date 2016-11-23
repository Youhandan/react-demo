/**
 * Created by youhandan on 2016/11/23.
 */
import React from 'react'
import { Table } from 'semantic-ui-react'
import StaffItem from './StaffItem'

class StaffItemPanel extends React.Component {
    render() {
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
                       <StaffItem/>
                    </Table.Body>
                </Table>
        )
    }

}

export default StaffItemPanel
