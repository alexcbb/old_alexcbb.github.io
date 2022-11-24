Latent space
============

Problem setup
-------------

Let's consider a robot. This robot can evolve into several environments, but for our example let's say it evolves into a kitchen.
With its different sensors, it has acess to multiple informations of the same scene : for example RGB image, depth information, etc.

But how to use efficiently those informations to have a good understanding of the scene ? (in order to perform a task after)

A first answer would be that we could use some kind of learnt "representation" of what the robot sees, that we can call a **latent space**.


What is a latent space ?
------------------------

In fact, a latent space is a low-dimensional continuous representation of a high-dimensional space.

A good latent space should have the following properties :

- Keep only the important informations of the scene...
- ... without deleting important informations
- Reduce the dimension of the original space
- Not be redundant

What informations are important ?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Actually, it depends on the task we want to accomplish but also on the environment.

Reduce the dimension of the original space 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
