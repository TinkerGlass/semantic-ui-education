import {Menu} from "semantic-ui-react";
import React from "react";
import {useTranslation} from "react-i18next";


export default function StoryItem(props) {
    const { t } = useTranslation();

    return(
        <Menu.Item
            color={props.color}
            name={t(props.name)}
            active={props.active === props.name}
            onClick={() => props.handle(props.name)}
        />
    )
}