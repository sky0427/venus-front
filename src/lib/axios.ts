import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api", // 백엔드 API URL을 입력
  timeout: 10000, // 타임아웃 설정
});

export default axiosInstance;
