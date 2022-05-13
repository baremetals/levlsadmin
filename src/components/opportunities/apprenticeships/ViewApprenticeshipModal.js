import React from 'react';
import { BlockHead, BlockName, BlockText, BlockTitle, Submission, SubmissionDate } from 'container/styled';
import { Image } from 'antd';
import Text from 'antd/lib/typography/Text';

const ViewApprenticeship = entity => {

  const { imageUrl, content, title, deadline, username, organisationName } = entity.entity;
  return (
    <>
      <BlockHead>
        <Image preview={false} src={imageUrl} />
        <BlockName style={{ fontSize: '18px' }}>{organisationName || username}</BlockName>
      </BlockHead>
      <Text>Title</Text>
      <BlockTitle>{title}</BlockTitle>
      <BlockText>
        <Text>Content</Text>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </BlockText>
      <Submission>
        <Text>Submission Deadline</Text>
        <SubmissionDate>{deadline}</SubmissionDate>
      </Submission>
      {/* <BlockHead style={{ marginTop: '30px' }}>
        <Image
          preview={false}
          src={
            'https://firebasestorage.googleapis.com/v0/b/justappli-b9f5c.appspot.com/o/profile-images%2F260968181805.png?alt=media&token=e18cb2da-35e3-4bab-81be-651f5f210bec'
          }
        />
        <BlockName style={{ fontSize: '18px' }}>
          Daniel
          <Text style={{ display: 'block', fontSize: '14px', color: '#000' }}>offered in conjunction with Queen</Text>
        </BlockName>
      </BlockHead> */}
    </>
  );
};

export default ViewApprenticeship;