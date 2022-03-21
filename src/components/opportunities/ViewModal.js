import { Image } from 'antd';
import Text from 'antd/lib/typography/Text';
import React from 'react';
import { BlockHead, BlockName, BlockText, BlockTitle, Submission, SubmissionDate } from '../../container/styled';

const ViewInternship = () => {
    return (
        <>
            <BlockHead>
                <Image preview={false} src={'https://firebasestorage.googleapis.com/v0/b/justappli-b9f5c.appspot.com/o/profile-images%2F260968181805.png?alt=media&token=e18cb2da-35e3-4bab-81be-651f5f210bec'} />
                <BlockName style={{fontSize: '18px'}}>Inside Out Contracts Limited</BlockName>
            </BlockHead>
            <BlockTitle>Digital Marketing Apprentice</BlockTitle>
            <BlockText>
                <p>Apprentices will work five days a week on the trading floor in return for a competitive salary and bonuses, and complete their studies in two stints every semester,&nbsp;The Guardian newspaper reported.&nbsp;</p>
                <p>The move comes with banks under pressure to improve their levels of diversity amid an increasingly competitive labor market. A 2020 report by the City of London Corporation found that nine in 10 senior roles were held by someone from a higher socio-economic background.&nbsp;</p>
                <p>Under the Goldman scheme, which is initially open to 10 students, the bank will pay for relocation costs, equipment and tuition fees.&nbsp;</p>
                <p>The four year apprenticeship, offered in conjunction with Queen Mary University of London, will start in September 2022. Applications close on Feb 27th, 2022.&nbsp;</p>
            </BlockText>
            <Submission>
                <Text>Submission Deadline</Text>
                <SubmissionDate>15 Jan 2022</SubmissionDate>
            </Submission>
            
        </>
    )
}

export default ViewInternship;