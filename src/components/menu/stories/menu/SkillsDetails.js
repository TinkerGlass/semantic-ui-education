import {useTranslation} from "react-i18next";
import {Button, Divider, Grid, Table} from "semantic-ui-react";
import React from "react";
import {translations} from "../../../../constants/translation/TranslationKeys";
import "../../../../styles/menu/stories/StoriesMenu.css"

export default function SkillsDetails(props) {
    const { t } = useTranslation();

    return(
        <>
            <Grid textAlign={'centered'}>
                <Grid.Row>
                    <Grid.Column verticalAlign width={16}>
                        <Table celled selectable role="grid">
                            <Table.Body onScroll={() => console.log("scroll")}>
                                {props.skills.map(({name, value, ...rest}) => (
                                    <Table.Row style={{ cursor: "pointer" }} positive={value >= 70} negative={value <= 30}>
                                        <Table.Cell textAlign='center'>{name}</Table.Cell>
                                        <Table.Cell textAlign='center'>{value}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </Grid.Column>
                </Grid.Row>
                <Button onClick={() => props.setSkills(false)}>
                    {t(translations.menu.side.stories.character.characteristics.title)}
                </Button>
            </Grid>
        </>
    )
}