#!/bin/bash
cd "$(dirname "$0")"
nix-shell --command 'npm install; npm start'
