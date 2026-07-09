#!/usr/bin/env bash
# Thin wrapper around the n8n REST API. Reads the API key from
# ~/.n8n_api_key at runtime so the key value never has to be pasted
# into a prompt or read back out by anything other than curl itself.
#
# Usage:
#   n8n-api.sh get  <path>                  # e.g. workflows, workflows/123, executions
#   n8n-api.sh post <path> <json-file>      # e.g. workflows  n8n-workflows/my-flow.json
#   n8n-api.sh patch <path> <json-file>     # e.g. workflows/123/activate
#
set -euo pipefail

KEY_FILE="${N8N_API_KEY_FILE:-$HOME/.n8n_api_key}"
BASE_URL="${N8N_BASE_URL:-https://jmate.online}"

if [[ ! -f "$KEY_FILE" ]]; then
  echo "Error: key file not found at $KEY_FILE" >&2
  exit 1
fi
KEY=$(<"$KEY_FILE")

method="${1:-}"
path="${2:-}"

case "$method" in
  get)
    curl -s -X GET "$BASE_URL/api/v1/$path" \
      -H "X-N8N-API-KEY: $KEY" \
      -H "Accept: application/json"
    ;;
  post)
    file="${3:?json file required}"
    curl -s -X POST "$BASE_URL/api/v1/$path" \
      -H "X-N8N-API-KEY: $KEY" \
      -H "Content-Type: application/json" \
      --data-binary "@$file"
    ;;
  put)
    file="${3:?json file required}"
    curl -s -X PUT "$BASE_URL/api/v1/$path" \
      -H "X-N8N-API-KEY: $KEY" \
      -H "Content-Type: application/json" \
      --data-binary "@$file"
    ;;
  patch)
    curl -s -X POST "$BASE_URL/api/v1/$path" \
      -H "X-N8N-API-KEY: $KEY" \
      -H "Accept: application/json"
    ;;
  *)
    echo "Usage: $0 {get|post|put|patch} <path> [json-file]" >&2
    exit 1
    ;;
esac
echo
