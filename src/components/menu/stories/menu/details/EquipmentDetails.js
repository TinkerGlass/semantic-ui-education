import {Grid} from "semantic-ui-react";
import React from "react";
import Weapon from "../equipment/Weapon";

export default function EquipmentDetails() {

    return(
        <Grid.Row width={12}>
            <Grid.Column width={16}>
                <Grid textAlign={'centered'}>
                    <Weapon/>
                </Grid>
            </Grid.Column>
        </Grid.Row>
    )
}