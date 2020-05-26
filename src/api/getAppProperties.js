import api from "@/api/"

const getAppProperties = async function () {
  const resp = await api().get("/getAppProperties");
  return JSON.parse(JSON.stringify(resp.data));
}

export default getAppProperties
