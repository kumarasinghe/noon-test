import { GET } from "src/utils/network";
import commonConfig from "src/configs/common.config";

const baseURL = `${commonConfig.API_URL}/api/v1`;

export default {
  getAllLists: function (): Promise<JSON> {
    const apiURL = `${baseURL}/listings`;
    return GET(apiURL);
  },
};
