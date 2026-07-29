export type PokemonStats = {
  hp: number;
  atk: number;
  def: number;
  spa: number;
  spd: number;
  spe: number;
};

export type Pokemon = {
  name: string; // lowercase api name, e.g. "pikachu"
  displayName: string; // "Pikachu"
  dexNumber: number; // national dex number
  types: string[]; // 18 types
  abilities: string[];
  stats: PokemonStats;
  bst: number; // base stat total
  generation: number; // 1-9
  region: string; // Kanto...Paldea
  sprite: string; // small sprite url (fallback)
  artwork: string; // official artwork url (475x475)
  shinySprite?: string;
  isLegendary: boolean;
  isMythical: boolean;
};
