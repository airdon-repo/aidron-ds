FROM rennerdigital.azurecr.io/ragnarok/ragnarok-base

LABEL org.opencontainers.image.authors="Lojas Renner - Datalab <datalab@lojasrenner.com.br>"
LABEL org.opencontainers.image.source="https://lojasrenner@dev.azure.com/lojasrenner/DataLab%20-%20Guilda%20de%20UX/_git/ragnarok"


COPY package*.json ./

RUN npm update

COPY . .

RUN  npm run build \
    && npm run build-styles-web \
    && rm -f ~/.npmrc

EXPOSE 6006

CMD ["npm", "run", "storybook"]
