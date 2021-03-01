import {Button, Header, Popup} from "semantic-ui-react";
import {translations} from "../../../../../../constants/translation/TranslationKeys";
import React from "react";
import {useTranslation} from "react-i18next";


export default function GenderSegmentPopup(props) {
    const { t } = useTranslation();

    return(
        <Popup
            on='hover'
            trigger={
                <Button basic color={props.color} size='massive' content={props.icon} fluid onClick={() => props.handle(props.gender, props.tab)}/>
            }
        >
            <Header as='h4'>{t(translations.menu.main.character.creator.gender + '.name.' + props.gender)}</Header>
            <p>
                {t(translations.menu.main.character.creator.gender + '.description.' + props.gender)}
            </p>
        </Popup>
    )
}