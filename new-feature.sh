#!/bin/bash

FEATURE_NAME=$1
SECTION=$2
FILENAME=$3
TITLE=$4

git checkout main
git pull origin main

git checkout -b "$FEATURE_NAME"

./post-creation.sh "$SECTION" "$FILENAME" "$TITLE"

echo "Branch '$FEATURE_NAME' created and post initialized."