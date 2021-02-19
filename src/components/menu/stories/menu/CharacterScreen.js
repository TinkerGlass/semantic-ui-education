import {Grid, Item, Input, Message, Image, Divider, Button, Segment, Progress} from "semantic-ui-react";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {translations} from "../../../../constants/translation/TranslationKeys";
import {skillsTestData} from "../../../../constants/SkillstConstant";
import SkillsDetails from "./SkillsDetails";

export default function CharacterScreen(props) {
    const { t } = useTranslation();

    const [skills, setSkills] = useState(false);

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
        <>
            {!skills &&
            <Grid>
                <Grid.Row>
                    <Grid.Column width={7}>
                        <Image src='https://react.semantic-ui.com/images/wireframe/image.png' size={'small'}/>
                        <Divider/>
                        <Grid>
                            <Grid.Row width={12}>
                                <Grid.Column width={8}>
                                    <Message size={"mini"} color={"gray"}>
                                        <Message.Header>{t(translations.menu.side.stories.character.personal.name)}</Message.Header>
                                        <p>
                                            Thomas
                                        </p>
                                    </Message>
                                    <Message size={"mini"} color={"gray"}>
                                        <Message.Header>{t(translations.menu.side.stories.character.personal.age)}</Message.Header>
                                        <p>
                                            32
                                        </p>
                                    </Message>
                                    <Message size={"mini"} color={"gray"}>
                                        <Message.Header>{t(translations.menu.side.stories.character.personal.gender)}</Message.Header>
                                        <p>
                                            male
                                        </p>
                                    </Message>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <Message size={"mini"} color={"gray"}>
                                        <Message.Header>{t(translations.menu.side.stories.character.personal.surname)}</Message.Header>
                                        <p>
                                            Mourethew
                                        </p>
                                    </Message>
                                    <Message size={"mini"} color={"gray"}>
                                        <Message.Header>{t(translations.menu.side.stories.character.personal.nationality)}</Message.Header>
                                        <p>
                                            United States
                                        </p>
                                    </Message>
                                    <Message size={"mini"} color={"gray"}>
                                        <Message.Header>{t(translations.menu.side.stories.character.personal.place)}</Message.Header>
                                        <p>
                                            Arkham
                                        </p>
                                    </Message>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Divider/>
                        <Grid>
                            <Grid.Row width={12}>
                                <Grid.Column verticalAlign={'centered'} width={16}>
                                    <Button fluid
                                            onClick={() => setSkills(true)}
                                            size='tiny'>
                                        {t(translations.menu.side.stories.character.skills.title)}
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <Grid textAlign={'centered'}>
                            {t(translations.menu.side.stories.character.characteristics.title)}
                            <Grid.Row width={12}>
                                <Grid.Column verticalAlign={'centered'} width={5}>
                                    <Message size={"mini"} color={colorValue(60)}>
                                        <Message.Header>{t(translations.menu.side.stories.character.characteristics.str)}</Message.Header>
                                        <p>
                                            60
                                        </p>
                                    </Message>
                                    <Message size={"mini"} color={colorValue(30)}>
                                        <Message.Header>{t(translations.menu.side.stories.character.characteristics.con)}</Message.Header>
                                        <p>
                                            30
                                        </p>
                                    </Message>
                                    <Message size={"mini"} color={colorValue(50)}>
                                        <Message.Header>{t(translations.menu.side.stories.character.characteristics.siz)}</Message.Header>
                                        <p>
                                            50
                                        </p>
                                    </Message>
                                </Grid.Column>
                                <Grid.Column verticalAlign={'centered'} width={5}>
                                    <Message size={"mini"} color={colorValue(55)}>
                                        <Message.Header>{t(translations.menu.side.stories.character.characteristics.dex)}</Message.Header>
                                        <p>
                                            55
                                        </p>
                                    </Message>
                                    <Message size={"mini"} color={colorValue(45)}>
                                        <Message.Header>{t(translations.menu.side.stories.character.characteristics.app)}</Message.Header>
                                        <p>
                                            45
                                        </p>
                                    </Message>
                                    <Message size={"mini"} color={colorValue(75)}>
                                        <Message.Header>{t(translations.menu.side.stories.character.characteristics.int)}</Message.Header>
                                        <p>
                                            75
                                        </p>
                                    </Message>
                                </Grid.Column>
                                <Grid.Column verticalAlign={'centered'} width={5}>
                                    <Message size={"mini"} color={colorValue(80)}>
                                        <Message.Header>{t(translations.menu.side.stories.character.characteristics.pow)}</Message.Header>
                                        <p>
                                            80
                                        </p>
                                    </Message>
                                    <Message size={"mini"} color={colorValue(65)}>
                                        <Message.Header>{t(translations.menu.side.stories.character.characteristics.edu)}</Message.Header>
                                        <p>
                                            65
                                        </p>
                                    </Message>
                                    <Message size={"mini"} color={'blue'}>
                                        <Message.Header>{t(translations.menu.side.stories.character.characteristics.mr)}</Message.Header>
                                        <p>
                                            6
                                        </p>
                                    </Message>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Divider/>
                        <Grid textAlign={'centered'}>
                            {t(translations.menu.side.stories.character.others.title)}
                            <Grid.Row width={12}>
                                <Grid.Column verticalAlign={'centered'} width={8}>
                                    <Message size={"mini"}>
                                        <Message.Header>{t(translations.menu.side.stories.character.others.hp)}</Message.Header>
                                        <Progress percent={(11/20)*100} size={"tiny"} color={colorValue((11/20)*100)}/>
                                    </Message>
                                    <Message size={"mini"}>
                                        <Message.Header>{t(translations.menu.side.stories.character.others.sanity)}</Message.Header>
                                        <Progress percent={57} size={"tiny"} color={colorValue(57)}/>
                                    </Message>
                                </Grid.Column>
                                <Grid.Column verticalAlign={'centered'} width={8}>
                                    <Message size={"mini"}>
                                        <Message.Header>{t(translations.menu.side.stories.character.others.luck)}</Message.Header>
                                        <Progress percent={25} size={"tiny"} color={colorValue(25)}/>
                                    </Message>
                                    <Message size={"mini"}>
                                        <Message.Header>{t(translations.menu.side.stories.character.others.mp)}</Message.Header>
                                        <Progress percent={(14/20)*100} size={"tiny"} color={colorValue((14/20)*100)}/>
                                    </Message>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            }
            {skills &&
                <SkillsDetails setSkills={setSkills} skills={skillsTestData}/>
            }
        </>
    )
}