import React from 'react'
import StaffHeaderContainer from './component/staffHeader/StaffHeaderContainer'
import { Container } from 'semantic-ui-react'
import StaffItemPanel from './component/staffItemPanel/StaffItemPanel'

class App extends React.Component {
    render() {
        return (
            <Container >
                <StaffHeaderContainer />
                <StaffItemPanel />
            </Container >

        )
    }
}

export default App