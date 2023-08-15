import { Box, Button, Container, Typography } from '@mui/material'
import { withStyles } from '@mui/styles'
import { useState } from 'react'
import Page from 'src/components/Page'
import {
  MotionInView,
  varFadeInLeft,
  varFadeInRight,
} from 'src/components/animate'
import CustomCard from 'src/components/card/CustomCard'
import RecipeDetails, {
  InstructionList,
} from 'src/components/list/demo_two/recipeDetails'
import {
  RECIPE_ONE_INGREDIENTS,
  RECIPE_ONE_INSTRUCTIONS,
  RECIPE_TWO_INGREDIENTS,
  RECIPE_TWO_INSTRUCTIONS,
} from 'src/constant'
import useSettings from 'src/hooks/useSettings'
import demoTwoSidebarConfig from 'src/layouts/config/demoTowSidebarConfig'
import DashboardLayout from 'src/layouts/dashboard'

// Custom styles for the hover effect
const styles = {
  hoverCell: {
    '&:hover': {
      backgroundColor: '#1ccaff',
    },
    borderRadius: '10px',
  },
}

function Recipe({ classes }) {
  const { themeStretch } = useSettings()
  const [selectedIndex, setSelectedIndex] = useState(0)

  const DEMO_TEXT = (
    <Typography
      variant="body"
      style={{ display: 'inline-block', textAlign: 'justify' }}
    >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque dicta
      repudiandae tempore sint et quas cum recusandae quibusdam minima! Maiores
      magni libero reiciendis nam sequi totam mollitia ipsum! Nemo magnam
      corrupti nulla deserunt iste aut dolor odio eaque impedit dolores cum at
      ducimus quos, eius voluptatum, repudiandae cupiditate non dolore odit
      praesentium fugiat ipsum asperiores voluptates tempora. Nobis, odio sequi
      dolorum quibusdam molestiae officia repudiandae voluptatum maxime nesciunt
      accusamus pariatur fugit dolor harum, ab inventore facilis animi sed ut
      voluptates.
    </Typography>
  )

  const DATA_TITLE = [
    'Creamy Garlic Parmesan Pasta',
    'Refreshing Cucumber Mint Salad',
    'Recipe Three',
    'Recipe Four',
    'Recipe Five',
  ]
  const DATA_IMAGE = [
    '/static/mock-images/demo-one-1.png',
    '/static/mock-images/demo-one-2.png',
    '/static/mock-images/demo-one-3.png',
    '/static/mock-images/demo-one-4.png',
    '/static/mock-images/demo-one-5.png',
  ]

  const RENDER_DATA = [
    {
      ingredient: RECIPE_ONE_INGREDIENTS,
      instruction: RECIPE_ONE_INSTRUCTIONS,
    },
    {
      ingredient: RECIPE_TWO_INGREDIENTS,
      instruction: RECIPE_TWO_INSTRUCTIONS,
    },
    DEMO_TEXT,
    DEMO_TEXT,
    DEMO_TEXT,
  ]

  const cardData = Array.from({ length: 5 }, (_, index) => ({
    title: DATA_TITLE[index],
    image: DATA_IMAGE[index],
    renderData: RENDER_DATA[index],
  }))

  return (
    <DashboardLayout sideBarConfig={demoTwoSidebarConfig}>
      <Page title="Kitchen | Recipe">
        <Container maxWidth={themeStretch ? false : 'xl'}>
          <Box sx={{ mb: 5, textAlign: 'center' }}>
            <Typography mb={1} variant="h4">
              Recipe List
            </Typography>
            {cardData.map((item, index) => (
              <Button
                sx={{
                  margin: '10px',
                  backgroundColor:
                    selectedIndex === index ? 'primary.main' : '#fff',
                  color: selectedIndex === index ? '#fff' : '#000',
                  borderRadius: '5px',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    color: '#fff',
                  },
                }}
                variant="outlined"
                onClick={() => setSelectedIndex(index)}
                key={index}
              >
                {item.title}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                md: 'row',
              },
            }}
          >
            <MotionInView
              variants={varFadeInLeft}
              MotionInView
              sx={{
                width: {
                  xs: '100%',
                  sm: '80%',
                  md: '40%',
                },
                margin: 'auto',
              }}
            >
              <CustomCard
                sx={{
                  height: {
                    xs: 'auto',
                    md: '429px',
                  },
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  overflowY: 'auto',
                }}
              >
                {selectedIndex === 0 || selectedIndex === 1 ? (
                  <RecipeDetails
                    ingredients={cardData[selectedIndex].renderData.ingredient}
                  />
                ) : (
                  <>{cardData[selectedIndex].renderData}</>
                )}
              </CustomCard>
            </MotionInView>

            <MotionInView
              sx={{
                width: {
                  xs: '100%',
                  sm: '80%',
                  md: '50%',
                },
                margin: 'auto',
              }}
              variants={varFadeInRight}
            >
              <CustomCard
                sx={{
                  marginTop: {
                    xs: 2,
                    md: 0,
                  },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    display: 'block',
                    textAlign: 'center',
                    fontSize: '15px',
                  }}
                >
                  {' '}
                  {cardData[selectedIndex].title}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <img src={cardData[selectedIndex].image} alt="recipe" />
                </Box>
              </CustomCard>
            </MotionInView>
          </Box>

          {selectedIndex === 0 || selectedIndex === 1 ? (
            <MotionInView
              sx={{
                width: {
                  xs: '100%',
                  sm: '95%',
                },
                margin: 'auto',
              }}
              variants={varFadeInRight}
            >
              <CustomCard
                sx={{
                  marginTop: 2,
                }}
              >
                <InstructionList
                  instructions={cardData[selectedIndex].renderData.instruction}
                />
              </CustomCard>
            </MotionInView>
          ) : null}
        </Container>
      </Page>
    </DashboardLayout>
  )
}

export default withStyles(styles)(Recipe)
