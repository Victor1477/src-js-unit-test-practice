import { vi } from "vitest";

export default {
  join: vi.fn((...args) => {
    return args[2];
  }),
};
