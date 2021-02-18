import React, {useState} from "react";
import "../../styles/menu/MainMenu.css";
import {Button, Container, Grid, Menu, Segment, Transition} from "semantic-ui-react";
import {useTranslation} from "react-i18next";
import {translations} from "../../constants/translation/TranslationKeys";
import MenuPanel from "./main/MenuPanel";
import StoryPanel from "./plot/StoryPanel";
import SidePanel from "./stories/SidePanel";
import {useHistory} from "react-router-dom";
import {urls} from "../../constants/router/Urls";

const transitions = [
    'fade right',
    'vertical flip',
    'fade left',
];

const arrowsNames = [
    translations.menu.main.name,
    translations.menu.story.name,
    translations.menu.side.name
];

const menuKeys = [
    'main',
    'story',
    'side'
];

const duration = 1000;

export default function MainMenu() {
    const { t } = useTranslation();
    let history = useHistory();

    const [visible, setVisible] = useState(true);

    const [key, setKey] = useState("main");
    const [number, setNumber] = useState(0);
    const [leftArrow, setLeftArrow] = useState(translations.menu.main.side);
    const [rightArrow, setRightArrow] = useState(translations.menu.main.story);

    const handleChangeTransition = (url) => {
        setVisible(!visible);
        setTimeout(() => { history.push(url)}, 1000);
    };

    const handleMenuTransition = (direction) => {
        console.log("number" + " " + number);
        changeNumber(direction);
        setVisible(!visible);
        setTimeout(() => { setVisible(true)}, 1000);
        console.log(key + " " + number + " " + leftArrow + " " + rightArrow)
    };

    const changeNumber = (direction) => {
        if(direction === 'left'){
            if(number === 0){
                setNumber(menuKeys.length-1);
                setMenuKey(menuKeys.length-1);
                setArrows(menuKeys.length-1);
            } else {
                setNumber(number - 1);
                setMenuKey(number - 1);
                setArrows(number - 1);
            }
        }
        if(direction === 'right'){
            if(number === menuKeys.length-1){
                setNumber(0);
                setMenuKey(0);
                setArrows(0);
            } else {
                setNumber(number + 1);
                setMenuKey(number + 1);
                setArrows(number + 1);
            }
        }
    };

    const setArrows = (num) => {
        if(num === 0){
            setLeftArrow(arrowsNames[menuKeys.length - 1]);
            setRightArrow(arrowsNames[num + 1]);
        } else {
            setLeftArrow(arrowsNames[(num - 1) % menuKeys.length]);
            setRightArrow(arrowsNames[(num + 1) % menuKeys.length]);
        }
    };

    const setMenuKey = (num) => {
        setKey(menuKeys[num]);
    };

    const menu = (key) => {
        return (
            <>
                <div className="background">
                    <Container fluid>
                        <Grid columns={3} centered >
                            <Grid.Row stretched columns={4}>
                                <Grid.Column width={1} height={1}>
                                    <Transition.Group animation={transitions[0]} duration={duration}>
                                        {visible && (
                                                <Button color='teal'
                                                        content='Teal'
                                                        fluid
                                                        onClick={() => handleMenuTransition('left')}>{t(leftArrow).toUpperCase()}</Button>
                                        )}
                                    </Transition.Group>
                                </Grid.Column>
                                <Grid.Column centered textAlign='center'>
                                        {key === 'main' &&
                                            <MenuPanel transition={translations[1]} duration={duration} visible={visible} startTransition={handleChangeTransition}/>
                                        }
                                        {key === 'story' &&
                                            <StoryPanel transition={translations[1]} duration={duration} visible={visible} startTransition={handleChangeTransition}/>
                                        }
                                        {key === 'side' &&
                                            <SidePanel transition={translations[1]} duration={duration} visible={visible} startTransition={handleChangeTransition}/>
                                        }
                                </Grid.Column>
                                <Grid.Column width={1} height={1}>
                                    <Transition.Group animation={transitions[2]} duration={duration}>
                                        {visible && (
                                                <Button color='teal'
                                                        content='Teal'
                                                        fluid
                                                        onClick={() => handleMenuTransition('right')}>{t(rightArrow).toUpperCase()}</Button>
                                        )}
                                    </Transition.Group>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </div>
            </>
        )
    };


    return (
        <>
            {menu(key)}
        </>
    )
}