/**
 * Created by youhandan on 2016/11/23.
 */
import React ,{ PropTypes } from 'react'
import { Table } from 'semantic-ui-react'
import StaffDetail from './StaffDetail'

class StaffItem extends React.Component {

    constructor(props) {
        super (props)
        this.state = {
            staffDetailOpen: false
        }
        this.handleShowStaffDetail = this.handleShowStaffDetail.bind(this)
        this.handleStaffDetailComplete = this.handleStaffDetailComplete.bind(this)
        this.handleStaffDetailClose = this.handleStaffDetailClose.bind(this)


    }

    handleShowStaffDetail() {
        this.setState({ staffDetailOpen: true })
    }

    handleStaffDetailComplete() {
        this.setState({ staffDetailOpen: false })
    }
    handleStaffDetailClose() {
        this.setState({ staffDetailOpen: false })

    }

    render() {
        return (
            <Table.Row textAlign='center'>
                <Table.Cell>{ this.props.item.name }</Table.Cell>
                <Table.Cell>{ this.props.item.age }</Table.Cell>
                <Table.Cell>{ this.props.item.role }</Table.Cell>
                <Table.Cell>{ this.props.item.sex }</Table.Cell>
                <Table.Cell>
                    <a style={{margin: 10, cursor: 'pointer'}}>删除</a>
                    <a style={{margin: 10, cursor: 'pointer'}} onClick={this.handleShowStaffDetail}>详情</a>
                </Table.Cell>
                <StaffDetail
                    isOpen={this.state.staffDetailOpen}
                    onComplete={this.handleStaffDetailComplete}
                    onClose={this.handleStaffDetailClose}
                />
            </Table.Row>
        )
    }

}

export default StaffItem