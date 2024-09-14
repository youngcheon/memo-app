import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
    Home: {};
    Detail: {};
};

export type ScreenProps<N extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, N>;
