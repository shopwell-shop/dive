# Orbit Controller
Basic orbit controls for navigating around a target point in the 3D scene.

## Features:
- Smooth camera orbiting with damping
- Customizable settings (damping, zoom factor)
- Compute encompassing view for bounding boxes
- Zoom in/out programmatically

## Usage
```ts
import { DIVEPerspectiveCamera } from '@shopwell-ag/dive';
import { OrbitController } from '@shopwell-ag/dive/orbitcontroller';

const camera = new DIVEPerspectiveCamera();
const controller = new OrbitController(camera, canvas, {
    enableDamping: true,
    dampingFactor: 0.05,
});

controller.zoomIn();
controller.zoomOut(2);
```