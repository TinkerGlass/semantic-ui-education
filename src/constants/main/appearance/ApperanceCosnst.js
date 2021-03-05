import {translations} from "../../translation/TranslationKeys";

export const startingHealth = {
    dwarf: {
        min: 11,
        max: 14
    },
    elf: {
        min: 9,
        max: 12
    },
    halfling: {
        min: 8,
        max: 11
    },
    human: {
        min: 10,
        max: 13
    }
};

export const startingDestiny = {
    dwarf: {
        min: 2,
        max: 4
    },
    elf: {
        min: 1,
        max: 3
    },
    halfling: {
        min: 1,
        max: 3
    },
    human: {
        min: 2,
        max: 4
    }
};

export const hairColor = {
    dwarf:[
        translations.menu.main.character.creator.appearance.color + '.ashblond',
        translations.menu.main.character.creator.appearance.color + '.yellow',
        translations.menu.main.character.creator.appearance.color + '.red',
        translations.menu.main.character.creator.appearance.color + '.cooper',
        translations.menu.main.character.creator.appearance.color + '.lightBrown',
        translations.menu.main.character.creator.appearance.color + '.brown',
        translations.menu.main.character.creator.appearance.color + '.darkBrown',
        translations.menu.main.character.creator.appearance.color + '.blueBlack',
        translations.menu.main.character.creator.appearance.color + '.black',
    ],
    elf:[
        translations.menu.main.character.creator.appearance.color + '.silver',
        translations.menu.main.character.creator.appearance.color + '.ashblond',
        translations.menu.main.character.creator.appearance.color + '.corn',
        translations.menu.main.character.creator.appearance.color + '.yellow',
        translations.menu.main.character.creator.appearance.color + '.cooper',
        translations.menu.main.character.creator.appearance.color + '.lightBrown',
        translations.menu.main.character.creator.appearance.color + '.brown',
        translations.menu.main.character.creator.appearance.color + '.darkBrown',
        translations.menu.main.character.creator.appearance.color + '.black',
    ],
    halfling:[
        translations.menu.main.character.creator.appearance.color + '.ashblond',
        translations.menu.main.character.creator.appearance.color + '.corn',
        translations.menu.main.character.creator.appearance.color + '.yellow',
        translations.menu.main.character.creator.appearance.color + '.cooper',
        translations.menu.main.character.creator.appearance.color + '.red',
        translations.menu.main.character.creator.appearance.color + '.lightBrown',
        translations.menu.main.character.creator.appearance.color + '.brown',
        translations.menu.main.character.creator.appearance.color + '.darkBrown',
        translations.menu.main.character.creator.appearance.color + '.black',
    ],
    human:[
        translations.menu.main.character.creator.appearance.color + '.ashblond',
        translations.menu.main.character.creator.appearance.color + '.corn',
        translations.menu.main.character.creator.appearance.color + '.yellow',
        translations.menu.main.character.creator.appearance.color + '.cooper',
        translations.menu.main.character.creator.appearance.color + '.red',
        translations.menu.main.character.creator.appearance.color + '.lightBrown',
        translations.menu.main.character.creator.appearance.color + '.brown',
        translations.menu.main.character.creator.appearance.color + '.darkBrown',
        translations.menu.main.character.creator.appearance.color + '.black',
    ]
};

export const eyesColor = {
    dwarf:[
        translations.menu.main.character.creator.appearance.color + '.paleGrey',
        translations.menu.main.character.creator.appearance.color + '.blue',
        translations.menu.main.character.creator.appearance.color + '.cooper',
        translations.menu.main.character.creator.appearance.color + '.lightBrown',
        translations.menu.main.character.creator.appearance.color + '.brown',
        translations.menu.main.character.creator.appearance.color + '.darkBrown',
        translations.menu.main.character.creator.appearance.color + '.purple',
    ],
    elf:[
        translations.menu.main.character.creator.appearance.color + '.greyBlue',
        translations.menu.main.character.creator.appearance.color + '.blue',
        translations.menu.main.character.creator.appearance.color + '.green',
        translations.menu.main.character.creator.appearance.color + '.cooper',
        translations.menu.main.character.creator.appearance.color + '.lightBrown',
        translations.menu.main.character.creator.appearance.color + '.brown',
        translations.menu.main.character.creator.appearance.color + '.darkBrown',
        translations.menu.main.character.creator.appearance.color + '.silver',
        translations.menu.main.character.creator.appearance.color + '.purple',
        translations.menu.main.character.creator.appearance.color + '.black',
    ],
    halfling:[
        translations.menu.main.character.creator.appearance.color + '.blue',
        translations.menu.main.character.creator.appearance.color + '.hazel',
        translations.menu.main.character.creator.appearance.color + '.lightBrown',
        translations.menu.main.character.creator.appearance.color + '.brown',
        translations.menu.main.character.creator.appearance.color + '.darkBrown'
    ],
    human:[
        translations.menu.main.character.creator.appearance.color + '.paleGrey',
        translations.menu.main.character.creator.appearance.color + '.greyBlue',
        translations.menu.main.character.creator.appearance.color + '.blue',
        translations.menu.main.character.creator.appearance.color + '.green',
        translations.menu.main.character.creator.appearance.color + '.cooper',
        translations.menu.main.character.creator.appearance.color + '.lightBrown',
        translations.menu.main.character.creator.appearance.color + '.brown',
        translations.menu.main.character.creator.appearance.color + '.darkBrown',
        translations.menu.main.character.creator.appearance.color + '.purple',
        translations.menu.main.character.creator.appearance.color + '.black',
    ]
};

export const heightValue= {
    dwarf: {
        min: 130,
        max: 165
    },
    elf: {
        min: 160,
        max: 190
    },
    halfling: {
        min: 100,
        max: 130
    },
    human: {
        min: 150,
        max: 180
    }
};

export const weightValue = {
    dwarf: {
        min: 45,
        max: 100
    },
    elf: {
        min: 40,
        max: 95
    },
    halfling: {
        min: 35,
        max: 70
    },
    human: {
        min: 50,
        max: 110
    }
};