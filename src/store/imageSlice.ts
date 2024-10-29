import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface ImageData {
    id: string;
    author: string;
    download_url: string; 
  }

interface ImagesState {
  images: ImageData[];
  page: number;
  isLoading: boolean;
  isRefreshing: boolean;
}

const initialState: ImagesState = {
  images: [],
  page: 1,
  isLoading: false,
  isRefreshing: false,
};

export const fetchImages = createAsyncThunk(
  "images/fetchImages",
  async (page: number) => {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
    const data: ImageData[] = await response.json();
    return data;
  }
);

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    resetImages: (state) => {
      state.images = [];
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.isLoading = false;
        state.images = [...state.images, ...action.payload];
        state.page += 1;
      })
      .addCase(fetchImages.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { resetImages } = imageSlice.actions;
export default imageSlice.reducer;
