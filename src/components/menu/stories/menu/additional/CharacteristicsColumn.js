import {Grid} from "semantic-ui-react";
import React from "react";
import CharacteristicsPopup from "./CharacteristicsPopup";
import {useTranslation} from "react-i18next";

export default function CharacteristicsColumn(props) {
    const { t } = useTranslation();

    return(
        <Grid.Column verticalAlign={'centered'} width={4}>
            {props.characteristics.map((characteristic, index) => (
                <CharacteristicsPopup colorValue={props.colorValue(props.values[index])}
                                      title={t(props.template.title + characteristic)}
                                      value={props.values[index]}
                                      popupTitle={t(props.template.popupTitle + characteristic)}
                                      popupDescription={t(props.template.popupDescription + characteristic)}/>
                                      ))}
        </Grid.Column>
    )
}