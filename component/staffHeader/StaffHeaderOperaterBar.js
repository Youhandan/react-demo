/**
 * Created by youhandan on 2016/11/22.
 */
import React from 'react'
import { Form, Input, Dropdown } from 'semantic-ui-react'
import { staffSelectOptions, sortMethodOptions } from './StaffHeaderConstants'

class StaffHeaderOperateBar extends React.Component {
    render() {
        return(
            <Form>
                <Form.Group widths='equal' inline>
                    <Form.Field>
                        <Input icon='search' placeholder='Search...' />
                    </Form.Field>
                    <Form.Field>
                        <label>人员筛选</label>
                        <Dropdown
                            defaultValue={staffSelectOptions[0].value}
                            selection
                            options={staffSelectOptions}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>排列方式</label>
                        <Dropdown
                            defaultValue={sortMethodOptions[0].value}
                            selection
                            options={sortMethodOptions}
                        />
                    </Form.Field>
                </Form.Group>
            </Form>
        )
    }
}

export default StaffHeaderOperateBar

