import React, { useState } from 'react';
// import logger from 'logging-library';
import AWS from 'aws-sdk';
import {
  AWS_BUCKET_NAME,
  AWS_ACCESS_ID,
  AWS_REGION,
  AWS_ACCESS_KEY,
} from '../backend';

const FileViewer = ({ productUrl, width, height }) => {
  const [s3FilePath, setS3FilePath] = useState('');

  const getFile = (path) => {
    const s3 = new AWS.S3({
      accessKeyId: AWS_ACCESS_ID,
      secretAccessKey: AWS_ACCESS_KEY,
      region: AWS_REGION,
    });
    const params = { Bucket: AWS_BUCKET_NAME, Key: path };
    s3.getSignedUrl('getObject', params, function (err, url) {
      console.log('Your generated pre-signed URL is', url);
      setS3FilePath(url);
    });
  };

  return (
    <div>
      {getFile(productUrl)}
      <img src={s3FilePath} width={width} height={height} alt='Not Found' />
    </div>
  );
};

export default FileViewer;
