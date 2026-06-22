#!/bin/bash
FOLDER=$1
FILE=$2
TITLE=$3

# Just create the file with front matter
cat <<EOF > "docs/$FOLDER/$FILE.md"
---
tags:
  - new
---

# $TITLE

*Placeholder description*

<p style="white-space: pre-line;"> <!-- Needed for poetry -->
Content here
</p> <!-- Needed for poetry -->

EOF

printf "\n* [%s](%s.md)" "$TITLE" "$FILE" >> "docs/$FOLDER/index.md"

echo "Created docs/$FOLDER/$FILE.md. It will automatically appear on your site!"