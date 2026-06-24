#!/bin/bash
SECTION=$1
FILENAME=$2
TITLE=$3

# Path to the new file
FILE_PATH="content/$SECTION/$FILENAME.md"

# Create the file with Front Matter and your requested HTML template
cat <<EOF > "$FILE_PATH"
---
title: "$TITLE"
date: $(date +%Y-%m-%d)
tags:
  - 
---

<p style="white-space: pre-line;"> </p> EOF

echo "Created $FILE_PATH with template."