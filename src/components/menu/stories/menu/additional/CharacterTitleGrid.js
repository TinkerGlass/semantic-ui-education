import {Grid} from "semantic-ui-react";
import React from "react";
import {useTranslation} from "react-i18next";

export default function CharacterTitleGrid(props) {
    const { t } = useTranslation();

    return(
        <Grid textAlign={'centered'}>
            <Grid.Row width={12} height={1}>
                <Grid.Column verticalAlign={'centered'} width={16}>
                    {t(props.value)}
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}