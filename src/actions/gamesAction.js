import axios from "axios";
import { popularGamesUrl, newGamesUrl, upcomingGamesUrl } from "../api";
/*
 * action creator to fetch games on first load
 */

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesUrl());
  const newGamesData = await axios.get(newGamesUrl());
  const upComingGamesData = await axios.get(upcomingGamesUrl());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newgames: newGamesData.data.results,
      upcoming: upComingGamesData.data.results,
    },
  });
};
