.. Alexandre's Blog documentation master file, created by
   sphinx-quickstart on Fri Nov 18 16:28:44 2022.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

.. grid:: 2
   :gutter: 1
   
   .. grid-item::
      :columns: 8

      .. grid:: 1
         :gutter: 1

         .. grid-item-card::
            :shadow: none
            :class-card: sd-outline-transparent

               .. div:: sd-fs-4 sd-weight-bold

                  Hi, my name is Alexandre. 

         .. grid-item-card::
            :shadow: none
            :class-card: sd-outline-transparent

            I'm a PhD student at `Ecole Centrale Lyon <https://www.ec-lyon.fr/>`_ supervised by `Liming Chen <https://scholar.google.com/citations?user=VOPW5YYAAAAJ&hl=fr>`_ and `Emmanuel Dellandrea <https://scholar.google.com/citations?hl=fr&user=lK9Pa0MAAAAJ>`_. 
            I graduated from `Insa Rennes <https://www.insa-rennes.fr/>`_ in 2022 as a computer engineer and get a master degree in computer science research at `Université de Rennes <https://www.univ-rennes1.fr/>`_.


   .. grid-item::
      :columns: 4

      .. grid:: 1
         :gutter: 1

         .. grid-item-card::
            :shadow: none
            :class-card: sd-outline-transparent
            :img-background: ./images/me.png
   


Research
------------------------
Today, robots are mainly limited to accomplish *specific tasks* in already *known environments*. My goal is to develop an artificial intelligence that could permit to
easily generalize across tasks and environments. To do so, I'm currently studying **disentangled representation learning** to leverage its differents theoritical advantage
for robotics : data-efficiency, generalization, transferability or also interpretability.

My thesis will be splitted in the following components :

- **T1 - Disentangled latent representation of the observed environment**
- **T2 - Latent action space**
- **T3 - Dynamic-aware embeddings**
- **T4 - Transfer learning**


.. toctree::
   :hidden:
   :caption: My Thesis:

   self

.. toctree::
   :maxdepth: 1
   :caption: Concepts introduction :

   ./articles/reinforcement_learning.rst
   ./articles/latent_space.rst
   ./articles/transformers.rst

.. toctree::
   :maxdepth: 1
   :caption: Disentangled latent representation:

   ./articles/T1/disentangled.rst

.. toctree::
   :maxdepth: 1
   :caption: Latent action space:

   ./articles/T2/action_space.rst


.. toctree::
   :maxdepth: 1
   :caption: Dynamic-aware embeddings:

   ./articles/T3/dynamic.rst


.. toctree::
   :maxdepth: 1
   :caption: Transfer learning:

   ./articles/T4/transfer.rst








