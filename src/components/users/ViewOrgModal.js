import React from 'react';

import { BlockHead, BlockName, BlockTitle } from 'container/styled';
import { Image } from 'antd';
import Text from 'antd/lib/typography/Text';

const ViewOrganisation = entity => {
  const {
    imageUrl,
    founded,
    userType,
    companySize,
    username,
    organisationName,
    organisationType,
    numberOrname,
    street,
    city,
    postcode,
    bio,
    createdAt,
    isPartner,
    email,
    userId,
    fullname,
    mobile,
    backgroundImage,
    website,
    verified,
    isActive,
    followersCount,
    followingCount,
    industry,
    linkedIn,
    tiktok,
    instagram,
    twitter,
    deviceToken,
  } = entity.entity;
  return (
    <>
      <BlockHead>
        <Image preview={false} src={imageUrl} />
        <BlockName style={{ fontSize: '18px' }}>{username}</BlockName>
      </BlockHead>
      <BlockTitle>Company Information</BlockTitle>
      <Text>Account Holder - {fullname}</Text>
      <br />
      <Text>Oganisation Name - {organisationName}</Text>
      <br />
      <Text>Organisation Type - {organisationType}</Text>
      <br />
      <Text>Founded - {founded}</Text>
      <br />
      <Text>Company Size - {companySize}</Text>
      <br />
      <Text>Email - {email}</Text>
      <br />
      <Text>Mobile - {mobile}</Text>
      <br />
      <Text>Number or Name - {numberOrname}</Text>
      <br />
      <Text>Street - {street}</Text>
      <br />
      <Text>City - {city}</Text>
      <br />
      <Text>Post Code - {postcode}</Text>
      <br />
      <Text>Industry - {industry}</Text>
      <br />
      <Text>Website - {website}</Text>
      <br />
      <Text>Bio - {bio}</Text>
      <br />
      <br />
      <BlockTitle>Social Information</BlockTitle>
      <Text>Followers - {followersCount}</Text>
      <br />
      <Text>Following - {followingCount}</Text>
      <br />
      <Text>Twitter - {twitter}</Text>
      <br />
      <Text>Instagram - {instagram}</Text>
      <br />
      <Text>TikTok - {tiktok}</Text>
      <br />
      <Text>LinkedIn - {linkedIn}</Text>
      <br />

      <br />
      <BlockTitle>Account Information</BlockTitle>
      <Text>Account Created On - {createdAt}</Text>
      <br />
      <Text>User ID - {userId}</Text>
      <br />
      <Text>Account Type - {userType}</Text>
      <br />
      <Text>Active - {isActive ? 'True' : 'False'}</Text>
      <br />
      <Text>Verified - {verified ? 'True' : 'False'}</Text>
      <br />
      <Text>Verified - {isPartner ? 'True' : 'False'}</Text>
      <br />
      <Text>Device Token - {deviceToken}</Text>
      <br />
      <Text>Back Ground Image - {backgroundImage}</Text>
      <br />
    </>
  );
};

export default ViewOrganisation;
