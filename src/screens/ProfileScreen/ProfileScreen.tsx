import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/authSlice';

import { RootState } from '../../store/store';
import { Loading } from '../../components/Loading/Loading';
import useFetchUserPhoto from '../../hooks/useFetchUserInfo';
import { styles } from './ProgileScreen.styles';

export const ProfileScreen = () => {
  const dispatch = useDispatch();

  useFetchUserPhoto();
  const userPhoto = useSelector((state: RootState) => state.auth.user?.photo)
  const userEmail = useSelector((state: RootState) => state.auth.user?.email)

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {userPhoto ? (
          <Image source={{ uri: userPhoto }} style={styles.profileImage} />
        ) : (
          <Loading />
        )}

        <Text style={styles.emailText}>Email:</Text>
        <Text style={styles.emailText}>{userEmail}</Text>
      </View>
      <Button title="Logout" onPress={handleLogout} color={styles.button.color} />
    </View>
  );
};
