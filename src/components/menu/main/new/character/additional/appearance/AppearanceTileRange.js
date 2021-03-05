import {useTranslation} from "react-i18next";
import {Form, Message, Segment} from "semantic-ui-react";
import React, {useEffect, useState} from "react";
import {translations} from "../../../../../../../constants/translation/TranslationKeys";


export default function AppearanceTileRange(props) {
    const { t } = useTranslation(['translations', 'appearance']);

    const [value, setValue] = useState('0');

    useEffect(() => {
        if(props.health !== undefined){
            setValue(props.value);
            props.changeProperValue(props.value);
        }
        else {
            props.changeProperValue(props.race.min);
        }
    }, []);

    const changeValue = (val) => {
        setValue(val);
        props.changeProperValue(props.race.min + parseInt(val, 10));
    };

    return(
        <>
            <Segment vertical textAlign={"center"}>
                <Message>
                    <h4>{t(props.name)}</h4>
                    {props.race.min + parseInt(value, 10)}
                </Message>
            </Segment>
            <Segment vertical textAlign={"center"}>
                <Form.Input
                    fluid
                    min={0}
                    max={props.race.max - props.race.min}
                    onChange={(e) => changeValue(e.target.value)}
                    step={1}
                    type='range'
                    value={value}
                />
            </Segment>
        </>
    )
}