import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';

function generate(element) {
    return [0].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

const names = [ {Item: 'Recent Orders', detail: 'order just placed'},
    {Item: 'Appetizer', detail: 'a small dish of food or a drink taken before a meal or the main course of a meal'},
    {Item: 'Soups', detail: 'Soup is a primarily liquid food, generally served warm or hot that is made by combining ingredients of meat or vegetables with stock, milk, or water'},
    {Item: 'Dinner', detail: 'Indian meals comprise of rice, Chapati (flatbread), meat, vegetable and lentil dishes, salad, yogurt, and pickles from 4 to 9 pm'},
    {Item: 'Lunch', detail: 'Indian meals comprise of rice, Chapati (flatbread), meat, vegetable and lentil dishes, salad, yogurt, and pickles from 12 to 4 pm'},
    {Item: 'Breakfast', detail: 'Indian meals comprise of rice, Chapati (flatbread), meat, vegetable and lentil dishes, salad, yogurt, and pickles from 10AM to 12PM'},
    {Item: 'Drink', detail: 'Hot Indian Drinks'}
];

export function VegMenu() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <FormGroup row>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={dense}
                            onChange={(event) => setDense(event.target.checked)}
                        />
                    }
                    label="Enable dense"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={secondary}
                            onChange={(event) => setSecondary(event.target.checked)}
                        />
                    }
                    label="Click to see more details of the category"
                />
            </FormGroup>
            <Grid container spacing={4}>
                <Grid item xl={2} md='auto'>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        BROWSE BY CATEGORY
                    </Typography>
                    <Demo>
                        <List dense={dense}>
                            {names.map((name) => (
                                generate(
                                    <ListItem>
                                        <ListItemIcon>
                                            <FolderIcon />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary= {name.Item}
                                            secondary={secondary ? name.detail : null}
                                        />
                                    </ListItem>,
                                )
                            ))}
                        </List>
                    </Demo>
                </Grid>
            </Grid>
        </Box>
    );
}