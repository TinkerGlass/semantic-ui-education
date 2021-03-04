import {Button, Divider, Grid, Segment} from "semantic-ui-react";
import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {translations} from "../../../../../../constants/translation/TranslationKeys";
import BaseCharacteristicsTable from "../additional/race/BaseCharacteristicsTable";
import RaceSkillTable from "../additional/race/RaceSkillTable";
import RaceTalentTable from "../additional/race/RaceTalentTable";

const type = 'race';

export default function RaceTab(props) {
    const { t } = useTranslation(['translation', 'skills']);

    const [race, setRace] = useState('dwarf');

    const [dwarf, setDwarf] = useState(true);
    const [elf, setElf] = useState(false);
    const [halfling, setHalfling] = useState(false);
    const [human, setHuman] = useState(false);



    useEffect(() => {
        if(props.race !== undefined){
            setRace(props.race);
            handleSelect(props.race);
        } else {
            setRace('dwarf');
            handleSelect('dwarf');
        }
    }, []);

    const handleSelect = (race) => {
        setDwarf('dwarf' === race);
        setElf('elf' === race);
        setHalfling('halfling' === race);
        setHuman('human' === race);
        setRace(race);
    };

    return(
        <Grid centered columns={3} fluid className={'creator-card-content'}>
            <Grid.Column key={'choice'}>
                <Segment inverted color='gray' className={'race-panel'}>
                    <Segment vertical>
                        <Button active={dwarf} inverted color={'olive'} size='tiny'
                                content={t(translations.menu.main.character.creator.race.name.dwarf)} onClick={() => handleSelect('dwarf')} fluid/>
                    </Segment>
                    <Segment vertical>
                        <Button active={elf} inverted color={'olive'} size='tiny'
                                content={t(translations.menu.main.character.creator.race.name.elf)} onClick={() => handleSelect('elf')} fluid/>
                    </Segment>
                    <Segment vertical>
                        <Button active={halfling} inverted color={'olive'} size='tiny'
                                content={t(translations.menu.main.character.creator.race.name.halfling)} onClick={() => handleSelect('halfling')} fluid/>
                    </Segment>
                    <Segment vertical>
                        <Button active={human} inverted color={'olive'} size='tiny'
                                content={t(translations.menu.main.character.creator.race.name.human)} onClick={() => handleSelect('human')} fluid/>
                    </Segment>
                    <Segment vertical>
                        <Grid.Row>
                            <Button size={"large"} color={"green"} fluid content={'CONFIRM'} onClick={() => props.handleDecision(type, race, props.tab)}/>
                        </Grid.Row>
                    </Segment>
                </Segment>
            </Grid.Column>
            <Grid.Column key={'stats'}>
                <Segment className={'race-panel'}>
                    <Segment vertical textAlign={"center"}>
                        <h4>{t(translations.menu.main.character.creator.race.characteristics.name)}</h4>
                    </Segment>
                    <Segment vertical>
                        <BaseCharacteristicsTable race={race}/>
                    </Segment>
                </Segment>
            </Grid.Column>
            <Grid.Column key={'skills'}>
                <Segment className={'race-panel'}>
                    <Segment vertical textAlign={"center"}>
                        <h4>{t(translations.menu.main.character.creator.race.description.name)}</h4>
                    </Segment>
                    <Segment vertical>
                        <RaceSkillTable race={race}/>
                    </Segment>
                    <Segment vertical textAlign={"center"}>
                        <h4>{t(translations.menu.main.character.creator.race.description.name)}</h4>
                    </Segment>
                    <Segment vertical>
                        <RaceTalentTable race={race}/>
                    </Segment>
                </Segment>
            </Grid.Column>
        </Grid>
    )
}