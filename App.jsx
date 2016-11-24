import React from 'react'
import { Container } from 'semantic-ui-react'
import StaffHeaderContainer from './component/staffHeader/StaffHeader'
import StaffItemPanel from './component/staffItemPanel/StaffItemPanel'
import StaffAddition from './component/staffAddition/StaffAddition'

class App extends React.Component {
    render() {
        return (
            <Container >
                <StaffHeaderContainer />
                <StaffItemPanel />
                <StaffAddition />
            </Container >

        )
    }
}

export default App