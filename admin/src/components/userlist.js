import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    DeleteButton
} from 'react-admin'

const UserList = (props) => {
    return <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <EditButton basePath='/Admin' />
            <DeleteButton basePath='/Admin' />
        </Datagrid>
    </List>
}

export default UserList;
