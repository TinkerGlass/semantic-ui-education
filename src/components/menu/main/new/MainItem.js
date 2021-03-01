import {useTranslation} from "react-i18next";
import {Header, Menu, Popup, Table} from "semantic-ui-react";
import React from "react";
import {translations} from "../../../../constants/translation/TranslationKeys";

export default function MainItem(props) {
    const { t } = useTranslation();

    return(
        <Popup
            on='hover'
            trigger={
                <Menu.Item
                    color={props.color}
                    disabled={props.disabled}
                    active={props.active === props.tab.name}
                    onClick={() => props.handle(props.tab)}>
                    {props.icon}
                </Menu.Item>
            }
        >
            <Header as='h4'>{t(translations.menu.main.character.creator + '.' + props.tab.name)}</Header>
        </Popup>
    )
}