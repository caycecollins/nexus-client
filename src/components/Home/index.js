import React from 'react'
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-material-responsive-grid'
import ImageZoom from 'react-medium-image-zoom'
import {
  RTCard,
  RTCardTitle,
  RTCardText,
  RTCardActions,
  RTButton,
  RTList,
  RTListItem,
} from 'wrappers/react-toolbox'

function Home (props) {
  return (
    <Container>
      <Grid>
        <Row>
          <Col sm={12} md={8}>
            <RTCard>
              <StyledRTCardTitle title="Join us in welcoming our new Rocket League team!" />
              <RTCardText>
                <br />
                Nexus Gaming has come to terms with the team formerly known as “Eggplant”. The team, consisting of team captain Pepiope, starters Laz and AirRejectz, and substitutes KingWizard and Wildscion, will now be playing under the Nexus Gaming name.
                <br />
                <br />
                <Image
                  image={{
                    src: 'https://pbs.twimg.com/media/C9FbQw2UQAAUBvI.jpg',
                    alt: 'Nexus Gaming Team',
                    style: {
                      maxWidth: '100%',
                      height: 'auto',
                    }
                  }}
                />
                <br />
                <br />
                <strong>Nexus Gaming Rocket League Roster:</strong>
                <br />
                <br />
                Peter "Pepiope" Montanez
                <br />
                Daniel "Laz" Garner
                <br />
                Sean "AirRejectz" Yoges
                <br />
                Jay "KingWizard" Kidston
                <br />
                Cole “Wildscion” Williamson
                <br />
                <br />
                Kind regards, the Nexus team
              </RTCardText>
            </RTCard>
            <br />
            <br />
            <RTCard>
              <StyledRTCardTitle title="Introducing Weekly 1v1 Tournaments!" />
              <RTCardText>
                <br />
                We're proud to announce that we now host all team formats for tournaments.
                <br />
                <br />
                From the 14th of March, every tuesday, we'll be holding a 1v1 tournament with a $50 prizepool.
                <br />
                <br />
                Make sure to join our discord server for more information, and to visit our signup page to sign up for our tournaments
                <br />
                <br />
                Kind regards, the Nexus team
              </RTCardText>
            </RTCard>
            <br />
            <br />
            <RTCard>
              <StyledRTCardTitle title="Introducing Weekly 2v2 Tournaments!" />
              <RTCardText>
                <br />
                From this wednesday onward, on top of our saturday tournaments, we'll hold $100 2v2 tournaments every wednesday. They will kick off on 6PM EST, with the ability to check in an hour beforehand.
                <br />
                <br />
                Thank you all for your continued support. Without the community, there is no way we could have thought of running multiple tournaments throughout the week. Hope to see you there!
                <br />
                <br />
                Kind regards, the Nexus team
              </RTCardText>
            </RTCard>
            <br />
            <br />
            <RTCard>
              <StyledRTCardTitle title="RLCS" />
              <RTCardText>
                <br />
                <strong>No tournament this weekend</strong>
                <br />
                <br />
                Becuase of RLCS taking up the entire weekend, and because a bunch of us will be present there, we won't be running a tournament this week. Don't you worry though, we'll be back the saturday after RLCS!
                <br />
                <br />
                <strong>RLCS</strong>
                <br />
                <br />
                Carbonitex, kerrytaz, 7ox and I (Erveon) will be attending RLCS this weekend. We'll be tweeting our experience in Amsterdam, so if you'd like to be in the loop on things, that's where you'll find your information, as well as in our discord.
                <br />
                <br />
                Kind regards, the Nexus team
              </RTCardText>
            </RTCard>
          </Col>
          <Col hiddenDown="sm" md={4}>
            <RTCard>
              <StyledRTCardTitle title="Upcoming Tournaments:" />
              <RTCardText>
                <RTList>
                  <RTListItem
                    caption="April 18, 2017"
                    legend="Weekly 1v1 Tournament ($50 Prize Pool)"
                    ripple={false}
                    selectable
                  />
                  <RTListItem
                    caption="April 19, 2017"
                    legend="Weekly 2v2 Tournament ($100 Prize Pool)"
                    ripple={false}
                    selectable
                  />
                  <RTListItem
                    caption="April 22, 2017"
                    legend="Weekly 3v3 Tournament ($150 Prize Pool)"
                    ripple={false}
                    selectable
                  />
                  <RTListItem
                    caption="April 25, 2017"
                    legend="Weekly 1v1 Tournament ($50 Prize Pool)"
                    ripple={false}
                    selectable
                  />
                  <RTListItem
                    caption="April 26, 2017"
                    legend="Weekly 2v2 Tournament ($100 Prize Pool)"
                    ripple={false}
                    selectable
                  />
                  <RTListItem
                    caption="April 29, 2017"
                    legend="Weekly 3v3 Tournament ($150 Prize Pool)"
                    ripple={false}
                    selectable
                  />
                </RTList>
              </RTCardText>
              <RTCardActions>
                <RTButton
                  label="Show More"
                />
              </RTCardActions>
            </RTCard>
          </Col>
        </Row>
      </Grid>
    </Container>
  )
}

Home.propTypes = {
}

export default Home

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  background-color: #f6f6f6
`

const StyledRTCardTitle = styled(RTCardTitle)`
  background-color: ${props => props.theme.colors.lightGray};
  color: white;
  padding: 16px !important;
  h5 {
    font-size: 1rem !important;
  }
`

const Image = styled(ImageZoom)`
  max-width: 100%;
  height: auto;
`
