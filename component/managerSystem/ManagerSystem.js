/**
 * Created by youhandan on 2016/11/25.
 */
import React from 'react'
import { Segment, Header, Grid } from 'semantic-ui-react'

import StaffViewOperateBar from 'component/staffViewOperateBar/StaffViewOperateBar'
import StaffItemPanel from 'component/staffItemPanel/StaffItemPanel'
import StaffAddition from 'component/staffAddition/StaffAddition'

var staffData = {
    '1': {description: '我是一匹来自远方的狼。', sex: '男', age: 20, name: '张三', role: '主任'},
    '2': {description: '我是一匹来自远方的狼。', sex: '女', age: 22, name: '王二麻', role: '学生'},
    '3': {description: '我是一匹来自远方的狼。', sex: '女', age: 24, name: '李晓婷', role: '实习'},
    '4': {description: '我是一匹来自远方的狼。', sex: '男', age: 23, name: '张春田', role: '实习'},
    '5': {description: '我是一匹来自远方的狼。', sex: '男', age: 22, name: '刘建国', role: '学生'},
    '6': {description: '我是一匹来自远方的狼。', sex: '男', age: 24, name: '张八', role: '主任'},
    '7': {description: '我是一匹来自远方的狗。', sex: '男', age: 35, name: '李四', role: '老师'},
    '8': {description: '我是一匹来自远方的猪。', sex: '男', age: 42, name: '王五', role: '学生'},
    '9': {description: '我是一匹来自远方的牛。', sex: '男', age: 50, name: '赵六', role: '实习'},
    '10': {description: '我是一匹来自远方的马。', sex: '男', age: 60, name: '孙七', role: '实习'}
}

class ManagerSystem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            staffData: staffData,
            isStaffDetailModalOpen : false

        }

        this.handleStaffChange = this.handleStaffChange.bind(this)
    }

    handleStaffChange(newStaffData) {
        this.setState ( {
            staffData: newStaffData
        })
    }
    render() {
        return (
            <div>
                <Segment attached inverted color='blue' textAlign='center'>
                    <Header as='h1'>人员管理系统</Header>
                </Segment>
                <Grid>
                    <Grid.Column width={12}>
                        <Segment textAlign='center'>
                            <StaffViewOperateBar />
                            <StaffItemPanel
                                items={this.state.staffData}
                                onStaffChange={this.handleStaffChange}/>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <StaffAddition
                            staffData={this.state.staffData}
                            onStaffChange={this.handleStaffChange}
                        />
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default ManagerSystem