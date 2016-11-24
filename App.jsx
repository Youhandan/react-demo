import React from 'react'
import StaffHeaderContainer from './component/staffHeader/StaffHeader'
import StaffItemPanel from './component/staffItemPanel/StaffItemPanel'
import StaffAddition from './component/staffAddition/StaffAddition'

class App extends React.Component {
    render() {
        return (
            <div>
                <StaffHeaderContainer />
                < StaffItemPanel />
                < StaffAddition />
            </div>
        )
    }
}

export default App