import { DIVE, DIVEModel } from '@shopwell-ag/dive';
import { OrbitController } from '@shopwell-ag/dive/orbitcontroller';
import type { State } from '@shopwell-ag/dive/state';

export * from './QuickViewSettings.ts';

/** A QuickView built from a single model URI. */
export type QuickViewWithModel = DIVE & {
    orbitController: OrbitController;
    model: DIVEModel;
};

/**
 * A QuickView built from scene state.
 *
 * Carries no single `model`, because a scene state describes any number of
 * objects. The State instance is exposed so the scene can be driven further.
 */
export type QuickViewWithState = DIVE & {
    orbitController: OrbitController;
    state: State;
};
