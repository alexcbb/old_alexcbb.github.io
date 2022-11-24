Search.setIndex({"docnames": ["articles/T1/disentangled", "articles/T2/action_space", "articles/T3/dynamic", "articles/T4/transfer", "articles/latent_space", "articles/reinforcement_learning", "articles/transformers", "index"], "filenames": ["articles/T1/disentangled.rst", "articles/T2/action_space.rst", "articles/T3/dynamic.rst", "articles/T4/transfer.rst", "articles/latent_space.rst", "articles/reinforcement_learning.rst", "articles/transformers.rst", "index.rst"], "titles": ["Learning a latent representation", "Latent action space", "Dynamic-aware embeddings", "Transfer learning", "Latent space", "Intro to RL", "Transformers", "Research"], "terms": {"let": 4, "consid": 4, "robot": [4, 7], "this": 4, "can": 4, "evolv": 4, "into": 4, "several": 4, "environment": [4, 7], "but": 4, "for": [4, 7], "our": 4, "exampl": 4, "say": 4, "it": [4, 7], "kitchen": 4, "with": 4, "different": [4, 7], "sensor": 4, "has": 4, "acess": 4, "to": [4, 7], "multipl": 4, "sam": 4, "scen": 4, "rgb": 4, "imag": 4, "depth": 4, "etc": 4, "how": 4, "use": 4, "efficiently": 4, "thos": 4, "hav": 4, "good": 4, "understanding": 4, "in": [4, 7], "order": 4, "perform": 4, "task": [4, 7], "after": 4, "first": 4, "answer": 4, "would": 4, "be": [4, 7], "that": [4, 7], "we": 4, "could": [4, 7], "som": 4, "kind": 4, "learnt": 4, "represent": 4, "sees": 4, "call": 4, "fact": 4, "low": 4, "dimensional": 4, "continuous": 4, "high": 4, "should": 4, "following": [4, 7], "propert": 4, "keep": 4, "only": 4, "without": 4, "deleting": 4, "not": 4, "redund": 4, "actually": 4, "depend": 4, "want": 4, "accomplish": [4, 7], "also": [4, 7], "bibliograph": 6, "and": [6, 7], "external": 6, "link": 6, "test": 6, "hi": 7, "my": 7, "nam": 7, "is": 7, "alexandr": 7, "i": 7, "a": 7, "phd": 7, "student": 7, "at": 7, "ecol": 7, "central": 7, "lyon": 7, "supervised": 7, "by": 7, "liming": 7, "chen": 7, "emmanuel": 7, "dellandr": 7, "graduated": 7, "from": 7, "insa": 7, "ren": 7, "2022": 7, "comput": 7, "engine": 7, "get": 7, "mast": 7, "degre": 7, "scienc": 7, "univers": 7, "today": 7, "are": 7, "mainly": 7, "limited": 7, "specific": 7, "already": 7, "known": 7, "goal": 7, "develop": 7, "an": 7, "artificial": 7, "intelligent": 7, "perm": 7, "easily": 7, "generaliz": 7, "across": 7, "do": 7, "so": 7, "currently": 7, "studying": 7, "leverag": 7, "theoritical": 7, "advantag": 7, "robotic": 7, "dat": 7, "efficiency": 7, "transferability": 7, "or": 7, "interpretability": 7, "thes": 7, "will": 7, "splitted": 7, "the": 7, "component": 7, "t1": 7, "of": 7, "observed": 7, "t2": 7, "t3": 7, "t4": 7, "intro": 7, "rl": 7, "transformer": 7, "world": 7, "model": 7}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"learning": [0, 3, 7], "a": [0, 4], "latent": [0, 1, 4, 7], "represent": [0, 7], "what": [0, 4, 6], "is": [0, 4], "disentangl": 0, "world": 0, "model": [0, 5], "action": [1, 7], "spac": [1, 4, 7], "dynamic": [2, 7], "awar": [2, 7], "embedding": [2, 7], "transf": [3, 7], "problem": [4, 5], "setup": 4, "inform": 4, "are": [4, 6], "import": 4, "reduc": 4, "the": [4, 5], "dimens": 4, "of": 4, "original": 4, "intro": 5, "to": 5, "rl": 5, "offlin": 5, "v": 5, "onlin": 5, "fre": 5, "based": 5, "transformer": 6, "breakthrough": 6, "research": 7, "concept": 7, "introduct": 7, "disentangled": 7}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"Learning a latent representation": [[0, "learning-a-latent-representation"]], "Representation learning": [[0, "representation-learning"]], "What is disentanglement ?": [[0, "what-is-disentanglement"]], "Learning a World Model": [[0, "learning-a-world-model"]], "Latent action space": [[1, "latent-action-space"]], "Dynamic-aware embeddings": [[2, "dynamic-aware-embeddings"]], "Transfer learning": [[3, "transfer-learning"]], "Latent space": [[4, "latent-space"]], "Problem setup": [[4, "problem-setup"]], "What is a latent space ?": [[4, "what-is-a-latent-space"]], "What informations are important ?": [[4, "what-informations-are-important"]], "Reduce the dimension of the original space": [[4, "reduce-the-dimension-of-the-original-space"]], "Intro to RL": [[5, "intro-to-rl"]], "The RL problem :": [[5, "the-rl-problem"]], "Offline-RL VS Online RL :": [[5, "offline-rl-vs-online-rl"]], "Model-free VS Model-based :": [[5, "model-free-vs-model-based"]], "Transformers": [[6, "transformers"]], "What are Transformers ?": [[6, "what-are-transformers"]], "Transformers breakthrough": [[6, "transformers-breakthrough"]], "Research": [[7, "research"]], "Concepts introduction :": [[7, null]], "Disentangled latent representation:": [[7, null]], "Latent action space:": [[7, null]], "Dynamic-aware embeddings:": [[7, null]], "Transfer learning:": [[7, null]]}, "indexentries": {}})