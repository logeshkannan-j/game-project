import axios from "axios";

const key="27ca009f86c346fab7b14368cd3128ab";
const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'
})
const getGenrelist=axiosCreate.get('/genres?key='+key);
const getAllGames=axiosCreate.get('/games?key='+key);
export default{
    getGenrelist,
    getAllGames
}