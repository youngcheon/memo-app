import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Memo} from './memo';

export type RootStackParamList = {
    Home: {};
    Detail: Pick<Memo, 'id'>;
};

export type ScreenProps<N extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, N>;
