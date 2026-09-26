import { type OrbitController } from '@shopwell-ag/dive/orbitcontroller';
import { type EntitySchema } from './schema/index.ts';
import { type EngineGateway } from '../src/EngineGateway.ts';

// Extracted types for performAction_new
export type ActionPayload<T> = T extends new (
    payload: infer P,
    dependencies: infer D,
) => unknown
    ? P
    : never;

export type ActionReturn<T> = T extends new (
    payload: infer P,
    dependencies: infer D,
) => infer ClassInstance
    ? ClassInstance extends { execute(): infer E }
        ? E
        : never
    : never;

export type ActionDeps<T> = T extends new (
    payload: unknown,
    dependencies: infer D,
) => unknown
    ? D extends Partial<ActionDependencies>
        ? D
        : never
    : never;

export interface ActionDependencies {
    registered: Map<string, EntitySchema>;
    gateway: EngineGateway;
    controller: OrbitController;
    getAnimationSystem: () => Promise<
        import('@shopwell-ag/dive/animation').AnimationSystem
    >;
    getARSystem: () => Promise<import('@shopwell-ag/dive/ar').ARSystem>;
    getAssetExporter: () => Promise<
        import('@shopwell-ag/dive/assetexporter').AssetExporter
    >;
    getMediaCreator: () => Promise<
        import('@shopwell-ag/dive/mediacreator').MediaCreator
    >;
    getToolbox: () => Promise<import('@shopwell-ag/dive/toolbox').Toolbox>;
}
