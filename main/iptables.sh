#!/bin/sh

PROXY_IP=172.20.0.3

iptables -t nat -A OUTPUT -p tcp --dport 80 -j DNAT --to-destination $PROXY_IP:3001
iptables -t nat -A OUTPUT -p tcp --dport 443 -j DNAT --to-destination $PROXY_IP:3001
iptables -t nat -A OUTPUT -p tcp --dport 3000 -j DNAT --to-destination $PROXY_IP:3001
iptables -t nat -A POSTROUTING -j MASQUERADE
