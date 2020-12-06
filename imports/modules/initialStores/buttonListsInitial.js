export const buttonListsInitial = [
    {
        id: 'studies',
        listTitle: 'Studies',
        buttons: [
            {
                id: 'new', 
                panelId: 'studies', 
                iconLeft: 'plus-circle', 
                title: 'New Study',
                textMain: 'New', 
                textRight: '<span>&#8984;SN</span>', 
                hasPanel: true,
            },
            {
                id: 'open', 
                panelId: 'studies', 
                iconLeft: 'arrow-right-circle', 
                title: 'Open Study',
                textMain: 'Open', 
                textRight: '<span>&#8984;SO</span>', 
                hasPanel: true,
            },
            {
                divider: true, 
                hasPanel: true,
            },
            {
                id: 'newInner', 
                panelId: 'studies', 
                iconLeft: 'arrow-down-square', 
                title: 'New Inner Study',
                textMain: 'New Inner', 
                textRight: '<span>&#8984;NI</span>', 
                hasPanel: true,
                isDisabled: true,
            },
            {
                id: 'newOuter', 
                panelId: 'studies', 
                iconLeft: 'arrow-up-square', 
                title: 'New Outer Study',
                textMain: 'New Outer', 
                textRight: '<span>&#8984;NO</span>', 
                hasPanel: true,
                isDisabled: true,
            },
            {
                divider: true, 
                hasPanel: true,
            },
            {
                id: 'newCompare', 
                panelId: 'studies', 
                iconLeft: 'compare', 
                title: 'New Comparative Study',
                textMain: 'New Comparative', 
                textRight: '<span>&#8984;NC</span>', 
                hasPanel: true,
            },
        ],
    },
    {
        id: 'zoom',
        listTitle: 'Zoom',
        isChecked: true,
        buttons: [
            {id: '25', textMain: '25%'},
            {id: '50', textMain: '50%'},
            {id: '75', textMain: '75%'},
            {id: '100', textMain: '100%', isActive: true},
            {id: '125', textMain: '125%'},
            {id: '150', textMain: '150%'},
            {id: '200', textMain: '200%'},
            {id: '300', textMain: '300%'},
            {id: '400', textMain: '400%'},
            {divider: true},
            {id: 'fitWidth', textMain: 'Fit Width'},
            {id: 'fitPage', textMain: 'Fit Page'},
        ],
    },
    {
        id: 'outline',
        listTitle: 'Outline',
        buttons: [
            {
                id: 'section',
                iconLeft: 'outline-section', 
                textMain: 'Section', 
                textRight: '<span>&#8984;OS</span>',
                isDisabled: true,
            },
            {
                id: 'column',
                iconLeft: 'outline-column', 
                textMain: 'Column', 
                textRight: '<span>&#8984;OC</span>',
                isDisabled: true,
            },
            {
                id: 'group',
                iconLeft: 'outline-group', 
                textMain: 'Group', 
                textRight: '<span>&#8984;OG</span>',
                isDisabled: true,
            },
            {
                divider: true
            },
            {
                id: 'unpin',
                iconLeft: 'unpin', 
                textMain: 'Unpin', 
                textRight: '<span>&#8984;OU</span>',
                isDisabled: true,
            },
            {
                id: 'pin',
                iconLeft: 'pin', 
                textMain: 'Pin', 
                textRight: '<span>&#8984;OP</span>',
                isDisabled: true,
            },
        ],
    },
    {
        id: 'text',
        listTitle: 'Text',
        buttons: [
            {
                id: 'highlight',
                iconLeft: 'highlight', 
                textMain: 'Highlight', 
                textRight: '<span>&#8984;TH</span>',
                isDisabled: true,
            },
            {
                divider: true
            },
            {
                id: 'split',
                iconLeft: 'text-split', 
                textMain: 'Split', 
                textRight: '<span>&#8984;TS</span>',
                isDisabled: true,
            },
            {
               id: 'join',
                iconLeft: 'text-join', 
                textMain: 'Join', 
                textRight: '<span>&#8984;TJ</span>',
                isDisabled: true,
            },
            {
                divider: true},
            {
                id: 'moveUp',
                iconLeft: 'arrow-up', 
                textMain: 'Move Up', 
                textRight: '<span>&#8984;MU</span>',
                isDisabled: true,
            },
            {
                id: 'moveDown',
                iconLeft: 'arrow-down', 
                textMain: 'Move Down', 
                textRight: '<span>&#8984;MD</span>',
                isDisabled: true,
            },  
        ],
    },
    {
        id: 'literary',
        listTitle: 'Literary',
        buttons: [
            {
                id: 'chiasim',
                iconLeft: 'literary-chiasim', 
                textMain: 'Chiasim', 
                textRight: '<span>&#8984;LC</span>',
                isDisabled: true,
            },
            {
                id: 'paralellism',
                iconLeft: 'literary-paralell', 
                textMain: 'Paralellism', 
                textRight: '<span>&#8984;LP</span>',
                isDisabled: true,
            },
            {
                id: 'repetition',
                iconLeft: 'literary-repeat', 
                textMain: 'Repetition', 
                textRight: '<span>&#8984;LR</span>',
                isDisabled: true,
            },
            {
                id: 'intensification',
                iconLeft: 'literary-intensify', 
                textMain: 'Intensification', 
                textRight: '<span>&#8984;LI</span>',
                isDisabled: true,
            },
        ],
    },
    {
        id: 'color',
        listTitle: 'Color',
        buttons: [
            {
                id: 'red',
                shapeLeft: 'circle', 
                shapeLeftColor: 'red', 
                textMain: 'Red',
                isDisabled: true,
            },
            {
                id: 'orange',
                shapeLeft: 'circle', 
                shapeLeftColor: 'orange', 
                textMain: 'Orange',
                isDisabled: true,
            },
            {
                id: 'yellow',
                shapeLeft: 'circle', 
                shapeLeftColor: 'yellow', 
                textMain: 'Yellow',
                isDisabled: true,
            },
            {
                id: 'green',
                shapeLeft: 'circle', 
                shapeLeftColor: 'green', 
                textMain: 'Green',
                isDisabled: true,
            },
            {
                id: 'aqua',
                shapeLeft: 'circle', 
                shapeLeftColor: 'aqua', 
                textMain: 'Aqua',
                isDisabled: true,
            },
            {
                id: 'blue',
                shapeLeft: 'circle', 
                shapeLeftColor: 'blue', 
                textMain: 'Blue',
                isDisabled: true,
            },
            {
                id: 'purple',
                shapeLeft: 'circle', 
                shapeLeftColor: 'purple', 
                textMain: 'Purple',
                isDisabled: true,
            },
            {
                id: 'pink',
                shapeLeft: 'circle', 
                shapeLeftColor: 'pink', 
                textMain: 'Pink',
                isDisabled: true,
            },
        ],
    },
    {
        id: 'settings',
        listTitle: 'Settings',
        buttons: [
            {
                id: 'account', 
                panelId: 'settings', 
                iconLeft: 'account', 
                title: 'Account Settings',
                textMain: 'Account', 
                textRight: '<span>&#8984;SA</span>', 
                hasPanel: true,
            },
            {
                id: 'toolbar', 
                panelId: 'settings', 
                iconLeft: 'toolbar', 
                title: 'Toolbar Settings',
                textMain: 'Toolbar', 
                textRight: '<span>&#8984;ST</span>', 
                hasPanel: true,
            },
            {
                id: 'help', 
                panelId: 'settings', 
                iconLeft: 'help', 
                title: 'Help',
                textMain: 'Help', 
                textRight: '<span>&#8984;SH</span>', 
                hasPanel: true,
            },
            {
                divider: true, 
            },
            {
                id: 'signout', 
                iconLeft: 'power', 
                textMain: 'Sign Out', 
            },
        ],
    },
]