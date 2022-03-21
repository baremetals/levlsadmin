import { Button, Col, Image, Input, PageHeader, Row } from 'antd';
import React, { useState } from 'react';
import { Block, BlockBody, BlockFooter, Main, ImagePreview, ImagePreviewDetail, EditForm, InputGroup, Label, BlockTitle, BlockText, BlockName } from '../../styled';



const EditProfile = () => {

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
            <PageHeader title="Edit Profile"></PageHeader>
            <Main>
                <Row gutter={25}>
                    <Col className='block-col' md={6}>
                        
                        <Block>
                            <BlockBody style={{textAlign: 'center'}}>
                                <ImagePreview className='edit-profile-info'>
                                    <Image preview={false} width={'100%'} src={preview} />
                                </ImagePreview>
                                <Label className='edit-profile-input'>
                                    Upload
                                    <Input onChange={setFile} type={'file'} style={{padding: '0', marginBottom: '10px'}} />
                                </Label>
                                <BlockName>Web Designer</BlockName>
                                <BlockTitle>Username</BlockTitle>
                                <BlockText>
                                    Phone: 8498874466 <br />
                                    Email: text@gmail.com
                                </BlockText>
                            </BlockBody>
                        </Block>

                    </Col>
                    <Col className='block-col' md={18}>
                        <Block>
                            <BlockBody>
                                <EditForm>
                                    <Row gutter={25}> 
                                        <Col md={24}>
                                            <InputGroup>
                                                <Label>Username</Label>
                                                <Input type={'text'} />
                                            </InputGroup>
                                        </Col>
                                        <Col md={12}>
                                            <InputGroup>
                                                <Label>First Name</Label>
                                                <Input type={'text'} />
                                            </InputGroup>
                                        </Col>

                                        <Col md={12}>
                                            <InputGroup>
                                                <Label>Last Name</Label>
                                                <Input type={'text'} />
                                            </InputGroup>
                                        </Col>

                                        <Col md={24}>
                                            <InputGroup>
                                                <Label>Organization name</Label>
                                                <Input type={'text'} />
                                            </InputGroup>
                                        </Col>
                                        <Col md={24}>
                                            <InputGroup>
                                                <Label>Location</Label>
                                                <Input type={'text'} />
                                            </InputGroup>
                                        </Col>
                                        <Col md={24}>
                                            <InputGroup>
                                                <Label>Email address</Label>
                                                <Input type={'email'} />
                                            </InputGroup>
                                        </Col>
                                        <Col md={12}>
                                            <InputGroup>
                                                <Label>Phone number</Label>
                                                <Input type={'number'} />
                                            </InputGroup>
                                        </Col>
                                        <Col md={12}>
                                            <InputGroup>
                                                <Label>Birthday</Label>
                                                <Input type={'date'} />
                                            </InputGroup>
                                        </Col>


                                        <Col md={24}>
                                            <Button size="large" type='primary' >Save Changes</Button>
                                        </Col>
                                    </Row>
                                </EditForm>
                            </BlockBody>
                        </Block>
                    </Col>
                </Row>
                
            </Main>
        </>
    )
}

export default EditProfile;
