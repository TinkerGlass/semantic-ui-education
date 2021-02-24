import {Grid} from "semantic-ui-react";
import React from "react";
import HandWeapon from "../additional/HandWeapon";
import {weaponTestData} from "../../../../../constants/test/EquipmentConstant";

export default function Weapon() {

    return(
        <Grid.Row width={12}>
            <Grid.Column width={8}>
                <HandWeapon weapon={weaponTestData.right}/>
            </Grid.Column>
            <Grid.Column width={8}>
                <HandWeapon weapon={weaponTestData.left}/>
            </Grid.Column>
        </Grid.Row>
    )
}