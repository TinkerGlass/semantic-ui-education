import React, {useEffect, useState} from "react";
import {Container, Grid, Menu, Transition} from "semantic-ui-react";
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
    const [activeItem, setActiveItem] = useState(t(translations.menu.side.stories.titles.heart));

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
                        <Grid.Row centered textAlign='center' className={'stories-menu-title'}>
                            {t(translations.menu.side.name).toUpperCase()}
                        </Grid.Row>
                        <Grid.Row stretched columns={4}>
                            <Grid.Column width={2}  height={1}>
                                <Menu inverted fluid vertical tabular>
                                    <StoryItem color={'violet'}
                                               name={t(translations.menu.side.stories.titles.heart)}
                                               active={activeItem}
                                               handle={handleItemClick}/>
                                    <StoryItem color={'yellow'}
                                               name={t(translations.menu.side.stories.titles.dagger)}
                                               active={activeItem}
                                               handle={handleItemClick}/>
                                    <StoryItem color={'grey'}
                                               name={t(translations.menu.side.stories.titles.dream)}
                                               active={activeItem}
                                               handle={handleItemClick}/>
                                    <StoryItem color={'blue'}
                                               name={t(translations.menu.side.stories.titles.moans)}
                                               active={activeItem}
                                               handle={handleItemClick}/>
                                    <StoryItem color={'grey'}
                                               name={t(translations.menu.side.stories.titles.mountains)}
                                               active={activeItem}
                                               handle={handleItemClick}/>
                                </Menu>
                            </Grid.Column>
                            <Grid.Column verticalAlign={"middle"} stretched computer={6} largeScreen={6} width={12}>
                                {activeItem === t(translations.menu.side.stories.titles.heart) &&
                                    <StoryDescription color={'violet'}
                                                      descColor={'olive'}
                                                      confirmColor={'orange'}
                                                      description={t(translations.menu.side.stories.descriptions.heart)}
                                                      objectives={<ObjectivesScreen main={constantObjectives.heart.main}
                                                                                    secondary={constantObjectives.heart.secondary}/>}
                                                      character={<CharacterScreen/>}/>
                                }
                                {activeItem === t(translations.menu.side.stories.titles.dagger) &&
                                    <StoryDescription color={'yellow'}
                                                      descColor={'violet'}
                                                      confirmColor={'brown'}
                                                      description={t(translations.menu.side.stories.descriptions.dagger)}
                                                      objectives={<ObjectivesScreen main={constantObjectives.dagger.main}
                                                                                    secondary={constantObjectives.dagger.secondary}/>}/>
                                }
                                {activeItem === t(translations.menu.side.stories.titles.dream) &&
                                    <StoryDescription color={'grey'}
                                                      descColor={'blue'}
                                                      confirmColor={'red'}/>
                                }
                                {activeItem === t(translations.menu.side.stories.titles.moans) &&
                                    <StoryDescription color={'blue'}
                                                      descColor={'orange'}
                                                      confirmColor={'yellow'}/>
                                }
                                {activeItem === t(translations.menu.side.stories.titles.mountains) &&
                                    <StoryDescription color={'grey'}
                                                      descColor={'violet'}
                                                      confirmColor={'teal'}/>
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