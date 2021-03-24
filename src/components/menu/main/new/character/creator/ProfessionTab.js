import {Button, Grid, Menu} from "semantic-ui-react";
import React, {useState} from "react";
import {basicRaceProffesions} from "../../../../../../constants/main/proffesions/ProffesionsNamesConst";
import {useTranslation} from "react-i18next";
import Segment from "semantic-ui-react/dist/commonjs/elements/Segment";
import {translations} from "../../../../../../constants/translation/TranslationKeys";


export default function ProfessionTab(props) {
    const { t } = useTranslation(['translation', 'professions']);

    const [details, setDetails] = useState('skill');

    const onOrClick = (detail) => {
        setDetails(detail);
    };

    return(
        <Grid centered columns={3} fluid className={'creator-card-content'}>
            <Grid.Column key={'profession'}>
                <Segment color='gray' className={'race-panel'}>
                    <Segment vertical pointing textAlign={"center"}>
                        <h4>{t(translations.menu.main.character.creator.professions.title)}</h4>
                    </Segment>
                    <Menu vertical widths={1} color={'teal'} fluid borderless className={'profession-list-body'}>
                        {basicRaceProffesions[props.race].map((name) =>
                            <Menu.Item>{t(name)}</Menu.Item>
                        )}
                    </Menu>
                </Segment>
            </Grid.Column>
            <Grid.Column key={'description'}>
                <Segment color='gray' className={'race-panel'}>
                    <Segment vertical pointing textAlign={"center"}>
                        <h4>{t(translations.menu.main.character.creator.professions.description)}</h4>
                    </Segment>
                </Segment>
            </Grid.Column>
            <Grid.Column key={'choice'}>
                <Segment color='gray' className={'race-panel'}>
                    <Segment vertical pointing textAlign={"center"}>
                        <Button.Group>
                            <Button onClick={() => onOrClick('skill')}>{t(translations.menu.main.character.creator.professions.skills)}</Button>
                            <Button.Or/>
                            <Button onClick={() => onOrClick('characteristic')}>{t(translations.menu.main.character.creator.professions.characteristics)}</Button>
                        </Button.Group>
                    </Segment>
                    { details === 'skill' &&
                    <>
                        SKILL
                    </>
                    }
                    { details === 'characteristic' &&
                    <>
                        CHARACTERISTIC
                    </>
                    }
                </Segment>
            </Grid.Column>
        </Grid>
    )
}
