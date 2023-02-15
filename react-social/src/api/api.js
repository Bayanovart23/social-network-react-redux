import axios from "axios";

export const instance =  axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0',
   'API-KEY': 'b57f35ca-f85f-43c8-9f4c-593134d03274',
});


export const getApiUsers = (currentPage=1, pageSize =10) => {
   return instance.get('users?page=${currentPage}&count=${pageSize}').then(response => response.data);

}
export const getLogin = () => {
   return instance.get('/auth/me').then(response => response.data);
}

export const getFollow = (id) => (instance.post(`/follow/${id}`, {}).then(response => response.data));

export const getUnFollow = (id) => (instance.delete(`/follow/${id}`, {}).then(response => response.data));