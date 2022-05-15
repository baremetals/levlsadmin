import React from 'react'

import { BlockHead, BlockName, BlockTitle } from 'container/styled';
import { Image } from 'antd';
import Text from 'antd/lib/typography/Text';

const ViewUser = (entity) => {
    const {
      imageUrl,
      userType,
      username,
      numberOrname,
      street,
      city,
      postcode,
      bio,
      createdAt,
      dateOfbirth,
      email,
      slogan,
      userId,
      fullname,
      mobile,
      backgroundImage,
      gender,
      Pronouns,
      verified,
      isActive,
      followersCount,
      followingCount,
      occupation,
      linkedIn,
      tiktok,
      instagram,
      twitter,
      CV,
      deviceToken,
      website,
    } = entity.entity;
  return (
    <>
      <BlockHead>
        <Image preview={false} src={imageUrl} />
        <BlockName style={{ fontSize: '18px' }}>{username}</BlockName>
      </BlockHead>
      <BlockTitle>Personal Information</BlockTitle>
      <Text>Full Name - {fullname}</Text>
      <br />
      <Text>Date Of Birth - {dateOfbirth}</Text>
      <br />
      <Text>Gender - {gender}</Text>
      <br />
      <Text>Pronouns - {Pronouns}</Text>
      <br />
      <Text>Occupation - {occupation}</Text>
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
      <Text>Slogan - {slogan}</Text>
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
      <Text>CV URL - {CV}</Text>
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
      <Text>Device Token - {deviceToken}</Text>
      <br />
      <Text>Back Ground Image - {backgroundImage}</Text>
      <br />
    </>
  );
}

export default ViewUser