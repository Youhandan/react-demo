/**
 * Created by youhandan on 2016/11/23.
 */
import React from 'react'
import { Table } from 'semantic-ui-react'

class StaffItem extends React.Component {
    render() {
        return (
            <Table.Row textAlign='center'>
                <Table.Cell>张三</Table.Cell>
                <Table.Cell>20</Table.Cell>
                <Table.Cell>主任</Table.Cell>
                <Table.Cell>男</Table.Cell>
                <Table.Cell>
                    <a href='#' style={{margin: 10}}>删除</a>
                    <a href='#' style={{margin: 10}}>详情</a>
                </Table.Cell>
            </Table.Row>
        )
    }

}

export default StaffItem