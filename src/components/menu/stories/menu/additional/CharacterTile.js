import {useTranslation} from "react-i18next";
import {Message} from "semantic-ui-react";
import React from "react";


export default function CharacterTile(props) {
    const { t } = useTranslation();

    return(
        <Message size={props.size} color={props.color}>
            <Message.Header>{t(props.name)}</Message.Header>
            <p>
                {props.value}
            </p>
        </Message>
    )
}