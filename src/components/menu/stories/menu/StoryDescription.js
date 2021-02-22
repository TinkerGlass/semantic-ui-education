import {Button, ButtonGroup, Card, CardContent, Divider, Segment} from "semantic-ui-react";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {translations} from "../../../../constants/translation/TranslationKeys";

const tabs = [
    'description',
    'character',
    'objectives'
];

export default function StoryDescription(props) {
    const { t } = useTranslation();

    const [tab, setTab] = useState(tabs[0]);

    const tabChange = (num) => {
        setTab(tabs[num]);
    };

    return(
        <Segment
            inverted
            color={props.color}>
            <Card fluid className={'card-content'}>
                {tab === tabs[0] &&
                    <CardContent textAlign={'left'}>
                        {props.description}
                    </CardContent>
                }
                {tab === tabs[1] &&
                    <CardContent textAlign={'center'}>
                        {props.character}
                    </CardContent>
                }
                {tab === tabs[2] &&
                    <CardContent textAlign={'left'}>
                        {props.objectives}
                    </CardContent>
                }
            </Card>
            <ButtonGroup widths='3'>
                <Button size='mini'
                        color={props.descColor}
                        onClick={() => tabChange(0)}>
                    {t(translations.menu.side.screen.description).toUpperCase()}
                </Button>
                <Button size='mini'
                        color={props.descColor}
                        onClick={() => tabChange(1)}>
                    {t(translations.menu.side.screen.character).toUpperCase()}
                </Button>
                <Button size='mini'
                        color={props.descColor}
                        onClick={() => tabChange(2)}>
                    {t(translations.menu.side.screen.objectives).toUpperCase()}
                </Button>
            </ButtonGroup>
            <Divider />
            <Button fluid size='small' color={props.confirmColor}>
                {t(translations.menu.side.screen.begin).toUpperCase()}
            </Button>
        </Segment>
    )
}