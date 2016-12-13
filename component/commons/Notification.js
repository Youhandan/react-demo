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
        const { header, isHidden, content, status} = this.props
        if (status === 'success') {
            return (
                <Message
                    attached
                    success
                    header={header}
                    hidden={isHidden}
                    content={content}
                />
            )
        }
        if (status === 'negative') {
            return (
                <Message
                    attached
                    negative
                    header={header}
                    hidden={isHidden}
                    content={content}
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

export const messageContent = (header, isHidden, content, status) => {
    return {
        messageHeader: header,
        messageHidden: isHidden,
        messageContent: content,
        messageStatus: status
    }
}