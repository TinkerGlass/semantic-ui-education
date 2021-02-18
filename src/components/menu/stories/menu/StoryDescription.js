import {Button, ButtonGroup, Card, CardContent, Container, Divider, Grid, Pagination, Segment} from "semantic-ui-react";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {translations} from "../../../../constants/translation/TranslationKeys";
import {CardHeader} from "@material-ui/core";

const content = [
    "bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio\n" +
    " bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio bio",
    "bio2 bio2 bio2 bio2 bio2 bio2 bio2 bio2 bio2 bio2 bio2 bio2 bio2 bio2" +
    " bio2 bio2 bio2 bio2 bio2 bio2 bio2 bio2 bio2 bio2 bio2 bio2 bio2 bio2 bio2 bio2 bio2",
    "bio3 bio3 bio3 bio3 bio3 bio3 bio3 bio3 bio3 bio3 bio3 bio3 bio3 bio3" +
    " bio3 bio3 bio3 bio3 bio3 bio3 bio3 bio3 bio3 bio3 bio3 bio3 bio3 bio3 bio3 bio3 bio3"
];

const tabs = [
    'description',
    'character',
    'objectives'
];

export default function StoryDescription(props) {
    const { t } = useTranslation();

    const [activePage, setActivePage] = useState(1);
    const [tab, setTab] = useState(tabs[0]);

    const onChange = (e, pageInfo) => {
        setActivePage(pageInfo.activePage);
    };

    const tabChange = (num) => {
        setTab(tabs[num]);
    };

    return(
        <Segment
            inverted
            color={props.color}>
            <Card fluid className={'card-content'}>
                {tab === tabs[0] &&
                    <>
                        <CardContent textAlign={'left'}>
                            {content[activePage-1]}
                        </CardContent>
                        <Segment>
                            <Pagination
                                className="centered"
                                activePage={activePage}
                                onPageChange={onChange}
                                pointing
                                secondary
                                totalPages={props.pages}
                            />
                        </Segment>
                    </>
                }
                {tab === tabs[1] &&
                <>
                    <CardContent textAlign={'center'}>
                        {content[activePage-1]}
                    </CardContent>
                    <Segment>
                        <Pagination
                            className="centered"
                            activePage={activePage}
                            onPageChange={onChange}
                            pointing
                            secondary
                            totalPages={props.pages}
                        />
                    </Segment>
                </>
                }
                {tab === tabs[2] &&
                <>
                    <CardContent textAlign={'right'}>
                        {content[activePage-1]}
                    </CardContent>
                    <Segment>
                        <Pagination
                            className="centered"
                            activePage={activePage}
                            onPageChange={onChange}
                            pointing
                            secondary
                            totalPages={props.pages}
                        />
                    </Segment>
                </>
                }
            </Card>
            <ButtonGroup widths='3'>
                <Button size='small' inverted color={props.descColor} onClick={() => tabChange(0)}>{t(translations.menu.side.screen.description).toUpperCase()}</Button>
                <Button size='small' inverted color={props.descColor} onClick={() => tabChange(1)}>{t(translations.menu.side.screen.character).toUpperCase()}</Button>
                <Button size='small' inverted color={props.descColor} onClick={() => tabChange(2)}>{t(translations.menu.side.screen.objectives).toUpperCase()}</Button>
            </ButtonGroup>
            <Divider />
            <Button fluid size='small' inverted circular color={props.confirmColor}>{t(translations.menu.side.screen.begin).toUpperCase()}</Button>
        </Segment>
    )
}