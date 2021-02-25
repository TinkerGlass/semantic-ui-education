import {Grid, Table} from "semantic-ui-react";
import React from "react";
import "../../../../../styles/menu/stories/StoriesMenu.css"

export default function SkillsDetails(props) {

    const bonusValue = (bonus) => {
        if(bonus === 0){
            return <i className="window minimize outline icon"/>
        } else {
            if(bonus === 1){
                return <><i className="arrow up icon"/></>
            }
            if(bonus === 2){
                return <><i className="arrow up icon"/><i className="arrow up icon"/></>
            }
            if(bonus === 3){
                return <><i className="arrow up icon"/><i className="arrow up icon"/><i className="arrow up icon"/></>
            }
        }
    };

    return(
        <>
            <Grid.Row className={'equipment'}>
                <Grid.Column verticalAlign width={16}>
                    <Table celled selectable role="grid">
                        <Table.Body className={'abilities-table-body'}>
                            {props.skills.map(({name, learned, bonus, ...rest}) => (
                                <Table.Row className={'abilities-table-row'} style={{ cursor: "pointer" }}>
                                    <Table.Cell textAlign='center'>
                                        {name}
                                    </Table.Cell>
                                    <Table.Cell textAlign='center' positive={learned} negative={!learned}>
                                        {bonusValue(bonus)}
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </Grid.Column>
            </Grid.Row>
        </>
    )
}