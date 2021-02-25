import {Grid, Table} from "semantic-ui-react";
import React from "react";
import EquipmentRowPopup from "../additional/EquipmentRowPopup";


export default function Others(props) {

    return(
        <Grid.Row>
            <Grid.Column verticalAlign width={16}>
                <Table celled selectable role="grid">
                    <Table.Body className={'equipment-table-body'}>
                        {props.others.map(({name, desc}) => (
                            <EquipmentRowPopup name={name} desc={desc}/>
                        ))}
                    </Table.Body>
                </Table>
            </Grid.Column>
        </Grid.Row>
    )
}