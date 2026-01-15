import { describe, expect, test } from "bun:test";
import { GAME_CONFIG, COLORS } from "../src/js/game/Config.js";

describe("Configuration", () => {
  test("GAME_CONFIG should have correct structure", () => {
    expect(GAME_CONFIG.CANVAS).toBeDefined();
    expect(GAME_CONFIG.WINDOW).toBeDefined();
    expect(GAME_CONFIG.FPS).toBe(60);
  });

  test("COLORS should have speed gradients", () => {
    expect(COLORS.SPEED_NORMAL).toContain("linear-gradient");
    expect(COLORS.SPEED_FAST).toContain("linear-gradient");
    expect(COLORS.SPEED_SUPER_FAST).toContain("linear-gradient");
  });
});
