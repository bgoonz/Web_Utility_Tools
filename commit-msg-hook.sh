#!/bin/sh

cp commit-msg .git/hooks/commit-msg
chmod +x .git/hooks/commit-msg
echo "\nThe commit-msg hook was added to git hooks"
