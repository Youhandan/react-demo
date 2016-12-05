/**
 * Created by youhandan on 2016/11/23.
 */
import React from 'react'
import {
    Form,
    Input,
    Dropdown,
    Header,
    Divider,
    TextArea,
    Button,
    Segment,
    Message
} from 'semantic-ui-react'
import { max } from 'lodash'

import {sexes, roles} from '../managerSystemLayout/managerSystemConstants'

class StaffAddition extends React.Component {

    static propTypes = {
        staffData: React.PropTypes.array.isRequired,
        onStaffChange: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            newStaffName: '',
            newStaffAge: '',
            newStaffSex: sexes[0].value,
            newStaffRole: roles[0].value,
            newStaffDescription: '',
            isHiddenFailMessage: true,
            failMessageContent: '',
            isShowSuccessMessage: false

        }

        this.handleClick = this.handleClick.bind(this)
        this.handleNewStaffName = this.handleNewStaffName.bind(this)
        this.handleNewStaffAge = this.handleNewStaffAge.bind(this)
        this.handleNewStaffSex = this.handleNewStaffSex.bind(this)
        this.handleNewStaffRole = this.handleNewStaffRole.bind(this)
        this.handleNewStaffDescription = this.handleNewStaffDescription.bind(this)
    }

    handleClick(e) {

        e.preventDefault()

        if (this.state.newStaffName === '') {
            this.setState({
                isHiddenFailMessage: false,
                failMessageContent: '名字不能为空'
            })
            setTimeout(()=>this.setState({
                isHiddenFailMessage: true,
                failMessageContent: ''
            }), 2000)

        } else if (this.state.newStaffAge === '') {
            this.setState({
                isHiddenFailMessage: false,
                failMessageContent: '年龄不能为空'
            })
            setTimeout(()=>this.setState({
                isHiddenFailMessage: true,
                failMessageContent: ''
            }), 2000)
        } else if (!/^\d+$/.test(this.state.newStaffAge) || this.state.newStaffAge > 150) {
            this.setState({
                isHiddenFailMessage: false,
                failMessageContent: '年龄为0~150的整数'
            })
            setTimeout(()=>this.setState({
                isHiddenFailMessage: true,
                failMessageContent: ''
            }), 2000)

        } else {

            let newStaffData = this.props.staffData
            const staffIds = newStaffData.map( (staff) => staff.id)
            const newStaffId = max(staffIds)+1
            newStaffData.push( {
                'name': this.state.newStaffName,
                'age': this.state.newStaffAge,
                'sex': this.state.newStaffSex,
                'role': this.state.newStaffRole,
                'description': this.state.newStaffDescription,
                'id': newStaffId
            })

            this.props.onStaffChange(newStaffData)

            this.setState({
                isShowSuccessMessage: true

            })

            setTimeout(()=>this.setState({
                isShowSuccessMessage: false,
                newStaffName: '',
                newStaffAge: '',
                newStaffSex: sexes[0].value,
                newStaffRole: roles[0].value,
                newStaffDescription: '',
            }), 2000)
        }
    }

    handleNewStaffName(e) {

        this.setState({
            newStaffName: e.target.value
        })

    }

    handleNewStaffAge(e) {

        this.setState({
            newStaffAge: e.target.value
        })

    }

    handleNewStaffSex(e, {value}) {

        this.setState({
            newStaffSex: value
        })

    }

    handleNewStaffRole(e, {value}) {

        this.setState({
            newStaffRole: value
        })

    }

    handleNewStaffDescription(e) {

        this.setState({
            newStaffDescription: e.target.value
        })

    }

    render() {
        return (
            <Segment textAlign='center' attached>
                <Header as='h3'>人员新增</Header>
                <Divider section/>
                <Form>
                    <Form.Field>
                        <label>姓名</label>
                        <Input
                            placeholder='Your Name'
                            onChange={this.handleNewStaffName}
                            value={this.state.newStaffName}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>年龄</label>
                        <Input
                            placeholder='Your Age(0-150)'
                            onChange={this.handleNewStaffAge}
                            value={this.state.newStaffAge}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>性别</label>
                        <Dropdown
                            value={this.state.newStaffSex}
                            selection
                            options={sexes}
                            onChange={this.handleNewStaffSex}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>身份</label>
                        <Dropdown
                            value={this.state.newStaffRole}
                            selection
                            options={roles}
                            onChange={this.handleNewStaffRole}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>个人描述</label>
                        <TextArea
                            rows='4' cols='50'
                            value={this.state.newStaffDescription}
                            onChange={this.handleNewStaffDescription}
                        />
                    </Form.Field>

                    <Message
                        attached
                        success
                        header='录入成功'
                        visible={this.state.isShowSuccessMessage}
                    />
                    <Message
                        negative
                        attached
                        header='录入失败'
                        content={this.state.failMessageContent}
                        hidden={this.state.isHiddenFailMessage}
                    />

                    <Button
                        color='blue'
                        onClick={this.handleClick}
                    >提交</Button>
                </Form>
            </Segment>
        )
    }
}

export default StaffAddition