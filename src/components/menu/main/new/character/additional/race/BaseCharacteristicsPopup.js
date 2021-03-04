import {Header, Popup, Table} from "semantic-ui-react";
import React from "react";
import {useTranslation} from "react-i18next";
import {translations} from "../../../../../../../constants/translation/TranslationKeys";



export default function BaseCharacteristicsPopup(props) {
    const { t } = useTranslation();

    return(
        <>
            <Popup
                on='hover'
                position='top center'
                trigger={
                    <Table.Row className={'abilities-table-row'} style={{ cursor: "pointer" }}>
                        <Table.Cell textAlign='center'>{t(translations.menu.main.character.creator.race.characteristics.base.shortcut + props.characteristic)}</Table.Cell>
                        <Table.Cell textAlign='center'>{props.value}</Table.Cell>
                    </Table.Row>
                }
            >
                <Header as='h1'>{t(translations.menu.main.character.creator.race.characteristics.base.title + props.characteristic)}</Header>
                <p>
                    {t(translations.menu.main.character.creator.race.characteristics.base.description + props.characteristic)}
                </p>
            </Popup>
        </>
    )
}