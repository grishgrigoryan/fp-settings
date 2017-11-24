import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {getUserName} from './authClient'
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import LabelIcon from 'material-ui/svg-icons/action/label';
import { translate, DashboardMenuItem, MenuItemLink } from 'admin-on-rest';



import { PartnerIcon } from './partner';

const items = [
    { url:"settings/0",primaryText:"Settings", icon: <SettingsIcon /> },
    { name: 'settings_schema',primaryText:"Schema", icon: <SettingsIcon /> },
    { name: 'fields',primaryText:"Fields", icon: <SettingsIcon /> },  
    { name: 'partners', primaryText:"Partners",icon: <PartnerIcon /> },
    { name: 'users',primaryText:"Users", icon: <PartnerIcon /> },
];

const getLinksToShow = ()=>{
    if(getUserName()=="ui" || getUserName()=="api"){

    }
}

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: '100%',
    },
};

const Menu = ({ onMenuTap, translate, logout }) => (
    <div style={styles.main}>
        {items.map(item => (
            <MenuItemLink
                key={item.name || item.primaryText }
                to={`/${item.url || item.name}`}
                primaryText={item.primaryText || item.name}
                leftIcon={item.icon}
                onClick={onMenuTap}
            />
        ))}
        {logout}
    </div>
);

const enhance = compose(
    connect(state => ({
        theme: state.theme,
        locale: state.locale,
    })),
    translate,
);

export default enhance(Menu);
