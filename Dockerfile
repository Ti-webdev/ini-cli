FROM node:onbuild
RUN npm link
CMD [ "ini", "example/example.ini", "TEST" ]
