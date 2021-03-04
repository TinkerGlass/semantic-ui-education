import {useTranslation} from "react-i18next";
import {Form} from "semantic-ui-react";
import React, {useEffect, useState} from "react";


export default function HealthTile(props) {
    const { t } = useTranslation();

    const [health, setHealth] = useState(props.race.min);


    useEffect(() => {
        if(props.appearance !== undefined)
            setHealth(props.appearance.health);
        else
            setHealth(props.race.min);
    }, []);

    return(
        <Form.Input
            label={`Duration: ${health}ms `}
            min={props.race.min}
            max={props.race.max}
            name='duration'
            onChange={(e, { name, value }) => setHealth(value)}
            step={1}
            type='range'
            value={health}
        />
    )
}