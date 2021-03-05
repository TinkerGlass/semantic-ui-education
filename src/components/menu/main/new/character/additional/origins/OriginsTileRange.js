import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {Form, Message, Segment} from "semantic-ui-react";


export default function OriginsTileRange(props) {
    const { t } = useTranslation(['translations', 'origins']);

    const [value, setValue] = useState('0');
    console.log("JPRDL"  + props.race);

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
        <Segment>
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
        </Segment>
    )
}