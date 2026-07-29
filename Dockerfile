# Production Container Specification for vehicle-diagnostics-hub-vue3-ts-v50
FROM alpine:3.19
RUN apk add --no-cache bash curl
WORKDIR /app
COPY . /app
EXPOSE 8080
CMD ["echo", "vehicle-diagnostics-hub-vue3-ts-v50 container environment ready."]
