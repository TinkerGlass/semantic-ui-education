import {Grid} from "semantic-ui-react";
import React, {useState} from "react";
import {translations} from "../../../../../constants/translation/TranslationKeys";
import {useTranslation} from "react-i18next";
import ArmorTile from "../additional/ArmorTile";


export default function Armor(props) {
    const { t } = useTranslation();

    const [armor] =  useState(props.armor);

    return(
        <Grid textAlign={'centered'}>
            <Grid.Row width={12}>
                <Grid.Column width={16} verticalAlign={'centered'}>
                    <ArmorTile size={"tiny"} armor={armor.head}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row width={12}>
                <Grid.Column width={8} verticalAlign={'centered'}>
                    <ArmorTile size={"tiny"} armor={armor.rightArm}/>
                </Grid.Column>
                <Grid.Column width={8} verticalAlign={'centered'}>
                    <ArmorTile size={"tiny"} armor={armor.leftArm}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row width={12}>
                <Grid.Column width={16} verticalAlign={'centered'}>
                    <ArmorTile size={"tiny"} armor={armor.body}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row width={12}>
                <Grid.Column width={8} verticalAlign={'centered'}>
                    <ArmorTile size={"tiny"} armor={armor.rightLeg}/>
                </Grid.Column>
                <Grid.Column width={8} verticalAlign={'centered'}>
                    <ArmorTile size={"tiny"} armor={armor.leftLeg}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}