docker build -t initiatio/node:latest -t initiatio/node:$(git rev-parse --short HEAD) .
docker push initiatio/node
