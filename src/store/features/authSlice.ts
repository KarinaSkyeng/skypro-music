import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TrackType } from "@/types/tracks";
import { fetchFavoriteTracks, addLikeTrack, removeLikeTrack } from "@/api/apiTrack";

export const getFavoriteTracks = createAsyncThunk(
  "tracks/getFavorite",
  async (token: string) => {
    const response = await fetchFavoriteTracks(token);
    return response as TrackType[]; 
  }
);

type PlaylistStateType = {
  currentTrack: TrackType | null;
  initialPlaylist: TrackType[];
  playlist: TrackType[];
  isPlaying: boolean;
  isShuffle: boolean;
  likedTracks: TrackType[];
  trackLikes: { [key: number]: number };
};

const initialState: PlaylistStateType = {
  currentTrack: null,
  initialPlaylist: [],
  playlist: [],
  isPlaying: false,
  isShuffle: false,
  likedTracks: [],
  trackLikes: {},
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentTrack: (
      state,
      action: PayloadAction<{ currentTrack: TrackType; playlist: TrackType[] }>
    ) => {
      state.currentTrack = action.payload.currentTrack;
      state.initialPlaylist = action.payload.playlist;
      state.playlist = action.payload.playlist;
    },
    setNextTrack: (state) => {
      const playlist = state.isShuffle
        ? [...state.initialPlaylist].sort(() => Math.random() - 0.5)
        : state.initialPlaylist;
    
      if (!playlist.length) return; // Плейлист пуст
    
      const currentIndex = playlist.findIndex(
        (track) => track._id === state.currentTrack?._id
      );
    
      if (currentIndex === -1 || currentIndex === playlist.length - 1) {
        state.isPlaying = false;
        return;
      }
    
      state.currentTrack = playlist[currentIndex + 1];
    },
    setPrevTrack: (state) => {
      const playlist = state.isShuffle
        ? [...state.initialPlaylist].sort(() => Math.random() - 0.5)
        : state.initialPlaylist;
    
      if (!playlist.length) return; // Плейлист пуст
    
      const currentIndex = playlist.findIndex(
        (track) => track._id === state.currentTrack?._id
      );
    
      if (currentIndex <= 0) {
        state.isPlaying = false;
        return;
      }
    
      state.currentTrack = playlist[currentIndex - 1];
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setIsShuffle: (state, action: PayloadAction<boolean>) => {
      if (action.payload && !state.isShuffle) {
        state.playlist = [...state.initialPlaylist].sort(() => Math.random() - 0.5);
      } else if (!action.payload && state.isShuffle) {
        state.playlist = state.initialPlaylist;
      }
      state.isShuffle = action.payload;
    },
    setLike: (state, action: PayloadAction<TrackType>) => {
      state.likedTracks.push(action.payload);
    },
    setDislike: (state, action: PayloadAction<TrackType>) => {
      state.likedTracks = state.likedTracks.filter(
        (track) => track._id !== action.payload._id
      );
    },
    toggleLike: (state, action: PayloadAction<TrackType>) => {
      const track = action.payload;
      const isLiked = state.likedTracks.find((t) => t._id === track._id);
      if (isLiked) {
        state.likedTracks = state.likedTracks.filter((t) => t._id !== track._id);
        state.trackLikes[track._id]--;
      } else {
        state.likedTracks.push(track);
        state.trackLikes[track._id] = (state.trackLikes[track._id] || 0) + 1;
      }
    },
    updateLikesCount: (
      state,
      action: PayloadAction<{ trackId: number; likesCount: number }>
    ) => {
      state.trackLikes[action.payload.trackId] = action.payload.likesCount;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFavoriteTracks.fulfilled, (state, action) => {
      state.likedTracks = action.payload;
    });
  },
});

export const likeTrack = createAsyncThunk(
  "tracks/likeTrack",
  async (
    { token, trackId }: { token: string; trackId: number },
    { dispatch }
  ) => {
    const response = await addLikeTrack(token, trackId);
    dispatch(
      updateLikesCount({ trackId: response.trackId, likesCount: response.likesCount })
    );
    return response;
  }
);

export const dislikeTrack = createAsyncThunk(
  "tracks/dislikeTrack",
  async (
    { token, trackId }: { token: string; trackId: number },
    { dispatch }
  ) => {
    const response = await removeLikeTrack(token, trackId);
    dispatch(
      updateLikesCount({ trackId: response.trackId, likesCount: response.likesCount })
    );
    return response;
  }
);

export const {
  setCurrentTrack,
  setNextTrack,
  setPrevTrack,
  setIsPlaying,
  setIsShuffle,
  setDislike,
  setLike,
  updateLikesCount, 
} = playlistSlice.actions;

export const { toggleLike } = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
