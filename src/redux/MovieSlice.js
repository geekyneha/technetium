import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk("movies/getMovies", async () => {
    console.log("Fetching movies...");
    const response = await fetch(
      "https://www.omdbapi.com/?s=action&apikey=fe8e7f81&page=1"
    );
    const data = await response.json();
    console.log("Received movie data:", data);
    return data;
  });
  


const MovieSlice= createSlice(({
    name:"movies",
    initialState:{
        
        movies:[],
        favorites:[],
        loading:false,
    },
  reducers:{
    toggleLike: (state, action) => {
      const { movieId, liked } = action.payload;
      const movieIndex = state.movies.findIndex((m) => m.id === movieId);
    
      if (movieIndex !== -1) {
        const updatedMovies = [...state.movies];
        updatedMovies[movieIndex] = {
          ...updatedMovies[movieIndex],
          liked: liked,
        };
    
        if (liked) {
          state.favorites.push(updatedMovies[movieIndex]);
        } else {
          state.favorites = state.favorites.filter((favMovie) => favMovie.id !== movieId);
        }
    
        state.movies = updatedMovies;
      }
    }
  },
      
    extraReducers:{
        [getMovies.pending]:(state,action)=>{
            state.loading=true

        },
        [getMovies.fulfilled]:(state,action)=>{
             state.loading=false;
             state.movies=action.payload.Search
             
             
        },
        [getMovies.rejected]:(state,action)=>{

           state.loading=false
        }
    }
}))

export const { toggleLike} = MovieSlice.actions
export default MovieSlice.reducer

