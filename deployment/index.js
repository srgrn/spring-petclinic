const pulumi = require("@pulumi/pulumi");
const cloud = require("@pulumi/cloud-aws");

let service = new cloud.Service("spring-petclinic", {
    containers: {
        app: {
            image: "ghcr.io/srgrn/spring-petclinic:main",
            memory: 512,
            ports: [{ port: 8080 }],
        },
    },
    replicas: 1,
});

// export just the hostname property of the container frontend
exports.hostname = pulumi.interpolate `http://${service.defaultEndpoint.hostname}`;