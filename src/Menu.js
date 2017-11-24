import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {getUserName} from './authClient'
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import SchemaIcon from 'material-ui/svg-icons/action/settings-ethernet';
import PartnerIcon from 'material-ui/svg-icons/maps/transfer-within-a-station';
import UserIcon from 'material-ui/svg-icons/social/person';

import LabelIcon from 'material-ui/svg-icons/action/label';
import { translate, DashboardMenuItem, MenuItemLink } from 'admin-on-rest';



//import { PartnerIcon } from './partner';

const items = [
    { url:"settings/0",primaryText:"Settings", icon: <SettingsIcon /> },
    { name: 'partners', primaryText:"Partners",icon: <PartnerIcon /> },
    { name: 'users',primaryText:"Users", icon: <UserIcon /> },
    { name: 'settings_schema',primaryText:"Settings Schema", icon: <SchemaIcon /> },
    { name: 'partner_schema',primaryText:"Partner Schema", icon: <SchemaIcon /> },  

];

const getLinksToShow = ()=>{
    if(getUserName()=="ui" || getUserName()=="api"){
        return items.filter(item=> item.name =="partners" || item.primaryText =="Settings" )
    }else{
        return items
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
        {getLinksToShow().map(item => (
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
