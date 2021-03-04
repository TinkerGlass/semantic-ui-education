import {Table} from "semantic-ui-react";
import React from "react";
import {basicRaceSkills} from "../../../../../../../constants/main/race/RaceBaseSkillsTalents"
import RaceSkillsPopup from "./RaceSkillsPopup";


export default function RaceSkillTable(props) {

    return(
        <Table celled selectable role="grid">
            <Table.Body className={'skills-talents-table-body'}>
                {basicRaceSkills[props.race].map((skill) => (
                    <Table.Row className={'abilities-table-row'} style={{ cursor: "pointer" }}>
                        {skill.map((shortcut) => (
                            <RaceSkillsPopup skill={shortcut}/>
                        ))}
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
}