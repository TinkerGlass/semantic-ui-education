import {Divider, List} from "semantic-ui-react";
import React from "react";
import {useTranslation} from "react-i18next";


export default function ObjectivesScreen(props) {
    const { t } = useTranslation();
    console.log(props.main);
    console.log(t(props.main[0]));

    return (
        <>
            <List bulleted>
                {props.main.map((objective) => (
                    <List.Item>{t(objective)}</List.Item>
                ))
                }
            </List>
            <Divider/>
            <List bulleted>
                {props.secondary.map((objective) => (
                    <List.Item>{t(objective)}</List.Item>
                ))
                }
            </List>
        </>
    )
}