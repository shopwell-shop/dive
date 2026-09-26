# Toolbox
A Toolbox to activate and deactivate tools for pointer-based interaction in the 3D scene.

## Features:
- Tool activation and deactivation (e.g. select, transform)
- Pointer event handling (move, down, up, wheel)
- Gizmo mode switching (translate, rotate, scale)

## Usage
```ts
import { DIVEScene } from '@shopwell-ag/dive';
import { OrbitController } from '@shopwell-ag/dive/orbitcontroller';
import { Toolbox } from '@shopwell-ag/dive/toolbox';

const scene = new DIVEScene();
const controller = new OrbitController(camera, canvas);
const toolbox = new Toolbox(scene, controller);

toolbox.useTool('select');
toolbox.setGizmoMode('translate');
```