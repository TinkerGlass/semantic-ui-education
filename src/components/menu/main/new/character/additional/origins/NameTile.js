import {useTranslation} from "react-i18next";
import {Divider, Form, Menu} from "semantic-ui-react";
import React, {useEffect, useState} from "react";
import {translations} from "../../../../../../../constants/translation/TranslationKeys";


export default function NameTile(props) {
    const { t } = useTranslation(['translation', 'origins']);


    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    useEffect(() => {
        if(props.name !== undefined){
            setName(props.name);
            props.setName(props.name);
        }
        if(props.surname !== undefined){
            setSurname(props.surname);
            props.setSurname(props.surname);
        }
    }, []);

    const changeName = (value) => {
        setName(value);
        props.setName(value);
    };

    const changeSurname = (value) => {
        setSurname(value);
        props.setSurname(value);
    };

    return(
        <>
            <Form>
                <Form.Field>
                    <label>{t(translations.menu.main.character.creator.origins.name.name)}</label>
                    <input value={name} onChange={(e) => changeName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>{t(translations.menu.main.character.creator.origins.name.surname)}</label>
                    <input value={surname} onChange={(e) => changeSurname(e.target.value)}/>
                </Form.Field>
                <Divider/>
            </Form>
        </>
    )
}