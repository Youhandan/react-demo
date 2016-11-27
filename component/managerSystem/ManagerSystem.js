/**
 * Created by youhandan on 2016/11/25.
 */
import React from 'react'
import { Segment, Header, Grid } from 'semantic-ui-react'

import StaffViewOperateBar from 'component/staffViewOperateBar/StaffViewOperateBar'
import StaffItemPanel from 'component/staffItemPanel/StaffItemPanel'
import StaffAddition from 'component/staffAddition/StaffAddition'

class ManagerSystem extends React.Component {
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
                            < StaffItemPanel />
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        < StaffAddition />
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default ManagerSystem