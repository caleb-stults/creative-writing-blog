#!/bin/bash

CURRENT_BRANCH=$(git branch --show-current)

if [ "$CURRENT_BRANCH" == "main" ]; then
    echo "ERROR: You are on the 'main' branch!"
    echo "Professional workflow: Please switch to a feature branch first."
    exit 1
fi

git add .
git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"
git push origin "$CURRENT_BRANCH"

echo "Changes pushed to $CURRENT_BRANCH. Open a PR on GitHub to merge to main!"