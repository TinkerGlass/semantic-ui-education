import {useTranslation} from "react-i18next";
import {Popup, Table} from "semantic-ui-react";
import {translations} from "../../../../../../../constants/translation/TranslationKeys";
import React from "react";

export default function RaceSkillsPopup(props) {
    const { t } = useTranslation(['skills']);

    return(
        <>
            <Popup
                on='hover'
                trigger={
                    <Table.Cell textAlign='center'>{t(translations.menu.main.character.creator.race.skills.name + props.skill)}</Table.Cell>
                }
            >
                <p>
                    {t(translations.menu.main.character.creator.race.skills.description + props.skill)}
                </p>
            </Popup>
        </>
    )
}