import {Menu, Grid, Segment, Button} from "semantic-ui-react";
import React, {useState} from "react";
import AppearanceTileRange from "../additional/appearance/AppearanceTileRange";
import {
    eyesColor, hairColor,
    heightValue,
    startingDestiny,
    startingHealth, weightValue
} from "../../../../../../constants/main/appearance/ApperanceCosnst";
import {translations} from "../../../../../../constants/translation/TranslationKeys";
import AppearanceTileSelect from "../additional/appearance/AppearanceTileSelect";
import {useTranslation} from "react-i18next";

const type = 'appearance';

export default function AppearanceTab(props) {
    const { t } = useTranslation(['translations', 'appearance']);

    const [health, setHealth] = useState(undefined);
    const [fate, setFate] = useState(undefined);
    const [height, setHeight] = useState(undefined);
    const [weight, setWeight] = useState(undefined);
    const [hair, setHair] = useState(undefined);
    const [eyes, setEyes] = useState(undefined);

    const parseColors = (options) => {
        options.forEach((option, index) => {options[index] = t(option)});
        return options.map((option) => ({key: option, text: option, value: option}));
    };

    const createAppearanceName = () => {
        let sum = health + fate + height + weight;
        if(sum < 80){
            return 'weak'
        } else if (sum > 80 && sum < 120) {
            return 'handsome'
        } else if (sum > 120 && sum < 160) {
            return 'tough'
        } else {
            return 'strong'
        }
    };

    const prepareAppearance = () => {
        let appearance = {
            name: createAppearanceName(),
            health: health,
            fate: fate,
            height: height,
            weight: weight,
            hair: hair,
            eyes: eyes
        };
        props.handleDecision(type, appearance, props.tab)
    };

    return(
        <Grid centered fluid className={'creator-card-content'}>
            <Grid.Row centered columns={3} fluid>
                <Grid.Column centered fluid>
                    <Segment className={'appearance-panel'}>
                        <AppearanceTileRange changeProperValue={setHealth} name={translations.menu.main.character.creator.appearance.health.name} value={props.appearance.health} race={startingHealth[props.race]}/>
                    </Segment>
                </Grid.Column>
                <Grid.Column centered fluid>
                    <Segment className={'appearance-panel'}>
                        <AppearanceTileRange changeProperValue={setHeight} name={translations.menu.main.character.creator.appearance.height.name} value={props.appearance.height} race={heightValue[props.race]}/>
                    </Segment>
                </Grid.Column>
                <Grid.Column centered fluid>
                    <Segment className={'appearance-panel'}>
                        <AppearanceTileSelect changeProperValue={setEyes} name={translations.menu.main.character.creator.appearance.eyes.name} value={props.appearance.eyes} options={parseColors(eyesColor[props.race])}/>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={3} fluid>
                <Grid.Column centered fluid>
                    <Segment className={'appearance-panel'}>
                        <AppearanceTileRange changeProperValue={setFate} name={translations.menu.main.character.creator.appearance.fate.name} value={props.appearance.fate} race={startingDestiny[props.race]}/>
                    </Segment>
                </Grid.Column>
                <Grid.Column centered fluid>
                    <Segment className={'appearance-panel'}>
                        <AppearanceTileRange changeProperValue={setWeight} name={translations.menu.main.character.creator.appearance.weight.name} value={props.appearance.weight} race={weightValue[props.race]}/>
                    </Segment>
                </Grid.Column>
                <Grid.Column centered fluid>
                    <Segment className={'appearance-panel'}>
                        <AppearanceTileSelect changeProperValue={setHair} name={translations.menu.main.character.creator.appearance.hair.name} value={props.appearance.hair} options={parseColors(hairColor[props.race])}/>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
            <Grid.Column width={16} centered fluid>
                <Menu inverted widths={1} color={'green'}>
                    <Menu.Item size={"tiny"} content={'CONFIRM'} onClick={() => prepareAppearance()}/>
                </Menu>
            </Grid.Column>
        </Grid>
    )
}