#define GLEW_STATIC
#include <SOIL.h>
#include <glew.h>
#include <GLFW/glfw3.h>
#include <thread>
#include <glm/fwd.hpp> // Header file
#include <glm/glm.hpp> // Source file
#include "TriangleSoup.hpp"




int main() {

	glfwInit(); //Start the GLFW process

	//Setting GLFW options require OpenGL 3.2
	glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
	glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 2);
	glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE); //Specify the use of only new core fuctionality
	glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE);

	glfwWindowHint(GLFW_RESIZABLE, GL_FALSE);

	//GLFWwindow* window = glfwCreateWindow(1920, 1080, "OpenGL", nullptr, nullptr); // Windowed
	GLFWwindow* window = glfwCreateWindow(1920, 1080, "OpenGL", glfwGetPrimaryMonitor(), nullptr); // Fullscreen
	glfwMakeContextCurrent(window); // Make OpenGL context active

	glewExperimental = GL_TRUE; //Force GLEW to use a modern OpenGL
	glewInit();	// Use GLEW

	while (!glfwWindowShouldClose(window)) //Eventloop for window
	{
		glfwSwapBuffers(window);
		glfwPollEvents();

		if (glfwGetKey(window, GLFW_KEY_ESCAPE) == GLFW_PRESS) //If fullscreen is used
			glfwSetWindowShouldClose(window, GL_TRUE);
		// Hello everybody, this is a Git test comment
		// Is it working?!?!
		
	}
	glfwTerminate(); //Terminate the GLFW process
	return 0;
}