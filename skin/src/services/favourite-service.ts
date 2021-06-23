import { GET, POST, DELETE } from "src/utils/network";
import commonConfig from "src/configs/common.config";

const baseURL = `${commonConfig.API_URL}/api/v1`;

export default {
  getFavourites: function (): Promise<JSON> {
    const apiURL = `${baseURL}/favourites`;
    return GET(apiURL);
  },
  addToFavourites: function (listingId: string): Promise<string> {
    const apiURL = `${baseURL}/favourites`;
    return POST(apiURL, { listingId });
  },
  removeFromFavourites: function (listingId: string): Promise<string> {
    const apiURL = `${baseURL}/favourites`;
    return DELETE(apiURL, { listingId });
  },
};
