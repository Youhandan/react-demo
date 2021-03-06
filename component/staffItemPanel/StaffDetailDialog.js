/**
 * Created by youhandan on 2016/11/23.
 */
import React, {PropTypes} from 'react'
import {Button, Modal, Form, Container} from 'semantic-ui-react'

import {staffFormValidation} from '../commons/staffFormValidation'
import {Notification, resetMessage, messageContent } from '../commons/Notification'
import StaffForm from '../commons/StaffForm'


class StaffDetailDialog extends React.Component {

    static propTypes = {
        isOpen: React.PropTypes.bool.isRequired,
        onComplete: React.PropTypes.func.isRequired,
        onClose: React.PropTypes.func.isRequired,
        staffInformation: React.PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props)
        this.state = {
            currentStaffInformation: this.props.staffInformation,
            ...resetMessage,
            isComplete: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleComplete = this.handleComplete.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleChange(currentStaffInformation) {
        this.setState({currentStaffInformation})
    }

    handleComplete() {
        const { name, age } = this.state.currentStaffInformation
        const errorContent = staffFormValidation({name, age})
        if (errorContent !== '') {
            const message = messageContent('修改失败', false, errorContent, 'negative')

            this.setState(message)
            this.dismiss(resetMessage, 2000)

        } else {
            const message = messageContent('修改成功', false, errorContent, 'success')
            this.setState({...message, isComplete: true})
            this.dismiss(resetMessage, 2000)
        }
    }

    handleClose() {
        if (this.state.isComplete) {
            this.props.onComplete(this.state.currentStaffInformation)
        }
        else this.props.onClose()

    }

    render() {
        return (
            <Modal dimmer='blurring' open={this.props.isOpen}>
                <Modal.Header>点击"完成"保存修改，点击"关闭"放弃未保存修改并退出</Modal.Header>

                <Modal.Content>
                    <Form>
                        <Container text textAlign='left'>
                            <StaffForm
                                onChange={this.handleChange}
                                staffInformation={this.state.currentStaffInformation}
                                isInline={true}
                            />
                        </Container>
                    </Form>
                </Modal.Content>

                <Notification
                    header={this.state.messageHeader}
                    content={this.state.messageContent}
                    status={this.state.messageStatus}
                    isHidden={this.state.messageHidden}
                />

                <Modal.Actions>
                    <Button color='blue' content="完成"
                            onClick={this.handleComplete}
                    />
                    <Button content='关闭'
                            onClick={this.handleClose}
                    />
                </Modal.Actions>
            </Modal>
        )
    }

    dismiss (newState, time) {
        setTimeout(()=> {
            this.setState(newState)
        }, time)
    }
}


export default StaffDetailDialog
