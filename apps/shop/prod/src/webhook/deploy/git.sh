#!/bin/bash
git_path=${1}
if [ -d ${git_path} ]
then
  git_branch=${2}
  echo "path: ${git_path}"
  echo "branch: origin/${git_branch}"
  cd ${git_path}
  git fetch --all 2>&1
  git reset --hard origin/${git_branch} 2>&1
  git pull origin ${git_branch} 2>&1
else
  echo "No such directory: ${git_path}"
fi