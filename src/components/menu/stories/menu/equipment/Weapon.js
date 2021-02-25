import {Grid} from "semantic-ui-react";
import React from "react";
import HandWeapon from "../additional/HandWeapon";
import {weaponTestData} from "../../../../../constants/test/EquipmentConstant";
import {translations} from "../../../../../constants/translation/TranslationKeys";

export default function Weapon() {

    return(
        <Grid.Row width={12}>
            <Grid.Column width={8}>
                <HandWeapon weapon={weaponTestData.right} hand={translations.menu.side.stories.character.equipment.weapon.hand.right}/>
            </Grid.Column>
            <Grid.Column width={8}>
                <HandWeapon weapon={weaponTestData.left} hand={translations.menu.side.stories.character.equipment.weapon.hand.left}/>
            </Grid.Column>
        </Grid.Row>
    )
}