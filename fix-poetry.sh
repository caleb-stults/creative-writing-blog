#!/bin/bash
# fix-poetry.sh
# Usage: ./fix-poetry.sh path/to/your/poem.md

FILE=$1

if [ -z "$FILE" ]; then
    echo "Error: Please provide the path to the file."
    exit 1
fi

# Adds double spaces to the end of every non-empty line
# This ignores lines starting with # (titles), - (tags), or the Front Matter (---)
sed -i '/^[^#+-]/s/$/  /' "$FILE"

echo "Updated $FILE with Markdown-compatible line breaks."