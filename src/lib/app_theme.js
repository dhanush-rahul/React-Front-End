import { createMuiTheme } from '@material-ui/core/styles';

export const AppTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#0022a5', // '#055cbb',
            water: '#DDE0ED'
        },
        secondary: {
            main: '#2E6439', // '#BB6405',
            water: '#E0EDDD'
        },
        error: {
            main: '#A50022',
            water: '#FFE6EB'
        },
        notification: {
            main: '#A50022', // '#22A500',
        },
        amber: {
            main: '#FFA500',
            percent10: '#FFBF1A',
            percent50: '#ffd27f',
        },
        background: {
            default: '#F9FBFD',
        }
    },

    overrides: {
        MuiAutocomplete: {
            root: {
                padding: 0
            },

            inputRoot: {
                padding: 0
            },

            popper: {
                maxWidth: 500
            },

            listbox: {
                backgroundColor: '#DDE0ED',
            }
        },

        MuiBreadcrumbs: {
            root: {
                marginBottom: 9,
                fontSize: '0.8rem'
            }
        },

        MuiButton: {
            label: {
                textTransform: 'none'
            }
        },

        MuiFormControl: {
            root: {
                width: '100%',
                position: 'relative',

            }
        },

        MuiFormLabel: {
            root: {
                fontWeight: 500,
                fontSize: '0.9rem',
                marginTop: 6,
                marginBottom: 7,
                color: 'rgba(0, 0, 0, 0.8)'
            }
        },

        /*MuiInputBase: {
            root: {
                backgroundColor: '#fff',

                '&$error': {
                    'backgroundColor': '#fdf2f4',
                    '& input': {
                        'backgroundColor': '#fdf2f4'
                    }
                },
            },

            input: {
                backgroundColor: '#fff',
            },
        },*/

        MuiInputLabel: {
            formControl: {
                position: 'relative',
                transform: 'none'
            }
        },

        MuiOutlinedInput: {
            root: {
                marginTop: 0
            },

            input: {
                padding: '10px 12px',
                backgroundColor: '#fff',
            },

            multiline: {
                padding: '10px 12px',
                backgroundColor: '#fff',
            }
        },

        MuiTab: {
            root: {
                textTransform: 'none',
            }
        },

        MuiTabs: {
            indicator: {
                height: 3
            }
        },

        MuiTextField: {
            root: {
                margin: 0
            },
        }
    },
});
