/**
 * Created by youhandan on 2016/11/23.
 */
import React from 'react'
import {Header, Divider, Button, Segment, Form} from 'semantic-ui-react'
import {max} from 'lodash'

import StaffForm from '../commons/StaffForm'
import {Notification, resetMessage} from '../commons/Notification'
import {staffFormValidation} from '../commons/staffFormValidation'

import {initialNewStaff} from '../managerSystemLayout/managerSystemConstants'


class StaffAddition extends React.Component {

    static propTypes = {
        staffData: React.PropTypes.array.isRequired,
        onStaffChange: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            newStaff: initialNewStaff,
            messageHeader: '',
            messageHidden: true,
            messageContent: '',
            messageStatus: 'negative'

        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(newStaff) {
        this.setState({newStaff})
    }

    handleClick() {

        const {name, age, role, sex, description} = this.state.newStaff
        const messageContent = staffFormValidation({name, age})
        if (messageContent !== '') {

            this.setState({
                messageHeader: '录入失败',
                messageHidden: false,
                messageContent: messageContent,
            })

            setTimeout(()=> {
                this.setState(resetMessage)
            }, 2000)

        } else {
            let newStaffData = [...this.props.staffData]
            const staffIds = newStaffData.map((staff) => staff.id)
            const newStaffId = max(staffIds) + 1
            newStaffData.push({
                'name': name,
                'age': age,
                'sex': sex,
                'role': role,
                'description': description,
                'id': newStaffId
            })

            this.setState({
                messageHeader: '录入成功',
                messageStatus: 'success',
                messageHidden: false
            })

            setTimeout(()=> {
                this.setState({...resetMessage, newStaff: initialNewStaff})
            }, 2000)

            this.props.onStaffChange(newStaffData)


        }
    }

    render() {
        return (
            <Segment textAlign='center' attached>
                <Header as='h3'>人员新增</Header>
                <Divider section/>
                <Form>
                    <StaffForm
                        onChange={this.handleChange}
                        staffInformation={this.state.newStaff}
                        isInline={false}
                    />
                    <Notification
                        header={this.state.messageHeader}
                        content={this.state.messageContent}
                        status={this.state.messageStatus}
                        isHidden={this.state.messageHidden}
                    />
                </Form>
                <Button
                    style={{margin: 10}}
                    color='blue'
                    onClick={this.handleClick}
                    content='提交'
                />
            </Segment>
        )
    }
}

export default StaffAddition