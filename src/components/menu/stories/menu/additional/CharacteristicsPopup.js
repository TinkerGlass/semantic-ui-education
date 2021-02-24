import {Grid, Header, Message, Popup} from "semantic-ui-react";
import {translations} from "../../../../../constants/translation/TranslationKeys";
import React from "react";
import {useTranslation} from "react-i18next";

export default function CharacteristicsPopup(props) {

    return (
        <>
            <Popup
                on='hover'
                trigger={
                    <Message size={"mini"} color={props.colorValue}>
                        <Message.Header>{props.title}</Message.Header>
                        <p>
                            {props.value}
                        </p>
                    </Message>
                }
            >
                <Header as='h1'>{props.popupTitle}</Header>
                <p>
                    {props.popupDescription}
                </p>
            </Popup>
        </>
    )
}