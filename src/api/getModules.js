import api from "@/api/"

const getAllModules = async () => {
  const resp = await api().get("/modules/list");
  return JSON.parse(JSON.stringify(resp.data));
};

export { getAllModules };
