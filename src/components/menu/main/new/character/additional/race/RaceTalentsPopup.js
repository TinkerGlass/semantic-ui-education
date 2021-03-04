import {useTranslation} from "react-i18next";
import {Popup, Table} from "semantic-ui-react";
import {translations} from "../../../../../../../constants/translation/TranslationKeys";
import React from "react";

export default function RaceTalentsPopup(props) {
    const { t } = useTranslation(['skills']);

    return(
        <>
            <Popup
                on='hover'
                trigger={
                    <Table.Cell textAlign='center'>{t(translations.menu.main.character.creator.race.talents.name + props.talent)}</Table.Cell>
                }
            >
                <p>
                    {t(translations.menu.main.character.creator.race.talents.description + props.talent)}
                </p>
            </Popup>
        </>
    )
}