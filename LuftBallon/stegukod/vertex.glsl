#version 330 core

uniform mat4 MV;
uniform mat4 P;
uniform mat4 LR;

layout(location = 0) in vec3 Position ;
layout(location = 1) in vec3 Normal ;
layout(location = 2) in vec2 TexCoord ;

out vec3 interpolatedNormal;
out vec2 st;
out vec3 lightDirection;



void main () {
    gl_Position = MV * vec4 ( Position , 1.0) ; // Special , required output
    st = TexCoord; // Will also be interpolated across the triangle
    lightDirection = normalize( mat3(LR) * vec3 (1.0 , 1.0 , 1.0));
    //lightDirection = normalize(mat3(MV) * vec3 (1.0 , 0.0 , 1.0));
    //vec3 transformedNormal = mat3(C) * Normal ;
    vec3 transformedNormal = mat3(MV) * Normal ;
    interpolatedNormal = normalize ( transformedNormal ) ;


}


