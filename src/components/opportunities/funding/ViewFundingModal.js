import React from 'react';
import { BlockHead, BlockName, BlockText, BlockTitle, Submission, SubmissionDate } from 'container/styled';
import { Image } from 'antd';
import Text from 'antd/lib/typography/Text';

const ViewFunding = entity => {
  const { imageUrl, content, title, closingDate, username, organisationName } = entity.entity;
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
        <SubmissionDate>{closingDate}</SubmissionDate>
      </Submission>
    </>
  );
};

export default ViewFunding;