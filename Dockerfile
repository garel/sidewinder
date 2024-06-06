FROM node:20-bullseye

COPY ./main/iptables.sh /usr/local/bin/iptables-setup.sh
RUN chmod +x /usr/local/bin/iptables-setup.sh
RUN apt-get update
RUN apt-get install -y iptables
CMD ["/usr/local/bin/iptables-setup.sh"]

WORKDIR /app
ADD ./main /app
RUN npm install

EXPOSE 3000

ENTRYPOINT ["npm", "start"]