import {Header, Popup, Table} from "semantic-ui-react";
import React from "react";
import {useTranslation} from "react-i18next";

export default function TalentsRowPopUp(props) {
    const { t } = useTranslation();

    return (
        <>
            <Popup
                on='hover'
                trigger={
                    <Table.Row className={'abilities-table-row'} style={{ cursor: "pointer" }}>
                        <Table.Cell textAlign='center'>{props.name}</Table.Cell>
                        <Table.Cell textAlign='center'>{props.type}</Table.Cell>
                    </Table.Row>
                }
            >
                <Header as='h1'>{props.name}</Header>
                <p>
                    {t(props.description)}
                </p>
            </Popup>
        </>
    )
}