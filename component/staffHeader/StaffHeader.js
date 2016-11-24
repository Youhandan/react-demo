/**
 * Created by youhandan on 2016/11/22.
 */
import React from 'react'
import StaffHeaderOperateBar from './StaffHeaderOperateBar'
import { Header, Segment } from 'semantic-ui-react'

class StaffHeader extends React.Component {
    render() {
        return (
            <div>
                <Segment attached inverted color='blue' textAlign='center'>
                    <Header as='h1'>人员管理系统</Header>
                </Segment>
                <Segment attached textAlign='center'>
                    <StaffHeaderOperateBar/>
                </Segment>
            </div>
        )
    }
}

export default StaffHeader