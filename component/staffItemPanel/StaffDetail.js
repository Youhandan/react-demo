/**
 * Created by youhandan on 2016/11/23.
 */
import React, {PropTypes} from 'react'
import {Button, Modal, Dropdown, Input, Form, TextArea, Container, Message} from 'semantic-ui-react'
import {sexes, roles} from '../managerSystem/managerSystemConstants'

class StaffDetail extends React.Component {

    static propTypes = {
        isOpen: React.PropTypes.bool.isRequired,
        onComplete: React.PropTypes.func.isRequired,
        onClose: React.PropTypes.func.isRequired,
        staffInformation :React.PropTypes.object.isRequired,
        index :React.PropTypes.string.isRequired
    }


    constructor(props) {
        super(props)
        this.state = {
            currentName: this.props.staffInformation.name,
            currentAge: this.props.staffInformation.age,
            currentSex: this.props.staffInformation.sex,
            currentRole: this.props.staffInformation.role,
            currentDescription: this.props.staffInformation.description,
            isHiddenSuccessMessage: true,
            isHiddenFailMessage: true,
            failMessageContent: ''

        }
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handleAgeChange = this.handleAgeChange.bind(this)
        this.handleSexChange = this.handleSexChange.bind(this)
        this.handleRoleChange = this.handleRoleChange.bind(this)
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
        this.handleComplete = this.handleComplete.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleNameChange(e) {

        this.setState({ currentName: e.target.value })
    }

    handleAgeChange(e) {

        this.setState({ currentAge: e.target.value })

    }

    handleSexChange(e) {

        this.setState({ currentSex: e.target.textContent })

    }

    handleRoleChange(e) {

        this.setState({ currentRole: e.target.textContent })

    }

    handleDescriptionChange(e) {

        this.setState({ currentDescription: e.target.value })

    }

    handleComplete() {
        if (this.state.currentName === '') {
            this.setState({
                isHiddenFailMessage: false,
                failMessageContent: '名字不能为空'
            })
            setTimeout(()=>this.setState({
                isHiddenFailMessage: true,
                failMessageContent: ''
            }),2000)

        }else if (this.state.currentAge === '') {
            this.setState({
                isHiddenFailMessage: false,
                failMessageContent: '年龄不能为空'
            })
            setTimeout(()=>this.setState({
                isHiddenFailMessage: true,
                failMessageContent: ''
            }),2000)
        }else if (!/^\d+$/.test(this.state.currentAge) || this.state.currentAge>150){
            this.setState({
                isHiddenFailMessage: false,
                failMessageContent: '年龄为0~150的整数'
            })
            setTimeout(()=>this.setState({
                isHiddenFailMessage: true,
                failMessageContent: ''
            }),2000)

        }else{
            let modifiedStaffInformation = this.props.staffInformation
            modifiedStaffInformation.name = this.state.currentName
            modifiedStaffInformation.age  = this.state.currentAge
            modifiedStaffInformation.sex  = this.state.currentSex
            modifiedStaffInformation.role  = this.state.currentRole
            modifiedStaffInformation.description  = this.state.currentDescription

            this.props.onComplete(modifiedStaffInformation, this.props.index)

            this.setState({
                isHiddenSuccessMessage: false
            })
            setTimeout(()=>this.setState({
                isHiddenSuccessMessage: true
            }),2000)

        }
    }

    handleClose() {

        this.setState({
            currentName: this.props.staffInformation.name,
            currentAge: this.props.staffInformation.age,
            currentSex: this.props.staffInformation.sex,
            currentRole: this.props.staffInformation.role,
            currentDescription: this.props.staffInformation.description

        })

        this.props.onClose()

    }

    render() {
        return (
            <Modal dimmer='blurring' open={this.props.isOpen}>
                <Modal.Header>点击"完成"保存修改，点击"关闭"放弃未保存修改并退出</Modal.Header>

                <Modal.Content>
                    <Form>
                        <Container text textAlign='left'>
                            <Form.Field inline>
                                <label>姓名</label>
                                <Input
                                    value={this.state.currentName}
                                    onChange={this.handleNameChange}
                                />
                            </Form.Field>
                            <Form.Field inline>
                                <label>年龄</label>
                                <Input
                                    value={this.state.currentAge}
                                    onChange={this.handleAgeChange}
                                />
                            </Form.Field>
                            <Form.Field inline>
                                <label>性别</label>
                                <Dropdown
                                    value={this.state.currentSex}
                                    onChange={this.handleSexChange}
                                    selection
                                    options={sexes}
                                />
                            </Form.Field >
                            <Form.Field inline>
                                <label>身份</label>
                                <Dropdown
                                    value={this.state.currentRole}
                                    onChange={this.handleRoleChange}
                                    selection
                                    options={roles}
                                />
                            </Form.Field>
                            <Form.Field inline>
                                <label>个人描述</label>
                                <TextArea rows='4' cols='50'
                                          value={this.state.currentDescription}
                                          onChange={this.handleDescriptionChange}
                                />
                            </Form.Field>
                        </Container>
                    </Form>
                </Modal.Content>

                <Message
                    attached
                    success
                    header='修改成功'
                    hidden={this.state.isHiddenSuccessMessage}
                />
                <Message
                    negative
                    attached
                    header='修改失败'
                    content={this.state.failMessageContent}
                    hidden={this.state.isHiddenFailMessage}
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

export default StaffDetail
