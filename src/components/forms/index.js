import { Button, Col, Row } from 'antd';
import React from 'react';
import { EditForm, InputGroup, Label, Input, InputTextarea } from '../../container/styled';

const Form = () => {
    return (
        <>
            <EditForm>
                <Row gutter={25}>
                    <Col md={24}>
                        <InputGroup>
                            <Label>Image</Label>
                            <Input type={'file'} />
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
                            <InputTextarea size={5} />
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

export default Form;