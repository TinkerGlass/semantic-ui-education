import React, {useEffect, useState} from "react";
import {Container, Divider, Grid, Menu, Segment, Transition} from "semantic-ui-react";
import {translations} from "../../../constants/translation/TranslationKeys";
import {useTranslation} from "react-i18next";
import "../../../styles/menu/stories/StoriesMenu.css"
import StoryDescription from "./menu/StoryDescription";
import StoryItem from "./menu/StoryItem";
import ObjectivesScreen from "./menu/ObjectivesScreen";
import {constantObjectives} from "../../../constants/stories/objectives/ObjectivesConstant";
import CharacterScreen from "./menu/CharacterScreen";


export default function StoriesMenu() {
    const { t } = useTranslation();

    const [visible, setVisible] = useState(false);
    const [activeItem, setActiveItem] = useState(t(translations.menu.side.stories.titles.emperor));

    useEffect(() => {
        setVisible(true);
    }, []);

    const handleItemClick = (name) => {
        setActiveItem(name);
    };

    return (
        <div className="background">
            <Transition.Group animation={'vertical flip'} duration={1500}>
                {visible &&
                <Container fluid>
                    <Grid columns={3} centered>
                        <Grid.Row columns={4}>
                            <Grid.Column width={2} textAlign={"center"} className={'stories-menu-title'}>
                                <Menu inverted fluid vertical>
                                    <Menu.Item active={true} color={'red'} className='header'>{t(translations.menu.side.stories.parts.rei).toUpperCase()}</Menu.Item>
                                    <StoryItem disabled={false} color={'red'} name={t(translations.menu.side.stories.titles.emperor)} active={activeItem} handle={handleItemClick}/>
                                </Menu>
                                <Divider/>
                                <Menu inverted fluid vertical>
                                    <Menu.Item active={true} color={'teal'} className='header'>{t(translations.menu.side.stories.parts.mid).toUpperCase()}</Menu.Item>
                                    <StoryItem disabled={false} color={'teal'} name={t(translations.menu.side.stories.titles.wolf)} active={activeItem} handle={handleItemClick}/>
                                    <StoryItem disabled={false} color={'teal'} name={t(translations.menu.side.stories.titles.dagger)} active={activeItem} handle={handleItemClick}/>
                                </Menu>
                                <Divider/>
                                <Menu inverted fluid vertical>
                                    <Menu.Item active={true} color={'blue'} className='header'>{t(translations.menu.side.stories.parts.nor).toUpperCase()}</Menu.Item>
                                    <StoryItem disabled={false} color={'blue'} name={t(translations.menu.side.stories.titles.elves)} active={activeItem} handle={handleItemClick}/>
                                </Menu>
                                <Divider/>
                                <Menu inverted fluid vertical>
                                    <Menu.Item active={true} color={'olive'} className='header'>{t(translations.menu.side.stories.parts.ave).toUpperCase()}</Menu.Item>
                                    <StoryItem disabled={false} color={'olive'} name={t(translations.menu.side.stories.titles.wine)} active={activeItem} handle={handleItemClick}/>
                                </Menu>
                                <Divider/>
                                <Menu inverted fluid vertical>
                                    <Menu.Item className='header'>{t(translations.menu.side.stories.titles.continued).toUpperCase()}</Menu.Item>
                                </Menu>
                            </Grid.Column>
                            <Grid.Column verticalAlign={"middle"} stretched computer={6} largeScreen={6} width={12}>
                                {activeItem === t(translations.menu.side.stories.titles.emperor) &&
                                    <StoryDescription color={'red'}
                                                      confirmColor={'yellow'}
                                                      description={t(translations.menu.side.stories.descriptions.emperor)}
                                                      objectives={<ObjectivesScreen main={constantObjectives.emperor.main}
                                                                                    secondary={constantObjectives.emperor.secondary}/>}/>
                                }
                                {activeItem === t(translations.menu.side.stories.titles.wolf) &&
                                    <StoryDescription color={'teal'}
                                                      confirmColor={'yellow'}
                                                      description={t(translations.menu.side.stories.descriptions.wolf)}
                                                      objectives={<ObjectivesScreen main={constantObjectives.wolf.main}
                                                                                    secondary={constantObjectives.wolf.secondary}/>}
                                                      character={<CharacterScreen/>}/>
                                }
                                {activeItem === t(translations.menu.side.stories.titles.dagger) &&
                                    <StoryDescription color={'teal'}
                                                      confirmColor={'yellow'}
                                                      description={t(translations.menu.side.stories.descriptions.dagger)}
                                                      objectives={<ObjectivesScreen main={constantObjectives.dagger.main}
                                                                                    secondary={constantObjectives.dagger.secondary}/>}/>
                                }
                                {activeItem === t(translations.menu.side.stories.titles.elves) &&
                                    <StoryDescription color={'blue'}
                                                      confirmColor={'yellow'}
                                                      description={t(translations.menu.side.stories.descriptions.elves)}
                                                      objectives={<ObjectivesScreen main={constantObjectives.elves.main}
                                                                                    secondary={constantObjectives.elves.secondary}/>}/>
                                }
                                {activeItem === t(translations.menu.side.stories.titles.wine) &&
                                    <StoryDescription color={'olive'}
                                                      confirmColor={'yellow'}
                                                      description={t(translations.menu.side.stories.descriptions.wine)}
                                                      objectives={<ObjectivesScreen main={constantObjectives.wine.main}
                                                                                    secondary={constantObjectives.wine.secondary}/>}/>
                                }
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
                }
            </Transition.Group>
        </div>
    )
}