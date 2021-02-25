import {useTranslation} from "react-i18next";
import {Menu} from "semantic-ui-react";
import React from "react";

export default function MainItem(props) {
    const { t } = useTranslation();

    return(
        <Menu.Item
            color={props.color}
            name={t(props.name)}
            disabled={props.disabled}
            active={props.active === props.name}
            onClick={() => props.handle(props.name, props.value)}
        />
    )
}