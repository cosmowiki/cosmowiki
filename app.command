#!/bin/bash
cd "$(dirname "$0")"
nix-shell
npm install
npm start
