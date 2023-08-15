import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import { Typography } from '@mui/material'

const RecipeDetails = ({ ingredients }) => {
  return (
    <>
      <Typography sx={{ ml: 2 }} variant="h5" gutterBottom>
        Ingredients
      </Typography>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {ingredients.map((value, index) => {
          return (
            <ListItem key={value} disablePadding>
              <ListItemButton role={undefined} dense>
                <ListItemIcon sx={{ alignSelf: 'flex-start' }}>✹</ListItemIcon>
                <ListItemText
                  id={index}
                  primary={value}
                  sx={{ textAlign: 'justify' }}
                />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </>
  )
}

export default RecipeDetails


export const InstructionList = ({ instructions }) => {
  return (
    <>
      <Typography sx={{ ml: 2 }} variant="h5" gutterBottom>
        Instructions
      </Typography>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {instructions.map((value, index) => {
          return (
            <ListItem key={value} disablePadding>
              <ListItemButton role={undefined} dense>
                <ListItemIcon sx={{ alignSelf: 'flex-start' }}>✔</ListItemIcon>
                <ListItemText
                  id={index}
                  primary={value}
                  sx={{ textAlign: 'justify' }}
                />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </>
  )
 }