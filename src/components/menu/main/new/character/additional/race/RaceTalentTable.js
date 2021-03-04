import {Table} from "semantic-ui-react";
import {basicRaceTalents} from "../../../../../../../constants/main/race/RaceBaseSkillsTalents";
import React from "react";
import RaceTalentsPopup from "./RaceTalentsPopup";


export default function RaceTalentTable(props) {

    return(
        <Table celled selectable role="grid">
            <Table.Body className={'skills-talents-table-body'}>
                {basicRaceTalents[props.race].map((talent) => (
                    <Table.Row className={'abilities-table-row'} style={{ cursor: "pointer" }}>
                        {talent.map((shortcut) => (
                            <RaceTalentsPopup talent={shortcut}/>
                        ))}
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    )
}