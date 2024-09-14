import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            main: string;
            white: string;
            grey: string;
        };
    }
}
