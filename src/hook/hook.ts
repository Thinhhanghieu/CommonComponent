import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, IRootState } from '../redux/store';

// Use throughout app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<IRootState>()
