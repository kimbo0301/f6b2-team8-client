import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useRef } from "react";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

import { gql, useMutation } from "@apollo/client";
// import { useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file)
  }
`;

export default function TestToast(props) {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const editorRef = useRef<Editor>(null);

  const onChangeContents = () => {
    const editorInstance = editorRef.current.getInstance();
    props.SetAaa(editorInstance.getMarkdown());

    if (props.defaultValue) props.SetAaa(editorInstance.getMarkdown());
  };

  const onUploadImage = async (blob, callback) => {
    // console.log(blob);

    // myblob.push(blob)
    const url = await uploadFile({
      variables: { file: blob },
    });
    const urldata = url?.data.uploadFile;
    // console.log(data2,"데이타2")
    // console.log(url,"유알엘")
    // console.log(urldata)
    const result = "https://storage.googleapis.com/" + urldata;
    //  console.log(result)
    callback(result, "");
    // return false;
  };

  return (
    <>
      <Editor
        hooks={{
          addImageBlobHook: onUploadImage,
        }}
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol"],
          ["table", "image", "link"],
        ]}
        initialEditType="wysiwyg"
        previewStyle="tab"
        plugins={[colorSyntax]}
        onChange={onChangeContents}
        initialValue="사진을 드래그&드롭 해보세요."
        ref={editorRef}
      />
    </>
  );
}