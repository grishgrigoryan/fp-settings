import React from 'react';
import { List,Create,Delete,
     Datagrid,
     SimpleForm,
     DisabledInput,
     ReferenceInput,
     Filter,
      TextField,
      TextInput,
      ReferenceManyField,
      DateField,
      LongTextInput,
      Edit,
      NumberField,
      StarRatingField,
      NbItemsField,
      ProductReferenceField,
      TabbedForm,
      SelectInput,
      SelectField,
      SelectArrayInput,
      FileInput,
      FileField,
      BooleanField,NumberInput,
      Chip,
      NullableBooleanInput,BooleanInput,
      FormTab} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/social/person';
import EditButton from '../buttons/EditButton';


export const UserIcon = Icon;
const stateList=[{"id":"AL","name":"Alabama"},{"id":"AK","name":"Alaska"},{"id":"AS","name":"American Samoa"},{"id":"AZ","name":"Arizona"},{"id":"AR","name":"Arkansas"},{"id":"CA","name":"California"},{"id":"CO","name":"Colorado"},{"id":"CT","name":"Connecticut"},{"id":"DE","name":"Delaware"},{"id":"DC","name":"District Of Columbia"},{"id":"FM","name":"Federated States Of Micronesia"},{"id":"FL","name":"Florida"},{"id":"GA","name":"Georgia"},{"id":"GU","name":"Guam"},{"id":"HI","name":"Hawaii"},{"id":"ID","name":"Idaho"},{"id":"IL","name":"Illinois"},{"id":"IN","name":"Indiana"},{"id":"IA","name":"Iowa"},{"id":"KS","name":"Kansas"},{"id":"KY","name":"Kentucky"},{"id":"LA","name":"Louisiana"},{"id":"ME","name":"Maine"},{"id":"MH","name":"Marshall Islands"},{"id":"MD","name":"Maryland"},{"id":"MA","name":"Massachusetts"},{"id":"MI","name":"Michigan"},{"id":"MN","name":"Minnesota"},{"id":"MS","name":"Mississippi"},{"id":"MO","name":"Missouri"},{"id":"MT","name":"Montana"},{"id":"NE","name":"Nebraska"},{"id":"NV","name":"Nevada"},{"id":"NH","name":"New Hampshire"},{"id":"NJ","name":"New Jersey"},{"id":"NM","name":"New Mexico"},{"id":"NY","name":"New York"},{"id":"NC","name":"North Carolina"},{"id":"ND","name":"North Dakota"},{"id":"MP","name":"Northern Mariana Islands"},{"id":"OH","name":"Ohio"},{"id":"OK","name":"Oklahoma"},{"id":"OR","name":"Oregon"},{"id":"PW","name":"Palau"},{"id":"PA","name":"Pennsylvania"},{"id":"PR","name":"Puerto Rico"},{"id":"RI","name":"Rhode Island"},{"id":"SC","name":"South Carolina"},{"id":"SD","name":"South Dakota"},{"id":"TN","name":"Tennessee"},{"id":"TX","name":"Texas"},{"id":"UT","name":"Utah"},{"id":"VT","name":"Vermont"},{"id":"VI","name":"Virgin Islands"},{"id":"VA","name":"Virginia"},{"id":"WA","name":"Washington"},{"id":"WV","name":"West Virginia"},{"id":"WI","name":"Wisconsin"},{"id":"WY","name":"Wyoming"}];
const FullNameField = ({ record = {}, size = 25 }) => <span>
    <span style={{ display: 'inline-block', width: size/3 }}>&nbsp;</span>
        {record.name}
    </span>;
const UserTitile = ({ record }) => record ? <FullNameField record={record} size={32} /> : null;
const BrandingLogo = ({ record }) => <img src ={record.branding_logo} title="desc" /> ;
const PartnerDeleteTitle = (({ record, translate }) => <span>Delete {record && `${record.name}`} partner ?</span>);
const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);
export const UserList = (props) => (
    <List {...props } filters={<UserFilter />} perPage={20}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="email" />
            <SelectField source="type" choices={[{ id: 'admin', name: 'admin' },{ id: 'applciation', name: 'applciation' }]}/>
            <TextField source="access" />
            <BooleanField source="active" />
            <EditButton />
        </Datagrid>
    </List>
);
export const UserEdit = (props) => (
    <Edit title={<UserTitile/>} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput type="email" source="email" validation={{ email: true }}  />
            <SelectInput source="type" choices={[{ id: 'admin', name: 'admin' },{ id: 'applciation', name: 'applciation' }]}/>
            <NumberInput source="access" />
            <BooleanInput source="active" />
        </SimpleForm>
    </Edit>
);
export const UserCreate = (props) => (
    <Create {...props}>
           <SimpleForm>
            <DisabledInput source="id" />
            <TextInput type="email" source="email" validation={{ email: true }}  />
            <SelectInput source="type" choices={[{ id: 'admin', name: 'admin' },{ id: 'applciation', name: 'applciation' }]}/>
            <NumberInput source="access" />
            <BooleanInput source="active" />
        </SimpleForm>
    </Create>
);
export const PartnerDelete = (props) => <Delete {...props} title={<PartnerDeleteTitle />} />;