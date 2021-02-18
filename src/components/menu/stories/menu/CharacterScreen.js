import {Grid, Item, Input, Message} from "semantic-ui-react";
import React from "react";
import {useTranslation} from "react-i18next";
import {translations} from "../../../../constants/translation/TranslationKeys";

export default function CharacterScreen(props) {
    const { t } = useTranslation();

    return(
        <Grid>
            <Grid.Row>
                <Grid.Column width={7}>
                    <Grid>
                        <Grid.Row width={12}>
                            <Grid.Column width={8}>
                                <Message size={"mini"}>
                                    <Message.Header>{t(translations.menu.side.stories.character.personal.age)}</Message.Header>
                                    <p>
                                        32
                                    </p>
                                </Message>
                                <Message size={"mini"}>
                                    <Message.Header>{t(translations.menu.side.stories.character.personal.gender)}</Message.Header>
                                    <p>
                                        male
                                    </p>
                                </Message>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Message size={"mini"}>
                                    <Message.Header>{t(translations.menu.side.stories.character.personal.nationality)}</Message.Header>
                                    <p>
                                        United States
                                    </p>
                                </Message>
                                <Message size={"mini"}>
                                    <Message.Header>{t(translations.menu.side.stories.character.personal.place)}</Message.Header>
                                    <p>
                                        Arkham
                                    </p>
                                </Message>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Message size={"mini"}>
                        <Message.Header>{t(translations.menu.side.stories.character.characteristics.str)}</Message.Header>
                        <p>
                            60
                        </p>
                    </Message>
                    <Message size={"mini"}>
                        <Message.Header>{t(translations.menu.side.stories.character.characteristics.con)}</Message.Header>
                        <p>
                            60
                        </p>
                    </Message>
                    <Message size={"mini"}>
                        <Message.Header>{t(translations.menu.side.stories.character.characteristics.siz)}</Message.Header>
                        <p>
                            50
                        </p>
                    </Message>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Message size={"mini"}>
                        <Message.Header>{t(translations.menu.side.stories.character.characteristics.dex)}</Message.Header>
                        <p>
                            55
                        </p>
                    </Message>
                    <Message size={"mini"}>
                        <Message.Header>{t(translations.menu.side.stories.character.characteristics.app)}</Message.Header>
                        <p>
                            45
                        </p>
                    </Message>
                    <Message size={"mini"}>
                        <Message.Header>{t(translations.menu.side.stories.character.characteristics.int)}</Message.Header>
                        <p>
                            75
                        </p>
                    </Message>
                </Grid.Column>
                <Grid.Column width={3}>
                    <Message size={"mini"}>
                        <Message.Header>{t(translations.menu.side.stories.character.characteristics.pow)}</Message.Header>
                        <p>
                            80
                        </p>
                    </Message>
                    <Message size={"mini"}>
                        <Message.Header>{t(translations.menu.side.stories.character.characteristics.edu)}</Message.Header>
                        <p>
                            65
                        </p>
                    </Message>
                    <Message size={"mini"}>
                        <Message.Header>{t(translations.menu.side.stories.character.characteristics.mr)}</Message.Header>
                        <p>
                            6
                        </p>
                    </Message>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}