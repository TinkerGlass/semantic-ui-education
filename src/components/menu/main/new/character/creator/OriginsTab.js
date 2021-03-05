import {Grid, Menu, Segment} from "semantic-ui-react";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import NameTile from "../additional/origins/NameTile";
import OriginsTileSelect from "../additional/origins/OriginsTileSelect";
import {startingBirthplace, raceAge, siblingsRange, starSigns} from "../../../../../../constants/main/origins/OriginsConst";
import {translations} from "../../../../../../constants/translation/TranslationKeys";
import OriginsTileRange from "../additional/origins/OriginsTileRange";

const type = 'origins';

export default function OriginsTab(props) {
    const { t } = useTranslation(['translation', 'origins']);

    console.log(props.race);

    const [name, setName] = useState(undefined);
    const [surname, setSurname] = useState(undefined);
    const [star, setStar] = useState(undefined);
    const [age, setAge] = useState(undefined);
    const [siblings, setSiblings] = useState(undefined);
    const [birthplace, setBirthplace] = useState(undefined);



    const prepareOrigins = () => {
        console.log(name);
        let origins = {
            name: name,
            surname: surname,
            star: star,
            age: age,
            siblings: siblings,
            birthplace: birthplace
        };
        props.handleDecision(type, origins, props.tab)
    };

    const parseForSelect = (options) => {
        options.forEach((option, index) => {options[index] = t(option)});
        return options.map((option) => ({key: option, text: option, value: option}));
    };

    return(
        <Grid centered columns={3} fluid className={'creator-card-content'}>
            <Grid.Column key={'family'} className={'race-panel'}>
                    <OriginsTileSelect name={translations.menu.main.character.creator.origins.signs.name} value={props.origins.star} options={parseForSelect(starSigns)} changeProperValue={setStar}/>
                    <OriginsTileRange changeProperValue={setAge} name={translations.menu.main.character.creator.origins.age.name} value={props.origins.age} race={raceAge[props.race]}/>
            </Grid.Column>
            <Grid.Column key={'place'}>
                <OriginsTileRange changeProperValue={setSiblings} name={translations.menu.main.character.creator.origins.siblings.name} value={props.origins.siblings} race={siblingsRange[props.race]}/>
                <OriginsTileSelect name={translations.menu.main.character.creator.origins.birthplace.name} value={props.origins.birthplace} options={parseForSelect(startingBirthplace[props.race])} changeProperValue={setBirthplace}/>
            </Grid.Column>
            <Grid.Column key={'name'}>
                <Segment>
                    <NameTile name={props.origins.name} setName={setName} surname={props.origins.surname} setSurname={setSurname}/>
                    <Menu inverted widths={1} color={'green'} >
                        <Menu.Item size={"tiny"} content={'CONFIRM'} onClick={() => prepareOrigins()}/>
                    </Menu>
                </Segment>
            </Grid.Column>
        </Grid>
    )
}