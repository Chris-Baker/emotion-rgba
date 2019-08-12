/** @format */
import { rgba } from './rgba';

describe('RGBA', () => {
    test('should convert hex and opacity to rgba', () => {
        const color = '#FFFFFF';
        const opacity = 1;
        const converted = rgba(color, opacity);
        expect(converted).toBe('rgba(255, 255, 255, 1)');
    });

    test('should convert shorthand hex and opacity to rgba', () => {
        const color = '#FFF';
        const opacity = 1;
        const converted = rgba(color, opacity);
        expect(converted).toBe('rgba(255, 255, 255, 1)');
    });

    test('should convert named color and opacity to rgba', () => {
        const color = 'black';
        const opacity = 1;
        const converted = rgba(color, opacity);
        expect(converted).toBe('rgba(0, 0, 0, 1)');
    });

    test('should fail to convert an incorrect named color', () => {
        const color = 'slightly darker black';
        const opacity = 1;
        expect(() => rgba(color, opacity)).toThrow();
    });

    test('should fail to convert an invalid hex color', () => {
        const color = '#black';
        const opacity = 1;
        expect(() => rgba(color, opacity)).toThrow();
    });

    test('should fail to convert an invalid opacity', () => {
        const color = 'white';
        const opacity = 1.1;
        expect(() => rgba(color, opacity)).toThrow();
    });

    test('should fail to convert an invalid opacity', () => {
        const color = 'white';
        const opacity = -0.1;
        expect(() => rgba(color, opacity)).toThrow();
    });
});
