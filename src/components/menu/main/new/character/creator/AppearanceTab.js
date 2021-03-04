import {Grid, Segment} from "semantic-ui-react";
import React from "react";
import HealthTile from "../additional/appearance/HealthTile";
import {startingHealth} from "../../../../../../constants/main/appearance/ApperanceCosnst";

export default function AppearanceTab(props) {

    console.log(props.appearance);

    return(
        <Grid centered fluid className={'creator-card-content'}>
            <Grid.Row centered columns={3} fluid>
                <Grid.Column centered fluid>
                    <Segment className={'appearance-panel'}>
                        <HealthTile appearance={props.appearance} race={startingHealth[props.race]}/>
                    </Segment>
                </Grid.Column>
                <Grid.Column centered fluid>
                    <Segment className={'appearance-panel'}/>
                </Grid.Column>
                <Grid.Column centered fluid>
                    <Segment className={'appearance-panel'}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={3} fluid>
                <Grid.Column centered fluid>
                    <Segment className={'appearance-panel'}/>
                </Grid.Column>
                <Grid.Column centered fluid>
                    <Segment className={'appearance-panel'}/>
                </Grid.Column>
                <Grid.Column centered fluid>
                    <Segment className={'appearance-panel'}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}