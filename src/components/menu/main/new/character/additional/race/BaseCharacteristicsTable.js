import {Table} from "semantic-ui-react";
import React from "react";
import {
    baseCharacteristicsDescription,
    baseCharacteristicsValues
} from "../../../../../../../constants/main/race/RacesBaseCharacteristics";
import BaseCharacteristicsPopup from "./BaseCharacteristicsPopup";


export default function BaseCharacteristicsTable(props) {

    return(
        <Table celled selectable role="grid">
            <Table.Body>
                {baseCharacteristicsDescription.map((characteristic, index) => (
                    <BaseCharacteristicsPopup characteristic={characteristic} value={baseCharacteristicsValues[props.race][index]}/>
                ))}
            </Table.Body>
        </Table>
    )
}