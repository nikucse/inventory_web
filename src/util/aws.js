import AWS from "aws-sdk";
import {AWS_BUCKET_NAME,AWS_ACCESS_ID, AWS_REGION, AWS_ACCESS_KEY} from "../backend";


export const getFile = (path) =>{

    AWS.config.getPromisesDependency();
    AWS.config.update(
      {
        accessKeyId: AWS_ACCESS_ID,
        secretAccessKey:AWS_ACCESS_KEY,
        region:AWS_REGION
      }
    );

    const s3 = new AWS.S3();

    const params = {
      Bucket: AWS_BUCKET_NAME,
      Key: path,
    };

    s3.getObject(params, (err, data) => {
      if (err) {
        console.log(err, err.stack);
      } else {
        console.log(data.Body.toString());
      }
    });
}