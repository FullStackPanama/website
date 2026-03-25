/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare class ClipboardJS {
  constructor(
    selector: Element | string,
    options?: {
      text?: () => string;
    }
  );
  on(event: "success" | "error", callback: (...args: unknown[]) => void): void;
}

declare class Lenis {
  constructor(options?: Record<string, unknown>);
  raf(time: number): void;
}
