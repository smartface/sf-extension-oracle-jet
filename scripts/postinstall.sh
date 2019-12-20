#!/usr/bin/env bash
folder=$ROOT_PATH/assets/jet
if [ -d $folder ]; then rm -rf $folder; fi
mv ./jet $ROOT_PATH/assets