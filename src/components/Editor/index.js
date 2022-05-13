import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
// import { uploadBytes, ref, getDownloadURL, storage } from 'config/api/firebase';
// import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';


import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// const folder = process.env.REACT_APP_NEWS_UPLOAD_FOLDER;

const ModalEditor = ({
  onEditorStateChange,
  editorState,
  id,
  // content,
  ...props
}) => {
//   const uploadImageCallBack = async (file) => {
//     const testingRef = ref(storage, `${folder}/${file.name}`);
//     await uploadInlineImageForModal(file, testingRef);
//     const url = await getDownloadURL(testingRef);
//     // console.log(res);
//     return Promise.resolve({
//       data: {
//         link: url,
//       },
//     });
//   };

  return (
    <Editor
      {...props}
      editorState={editorState}
      toolbarClassName="toolbar-class"
      wrapperClassName="wrapper-class"
      editorClassName="editor-class"
      onEditorStateChange={onEditorStateChange}
    />
  );
};

export default ModalEditor;

// export const uploadInlineImageForModal = async (file, storeRef) => {
//   try {
//     return await uploadBytes(storeRef, file);
//   } catch (e) {
//     console.error(e);
//     return null;
//   }
// };
