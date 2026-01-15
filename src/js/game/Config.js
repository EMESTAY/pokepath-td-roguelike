export const GAME_CONFIG = {
  CANVAS: {
    WIDTH: 720,
    HEIGHT: 624,
  },
  WINDOW: {
    BASE_WIDTH: 1238,
    BASE_HEIGHT: 674,
  },
  FPS: 60,
  MAX_DELTA_TIME: 1000, // Maximum time jump (ms) to handle tab switching
  ENEMY_BOUNDS_MARGIN: 20, // Margin outside screen to check for enemy exit
  SPEED_FACTORS: {
    NORMAL: 1,
    FAST: 1.5,
    SUPER_FAST: 1.75,
  },
};

export const COLORS = {
  SPEED_NORMAL: 'linear-gradient(0deg,rgba(194, 177, 183, 1) 50%, rgba(194, 177, 183, 1) 50%)',
  SPEED_FAST: 'linear-gradient(0deg,rgba(112, 172, 76, 1) 50%, rgba(194, 177, 183, 1) 50%)',
  SPEED_SUPER_FAST: 'linear-gradient(0deg,rgba(112, 172, 76, 1) 50%, rgba(112, 172, 76, 1) 50%)',
};
