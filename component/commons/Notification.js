/**
 * Created by youhandan on 2016/11/23.
 */
import React, {PropTypes} from 'react'
import {Message} from 'semantic-ui-react'


export class Notification extends React.Component {
    static propTypes = {
        header: React.PropTypes.string.isRequired,
        content: React.PropTypes.string,
        status: React.PropTypes.string.isRequired,
        isHidden: React.PropTypes.bool.isRequired,
    }

    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.status === 'success') {
            return (
                <Message
                    attached
                    success
                    header={this.props.header}
                    hidden={this.props.isHidden}
                    content={this.props.content}
                />
            )
        }
        if (this.props.status === 'negative') {
            return (
                <Message
                    attached
                    negative
                    header={this.props.header}
                    hidden={this.props.isHidden}
                    content={this.props.content}
                />
            )
        }
    }

}
export const resetMessage = {
    messageHidden: true,
    messageHeader: '',
    messageContent: '',
    messageStatus: 'negative'
}
