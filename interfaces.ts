interface IData {
  feed: IDataFeed;
}

interface IDataFeed {
  entry: ICellData[];
}

interface ICellData {
  id: ICell;
  gsx$avengedby: ICell
  gsx$class: ICell
  gsx$deathplace: ICell
  gsx$firsts: ICell
  gsx$killer: ICell
  gsx$legacy: ICell
  gsx$level: ICell
  gsx$name: ICell
  gsx$race: ICell
  gsx$rarespawns: ICell
  gsx$time: ICell
}

interface ICell {
  $t: string;
}

interface ICleanData {
  id: string;
  avengedby: string;
  class: string;
  deathplace: string;
  firsts: string;
  killer: string;
  legacy: string;
  level: string;
  name: string;
  race: string;
  rarespawns: string;
  time: string;
}