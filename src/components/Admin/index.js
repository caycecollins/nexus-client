import React from 'react'
import styled from 'styled-components'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw } from 'draft-js'
import {
  RTButton,
  RTCard,
  RTCardTitle,
  RTCardText,
  RTCardActions,
  RTInput,
} from 'wrappers/react-toolbox'

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
          <StyledRTCardText>
            <Editor
              editorState={editorState}
              onEditorStateChange={this.onEditorStateChange}
              // toolbar={{ image: { uploadCallback: uploadImageCallBack } }}
              editorStyle={editorStyle}
              toolbarStyle={toolbarStyle}
            />
          </StyledRTCardText>
          <StyledRTCardActions>
            <RTButton
              label="Save"
              onClick={() => console.log('TODO: Save News Entry')}
            />
          </StyledRTCardActions>
        </RTCard>
        <RTInput
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

const StyledRTCardText = styled(RTCardText)`
  padding: 0 !important;
  backgroundColor: #fff;
`

const StyledRTCardActions = styled(RTCardActions)`
  backgroundColor: #f4f4f4;
`

const toolbarStyle = {
  backgroundColor: '#f4f4f4',
  margin: '0px',
}

const editorStyle = {
  border: '1px solid #eee',
  backgroundColor: '#fff',
  minHeight: '300px',
  padding: '8px',
  margin: '0px',
  width: 'auto',
}

