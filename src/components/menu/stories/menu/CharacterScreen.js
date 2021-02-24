import {Grid} from "semantic-ui-react";
import React, {useState} from "react";
import {translations} from "../../../../constants/translation/TranslationKeys";
import {advancedSkills, skillsTestData} from "../../../../constants/test/SkillstConstant";
import SkillsDetails from "./details/SkillsDetails";
import CharacterButton from "./additional/CharacterButton";
import CharacteristicsDetails from "./details/CharacteristicsDetails";
import {abilitiesTestData} from "../../../../constants/test/TalentsConstant";
import TalentsDetails from "./details/TalentsDetails";
import EquipmentDetails from "./details/EquipmentDetails";

export default function CharacterScreen() {

    const [characteristics, setCharacteristics] = useState(true);
    const [skills, setSkills] = useState(false);
    const [abilities, setAbilities] = useState(false);
    const [equipment, setEquipment] = useState(false);

    const [skillsData, setSkillsData] = useState(skillsTestData);
    const [abilitiesData, setAbilitiesData] = useState(abilitiesTestData);
    const [equipmentData, setEquipmentData] = useState([]);

    function compare( a, b ) {
        if ( a.name < b.name ){
            return -1;
        }
        if ( a.name > b.name ){
            return 1;
        }
        return 0;
    }

    const changeDetails = (variant) => {
        setCharacteristics(variant === 1);
        setSkills(variant === 2);
        setAbilities(variant === 3);
        setEquipment(variant === 4);
    };

    return(
        <>

            <Grid>
                {characteristics &&
                    <CharacteristicsDetails/>
                }
                {skills &&
                    <SkillsDetails skills={skillsData.concat(advancedSkills).sort(compare)}/>
                }
                {abilities &&
                    <TalentsDetails talents={abilitiesData.sort(compare)}/>
                }
                {equipment &&
                    <EquipmentDetails/>
                }
                <Grid.Row width={12}>
                    <CharacterButton name={translations.menu.side.stories.character.characteristics.title} handle={changeDetails} value={1}/>
                    <CharacterButton name={translations.menu.side.stories.character.skills.title} handle={changeDetails} value={2}/>
                    <CharacterButton name={translations.menu.side.stories.character.abilities.title} handle={changeDetails} value={3}/>
                    <CharacterButton name={translations.menu.side.stories.character.equipment.title} handle={changeDetails} value={4}/>
                </Grid.Row>
            </Grid>

        </>
    )
}