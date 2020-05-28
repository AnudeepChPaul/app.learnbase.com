import api from "@/Api/Api"

const getAppProperties = async function () {
  const resp = await api().get("/app/getAppProperties");
  return JSON.parse(JSON.stringify(resp.data));
}

export default getAppProperties
