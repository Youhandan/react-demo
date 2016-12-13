/**
 * Created by youhandan on 2016/11/23.
 */
import React from 'react'
import {Header, Divider, Button, Segment, Form} from 'semantic-ui-react'

import StaffForm from '../commons/StaffForm'
import {Notification, resetMessage, messageContent} from '../commons/Notification'
import {staffFormValidation} from '../commons/staffFormValidation'
import {addNewStaff} from './addNewStaff'

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
            ...resetMessage
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(newStaff) {
        this.setState({newStaff})
    }

    handleClick() {

        const {name, age} = this.state.newStaff
        const errorContent = staffFormValidation({name, age})
        if (errorContent !== '') {
            const message = messageContent('录入成功', false, errorContent, 'negative')

            this.setState(message)
            this.dismiss(resetMessage, 2000)

        } else {
            const newStaffData = addNewStaff(this.props.staffData, this.state.newStaff)
            const message = messageContent('录入成功', false, errorContent, 'success')

            this.setState(message)
            this.dismiss({...resetMessage, newStaff: initialNewStaff}, 2000)

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
                </Form>
                <Notification
                    header={this.state.messageHeader}
                    content={this.state.messageContent}
                    status={this.state.messageStatus}
                    isHidden={this.state.messageHidden}
                />
                <Button
                    style={{margin: 10}}
                    color='blue'
                    onClick={this.handleClick}
                    content='提交'
                />
            </Segment>
        )
    }

    dismiss (newState, time) {
        setTimeout(()=> {
            this.setState(newState)
        }, time)
    }
}

export default StaffAddition