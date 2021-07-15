import { useEffect, useState } from "react";
import { sheetsURL } from "../api/google";

export default () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<TCleanData[]>([]);
  
  const fetchData = () => {
    fetch(sheetsURL)
      .then(response => response.json())
      .then(json => cleanData(json))
      .then(data => setData(data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  function cleanData(data: IData): TCleanData[] {
    const { feed } = data;
    const { entry } = feed || [];

    return entry.map(x => {
      return {
        id: x.id.$t,
        avengedby: x.gsx$avengedby.$t,
        class: x.gsx$class.$t,
        deathplace: x.gsx$deathplace.$t,
        firsts: x.gsx$firsts.$t,
        killer: x.gsx$killer.$t,
        legacy: x.gsx$legacy.$t,
        level: x.gsx$level.$t,
        name: x.gsx$name.$t,
        race: x.gsx$race.$t,
        rarespawns: x.gsx$rarespawns.$t,
        time: x.gsx$time.$t,
      }
    });
  }

  return { isLoading, data, fetchData };
}