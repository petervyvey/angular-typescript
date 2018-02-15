#!/usr/bin/env bash
openssl genrsa -des3 -out ../renson-development-certificate-authority.key 2048
sleep 2s
openssl req -x509 -new -nodes -key ../renson-development-certificate-authority.key -sha256 -days 3650 -out ../renson-development-certificate-authority.pem
sleep 2s
openssl req -new -sha256 -nodes -out ../renson-development-server.csr -newkey rsa:2048 -keyout ../renson-development-server.key -config <( cat renson-development-server.csr.cnf )
sleep 2s
openssl x509 -req -in ../renson-development-server.csr -CA ../renson-development-certificate-authority.pem -CAkey ../renson-development-certificate-authority.key -CAcreateserial -out ../renson-development-server.crt -days 3650 -sha256 -extfile v3.ext
sleep 1s
openssl x509 -text -in ../renson-development-server.crt -noout


