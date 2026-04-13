#!/bin/zsh

set -euo pipefail

PORT="${DECAP_SERVER_PORT:-8081}"

existing_pid="$(lsof -tiTCP:"${PORT}" -sTCP:LISTEN 2>/dev/null | head -n 1 || true)"

if [[ -n "${existing_pid}" ]]; then
  # Reuse an already-running proxy so `start-pilot` can be restarted without
  # failing on EADDRINUSE while local CMS work is still active.
  echo "Port ${PORT} is already in use; reusing the existing local CMS proxy on PID ${existing_pid}."

  trap 'exit 0' INT TERM

  while true; do
    sleep 60
  done

  exit 0
fi

exec npx decap-server
