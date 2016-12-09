/**
 * Created by youhandan on 2016/11/23.
 */
import React, {PropTypes} from 'react'
import {Button, Modal, Form, Container} from 'semantic-ui-react'
import {staffFormValidation} from '../commons/staffFormValidation'
import {Notification, resetMessage} from '../commons/Notification'
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
            currentStaffInformation: { ...props.staffInformation },
            messageHeader: '',
            messageHidden: true,
            messageContent: '',
            messageStatus: 'negative'
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
        const messageContent = staffFormValidation({name, age})
        if (messageContent !== '') {
            this.setState({
                messageHeader: '修改失败',
                messageHidden: false,
                messageContent: messageContent,
            })

            setTimeout(()=> {
                this.setState(resetMessage)
            }, 2000)

        } else {
            this.setState({
                messageHidden: false,
                messageHeader: '修改成功',
                messageStatus: 'success'
            })

            setTimeout(()=> {
                this.setState(resetMessage)
            }, 2000)
        }
    }

    handleClose() {
        this.props.onComplete(this.state.currentStaffInformation)
        this.setState({currentStaffInformation: this.props.staffInformation})
        this.props.onClose()
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
                                staffInformation={this.props.staffInformation}
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
}


export default StaffDetailDialog
