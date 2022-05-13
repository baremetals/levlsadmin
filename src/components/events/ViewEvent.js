import { Image } from 'antd';
import React from 'react';
import { ActicleDetail } from 'container/styled';

const ViewEventModal = event => {
  const { eventMediaUrl, description } = event.event;
  return (
    <>
      <Image
        preview={false}
        style={{ borderRadius: '10px', overflow: 'hidden', marginBottom: '30px' }}
        src={eventMediaUrl}
      />
      <ActicleDetail>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </ActicleDetail>
    </>
  );
};

export default ViewEventModal;
