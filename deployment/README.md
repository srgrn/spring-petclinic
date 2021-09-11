# Build 

The build is being done by the way of using github actions. using the simple docker build workflow (amazingly easy they covered so much of the basics also it is fast).

the image is being pushed into the repository packages hosting (github container registry).

it is being done using multi stage build which i can't explain much since i dislike java.

however it is using the recommended practices of springboot to split the created jar into folder and run it in the new container. 

# Deploy
Finally was able to use pulumi for something and very impressed. 

this is using the new pulumi cloud abstraction over aws. 

running the deploy requires installing pulumi cli and running npm install to bring the relevant folders.

see [Pulumi install](https://www.pulumi.com/docs/get-started/install/)

## Deployment steps:
Prerequisites:
1. install pulumi
2. install nodejs
3. setup aws credentials (might include installing aws cli)

Steps:
1. go into deployment folder 
2. run  ``` npm install ```
3. run ``` pulumi up ```
4. wait until command finishes collect the output (url for new dev service) in the form of:
``` 
Outputs:
    hostname: "http://3fffb21a-75ca55f-dba94224707026de.elb.us-east-2.amazonaws.com"
```
5. wait (or run pulumi logs -f ) until app is up (a bit slow since using unoptimized app with inmemory db and it is java)
6. go to url from step 4 with port 8080 (as setup in the index.js file)

## Cleanup
from the deployment folder run: ``` pulumi destroy ``` which will delete all resources

