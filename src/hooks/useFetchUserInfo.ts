import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { show, hide } from '../store/loading/loading.actions';
import { setUserPhoto } from '../store/authSlice';

const useFetchUserPhoto = () => {
    const dispatch = useDispatch();

    const fetchPhoto = async () => {
        dispatch(show())
        try {
            const response = await fetch('https://picsum.photos/200');
            const photoUrl = response.url
            dispatch(setUserPhoto(photoUrl))
        } catch (error) {
            console.error('Error fetching photo:', error);
        } finally {
            dispatch(hide())
        }
    };

    useEffect(() => {
        fetchPhoto();
    }, []);

    return null
};

export default useFetchUserPhoto;
