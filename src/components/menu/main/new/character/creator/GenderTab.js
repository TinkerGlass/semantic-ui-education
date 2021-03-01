import {Button, Divider, Grid, Segment} from "semantic-ui-react";
import React, {useEffect, useState} from "react";
import {translations} from "../../../../../../constants/translation/TranslationKeys";
import {useTranslation} from "react-i18next";

const type = 'gender';

export default function GenderTab(props) {
    const { t } = useTranslation();

    const [gender, setGender] = useState('');


    const [female, setFemale] = useState(false);
    const [male, setMale] = useState(false);

    useEffect(() => {
        if(props.gender !== undefined){
            setGender(props.gender);
            handleSelect(props.gender);
        } else {
            setGender('female');
            handleSelect('female');
        }
    }, []);

    const handleSelect = (gender) => {
        setFemale('female' === gender);
        setMale('male' === gender);
        setGender(gender);
    };

    return(
        <>
            <Grid centered columns={3} fluid className={'creator-card-content'}>
                <Grid.Column>
                    <Segment>
                        <Grid.Row>
                            <Button active={female} inverted color={'grey'} size='massive' content={<i className="venus icon"/>} fluid onClick={() => handleSelect('female')}/>
                        </Grid.Row>
                        <Divider/>
                        <Grid.Row>
                            <Button active={male} inverted color={'grey'} size='massive' content={<i className="mars icon"/>} fluid onClick={() => handleSelect('male')}/>
                        </Grid.Row>
                        <Divider/>
                        <Grid.Row>
                            <Button size={"large"} color={"green"} fluid content={'CONFIRM'} onClick={() => props.handleDecision(type, gender, props.tab)}/>
                        </Grid.Row>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>
                        {gender === undefined &&
                            <></>
                        }
                        {gender !== undefined &&
                            <>
                                {t(translations.menu.main.character.creator.gender + '.description.' + gender)}
                            </>
                        }
                    </Segment>
                </Grid.Column>
            </Grid>
        </>
    )
}