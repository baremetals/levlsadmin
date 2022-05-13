import { Image } from 'antd';
import React from 'react';
import { ActicleDetail } from 'container/styled';

const ViewResourceModal = resource => {
  const { uploadUrl, content: body } = resource.resource[0];
  return (
    <>
      <Image
        preview={false}
        style={{ borderRadius: '10px', overflow: 'hidden', marginBottom: '30px' }}
        src={uploadUrl}
      />
      <ActicleDetail>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </ActicleDetail>
    </>
  );
};

export default ViewResourceModal;
