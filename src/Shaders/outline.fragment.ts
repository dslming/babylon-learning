import { Effect } from "../Materials/effect";
import "./ShadersInclude/logDepthDeclaration";
import "./ShadersInclude/logDepthFragment";

let name = 'outlinePixelShader';
let shader = `#ifdef LOGARITHMICDEPTH
#extension GL_EXT_frag_depth : enable
#endif
uniform vec4 color;
#ifdef ALPHATEST
varying vec2 vUV;
uniform sampler2D diffuseSampler;
#endif
#include<logDepthDeclaration>
void main(void) {
#ifdef ALPHATEST
if (texture2D(diffuseSampler,vUV).a<0.4)
discard;
#endif
#include<logDepthFragment>
gl_FragColor=color;
}`;

Effect.ShadersStore[name] = shader;
/** @hidden */
export var outlinePixelShader = { name, shader };
