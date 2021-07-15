interface IData {
  feed: IDataFeed;
}

interface IDataFeed {
  entry: IEntry[];
}

interface IEntry {
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