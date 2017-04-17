import React from 'react'
import styled from 'styled-components'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from 'draft-js'
import Input from 'react-toolbox/lib/input/Input'
import RTCard from 'react-toolbox/lib/card/Card'
import RTCardTitle from 'react-toolbox/lib/card/CardTitle'
import RTCardText from 'react-toolbox/lib/card/CardText'
import RTCardActions from 'react-toolbox/lib/card/CardActions'

class Admin extends React.Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    })
  }

  render () {
    const editorState = this.state.editorState
    return (
      <Container>
        <RTCard>
          <StyledRTCardTitle title="Add news entry" />
          <RTCardText>
            <Editor
              editorState={editorState}
              onEditorStateChange={this.onEditorStateChange}
              // toolbar={{ image: { uploadCallback: uploadImageCallBack } }}
            />
          </RTCardText>
        </RTCard>
        <Input
          disabled
          multiline={true}
          value={editorState && JSON.stringify(convertToRaw(editorState.getCurrentContent()), null, 2)}
        />
      </Container>
    )
  }
}

export default Admin

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  background-color: #f3f3f3;
`

const StyledRTCardTitle = styled(RTCardTitle)`
  background-color: ${props => props.theme.colors.lightGray};
  color: white;
  padding: 16px !important;
  h5 {
    font-size: 1rem !important;
  }
`
