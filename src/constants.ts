import { draw } from "./deck";
import { players } from "./players";

export const CARD_TYPES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "reverse", "skip", "draw2"] as const;

export const CARD_VALUES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "reverse", "skip", "draw2", "wild", "wild4"] as const;

export const CARD_COLORS = ["red", "yellow", "green", "blue"] as const;

export const CARD_ACTIONS = {
    reverse: () => players.reverse(),
    skip: () => (players.turn = (players.turn + 1) % PLAYER_COUNT),
    draw2: () => players[players.turn].push(draw(), draw()),
    wild: () => void 0,
    wild4: () => players[players.turn].push(draw(), draw(), draw(), draw()),
} as const;

export const PLAYER_COUNT = 2;

export const SYMBOLS = {
    reverse: "🔄",
    skip: "⃠",
    draw2: "➕2️⃣",
    wild: "🌈",
    wild4: "🌈4️⃣",
} as const;

export const NAMES = {
    reverse: "reverse",
    skip: "skip",
    draw2: "draw 2",
    wild: "wild",
    wild4: "wild draw 4",
} as const;

export const COLORS = {
    red: "#D31019",
    yellow: "#EEC314",
    green: "#0A852E",
    blue: "#158BCF",
} as const;
