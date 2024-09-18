import {AppDispatch, RootState} from '@/redux/store';
import {useDispatch, TypedUseSelectorHook, useSelector} from 'react-redux';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
