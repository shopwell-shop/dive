# Changelog

## [5.0.0](https://github.com/shopwell-shop/dive/compare/v4.3.0...v5.0.0) (2026-11-08)


### ⚠ BREAKING CHANGES

* **engine:** OrbitController no longer owns the DOM or keyboard input; it is constructed with a camera component and connected to an input device, and Toolbox and TransformTool receive the canvas explicitly.

### 🚀 Features

* align decoder asset loading ([003d7a3](https://github.com/shopwell-shop/dive/commit/003d7a3e432dfa863b464de52f8c295beb46782b))
* choose decoder from platform support ([c3af9a7](https://github.com/shopwell-shop/dive/commit/c3af9a7c373fc6639c2b515b59b035ca59d400c6))
* **engine:** adopt upstream input layer, dome environment and tilt controller ([b5e7cf5](https://github.com/shopwell-shop/dive/commit/b5e7cf5ee7a607b27bd5503974e1a21a875be36c))


### 🐛 Bug Fixes

* bind release identity to immutable repository IDs ([3604daf](https://github.com/shopwell-shop/dive/commit/3604daf0b4c10c294a447fa3b514cf1fc4d88069))
* **ci:** publish the initial package with tokenless OIDC ([0998fc2](https://github.com/shopwell-shop/dive/commit/0998fc20ee2be276bcfdc8252e6f533f5db3f90b))
* **ci:** publish with tokenless OIDC ([1c313f5](https://github.com/shopwell-shop/dive/commit/1c313f5c899fa957bcd9ec7fff74c08996933475))
* **release:** authenticate initial npm publication ([0bfdee9](https://github.com/shopwell-shop/dive/commit/0bfdee9d4f88206fd6d39eae3e0d67f92d6eefde))
* **release:** repair trusted publishing ([4a21817](https://github.com/shopwell-shop/dive/commit/4a21817e94adf4a37811a40640bd707897583039))
* use trusted publishing for existing packages ([08c6d5b](https://github.com/shopwell-shop/dive/commit/08c6d5be9be9371499410f8ca88faa7927648235))
* use trusted publishing for existing packages ([5857ca3](https://github.com/shopwell-shop/dive/commit/5857ca300cd0e260382990ab9c52b2bb85e90f82))


### 📚 Documentation

* add repository agent guardrails ([4ece5a9](https://github.com/shopwell-shop/dive/commit/4ece5a907ed69bf1d67cd4f4587f5ac26a015868))

## [4.3.0](https://github.com/shopwell-shop/dive/compare/v4.2.2...v4.3.0) (2026-10-26)


### 🚀 Features

* dome environment ([#276](https://github.com/shopwell-shop/dive/issues/276)) ([1121d87](https://github.com/shopwell-shop/dive/commit/1121d879a9b9e02dab23b452776b9d7c9dab4ab8))


### 📚 Documentation

* add agentic issue tracker to dive project. ([#273](https://github.com/shopwell-shop/dive/issues/273)) ([1ee681f](https://github.com/shopwell-shop/dive/commit/1ee681fd20594806699a83cd634b43e8d814c9fd))

## [4.2.2](https://github.com/shopwell-shop/dive/compare/v4.2.1...v4.2.2) (2026-10-15)


### 🐛 Bug Fixes

* reverse azimuthal TiltController movement. ([#270](https://github.com/shopwell-shop/dive/issues/270)) ([6d774f9](https://github.com/shopwell-shop/dive/commit/6d774f9206a6054ce6eaf9de9890f3e3529361a6))

## [4.2.1](https://github.com/shopwell-shop/dive/compare/v4.2.0...v4.2.1) (2026-10-14)


### 🐛 Bug Fixes

* remove touch action from canvas in pointer input. ([#267](https://github.com/shopwell-shop/dive/issues/267)) ([a6658dd](https://github.com/shopwell-shop/dive/commit/a6658dddfe7e88247c9ef24037a642ac16c663ba))

## [4.2.0](https://github.com/shopwell-shop/dive/compare/v4.1.0...v4.2.0) (2026-10-14)


### 🚀 Features

* TiltController and GyroInput ([#263](https://github.com/shopwell-shop/dive/issues/263)) ([ec9312b](https://github.com/shopwell-shop/dive/commit/ec9312b2b9992ae5f330bb00d5b7d24c9ea4b55b))

## [4.1.0](https://github.com/shopwell-shop/dive/compare/v4.0.2...v4.1.0) (2026-10-02)


### 🚀 Features

* change draco loader to gltf version. ([#256](https://github.com/shopwell-shop/dive/issues/256)) ([f1b0443](https://github.com/shopwell-shop/dive/commit/f1b044381475b8415610922a83652c0f03bf970c))
* change how bytecode is transformed in vite build. ([#258](https://github.com/shopwell-shop/dive/issues/258)) ([f140fa5](https://github.com/shopwell-shop/dive/commit/f140fa564e84908c14843bea534625065ef1dd4a))
* **components:** add SoftShadowComponent. ([#252](https://github.com/shopwell-shop/dive/issues/252)) ([3a7a2f1](https://github.com/shopwell-shop/dive/commit/3a7a2f164e956552707664b1cc78d40452bcac99))
* remove choosing specific decoder version and instead let system capabilities decide. ([#257](https://github.com/shopwell-shop/dive/issues/257)) ([bec4114](https://github.com/shopwell-shop/dive/commit/bec41145be838a224fe088975a11b446002a768c))


### 🐛 Bug Fixes

* **node:** ignore own geometry in dropIt raycast. ([#254](https://github.com/shopwell-shop/dive/issues/254)) ([2274912](https://github.com/shopwell-shop/dive/commit/22749121140b1283d6a6f6c16ef5dcbac5ecee5b))

## [4.0.2](https://github.com/shopwell-shop/dive/compare/v4.0.1...v4.0.2) (2026-09-18)


### 🐛 Bug Fixes

* grid floor jitter ([#246](https://github.com/shopwell-shop/dive/issues/246)) ([5247d37](https://github.com/shopwell-shop/dive/commit/5247d3789c6130451a46adeeecdc48c1a3ae7cbb))
* **state:** change scene object behaviour with cameras. ([#244](https://github.com/shopwell-shop/dive/issues/244)) ([d2b40b0](https://github.com/shopwell-shop/dive/commit/d2b40b01a6002fb6676c683e9fd6fa10eb06fde4))

## [4.0.1](https://github.com/shopwell-shop/dive/compare/v4.0.0...v4.0.1) (2026-09-16)


### 🐛 Bug Fixes

* correctly focus objects after load. ([#241](https://github.com/shopwell-shop/dive/issues/241)) ([c325cb7](https://github.com/shopwell-shop/dive/commit/c325cb7909b4f376c2a1485642c2dcaac4d36a11))

## [4.0.0](https://github.com/shopwell-shop/dive/compare/v3.1.0...v4.0.0) (2026-09-09)


### ⚠ BREAKING CHANGES

* change aimAt to lookAt to fit threejs standards. ([#237](https://github.com/shopwell-shop/dive/issues/237))
* Component system ([#232](https://github.com/shopwell-shop/dive/issues/232))
* State plugin refactor ([#227](https://github.com/shopwell-shop/dive/issues/227))

### 🚀 Features

* change aimAt to lookAt to fit threejs standards. ([#237](https://github.com/shopwell-shop/dive/issues/237)) ([b05dd61](https://github.com/shopwell-shop/dive/commit/b05dd61cc9b76f0c03766b431b00d3d6b86ed099))
* Component system ([#232](https://github.com/shopwell-shop/dive/issues/232)) ([d5969f5](https://github.com/shopwell-shop/dive/commit/d5969f549ecdc8f20cf4b2520e90ae8b1e7c7d93))
* State plugin refactor ([#227](https://github.com/shopwell-shop/dive/issues/227)) ([053f333](https://github.com/shopwell-shop/dive/commit/053f3332d95f4326370756265688babd0b1280b3))


### 🐛 Bug Fixes

* add animations correctly to exported model. ([#236](https://github.com/shopwell-shop/dive/issues/236)) ([2a5b937](https://github.com/shopwell-shop/dive/commit/2a5b937e6702f7aa318e9a502e4882f4ea13fe8b))

## [3.1.0](https://github.com/shopwell-shop/dive/compare/v3.0.11...v3.1.0) (2026-08-06)


### 🚀 Features

* add context loss protection by limiting active dive instances. ([#213](https://github.com/shopwell-shop/dive/issues/213)) ([792f331](https://github.com/shopwell-shop/dive/commit/792f33101032a6c8455bb19b5640fbed575fe20c))
* add own SpriteText class. remove three-spritetext dependency. ([#222](https://github.com/shopwell-shop/dive/issues/222)) ([245b335](https://github.com/shopwell-shop/dive/commit/245b335e06d3959e2c3c7bb8767a59406b01622e))
* add release please setup. ([#212](https://github.com/shopwell-shop/dive/issues/212)) ([56ca9dd](https://github.com/shopwell-shop/dive/commit/56ca9dd63789ed901cd042b23f014510bf05f92e))
* change naming from "pov" to "camera". ([#220](https://github.com/shopwell-shop/dive/issues/220)) ([181b64b](https://github.com/shopwell-shop/dive/commit/181b64b3e682a86981c6f2fa1702684e31b74c20))
* QuickView Dive states ([#226](https://github.com/shopwell-shop/dive/issues/226)) ([d861a5b](https://github.com/shopwell-shop/dive/commit/d861a5b27fe0e7074f06d2cc667186855ac5b77b))


### 🐛 Bug Fixes

* change environment saving in HDR Environment. ([#221](https://github.com/shopwell-shop/dive/issues/221)) ([9d6ee19](https://github.com/shopwell-shop/dive/commit/9d6ee19f0eed07ae0eccc88f7024313d7608c931))
