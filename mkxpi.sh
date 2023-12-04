#!/bin/sh

rm -f ./dist/rts.xpi
zip -r -FS ./dist/rts.xpi * -x '*.git*' -x 'dist/' -x 'mkxpi.sh'

