import { Image } from 'antd';
import React from 'react';
import { ActicleDetail } from '../../container/styled';


const ViewArticleModal = () => {
    return (
        <>
            <Image preview={false} style={{borderRadius: '10px', overflow: 'hidden', marginBottom: '30px'}} src={'https://firebasestorage.googleapis.com/v0/b/justappli-b9f5c.appspot.com/o/news%2F608101005805.jpeg?alt=media&token=a4136d7d-49f3-4f71-a935-fbdc8401d0ff'} />
            <ActicleDetail>
                <h2>Goldman Sachs'&nbsp;Global Markets Degree Apprenticeship scheme&nbsp;— which opened for applications on Monday — offers apprentices the chance to earn a degree in Applied Finance while working a full time job at its London offices.&nbsp;</h2>
                <p>Apprentices will work five days a week on the trading floor in return for a competitive salary and bonuses, and complete their studies in two stints every semester,&nbsp;The Guardian newspaper reported.&nbsp;</p>
                <p>The move comes with banks under pressure to improve their levels of diversity amid an increasingly competitive labor market. A 2020 report by the City of London Corporation found that nine in 10 senior roles were held by someone from a higher socio-economic background.&nbsp;</p>
                <p>Under the Goldman scheme, which is initially open to 10 students, the bank will pay for relocation costs, equipment and tuition fees.&nbsp;</p>
                <p>The four year apprenticeship, offered in conjunction with Queen Mary University of London, will start in September 2022. Applications close on Feb 27th, 2022.&nbsp;</p>
                <p><a href=''>Find Out More</a></p>
            </ActicleDetail>
        </>
    )
}

export default ViewArticleModal;