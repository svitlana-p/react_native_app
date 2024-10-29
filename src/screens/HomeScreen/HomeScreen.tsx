import React, { useEffect } from "react";
import { View, Text, FlatList, Image, ActivityIndicator, RefreshControl } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchImages, ImageData, resetImages } from "../../store/imageSlice";
import { styles } from "./HomeScreen.style";


export const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { images, page, isLoading, isRefreshing } = useSelector(
    (state: RootState) => state.images
  );

  const loadMore = () => {
    if (!isLoading) {
      dispatch(fetchImages(page + 1));
    }
  };

  const onRefresh = () => {
    dispatch(resetImages())
    const randomPage = Math.floor(Math.random() * 10) + 1
    dispatch(fetchImages(randomPage))
  }

  useEffect(() => {
    if (images.length === 0) {
      dispatch(fetchImages(page));
    }
  }, []);

  const renderItem = ({ item }: { item: ImageData }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.download_url }} style={styles.image} />
      <Text style={styles.imageText}>{item.author}</Text>
    </View>
  );

  return (
    <FlatList
      style={styles.container}
      data={images}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />}
      ListFooterComponent={isLoading ? <ActivityIndicator color='white'/> : null}
    />
  );
};
