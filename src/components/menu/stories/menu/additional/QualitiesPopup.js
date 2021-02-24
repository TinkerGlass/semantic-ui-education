import {Header, Popup, Table} from "semantic-ui-react";
import React from "react";
import {translations} from "../../../../../constants/translation/TranslationKeys";
import {useTranslation} from "react-i18next";


export default function QualitiesPopup(props) {
    const { t } = useTranslation();

    const qualTrans = (qual) => {
        let qualities = qual.split(',');
        let translation = '';
        for (let i = 0; i < qualities.length; i++){
            translation +=
        }
    };

    return(
        <>
            <Popup
                on='hover'
                trigger={
                    <Table.Cell>{props.qual}</Table.Cell>
                }
            >
                <Header as='h1'>{props.name}</Header>
                <p>
                    {qualTrans()}
                </p>
            </Popup>
        </>
    )
}