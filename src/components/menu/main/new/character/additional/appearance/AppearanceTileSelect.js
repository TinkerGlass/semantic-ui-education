import {useTranslation} from "react-i18next";
import {Form, Message, Segment} from "semantic-ui-react";
import React, {useEffect, useState} from "react";
import {translations} from "../../../../../../../constants/translation/TranslationKeys";


export default function AppearanceTileSelect(props) {
    const { t } = useTranslation(['translations', 'appearance']);

    const [value, setValue] = useState('');

    useEffect(() => {
        if(props.value !== undefined){
            setValue(props.value);
            props.changeProperValue(props.value);
        }
        else {
            setValue(props.options[0].key);
            props.changeProperValue(props.options[0].key);
        }
    }, []);

    const changeValue = (val) => {
        console.log(value);
        setValue(val);
        props.changeProperValue(val);
    };

    return(
        <>
            <Segment vertical textAlign={"center"}>
                <Message>
                    <h4>{t(props.name)}</h4>
                    {value}
                </Message>
            </Segment>
            <Segment vertical textAlign={"center"}>
                <Form.Select
                    fluid
                    onChange={(e, { value }) => changeValue( value )}
                    options={props.options}
                    value={value}
                />
            </Segment>
        </>
    )
}