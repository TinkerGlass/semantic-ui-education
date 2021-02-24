import {Button, Grid} from "semantic-ui-react";
import React from "react";
import {useTranslation} from "react-i18next";


export default function CharacterButton(props) {
    const { t } = useTranslation();

    return (
        <Grid.Column verticalAlign={'centered'} width={4}>
            <Button fluid
                    onClick={() => props.handle(props.value)}
                    size='tiny'>
                {t(props.name)}
            </Button>
        </Grid.Column>
    )
}