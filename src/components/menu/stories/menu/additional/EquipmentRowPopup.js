import {useTranslation} from "react-i18next";
import {Header, Popup, Table} from "semantic-ui-react";
import React from "react";
import {translations} from "../../../../../constants/translation/TranslationKeys";


export default function EquipmentRowPopup(props) {
    const { t } = useTranslation();

    return (
        <>
            <Popup
                on='hover'
                trigger={
                    <Table.Row className={'abilities-table-row'} style={{ cursor: "pointer" }}>
                        <Table.Cell textAlign='center'>{props.name}</Table.Cell>
                        <Table.Cell textAlign='center'>{t(translations.menu.side.stories.character.equipment.other + "." + props.desc + ".short" )}</Table.Cell>
                    </Table.Row>
                }
            >
                <Header as='h1'>{props.name}</Header>
                <p>
                    {t(translations.menu.side.stories.character.equipment.other + "." + props.desc + ".long" )}
                </p>
            </Popup>
        </>
    )
}