import {Grid} from "semantic-ui-react";
import React from "react";
import GenderSegmentPopup from "../additional/GenderSegmentPopup";


export default function GenderTab(props) {

    return(
        <Grid centered columns={3} fluid className={'creator-card-content'}>
            <Grid.Column>
                <GenderSegmentPopup tab={props.tab} color={'pink'} handle={props.handleDecision} gender={'female'} icon={<i className="venus icon"/>} />
            </Grid.Column>
            <Grid.Column>
                <GenderSegmentPopup tab={props.tab} color={'blue'} handle={props.handleDecision} gender={'male'} icon={<i className="mars icon"/>} />
            </Grid.Column>
        </Grid>
    )
}