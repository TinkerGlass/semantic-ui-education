import {Header, Popup, Table} from "semantic-ui-react";
import React, {useState} from "react";
import {translations} from "../../../../../constants/translation/TranslationKeys";
import {useTranslation} from "react-i18next";


export default function QualitiesPopup(props) {
    const { t } = useTranslation();

    const [qualities, setQ] = useState(props.qual.split(','));

    const GenerateInfo = () => (
        qualities.map(quality => {
            return <>
                <Header as='h1'>{t(translations.menu.side.stories.character.equipment.weapon.qualities.header + "." + quality)}</Header>
                <p>
                    {t(translations.menu.side.stories.character.equipment.weapon.qualities.description + "." + quality)}
                </p>
            </>
        }));



    return(
        <>
            <Popup
                on='hover'
                trigger={
                    <Table.Cell>{props.qual}</Table.Cell>
                }
            >
                <GenerateInfo />
            </Popup>
        </>
    )
}