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
        translations.menu.main.character.creator.appearance + '.ashblond',
        translations.menu.main.character.creator.appearance + '.yellow',
        translations.menu.main.character.creator.appearance + '.red',
        translations.menu.main.character.creator.appearance + '.cooper',
        translations.menu.main.character.creator.appearance + '.lightBrown',
        translations.menu.main.character.creator.appearance + '.brown',
        translations.menu.main.character.creator.appearance + '.brown',
        translations.menu.main.character.creator.appearance + '.darkBrown',
        translations.menu.main.character.creator.appearance + '.blueBlack',
        translations.menu.main.character.creator.appearance + '.black',
    ],
    elf:[
        translations.menu.main.character.creator.appearance + '.silver',
        translations.menu.main.character.creator.appearance + '.ashblond',
        translations.menu.main.character.creator.appearance + '.corn',
        translations.menu.main.character.creator.appearance + '.yellow',
        translations.menu.main.character.creator.appearance + '.cooper',
        translations.menu.main.character.creator.appearance + '.lightBrown',
        translations.menu.main.character.creator.appearance + '.lightBrown',
        translations.menu.main.character.creator.appearance + '.brown',
        translations.menu.main.character.creator.appearance + '.darkBrown',
        translations.menu.main.character.creator.appearance + '.black',
    ],
    halfling:[
        translations.menu.main.character.creator.appearance + '.ashblond',
        translations.menu.main.character.creator.appearance + '.corn',
        translations.menu.main.character.creator.appearance + '.yellow',
        translations.menu.main.character.creator.appearance + '.yellow',
        translations.menu.main.character.creator.appearance + '.cooper',
        translations.menu.main.character.creator.appearance + '.red',
        translations.menu.main.character.creator.appearance + '.lightBrown',
        translations.menu.main.character.creator.appearance + '.brown',
        translations.menu.main.character.creator.appearance + '.darkBrown',
        translations.menu.main.character.creator.appearance + '.black',
    ],
    human:[
        translations.menu.main.character.creator.appearance + '.ashblond',
        translations.menu.main.character.creator.appearance + '.corn',
        translations.menu.main.character.creator.appearance + '.yellow',
        translations.menu.main.character.creator.appearance + '.cooper',
        translations.menu.main.character.creator.appearance + '.red',
        translations.menu.main.character.creator.appearance + '.lightBrown',
        translations.menu.main.character.creator.appearance + '.brown',
        translations.menu.main.character.creator.appearance + '.brown',
        translations.menu.main.character.creator.appearance + '.darkBrown',
        translations.menu.main.character.creator.appearance + '.black',
    ]
};

export const eyesColor = {
    dwarf:[
        translations.menu.main.character.creator.appearance + '.paleGrey',
        translations.menu.main.character.creator.appearance + '.blue',
        translations.menu.main.character.creator.appearance + '.cooper',
        translations.menu.main.character.creator.appearance + '.lightBrown',
        translations.menu.main.character.creator.appearance + '.lightBrown',
        translations.menu.main.character.creator.appearance + '.brown',
        translations.menu.main.character.creator.appearance + '.brown',
        translations.menu.main.character.creator.appearance + '.darkBrown',
        translations.menu.main.character.creator.appearance + '.darkBrown',
        translations.menu.main.character.creator.appearance + '.purple',
    ],
    elf:[
        translations.menu.main.character.creator.appearance + '.greyBlue',
        translations.menu.main.character.creator.appearance + '.blue',
        translations.menu.main.character.creator.appearance + '.green',
        translations.menu.main.character.creator.appearance + '.cooper',
        translations.menu.main.character.creator.appearance + '.lightBrown',
        translations.menu.main.character.creator.appearance + '.brown',
        translations.menu.main.character.creator.appearance + '.darkBrown',
        translations.menu.main.character.creator.appearance + '.silver',
        translations.menu.main.character.creator.appearance + '.purple',
        translations.menu.main.character.creator.appearance + '.black',
    ],
    halfling:[
        translations.menu.main.character.creator.appearance + '.blue',
        translations.menu.main.character.creator.appearance + '.hazel',
        translations.menu.main.character.creator.appearance + '.hazel',
        translations.menu.main.character.creator.appearance + '.lightBrown',
        translations.menu.main.character.creator.appearance + '.lightBrown',
        translations.menu.main.character.creator.appearance + '.brown',
        translations.menu.main.character.creator.appearance + '.brown',
        translations.menu.main.character.creator.appearance + '.darkBrown',
        translations.menu.main.character.creator.appearance + '.darkBrown',
        translations.menu.main.character.creator.appearance + '.darkBrown',
    ],
    human:[
        translations.menu.main.character.creator.appearance + '.paleGrey',
        translations.menu.main.character.creator.appearance + '.greyBlue',
        translations.menu.main.character.creator.appearance + '.blue',
        translations.menu.main.character.creator.appearance + '.green',
        translations.menu.main.character.creator.appearance + '.cooper',
        translations.menu.main.character.creator.appearance + '.lightBrown',
        translations.menu.main.character.creator.appearance + '.brown',
        translations.menu.main.character.creator.appearance + '.darkBrown',
        translations.menu.main.character.creator.appearance + '.purple',
        translations.menu.main.character.creator.appearance + '.black',
    ]
};

export const heightValue= {
    dwarf: {
        male: {
            min: 145,
            max: 165
        },
        female: {
            min: 130,
            max: 150
        }
    },
    elf: {
        male: {
            min: 170,
            max: 190
        },
        female: {
            min: 160,
            max: 180
        }
    },
    halfling: {
        male: {
            min: 110,
            max: 130
        },
        female: {
            min: 100,
            max: 120
        }
    },
    human: {
        male: {
            min: 150,
            max: 170
        },
        female: {
            min: 160,
            max: 180
        }
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