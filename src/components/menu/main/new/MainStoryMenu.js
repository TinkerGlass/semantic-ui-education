import React, {useEffect, useState} from "react";
import {Button, Container, Grid, Menu, Segment, Transition} from "semantic-ui-react";
import {useTranslation} from "react-i18next";
import MainItem from "./MainItem";
import {tabs} from "../../../../constants/main/MenuTabs";

export default function MainStoryMenu() {
    const { t } = useTranslation();

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
        console.log(tab);
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
                                <Segment attached='bottom'>
                                    {activeItem === tabs[0].name &&
                                    <Button size='mini' onClick={() => openTab(tabs[1].number)}>
                                        OKEJ
                                    </Button>
                                    }
                                    {activeItem === tabs[1].name &&
                                    <Button size='mini' onClick={() => openTab(tabs[2].number)}>
                                        OKEJ
                                    </Button>
                                    }
                                    {activeItem === tabs[2].name &&
                                    <Button size='mini' onClick={() => openTab(tabs[3].number)}>
                                        OKEJ
                                    </Button>
                                    }
                                    {activeItem === tabs[3].name &&
                                    <Button size='mini' onClick={() => openTab(tabs[4].number)}>
                                        OKEJ
                                    </Button>
                                    }
                                    {activeItem === tabs[4].name &&
                                    <Button size='mini' onClick={() => openTab(tabs[5].number)}>
                                        OKEJ
                                    </Button>
                                    }
                                    {activeItem === tabs[5].name &&
                                    <Button size='mini' onClick={() => openTab(tabs[6].number)}>
                                        OKEJ
                                    </Button>
                                    }
                                    {activeItem === tabs[6].name &&
                                    <Button size='mini' onClick={() => openTab(tabs[7].number)}>
                                        OKEJ
                                    </Button>
                                    }
                                    {activeItem === tabs[7].name &&
                                    <Button size='mini'>
                                        DALEj
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