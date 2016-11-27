/**
 * Created by youhandan on 2016/11/23.
 */
import React from 'react'
import { Table } from 'semantic-ui-react'
import StaffItem from './StaffItem'

class StaffItemPanel extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let items = []
        if(this.props.items.length == 0) {
            items.push(
                <Table.Row textAlign='center'>
                    <Table.Cell>暂无用户</Table.Cell>
                </Table.Row>
                );
        }else {
            this.props.items.forEach( (item, index) => {
                items.push(<StaffItem key={index} item={item}/>);
            });
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
                    { items }
                </Table.Body>
            </Table>
        )
    }

}

export default StaffItemPanel
