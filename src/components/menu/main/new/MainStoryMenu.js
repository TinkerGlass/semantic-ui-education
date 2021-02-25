import React, {useEffect, useState} from "react";
import {Button, ButtonGroup, Container, Grid, Input, Menu, Segment, Transition} from "semantic-ui-react";
import {useTranslation} from "react-i18next";
import StoryItem from "../../stories/menu/StoryItem";
import {translations} from "../../../../constants/translation/TranslationKeys";
import StoryDescription from "../../stories/menu/StoryDescription";
import ObjectivesScreen from "../../stories/menu/ObjectivesScreen";
import {constantObjectives} from "../../../../constants/stories/objectives/ObjectivesConstant";
import CharacterScreen from "../../stories/menu/CharacterScreen";
import MainItem from "./MainItem";


export default function MainStoryMenu() {
    const { t } = useTranslation();

    const [visible, setVisible] = useState(false);
    const [activeItem, setActiveItem] = useState('bio');

    const [race, setRace] = useState(false);
    const [characteristics, setCharacteristics] = useState(true);
    const [profession, setProfession] = useState(true);
    const [origins, setOrigins] = useState(true);


    const handleItemClick = (name, value) => {
        console.log(value);
        setActiveItem(name);
        openTab(value);
    };

    const openTab = (num) => {
        console.log(num);
        setRace(!(num >= 1));
        setCharacteristics(!(num >= 2));
        setProfession(!(num >= 3));
        setOrigins(!(num >= 4));
    };

    useEffect(() => {
        setVisible(true);
    }, []);

    return(
        <div className="background">
            <Transition.Group animation={'slide right'} duration={1500}>
                {visible &&
                <Container fluid>
                    <Grid columns={3} centered>
                        <Grid.Row columns={4}>
                            <Grid.Column width={8} textAlign={"center"} className={'stories-menu-title'}>
                                <Menu inverted widths={4}>
                                    <MainItem disabled={race} color={'red'} name={'bio'} active={activeItem} handle={handleItemClick} value={1}/>
                                    <MainItem disabled={characteristics} color={'orange'} name={'photos'} active={activeItem} handle={handleItemClick} value={2}/>
                                    <MainItem disabled={profession} color={'olive'} name={'screen'} active={activeItem} handle={handleItemClick} value={3}/>
                                    <MainItem disabled={origins} color={'yellow'} name={'elo'} active={activeItem} handle={handleItemClick} value={4}/>
                                </Menu>
                                <Segment attached='bottom'>
                                    {activeItem === 'bio' &&
                                    <Button size='mini' onClick={() => openTab(2)}>
                                        OKEJ
                                    </Button>
                                    }
                                    {activeItem === 'photos' &&
                                    <Button size='mini' onClick={() => openTab(3)}>
                                        OKEJ
                                    </Button>
                                    }
                                    {activeItem === 'screen' &&
                                    <Button size='mini' onClick={() => openTab(34)}>
                                        OKEJ
                                    </Button>
                                    }
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
                }
            </Transition.Group>
        </div>
    )
}