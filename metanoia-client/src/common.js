import {
    createMuiTheme,
} from "@material-ui/core/styles";
export const theme = createMuiTheme({
    props: {
        MuiSelect: {
            MenuProps: {
                getContentAnchorEl: null,
                anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left"
                },
                style: {
                    marginTop: '5px'
                }
            }
        }
    },
    typography: {
        fontFamily: [
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
        ].join(','),
    },
    overrides: {
        MuiFormControl: {
            root: {
                width: '100%',
                height: '45px',
                fontFamily: 'Roboto'
            }
        },
        MuiInputBase : {
            root:{
                "&.Mui-disabled": {
                    background: "#FFFFFF",
                    color: '#4A5569'
                }
            }
        },
        MuiOutlinedInput: {
            root: {
                textAlign: 'left',
                letterSpacing: '0.18px',
                fontSize: '13px',
                color: '#4A5569',
                backgroundColor: '#FFFFFF',
                minHeight: '45px',
                height: '45px',
                '& $notchedOutline': {
                    border: '1px solid transparent',
                    borderRadius: '7px',
                },
                '&:hover:not($disabled):not($focused):not($error) $notchedOutline': {
                    borderColor: '#4A90E2',
                    '@media (hover: none)': {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                    },
                },
                '&$focused $notchedOutline': {
                    borderColor: '#4A90E2',
                    borderWidth: 1,
                },
            },
            input: {
                padding: '16px',
                borderRadius: '7px',
                fontWeight: '400',
            },
            inputAdornedStart : {
                paddingLeft: 'none'
            }
        },
        MuiSelect: {
            root: {
                textAlign: 'left',
                // background: '#FFFFFF 0% 0% no-repeat padding-box',
                fontSize: '14px',
                letterSpacing: '0px',
                color: '#6F8198',
                textTransform: 'capitalize',
                padding: '15px 16px',
                fontWeight: 400,
                "&.Mui-disabled": {
                    background: "#E6E6E6",
                    borderRadius: '7px',
                },
                "&.MuiSelect-select:focus": {
                    background: "transparent",
                    borderRadius: '7px',
                }
            }
        },
        MuiMenu: {
            list: {
                background: '#FFFFFF 0% 0% no-repeat padding-box',
                boxShadow: '0px 3px 6px #0000001A',
                borderRadius: '6px',
                padding: '10px',
                cursor: 'pointer'
            },
        },
        MuiListItem: {
            root: {
                borderBottom: '1px solid #cfd2d4',
                height: '60px',
                '&:last-child':{
                    borderBottom: 'none'
                },
                '&.MuiListItem-root.Mui-selected, .MuiListItem-root.Mui-selected:hover': {
                    // background: '#F0F5F8 0% 0% no-repeat padding-box',
                    // borderRadius: '4px',
                    background: '#eaedef69 0% 0% no-repeat padding-box',
                    outline: 'none !important',
                },
            }
        },
        MuiMenuItem: {
            root: {
                textAlign: 'left',
                fontSize: '14px',
                letterSpacing: '0px',
                color: '#4A5568',
                textTransform: 'capitalize',
            },
        },
        MuiTableSortLabel: {
            root: {
                '& $icon': {
                    fontSize: '14px',
                    opacity: 1,
                    color: '#E5E6EE',
                }
            },
        }
    },
});