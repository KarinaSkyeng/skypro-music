export const BASE_URL = 'https://webdev-music-003b5b991590.herokuapp.com'

export const getTracks = async () => {
    try {
        const res = await fetch(BASE_URL + `/catalog/track/all/`);
        if (!res.ok) {
            throw new Error('Ошибка при получении треков');
        }
        const tracksData = await res.json();
        return tracksData.data;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('Неизвестная ошибка');
        }
    }
};

export async function fetchFavoriteTracks(token: string) {
    try {
      const response = await fetch(BASE_URL + "/catalog/track/favorite/all/", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Ошибка сервера");
      }
  
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Ошибка при получении избранных треков:", error);
      throw error;
    }
  }
  
  export async function addLikeTrack(token: string, id: number) {
    try {
      const response = await fetch(BASE_URL + `/catalog/track/${id}/favorite/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Ошибка сервера");
      }
  
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Ошибка при добавлении лайка на трек:", error);
      throw error;
    }
  }
  
  export async function removeLikeTrack(token: string, id: number) {
    try {
      const response = await fetch(BASE_URL + `/catalog/track/${id}/favorite/`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error("Ошибка сервера");
      }
  
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Ошибка при удалении лайка с трека:", error);
      throw error;
    }
  }
  
  export async function getSelectionTracks(id: string) {
    try {
      const fullId = Number(id) + 1;
      const response = await fetch(BASE_URL + `/catalog/selection/${fullId}/`);
  
      if (!response.ok) {
        throw new Error("Ошибка получения");
      }
  
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error("Ошибка при получении треков подборки:", error);
      throw error;
    }
  }