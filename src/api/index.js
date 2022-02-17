import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


export const getPlacesData = async(sw,ne) => {
    try {
        const {data:{data}} = await axios.get(URL,{
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
            'x-rapidapi-key': '64055d2d0emshfe4f5fd52d0ef3ep13cd7ajsn13a21ab79396'
          }
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}