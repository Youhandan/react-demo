/**
 * Created by youhandan on 2016/11/23.
 */
import React, {PropTypes} from 'react'
import { Dropdown, Input, Form, TextArea } from 'semantic-ui-react'
import { sexes, roles } from '../managerSystemLayout/managerSystemConstants'

class StaffForm extends React.Component {

    static propTypes = {
        onChange: React.PropTypes.func.isRequired,
        staffInformation: React.PropTypes.object.isRequired,
        isInline: React.PropTypes.bool.isRequired
    }


    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSelectChange = this.handleSelectChange.bind(this)
        this.state = { ...this.props.staffInformation }
    }

    componentWillReceiveProps({staffInformation}) {
        this.setState({ ...staffInformation})
    }

    handleInputChange(key) {
        return (e) => {
            this.setState(
                {[key]: e.target.value},
                this.handleChange
            )
        }
    }

    handleSelectChange(key) {
        return (e, {value}) => {
            this.setState(
                {[key]: value},
                this.handleChange
            )
        }
    }

    handleChange() {
        this.props.onChange(this.state)
    }


    render() {
        const { name, age, sex, role, description} = this.state
        return (
            <div>
                <Form.Field inline={this.props.isInline}>
                    <label>姓名</label>
                    <Input
                        value={name}
                        onChange={this.handleInputChange('name')}
                    />
                </Form.Field>
                <Form.Field inline={this.props.isInline}>
                    <label>年龄</label>
                    <Input
                        type='number'
                        value={age}
                        onChange={this.handleInputChange('age')}
                    />
                </Form.Field>
                <Form.Field inline={this.props.isInline}>
                    <label>性别</label>
                    <Dropdown
                        defaultValue={sex}
                        onChange={this.handleSelectChange('sex')}
                        selection
                        options={sexes}
                    />
                </Form.Field >
                <Form.Field inline={this.props.isInline}>
                    <label>身份</label>
                    <Dropdown
                        defaultValue={role}
                        onChange={this.handleSelectChange('role')}
                        selection
                        options={roles}
                    />
                </Form.Field>
                <Form.Field inline={this.props.isInline}>
                    <label>个人描述</label>
                    <TextArea rows='4' cols='50'
                              value={description}
                              onChange={this.handleInputChange('description')}
                    />
                </Form.Field>
            </div>
        )
    }
}

export default StaffForm
