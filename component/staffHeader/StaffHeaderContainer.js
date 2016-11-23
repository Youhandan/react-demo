/**
 * Created by youhandan on 2016/11/22.
 */
import React from 'react'
import StaffHeaderOperateBar from './StaffHeaderOperaterBar'
import { Container, Header, Segment } from 'semantic-ui-react'

class StaffHeaderContainer extends React.Component {
    render() {
        return (
            <Container textAlign='center'>
                <Segment attached inverted color='blue'>
                    <Header as='h1'>人员管理系统</Header>
                </Segment>
                <Segment attached>
                    <StaffHeaderOperateBar/>
                </Segment>
            </Container>
        )
    }
}

export default StaffHeaderContainer