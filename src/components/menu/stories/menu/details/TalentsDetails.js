import {Grid, Table} from "semantic-ui-react";
import React from "react";
import TalentsRowPopUp from "../additional/TalentsRowPopUp";

export default function TalentsDetails(props) {

    return(
        <>
            <Grid.Row>
                <Grid.Column verticalAlign width={16}>
                    <Table celled selectable role="grid">
                        <Table.Body className={'abilities-table-body'} onScroll={() => console.log("scroll")}>
                            {props.talents.map(({name, type, description}) => (
                                <TalentsRowPopUp name={name} type={type} description={description}/>
                            ))}
                        </Table.Body>
                    </Table>
                </Grid.Column>
            </Grid.Row>
        </>
    )
}