#!/bin/bash

colors="red/#F44336 pink/#FF4081 purple/#9C27B0 deep-purple/#7C4DFF indigo/#3F51B5 blue/#448AFF light-blue/#03A9F4 cyan/#18FFFF teal/#009688 green/#69F0AE light-green/#8BC34A lime/#EEFF41 yellow/#FFEB3B amber/#FFD740 orange/#FF9800 deep-orange/#FF5722 brown/#BCAAA4 grey/#9E9E9E blue-grey/#B0BEC5"

for color in $colors; do
    name=$(echo $color | awk -F'/' '{print $1}')
    hex=$(echo $color | awk -F'/' '{print $2}')
    echo ""
    echo "div.$name .mat-card {"
    echo "  background-color: $hex;"
    echo "}"
done
