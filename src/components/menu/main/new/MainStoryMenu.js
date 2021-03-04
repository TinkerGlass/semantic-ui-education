import React, {useEffect, useState} from "react";
import {Container, Grid, Menu, Message, Transition} from "semantic-ui-react";
import {useTranslation} from "react-i18next";
import MainItem from "./MainItem";
import {tabs} from "../../../../constants/main/MenuTabs";
import GenderTab from "./character/creator/GenderTab";
import "../../../../styles/menu/main/MainPlotMenu.css"
import RaceTab from "./character/creator/RaceTab";
import AppearanceTab from "./character/creator/AppearanceTab";

const characterTemplate = {
    gender: undefined,
    race: undefined,
    appearance: undefined,
    origins: undefined,
    profession: undefined,
    characteristics: undefined,
    skills: undefined,
    talents: undefined
};

export default function MainStoryMenu() {
    const { t } = useTranslation();

    const [character, setCharacter] = useState(characterTemplate);
    const [visible, setVisible] = useState(false);
    const [activeItem, setActiveItem] = useState(tabs[0].name);

    const [gender, setGender] = useState(false);
    const [race, setRace] = useState(true);
    const [appearance, setAppearance] = useState(true);
    const [origins, setOrigins] = useState(true);
    const [profession, setProfession] = useState(true);
    const [characteristics, setCharacteristics] = useState(true);
    const [skills, setSkills] = useState(true);
    const [talents, setTalents] = useState(true);


    const handleItemClick = (tab) => {
        setActiveItem(tab.name);
        openTab(tab.number);
    };

    const openTab = (num) => {
        setGender(!(num >= 1));
        setRace(!(num >= 2));
        setAppearance(!(num >= 3));
        setOrigins(!(num >= 4));
        setProfession(!(num >= 5));
        setCharacteristics(!(num >= 6));
        setSkills(!(num >= 7));
        setTalents(!(num >= 8));
    };

    const setCharacterProperty = (type, gender, tab) => {
        let helpCharacter = character;
        helpCharacter[type] = gender;
        setCharacter(helpCharacter);
        openTab(tab.number);
        setActiveItem(tab.name);
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
                            <Grid.Column width={10} textAlign={"center"} className={'stories-menu-title'}>
                                <Menu inverted widths={8}>
                                    <MainItem disabled={gender} icon={<i className="venus mars icon"/>} color={'red'} active={activeItem} handle={handleItemClick} tab={tabs[0]}/>
                                    <MainItem disabled={race} icon={<i className="user circle outline icon"/>} color={'orange'} active={activeItem} handle={handleItemClick} tab={tabs[1]}/>
                                    <MainItem disabled={appearance} icon={<i className="address book outline icon"/>} color={'green'} name={tabs[2].name} active={activeItem} handle={handleItemClick} tab={tabs[2]}/>
                                    <MainItem disabled={origins} icon={<i className="home icon"/>} color={'teal'} name={tabs[3].name} active={activeItem} handle={handleItemClick} tab={tabs[3]}/>
                                    <MainItem disabled={profession} icon={<i className="bookmark outline icon"/>} color={'blue'} name={tabs[2].name} active={activeItem} handle={handleItemClick} tab={tabs[4]}/>
                                    <MainItem disabled={characteristics} icon={<i className="clipboard outline icon"/>} color={'violet'} name={tabs[1].name} active={activeItem} handle={handleItemClick} tab={tabs[5]}/>
                                    <MainItem disabled={skills} icon={<i className="book icon"/>} color={'purple'} name={tabs[2].name} active={activeItem} handle={handleItemClick} tab={tabs[6]}/>
                                    <MainItem disabled={talents} icon={<i className="file alternate outline icon"/>} color={'pink'} name={tabs[2].name} active={activeItem} handle={handleItemClick} tab={tabs[7]}/>
                                </Menu>
                                <Grid columns={3} centered>
                                    {activeItem === tabs[0].name &&
                                    <Grid.Column width={16} textAlign={"center"} className={'stories-menu-title'}>
                                        <GenderTab gender={character.gender} tab={tabs[1]} handleDecision={setCharacterProperty}/>
                                    </Grid.Column>
                                    }
                                    {activeItem === tabs[1].name &&
                                    <Grid.Column width={16} textAlign={"center"} className={'stories-menu-title'}>
                                        <RaceTab race={character.race} tab={tabs[2]} handleDecision={setCharacterProperty}/>
                                    </Grid.Column>
                                    }
                                    {activeItem === tabs[2].name &&
                                    <Grid.Column width={16} textAlign={"center"} className={'stories-menu-title'}>
                                        <AppearanceTab appearance={character.appearance} race={character.race} tab={tabs[3]} handleDecision={setCharacterProperty}/>
                                    </Grid.Column>
                                    }
                                    {activeItem === tabs[3].name &&
                                        <Grid.Column width={16} textAlign={"center"} className={'stories-menu-title'}>
                                        </Grid.Column>
                                    }
                                    {/*<Grid.Column width={10} textAlign={"center"} className={'stories-menu-title'}>*/}
                                    {/*    <Segment>*/}
                                    {/*        {activeItem === tabs[0].name &&*/}
                                    {/*        <GenderTab tab={tabs[1]} handleDecision={setCharacterGender}/>*/}
                                    {/*        }*/}
                                    {/*        {activeItem === tabs[1].name &&*/}
                                    {/*        <RaceTab/>*/}
                                    {/*        }*/}
                                    {/*        {activeItem === tabs[2].name &&*/}
                                    {/*        <Button size='mini' onClick={() => openTab(tabs[3].number)}>*/}
                                    {/*            OKEJ*/}
                                    {/*        </Button>*/}
                                    {/*        }*/}
                                    {/*        {activeItem === tabs[3].name &&*/}
                                    {/*        <Button size='mini' onClick={() => openTab(tabs[4].number)}>*/}
                                    {/*            OKEJ*/}
                                    {/*        </Button>*/}
                                    {/*        }*/}
                                    {/*        {activeItem === tabs[4].name &&*/}
                                    {/*        <Button size='mini' onClick={() => openTab(tabs[5].number)}>*/}
                                    {/*            OKEJ*/}
                                    {/*        </Button>*/}
                                    {/*        }*/}
                                    {/*        {activeItem === tabs[5].name &&*/}
                                    {/*        <Button size='mini' onClick={() => openTab(tabs[6].number)}>*/}
                                    {/*            OKEJ*/}
                                    {/*        </Button>*/}
                                    {/*        }*/}
                                    {/*        {activeItem === tabs[6].name &&*/}
                                    {/*        <Button size='mini' onClick={() => openTab(tabs[7].number)}>*/}
                                    {/*            OKEJ*/}
                                    {/*        </Button>*/}
                                    {/*        }*/}
                                    {/*        {activeItem === tabs[7].name &&*/}
                                    {/*        <Button size='mini'>*/}
                                    {/*            DALEj*/}
                                    {/*        </Button>*/}
                                    {/*        }*/}
                                    {/*    </Segment>*/}
                                    {/*</Grid.Column>*/}
                                    {/*<Grid.Column width={6} textAlign={"center"} className={'stories-menu-title'}>*/}
                                    {/*    <Card fluid className={'creator-card'}>*/}
                                    {/*        <Card.Content textAlign={'left'}>*/}
                                    {/*            {activeItem === tabs[0].name &&*/}
                                    {/*            <GenderTab tab={tabs[1]} handleDecision={setCharacterGender}/>*/}
                                    {/*            }*/}
                                    {/*        </Card.Content>*/}
                                    {/*    </Card>*/}
                                    {/*</Grid.Column>*/}
                                </Grid>
                                <Grid>
                                    <Grid.Row columns={8} className={'bottom-panel'}>
                                        <Transition.Group animation={'fade down'} duration={1200}>
                                            {character.gender &&
                                            <Grid.Column>
                                                <Message color={'red'}>
                                                    {character.gender}
                                                </Message>
                                            </Grid.Column>
                                            }
                                        </Transition.Group>
                                        <Transition.Group animation={'fade down'} duration={1200}>
                                            {character.race &&
                                            <Grid.Column>
                                                <Message color={'orange'}>
                                                    {character.race}
                                                </Message>
                                            </Grid.Column>
                                            }
                                        </Transition.Group>
                                        {character.appearance &&
                                        <Grid.Column>
                                            <Message>
                                                {character.appearance}
                                            </Message>
                                        </Grid.Column>
                                        }
                                        {character.origins &&
                                        <Grid.Column>
                                            <Message>
                                                {character.origins}
                                            </Message>
                                        </Grid.Column>
                                        }
                                        {character.profession &&
                                        <Grid.Column>
                                            <Message>
                                                {character.profession}
                                            </Message>
                                        </Grid.Column>
                                        }
                                        {character.characteristics &&
                                        <Grid.Column>
                                            <Message>
                                                {character.characteristics}
                                            </Message>
                                        </Grid.Column>
                                        }
                                        {character.skills &&
                                        <Grid.Column>
                                            <Message>
                                                {character.skills}
                                            </Message>
                                        </Grid.Column>
                                        }
                                        {character.talents &&
                                        <Grid.Column>
                                            <Message>
                                                {character.talents}
                                            </Message>
                                        </Grid.Column>
                                        }
                                    </Grid.Row>
                                </Grid>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
                }
            </Transition.Group>
        </div>
    )
}