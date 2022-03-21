import { Button, Col, Image, Input, Row } from 'antd';
import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditForm, ImagePreview, ImagePreviewDetail, InputGroup, InputTextarea, Label } from '../../container/styled';


const EditArticleModal = () => {

    const [preview, setPreview] = useState('https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg')
    function setFile(event) {
        console.log()
        const [file] = event.target.files
        if (file) {
            setPreview(URL.createObjectURL(file))
        }
    }

    return (
        <>
            <h2>Edit Article</h2>
            <EditForm>
                <Row gutter={25}>
                    <Col md={24}>
                        <InputGroup>
                            <Label>Image Preview</Label>
                            <ImagePreview>
                                <Image width={'200px'} src={preview} />
                                <ImagePreviewDetail>
                                    <Input onChange={setFile} type={'file'} style={{padding: '0', marginBottom: '10px'}} />
                                    <Button type='danger'>Remove</Button>
                                </ImagePreviewDetail>
                            </ImagePreview>
                        </InputGroup>
                    </Col>
                    <Col md={24}>
                        <InputGroup>
                            <Label>Category</Label>
                            <Input type={'text'} />
                        </InputGroup>
                    </Col>
                    <Col md={24}>
                        <InputGroup>
                            <Label>Title</Label>
                            <Input type={'text'} />
                        </InputGroup>
                    </Col>

                    <Col md={24}>
                        <InputGroup>
                            <Label>Content</Label>
                            <Editor />
                        </InputGroup>
                    </Col>
                    <Col md={24}>
                        <Button size="large" type='primary' >Save Changes</Button>
                    </Col>
                </Row>
            </EditForm>
        </>
    )
}

export default EditArticleModal;