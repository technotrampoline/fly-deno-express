FROM denoland/deno:alpine-1.30.0

WORKDIR /usr/src/app

COPY deps.ts .
RUN deno cache deps.ts

ADD . .
RUN deno cache main.ts

EXPOSE 8080

CMD ["run", "-A", "main.ts"]
