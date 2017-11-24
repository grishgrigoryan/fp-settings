import React from 'react';
import { List,Create,Delete,
     Datagrid,
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
      SelectArrayInput,
      FileInput,
      FileField,
      Chip,
      NullableBooleanInput,
      FormTab} from 'admin-on-rest';
import Icon from 'material-ui/svg-icons/communication/comment';
import EditButton from '../buttons/EditButton';


const stateList=[{"id":"AL","name":"Alabama"},{"id":"AK","name":"Alaska"},{"id":"AS","name":"American Samoa"},{"id":"AZ","name":"Arizona"},{"id":"AR","name":"Arkansas"},{"id":"CA","name":"California"},{"id":"CO","name":"Colorado"},{"id":"CT","name":"Connecticut"},{"id":"DE","name":"Delaware"},{"id":"DC","name":"District Of Columbia"},{"id":"FM","name":"Federated States Of Micronesia"},{"id":"FL","name":"Florida"},{"id":"GA","name":"Georgia"},{"id":"GU","name":"Guam"},{"id":"HI","name":"Hawaii"},{"id":"ID","name":"Idaho"},{"id":"IL","name":"Illinois"},{"id":"IN","name":"Indiana"},{"id":"IA","name":"Iowa"},{"id":"KS","name":"Kansas"},{"id":"KY","name":"Kentucky"},{"id":"LA","name":"Louisiana"},{"id":"ME","name":"Maine"},{"id":"MH","name":"Marshall Islands"},{"id":"MD","name":"Maryland"},{"id":"MA","name":"Massachusetts"},{"id":"MI","name":"Michigan"},{"id":"MN","name":"Minnesota"},{"id":"MS","name":"Mississippi"},{"id":"MO","name":"Missouri"},{"id":"MT","name":"Montana"},{"id":"NE","name":"Nebraska"},{"id":"NV","name":"Nevada"},{"id":"NH","name":"New Hampshire"},{"id":"NJ","name":"New Jersey"},{"id":"NM","name":"New Mexico"},{"id":"NY","name":"New York"},{"id":"NC","name":"North Carolina"},{"id":"ND","name":"North Dakota"},{"id":"MP","name":"Northern Mariana Islands"},{"id":"OH","name":"Ohio"},{"id":"OK","name":"Oklahoma"},{"id":"OR","name":"Oregon"},{"id":"PW","name":"Palau"},{"id":"PA","name":"Pennsylvania"},{"id":"PR","name":"Puerto Rico"},{"id":"RI","name":"Rhode Island"},{"id":"SC","name":"South Carolina"},{"id":"SD","name":"South Dakota"},{"id":"TN","name":"Tennessee"},{"id":"TX","name":"Texas"},{"id":"UT","name":"Utah"},{"id":"VT","name":"Vermont"},{"id":"VI","name":"Virgin Islands"},{"id":"VA","name":"Virginia"},{"id":"WA","name":"Washington"},{"id":"WV","name":"West Virginia"},{"id":"WI","name":"Wisconsin"},{"id":"WY","name":"Wyoming"}];
const BrandingLogo = ({ record }) => <img src ={record.branding_logo} title="desc" /> ;
export const SettingsEdit = (props) => (
    <Edit title="Settings" {...props}>
        <TabbedForm>
            <FormTab label="base">
                <TextInput source="contact_name"  />
                <TextInput type="email" source="contact_email" label="Email" validation={{ email: true }}  />
                <TextInput source="contact_phone_number" />
            </FormTab>
            <FormTab label="loan-processing">
                <NullableBooleanInput source="loan-processing.concurent_application_check" label="Concurent application check" />
                <TextInput source="loan-processing_max_application_per_day" label="Max application per day" style={{ display: 'inline-block'}} />
            </FormTab>
            <FormTab label="lead-distribution">
                <NullableBooleanInput source="lead-distribution_wcb_release_cusp"  label="WCB release cusp"/>
            </FormTab>
            <FormTab label="ui">
                <TextInput source="ui_title"  />
                <LongTextInput source="ui_description" label="Description" />
                <LongTextInput source="ui_footer_disclaimer" label="Disclaimer" />
            </FormTab>
            <FormTab label="knock-out">
                <SelectArrayInput options={{ fullWidth: true }} label="Accepted States" source="knock-out_accepted_states"  choices={stateList} />
                <TextInput source="knock-out_minimum_loan_amount"  label="Minimum loan amount"   />
                <TextInput source="knock-out_maximum_loan_amount"   label="Maximum loan amount"  />
                
            </FormTab>
            <FormTab label="branding">
                <TextInput source="branding_title" landing="title"  />
                <LongTextInput source="branding_description" landing="description" />        
                <FileInput source="branding_logo" label="Logo">
                    <FileField source="branding_logo" title="title" />
                </FileInput>
            </FormTab>
        </TabbedForm>
    </Edit>
);
export const SettingsIcon = Icon;
export const SettingsList = (props) => (
    <List {...props } title='Settings'  perPage={25}>
        <Datagrid>
            <TextField source="ui_title" />
            <EditButton />
        </Datagrid>
    </List>
);
