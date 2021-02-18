import {useTranslation} from "react-i18next";
import {Menu, Transition} from "semantic-ui-react";
import {translations} from "../../../constants/translation/TranslationKeys";
import React from "react";

export default function StoryPanel(props) {
    const { t } = useTranslation();

    return (
        <>
            <Transition.Group animation={props.transition} duration={props.duration}>
                {props.visible && (
                    <Menu inverted fluid vertical>
                        <Menu.Item active={true} color={'red'} className='header'>{t(translations.menu.story.name).toUpperCase()}</Menu.Item>
                        <Menu.Item>{t(translations.menu.story.continue).toUpperCase()}</Menu.Item>
                        <Menu.Item>{t(translations.menu.story.new).toUpperCase()}</Menu.Item>
                    </Menu>
                )}
            </Transition.Group>
        </>
    )
}