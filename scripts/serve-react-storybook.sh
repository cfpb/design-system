#!/bin/zsh

set -euo pipefail

script_dir=${0:A:h}
parent_root=${script_dir:h}
react_root=${parent_root:h}/design-system-react
# preferred_node=${HOME}/.nvm/versions/node/v24.14.0/bin/node
# fallback_node=${HOME}/.nvm/versions/node/24.13.0/bin/node

if [[ ! -d "${react_root}" ]]; then
    echo "Expected sibling repo at ${react_root}" >&2
    exit 1
fi

# if [[ -x "${preferred_node}" ]]; then
#     node_bin=${preferred_node}
# elif [[ -x "${fallback_node}" ]]; then
#     node_bin=${fallback_node}
# else
#     echo "Could not find Node 24 binary under ${HOME}/.nvm/versions/node" >&2
#     exit 1
# fi 

cd "${react_root}"
# export PATH="${node_bin:h}:$PATH"
exec ./node_modules/.bin/storybook dev -p 7007 --ci --exact-port "$@"
