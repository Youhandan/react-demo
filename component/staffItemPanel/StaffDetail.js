/**
 * Created by youhandan on 2016/11/23.
 */
import React, { PropTypes } from 'react'
import { Button, Modal, Dropdown, Input, Form, TextArea} from 'semantic-ui-react'
import { sexOptions, roleOptions } from 'component/staffAddition/staffAdditionConstants'

class StaffDetail extends React.Component {

    static propTypes = {
        isOpen: React.PropTypes.bool.isRequired,
        onComplete: React.PropTypes.func.isRequired,
        onClose: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Modal dimmer='blurring' open={this.props.isOpen}>
                <Modal.Header>点击"完成"保存修改，点击"关闭"放弃未保存修改并退出</Modal.Header>

                <Modal.Content>
                    <Form>
                        <Form.Field inline>
                            <label>姓名</label>
                            <Input placeholder='Your Name'/>
                        </Form.Field>
                        <Form.Field inline>
                            <label>年龄</label>
                            <Input placeholder='Your Age(0-150)'/>
                        </Form.Field>
                        <Form.Field inline>
                            <label>性别</label>
                            <Dropdown
                                selection
                                options={sexOptions}
                            />
                        </Form.Field >
                        <Form.Field inline>
                            <label>身份</label>
                            <Dropdown
                                selection
                                options={roleOptions}
                            />
                        </Form.Field>
                        <Form.Field inline>
                            <label>个人描述</label>
                            <TextArea rows='4' cols='50'/>
                        </Form.Field>
                    </Form>
                </Modal.Content>
                <Modal.Actions>
                    <Button positive content="完成"
                            onClick={this.props.onComplete}
                    />
                    <Button negative content='关闭'
                            onClick={this.props.onClose}
                    />
                </Modal.Actions>
            </Modal>
        )
    }
}

export default StaffDetail
