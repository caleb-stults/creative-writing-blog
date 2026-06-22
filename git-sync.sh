#!/bin/bash

git add .
git commit -m "Manual Update: $(date '+%Y-%m-%d %H:%M:%S')"
git push origin main

echo "Changes pushed to GitHub!"