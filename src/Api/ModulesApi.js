import api from '@/Api/Api'

const getAllModules = async () => {
  const resp = await api().get("/modules/list");
  return JSON.parse(JSON.stringify(resp.data));
};

const getTop5Modules = async () => {
  const resp = await api().get("/modules/list?top=5")
  return JSON.parse(JSON.stringify(resp.data));
};

export { getAllModules, getTop5Modules };
