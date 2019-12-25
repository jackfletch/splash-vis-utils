export interface Point {
  x: number;
  y: number;
}

export interface Shot {
  id: number;
  game_id: number;
  game_event_id: number | string;
  player_id: number;
  distance: number;
  x: number;
  y: number;
  made_flag: boolean;
}
