import {useTranslation} from "react-i18next";
import {Message} from "semantic-ui-react";
import React from "react";
import {translations} from "../../../../../constants/translation/TranslationKeys";


export default function ArmorTile(props) {
    const { t } = useTranslation();

    return(
        <Message size={props.size} color={props.color}>
            <Message.Header>{t(translations.menu.side.stories.character.equipment.armor.type + "." + props.armor.type + "." + props.armor.name)}</Message.Header>
            <p>
                {t(translations.menu.side.stories.character.equipment.armor.value) + " : " + props.armor.points}
            </p>
        </Message>
    )
}