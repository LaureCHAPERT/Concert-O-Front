# projet-06-concert-o-front

## installation du React Model

Première utilisation
--------------------

Récupérez une copie du modèle :

```sh
git clone git@github.com:O-clock-Zeus/React-modele.git

cd React-modele

# installe les dépendances du projet
yarn 

# lance le serveur de developpement
yarn start 

# rdv sur http://localhost:8080/
```

Voilà, le modèle tourne, mais en fait ça ne sert pas à grand chose. L'idée est de se _baser sur_ le modèle, mais de le faire tourner dans un autre projet.

---

Comment démarrer un projet avec ce modèle ?
-------------------------------------------

On peut se baser sur React-modele pour démarrer un *nouveau* projet, ou bien pour travailler sur un challenge avec une base de code déjà existante.

Dans les deux cas, il s'agit essentiellement de copier/coller les parties intéressantes du modèle dans le dossier du projet/challenge, sans écraser d'éventuels fichiers spécifiques. 

Pour ce faire :

``` sh
# Exemple : après avoir cloné un challenge dans le dossier mon-challenge/

# direction le dossier du challenge
cd mon-challenge

# copie des fichiers cachés et non-cachés présents à la racine du modèle
# note : des alertes sont affichées à propos de dossiers ignorés, c'est normal
cp -n ../React-modele/{.*,*} .

# copie (récursive) des dossiers src/, config/ et public/
# note : des alertes sont affichées à propos de dossiers ignorés, c'est normal
cp -rn ../React-modele/{src,config,public} .

# installation des dépendances listées dans le package.json
yarn

# lancement du serveur de dev
yarn start
```

---

## Installation des dépendances

```sh
yarn add devtool

yarn add react

yarn add react-redux

yarn add react-router-dom

yarn add axios

yarn add react-bootstrap bootstrap@5.1.3

yarn add react-router-bootstrap
```

## Scripts

### Avec yarn

yarn {script}

- `start`: Lance le serveur de développement.
- `build`: Lance la construction de la version de production.
- `lint`: Affiche les erreurs dans le code.
- `lint:fix`: Tente de corriger certaines des erreurs dans le code.
- `clean`: Supprime le dossier `dist/`.
- `clean:all`: Supprime `dist/`, `node_modules/` et les fichiers `lock`.


cf INSTALL.md pour plus de documentation sur le react model.
