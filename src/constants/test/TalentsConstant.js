import {translations} from "../translation/TranslationKeys";

export const abilitiesTestData = [
    {
        name: 'Specialist Weapon Group (Sling)',
        type: 'weapon',
        description: translations.menu.side.stories.character.abilities.descriptions.spwSling,
        bonus: 0
    },
    {
        name: 'Resistance to disease',
        type: 'resistance',
        description: translations.menu.side.stories.character.abilities.descriptions.resDisease,
        bonus: 10
    },
    {
        name: 'Resistance to poison',
        type: 'resistance',
        description: translations.menu.side.stories.character.abilities.descriptions.resPoison,
        bonus: 10
    },
    {
        name: 'Tunnel Rat',
        type: 'move',
        description: translations.menu.side.stories.character.abilities.descriptions.tunnelRat,
        where: 'underground',
        bonuses: [
            {
                name: "Concealment",
                value: 10
            },
            {
                name: "Silent Move",
                value: 10
            }
        ]
    }
];