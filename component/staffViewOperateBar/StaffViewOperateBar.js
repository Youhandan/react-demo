/**
 * Created by youhandan on 2016/11/22.
 */
import React from 'react'
import { Form, Input, Dropdown } from 'semantic-ui-react'
import { staffSelectOptions, sortMethodOptions } from './staffViewOperateBarConstants'

class StaffViewOperateBar extends React.Component {
    static propTypes = {
        onSearchTextChange: React.PropTypes.func.isRequired,
        onStaffSelectByChange: React.PropTypes.func.isRequired,
        onStaffSortByChange: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)

        this.handleSearchTextChange = this.handleSearchTextChange.bind(this)
        this.handleStaffDropDownChange = this.handleStaffDropDownChange.bind(this)
    }

    handleSearchTextChange(e) {
        const newSearchText = e.target.value
        this.props.onSearchTextChange(newSearchText)

    }

    handleStaffDropDownChange(key) {
        if (key === 'select') {
            return (e, {value}) => this.props.onStaffSelectByChange(value)
        }
        else {
            return (e, {value}) => this.props.onStaffSortByChange(value)
        }
    }

    render() {
        return (
            <Form>
                <Form.Group widths='equal' inline>
                    <Form.Field>
                        <Input icon='search' placeholder='Search...'
                               onChange={this.handleSearchTextChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>人员筛选</label>
                        <Dropdown
                            defaultValue={staffSelectOptions[0].value}
                            selection
                            options={staffSelectOptions}
                            onChange={this.handleStaffDropDownChange('select')}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>排列方式</label>
                        <Dropdown
                            defaultValue={sortMethodOptions[0].value}
                            selection
                            options={sortMethodOptions}
                            onChange={this.handleStaffDropDownChange('sort')}
                        />
                    </Form.Field>
                </Form.Group>
            </Form>
        )
    }
}

export default StaffViewOperateBar

