import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
// import { uploadBytes, ref, getDownloadURL, storage } from 'config/api/firebase';
// import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import { EditorState, ContentState } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// const folder = process.env.REACT_APP_NEWS_UPLOAD_FOLDER;

const ModalEditEditor = ({
  onEditorStateChange,
  body,
  ...props
}) => {

    const [content] = useState(body);

    const blocksFromHtml = htmlToDraft(content);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);

    const [editorState, setEditorState] = useState(EditorState.createWithContent(contentState));


  return (
    <Editor
      {...props}
      editorState={editorState}
      toolbarClassName="toolbar-class"
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      onEditorStateChange={(newState) => {
        setEditorState(newState);
        onEditorStateChange(newState);
      }}
    />
  );
};

export default ModalEditEditor;