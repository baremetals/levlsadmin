import { Button, Col, Modal, PageHeader, Row } from 'antd';
import React, { useState } from 'react';
import { Main } from '../../styled';
import initialNews from '../../../demoData/news.json';

const Internships = () => {
    const [allNews] = useState(initialNews)
    return (
        <>
            <PageHeader title="Internships"></PageHeader>
            <Main>
                <Row gutter={25}>
                    {allNews.concat(allNews).concat(allNews).map(news => <Col className='job-col' xxl={6} lg={8} md={12}>
                        <div className='card-job'>
                            <div className='card-head'>
                                <img className='card-image' style={{ width: '50px' }} src={news.imageUrl} alt="" />
                                <h5 className='card-subtitle'>Inside Out Contracts Limited</h5>
                            </div>
                            <div className='card-body'>
                                <h2 className='card-title'>Digital Marketing Apprentice</h2>
                                <p>Estio Training have an exciting new opportunity for a Digital Marketer with Inside Out Contracts, a furniture provider based in London.</p>

                                <div className='submission'>
                                    <span>Submission Deadline</span>
                                    <h4>15 Jan 2022</h4>
                                </div>
                            </div>
                            <div className='card-footer'>
                                <Button type='primary'>Edit</Button>
                                <Button type='link' target='viewModal'>View</Button>
                                <Button type='danger' className='delete'>Delete</Button>
                            </div>
                        </div>
                    </Col>)}

                    <Modal visible width={800} bodyStyle={{padding: '40px'}} className='job-modal' closable>
                        <div className='card-head'>
                            <img className='card-image' style={{ width: '80px' }} src={allNews[0].imageUrl} alt="" />
                            <h5 className='card-subtitle' style={{fontSize: '20px'}}>Inside Out Contracts Limited</h5>
                        </div>
                        <div className='card-body'>
                            <h2 className='card-title' style={{fontSize: '30px'}}>Digital Marketing Apprentice</h2>
                            <div className='modal-content'>
                                <h3>What will the apprentice be doing?</h3>
                                <p>We work with brands such as Facebook, American Express, Google, Toyota, Shell, Accenture, Toyota, Zoom and many great brands.&nbsp;</p>
                                <p><b>The main duties and responsibilities will include:</b></p>
                                <ul>
                                    <li>Creating and publishing compelling social media content that engages our clients and our client's customers, across all social media channels</li>
                                    <li>Working to compile strong content and send highly appealing email marketing campaigns to our customer databases</li>
                                    <li>Compiling monthly analysis on social channels, reporting on trends and results from campaigns</li>
                                    <li>Writing copy for Blogs</li>
                                    <li>Keeping up to date with developments and opportunities in the social marketing world, using this knowledge to keep the company ahead of their competition</li>
                                    <li>Working with the wider team to optimise all marketing assets for use across marketing channels</li>
                                </ul>
                                <h3>What training will the apprentice take and what qualification will the apprentice get at the end?</h3>
                                <p><b>Skills you will learn on this apprenticeship:</b></p>
                                <ul>
                                    <li>Content strategy</li>
                                    <li>Copywriting</li>
                                    <li>Social media management</li>
                                    <li>Managing direct mail campaigns</li>
                                    <li>Thought leadership</li>
                                    <li>Lead generation</li>
                                    <li>Customer relationship&nbsp;</li>
                                    <li>Managing marketing campaign</li>
                                    <li>Content creation</li>
                                    <li>Podcast video and guest management</li>
                                    <li>Graphic design&nbsp;</li>
                                </ul>
                                <p><b>Qualifications you will gain:</b></p>
                                <ul>
                                    <li>Level 3 digital marketer apprenticeship with BCS</li>
                                    <li>Google Analytics IQ certification&nbsp;</li>
                                    <li>BCS Award in marketing principals</li>
                                    <li>BCS Award in business principals</li>
                                    <li>BCS Award in web coding</li>
                                </ul>
                                <h3>What is the expected career progression after this apprenticeship?</h3>
                                <p>Potential to progress into full-time employment upon completion of this apprenticeship.&nbsp;</p>
                                <p>On completion of the apprenticeship, the apprentice can access to join as an affiliate professional member of the chartered institute of marketing and associate member of BCS.</p>
                            </div>

                            <div className='submission'>
                                <span style={{fontSize: '18px'}}>Submission Deadline</span>
                                <h4 style={{fontSize: '24px'}}>15 Jan 2022</h4>
                            </div>
                        </div>
                    </Modal>
                </Row>
                
            </Main>
        </>
    )
}

export default Internships;
