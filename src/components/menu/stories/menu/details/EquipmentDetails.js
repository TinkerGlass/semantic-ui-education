import {Divider, Grid} from "semantic-ui-react";
import React from "react";
import Weapon from "../equipment/Weapon";
import Armor from "../equipment/Armor";
import Others from "../equipment/Others";
import {armorTestData, otherTestData} from "../../../../../constants/test/EquipmentConstant";
import Money from "../equipment/Money";

export default function EquipmentDetails() {

    return(
        <Grid.Row className={'equipment'} width={12}>
            <Grid.Column width={16}>
                <Grid textAlign={'centered'}>
                    <Weapon/>
                </Grid>
                <Grid textAlign={'centered'}>
                    <Grid.Row width={12}>
                        <Grid.Column width={8}>
                            <Armor armor={armorTestData}/>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Others others={otherTestData}/>
                            <Divider/>
                            <Money gold={11} silver={5} brass={10}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </Grid.Row>
    )
}