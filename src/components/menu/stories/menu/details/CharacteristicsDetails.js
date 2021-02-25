import {Divider, Grid, Image} from "semantic-ui-react";
import CharacterTile from "../additional/CharacterTile";
import {translations} from "../../../../../constants/translation/TranslationKeys";
import CharacterTitleGrid from "../additional/CharacterTitleGrid";
import CharacteristicsColumn from "../additional/CharacteristicsColumn";
import {
    mainCharacteristicColumnTemplate,
    secondaryCharacteristicColumnTemplate
} from "../../../../../constants/stories/objectives/Characteristics";
import React from "react";


export default function CharacteristicsDetails() {

    const colorValue = (val) => {
        if(val <= 30) {
            return 'red';
        } else if (val > 30 && val < 70){
            return 'gray';
        } else {
            return 'green';
        }
    };

    return(
        <Grid.Row className={'equipment'}>
            <Grid.Column width={7}>
                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size={'small'}/>
                <CharacterTile size={'mini'} color={'gray'} value={'Otto Vigerschutz'}/>
                <Divider/>
                <Grid textAlign={'centered'}>
                    <Grid.Row width={12}>
                        <Grid.Column width={8} verticalAlign={'centered'}>
                            <CharacterTile size={'mini'} color={'gray'} name={translations.menu.side.stories.character.personal.age} value={25}/>
                            <CharacterTile size={'mini'} color={'gray'} name={translations.menu.side.stories.character.personal.race} value={'Human'}/>
                            <CharacterTile size={'mini'} color={'gray'} name={translations.menu.side.stories.character.personal.gender} value={'Male'}/>
                        </Grid.Column>
                        <Grid.Column width={8} verticalAlign={'centered'}>
                            <CharacterTile size={'mini'} color={'gray'} name={translations.menu.side.stories.character.personal.profession} value={'Rat Catcher'}/>
                            <CharacterTile size={'mini'} color={'gray'} name={translations.menu.side.stories.character.personal.star} value={'Charm Star'}/>
                            <CharacterTile size={'mini'} color={'gray'} name={translations.menu.side.stories.character.personal.birthplace} value={'Altdorf'}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
            <Grid.Column width={9}>
                <CharacterTitleGrid value={translations.menu.side.stories.character.characteristics.title}/>
                <Divider/>
                <CharacterTitleGrid value={translations.menu.side.stories.character.characteristics.main}/>
                <Grid textAlign={'centered'}>
                    <Grid.Row width={12}>
                        <CharacteristicsColumn colorValue={colorValue} template={mainCharacteristicColumnTemplate} characteristics={[".ws", ".bs"]} values={[60, 30]}/>
                        <CharacteristicsColumn colorValue={colorValue} template={mainCharacteristicColumnTemplate} characteristics={[".s", ".t"]} values={[55, 45]}/>
                        <CharacteristicsColumn colorValue={colorValue} template={mainCharacteristicColumnTemplate} characteristics={[".ag", ".int"]} values={[55, 25]}/>
                        <CharacteristicsColumn colorValue={colorValue} template={mainCharacteristicColumnTemplate} characteristics={[".wp", ".fel"]} values={[55, 22]}/>
                    </Grid.Row>
                </Grid>
                <CharacterTitleGrid value={translations.menu.side.stories.character.characteristics.second}/>
                <Grid textAlign={'centered'}>
                    <Grid.Row width={12}>
                        <CharacteristicsColumn colorValue={colorValue} template={secondaryCharacteristicColumnTemplate} characteristics={[".a", ".w"]} values={[60, 11]}/>
                        <CharacteristicsColumn colorValue={colorValue} template={secondaryCharacteristicColumnTemplate} characteristics={[".sb", ".tb"]} values={[55, 45]}/>
                        <CharacteristicsColumn colorValue={colorValue} template={secondaryCharacteristicColumnTemplate} characteristics={[".m", ".mag"]} values={[80, 64]}/>
                        <CharacteristicsColumn colorValue={colorValue} template={secondaryCharacteristicColumnTemplate} characteristics={[".ip", ".fp"]} values={[27, 37]}/>
                    </Grid.Row>
                </Grid>
            </Grid.Column>
        </Grid.Row>
    )
}