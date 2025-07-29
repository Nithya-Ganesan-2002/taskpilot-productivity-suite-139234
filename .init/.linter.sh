#!/bin/bash
cd /home/kavia/workspace/code-generation/taskpilot-productivity-suite-139234/taskpilot_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

