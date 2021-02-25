import {Grid, Table} from "semantic-ui-react";
import {translations} from "../../../../../constants/translation/TranslationKeys";
import React from "react";
import {useTranslation} from "react-i18next";


export default function Money(props) {
    const { t } = useTranslation();

    return(
        <Grid.Row>
            <Table celled size={'small'}>
                <Table.Header>
                    <Table.Row textAlign={'center'}>
                        <Table.HeaderCell>{t(translations.menu.side.stories.character.equipment.money.gold)}</Table.HeaderCell>
                        <Table.HeaderCell>{t(translations.menu.side.stories.character.equipment.money.silver)}</Table.HeaderCell>
                        <Table.HeaderCell>{t(translations.menu.side.stories.character.equipment.money.brass)}</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row textAlign={'center'}>
                        <Table.Cell>{props.gold}</Table.Cell>
                        <Table.Cell>{props.silver}</Table.Cell>
                        <Table.Cell>{props.brass}</Table.Cell>
                    </Table.Row>
                </Table.Body>
                <Table.Footer textAlign={"center"}>
                    <Table.Row>
                        <Table.HeaderCell colSpan='5' textAlign={"center"}>
                            {t(translations.menu.side.stories.character.equipment.money.name)}
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </Grid.Row>
    )

}