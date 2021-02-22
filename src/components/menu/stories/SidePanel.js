import {useTranslation} from "react-i18next";
import {Menu, Transition} from "semantic-ui-react";
import {translations} from "../../../constants/translation/TranslationKeys";
import React from "react";
import {useHistory} from "react-router-dom";
import {urls} from "../../../constants/router/Urls";

export default function MenuPanel(props) {
    const { t } = useTranslation();
    let history = useHistory();

    return (
        <>
            <Transition.Group animation={props.transition} duration={props.duration}>
                {props.visible && (
                    <Menu inverted fluid vertical>
                        <Menu.Item active={true} color={props.color} className='header'>{t(translations.menu.side.name).toUpperCase()}</Menu.Item>
                        <Menu.Item >{t(translations.menu.side.continue).toUpperCase()}</Menu.Item>
                        <Menu.Item onClick={() => { props.startTransition(urls.stories)}}>{t(translations.menu.side.new).toUpperCase()}</Menu.Item>
                    </Menu>
                )}
            </Transition.Group>
        </>
    )
}