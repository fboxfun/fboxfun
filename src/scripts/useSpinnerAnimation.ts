// Spinner Animation Hook
// Manages motion values, center tracking, and animation state

export interface SpinnerAnimationState {
  isAnimating: boolean;
  hasCompleted: boolean;
  center: number;
  transform: string;
}

export interface SpinnerAnimationConfig {
  itemCount: number;
  startPosition: number;
  finalPosition: number;
  duration: number;
  isFastForward?: boolean;
  onCenterChange?: (center: number) => void;
  onComplete?: () => void;
}

export class SpinnerAnimation {
  private itemCount: number;
  private centerRef: number = 0;
  private rafId: number | null = null;
  private state: SpinnerAnimationState;
  private listeners: Set<(state: SpinnerAnimationState) => void> = new Set();

  constructor(itemCount: number) {
    this.itemCount = itemCount;
    this.state = {
      isAnimating: false,
      hasCompleted: false,
      center: 0,
      transform: "0%",
    };
  }

  /**
   * Subscribe to state changes
   */
  subscribe(listener: (state: SpinnerAnimationState) => void): () => void {
    this.listeners.add(listener);
    // Return unsubscribe function
    return () => this.listeners.delete(listener);
  }

  /**
   * Notify all listeners of state change
   */
  private notify(): void {
    this.listeners.forEach((listener) => listener({ ...this.state }));
  }

  /**
   * Update state and notify listeners
   */
  private setState(update: Partial<SpinnerAnimationState>): void {
    this.state = { ...this.state, ...update };
    this.notify();
  }

  /**
   * Handle transform change and track center item
   */
  handleTransformChange(
    transformPercentage: string,
    onCenterChange?: (center: number) => void
  ): void {
    // Calculate which item is centered based on scroll position
    const percentage = Math.abs(parseFloat(transformPercentage));
    const newCenter =
      Math.round(percentage / (100 / this.itemCount) - 0.5) % this.itemCount;

    if (newCenter !== this.centerRef && !isNaN(newCenter)) {
      this.centerRef = newCenter;

      // Use RAF to batch updates
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
      }

      this.rafId = requestAnimationFrame(() => {
        this.setState({ center: newCenter, transform: transformPercentage });

        // Call callback for tick sound, etc.
        if (onCenterChange) {
          onCenterChange(newCenter);
        }
      });
    }
  }

  /**
   * Start animation
   */
  start(): void {
    this.setState({ isAnimating: true, hasCompleted: false });
  }

  /**
   * Complete animation
   */
  complete(): void {
    this.setState({ isAnimating: false, hasCompleted: true });
  }

  /**
   * Reset animation
   */
  reset(): void {
    this.centerRef = 0;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.setState({
      isAnimating: false,
      hasCompleted: false,
      center: 0,
      transform: "0%",
    });
  }

  /**
   * Get current state
   */
  getState(): SpinnerAnimationState {
    return { ...this.state };
  }

  /**
   * Cleanup
   */
  destroy(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    this.listeners.clear();
  }
}

/**
 * Calculate animation positions based on architecture specs
 */
export function calculateAnimationPositions(
  itemCount: number,
  startPosition: number,
  finalPosition: number,
  randomizedOffset: number = 0
): {
  startPositionPercentage: string;
  finalPositionPercentage: string;
} {
  const startPositionPercentage = `-${
    ((startPosition + 0.5) / itemCount) * 100
  }%`;
  const finalPositionPercentage = `-${
    ((finalPosition + randomizedOffset) / itemCount) * 100
  }%`;

  return {
    startPositionPercentage,
    finalPositionPercentage,
  };
}
