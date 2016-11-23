import React from 'react'
import StaffHeaderContainer from './component/staffHeader/StaffHeaderContainer'
import { Container } from 'semantic-ui-react'

class App extends React.Component {
    render() {
        return (
            <Container >
                <StaffHeaderContainer />
            </Container >

        )
    }
}

export default App