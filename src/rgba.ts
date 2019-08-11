/** @format */

import hexRgb from 'hex-rgb';
import { colors } from './colors';

/**
 *
 * @param {string} color the color to convert, this can be a hex value or a known HTML color string
 * @param {number} opacity the opacity of the color in the range 0 to 1 with 0.5 being 50%
 * @return {string} an rgba string of the form 'rgba(255, 255, 255, 1)'
 * @throws
 */
export function rgba(color: string, opacity: number): string {
    // 1. match the color to either and known color string or a hex value
    // look at first character to see if it is a #. If not then we need to look up the hex value
    color = color.trim().toLowerCase();
    let hexColor: string | undefined;
    if (color[0] === '#') {
        hexColor = color;
    } else {
        // see if we can find a color mapping from the provided string to color to a valid hex color
        const colorMapping = colors.find((colorMapping) => colorMapping.name === color);
        if (colorMapping) {
            hexColor = colorMapping.value;
        }
    }
    if (!hexColor) {
        throw new Error(
            `Invalid color '${color}'. Color should be a valid hexadecimal value '#FFFFFF' or a valid color string, for example 'white'`
        );
    }

    // 2. make sure our opacity is in a sensible range 0 to 1
    if (opacity < 0 || opacity > 1) {
        throw new Error(
            `Invalid opacity '${opacity}'. Opacity should be in the range 0 to 1`
        );
    }

    // 3. convert our hex value to rgb
    try {
        const rgb = hexRgb(hexColor);
        return `rgba(${rgb.red}, ${rgb.green}, ${rgb.blue}, ${opacity})`;
    }
    catch (e) {
        throw new Error(
            `Invalid color '${hexColor}'. Color should be a valid hexadecimal value, for example '#FFFFFF'`
        );
    }
}
