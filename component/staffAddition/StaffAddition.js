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
    Segment
} from 'semantic-ui-react'

import { sexes, roles } from 'component/managerSystem/managerSystemConstants'

class StaffAddition extends React.Component {
    render() {
        return (
            <Segment textAlign='center' attached>
                <Header as='h3'>人员新增</Header>
                <Divider section/>
                <Form>
                    <Form.Field>
                        <label>姓名</label>
                        <Input placeholder='Your Name'/>
                    </Form.Field>
                    <Form.Field>
                        <label>年龄</label>
                        <Input placeholder='Your Age(0-150)'/>
                    </Form.Field>
                    <Form.Field>
                        <label>性别</label>
                        <Dropdown
                            defaultValue={sexes[0].value}
                            selection
                            options={sexes}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>身份</label>
                        <Dropdown
                            defaultValue={roles[0].value}
                            selection
                            options={roles}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>个人描述</label>
                        <TextArea rows='4' cols='50'/>
                    </Form.Field>
                    <Button type='submit'>提交</Button>
                </Form>
            </Segment>
        )
    }
}

export default StaffAddition