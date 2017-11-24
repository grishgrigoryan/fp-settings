import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import SettingsIcon from 'material-ui/svg-icons/action/settings';
import LabelIcon from 'material-ui/svg-icons/action/label';
import { translate, DashboardMenuItem, MenuItemLink } from 'admin-on-rest';



import { PartnerIcon } from './partner';
import { VisitorIcon } from './visitors';
import { CommandIcon } from './commands';
import { ProductIcon } from './products';
import { CategoryIcon } from './categories';
import { ReviewIcon } from './reviews';

const items = [
    { name: 'settings_schema',primaryText:"Schema", icon: <SettingsIcon /> },
    { name: 'fields',primaryText:"Fields", icon: <SettingsIcon /> },  
    { name: 'partners', primaryText:"Partners",icon: <PartnerIcon /> },
    { name: 'users',primaryText:"Users", icon: <PartnerIcon /> },
];

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
        <DashboardMenuItem onClick={onMenuTap} />
        <MenuItemLink
            to="/settings/0"
            primaryText="Settings"
            leftIcon={<SettingsIcon />}
            onClick={onMenuTap}
        />
        {items.map(item => (
            <MenuItemLink
                key={item.name}
                to={`/${item.name}`}
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
