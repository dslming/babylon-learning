import { Effect } from "../../Materials/effect";

let name = 'backgroundUboDeclaration';
let shader = `layout(std140,column_major) uniform;
uniform Material
{
uniform vec4 vPrimaryColor;
uniform vec4 vPrimaryColorShadow;
uniform vec2 vDiffuseInfos;
uniform vec2 vReflectionInfos;
uniform mat4 diffuseMatrix;
uniform mat4 reflectionMatrix;
uniform vec3 vReflectionMicrosurfaceInfos;
uniform float fFovMultiplier;
uniform float pointSize;
uniform float shadowLevel;
uniform float alpha;
#if defined(REFLECTIONFRESNEL) || defined(OPACITYFRESNEL)
uniform vec3 vBackgroundCenter;
#endif
#ifdef REFLECTIONFRESNEL
uniform vec4 vReflectionControl;
#endif
};
uniform Scene {
mat4 viewProjection;
#ifdef MULTIVIEW
mat4 viewProjectionR;
#endif
mat4 view;
};`;

Effect.IncludesShadersStore[name] = shader;
/** @hidden */
export var backgroundUboDeclaration = { name, shader };
