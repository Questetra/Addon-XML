const AWS_KEY = "";
const AWS_SECRET = "";
const REGION = "ap-northeast-1";
const BUCKET = "qbpms-addon-dev";

const file = qfiles.get(0);
const URL = `https://s3-${REGION}.amazonaws.com/${BUCKET}/${file.getName()}`;

httpClient.begin()
    .awsSignV4(AWS_KEY, AWS_SECRET, REGION, "s3")
    .body(file)
    .put(URL);