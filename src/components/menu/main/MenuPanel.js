import {Menu, Transition} from "semantic-ui-react";
import {translations} from "../../../constants/translation/TranslationKeys";
import React from "react";
import {useTranslation} from "react-i18next";


export default function MenuPanel(props) {
    const { t } = useTranslation();

    return (
        <>
            <Transition.Group animation={props.transition} duration={props.duration}>
                {props.visible && (
                    <Menu inverted fluid vertical>
                        <Menu.Item active={true} color={props.color} className='header'>{t(translations.menu.main.name).toUpperCase()}</Menu.Item>
                        <Menu.Item color={'teal'}>{t(translations.menu.main.stats).toUpperCase()}</Menu.Item>
                        <Menu.Item color={'teal'}>{t(translations.menu.main.settings).toUpperCase()}</Menu.Item>
                    </Menu>
                )}
            </Transition.Group>
        </>
    )
}