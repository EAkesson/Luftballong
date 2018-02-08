#version 330 core


out vec4 finalcolor;
uniform sampler2D tex ; // A uniform variable to identify the texture
in vec2 st ; // Interpolated texture coords , sent from vertex shader
in vec3 interpolatedNormal;
in vec3 interpolatedColor;
in vec3 lightDirection;


vec3 V = vec3(0,0,1);
float n = 100f;
vec3 ka = vec3(0.5f,0.5f,0.5f);
vec3 Ia = vec3(0.1f,0.1f,0.1f);
vec3 kd = vec3 (texture ( tex , st ));
vec3 Id = vec3(0.8f,1.0f,0.8f);
//vec3 ks = vec3(182/255f,126/255f,91/255f);
vec3 ks = vec3(1.0f,1.0f,1.0f);
vec3 Is = vec3(1.0f,1.0f,1.0f);

void main(){
    //finalcolor = vec4(vec3(interpolatedNormal.z), 1.0);
    //finalcolor = vec4(interpolatedNormal, 1.0);

/*  float shading = dot ( interpolatedNormal , lightDirection ) ;
    shading = max (0.0 , shading ); // Clamp negative values to 0.0
    finalcolor = vec4 ( vec3 ( shading ) , 1.0) ;*/
    //lightDirection = vec3(0.0,0.0,1.0);

    vec3 R = 2.0* dot (interpolatedNormal ,lightDirection) * interpolatedNormal - lightDirection; // Could also have used the function reflect ()
    float dotNL = max ( dot (interpolatedNormal , lightDirection) , 0.0) ; // If negative , set to zero
    float dotRV = max ( dot (R , V) , 0.0) ;
    if ( dotNL == 0.0) dotRV = 0.0; // Do not show highlight on the dark side
    vec3 shadedcolor = Ia * ka + Id * kd * dotNL + Is * ks * pow ( dotRV , n);
    finalcolor = vec4 ( shadedcolor , 1.0) ;
   // finalcolor = texture ( tex , st ) ; // Use the texture to set the surface color

}
