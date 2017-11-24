import 'babel-polyfill';
import React, { Component } from 'react';
import { Admin, Delete, Resource } from 'admin-on-rest';

import './App.css';

import authClient from './authClient';
import Login from './Login';
import Layout from './Layout';
import Menu from './Menu';
import customRoutes from './routes';
import translations from './i18n';
import { PartnerList,PartnerEdit,PartnerCreate,PartnerDelete} from './partner';
import { SettingsList,SettingsEdit} from './settings';
import { UserList,UserEdit,UserCreate} from './users';
import restClient from './restClient';
import fakeRestServer from './restServer';
import { SettingsSchemaList, SettingsSchemaEdit, PartnerSchemaList, PartnerSchemaEdit} from './schema/index';

class App extends Component {
    componentWillMount() {
        this.restoreFetch = fakeRestServer();
    }

    componentWillUnmount() {
        this.restoreFetch();
    }

    render() {
        return (
            <Admin
                title="FreedomPlus settings"
                restClient={restClient}
                customRoutes={customRoutes}
                authClient={authClient}
                loginPage={Login}
                appLayout={Layout}
                menu={Menu}
                messages={translations}
            >
                <Resource name="partners" list={PartnerList} edit={PartnerEdit} create={PartnerCreate} remove={PartnerDelete} />
                <Resource name="settings" list={SettingsList} edit={SettingsEdit}  />
                <Resource name="users" list={UserList}  edit={UserEdit} create={UserCreate}/>                
                <Resource name="settings_schema" list={SettingsSchemaList} edit={SettingsSchemaEdit}/>
                <Resource name="partner_schema" list={PartnerSchemaList} edit={PartnerSchemaEdit}/>
            </Admin>
        );
    }
}

export default App;
