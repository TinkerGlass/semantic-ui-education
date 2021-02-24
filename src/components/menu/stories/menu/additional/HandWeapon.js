import {Table} from "semantic-ui-react";
import {translations} from "../../../../../constants/translation/TranslationKeys";
import React from "react";
import {useTranslation} from "react-i18next";


export default function HandWeapon(props) {
    const { t } = useTranslation();

    return(
        <Table celled>
            <Table.Header>
                <Table.Row textAlign={'center'}>
                    <Table.HeaderCell>{t(translations.menu.side.stories.character.equipment.weapon.name)}</Table.HeaderCell>
                    <Table.HeaderCell>{t(translations.menu.side.stories.character.equipment.weapon.enc)}</Table.HeaderCell>
                    <Table.HeaderCell>{t(translations.menu.side.stories.character.equipment.weapon.group)}</Table.HeaderCell>
                    <Table.HeaderCell>{t(translations.menu.side.stories.character.equipment.weapon.dmg)}</Table.HeaderCell>
                    <Table.HeaderCell>{t(translations.menu.side.stories.character.equipment.weapon.qual)}</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row textAlign={'center'}>
                    <Table.Cell>{props.weapon.name}</Table.Cell>
                    <Table.Cell>{props.weapon.enc}</Table.Cell>
                    <Table.Cell>{props.weapon.group}</Table.Cell>
                    <Table.Cell>{props.weapon.dmg}</Table.Cell>
                    <Table.Cell>{props.weapon.qual}</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    )
}