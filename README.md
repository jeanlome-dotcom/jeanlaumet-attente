# Jean Laumet · Page d’attente

Une page autonome, basée sur le logo, la typographie et le contenu du projet `../jeanlaumet`.

## Prévisualiser

`npm ci` puis `npm run dev`. Adresse : http://127.0.0.1:4342/jeanlaumet-attente/.

`npm run build` génère le site statique dans `dist/`.

Le contenu sélectionné est un instantané du Sanity publié au 4 octobre 2026 dans `src/data/contenu.json`. Les trois photos passent par `Photo.astro` et le générateur d’adresses du projet d’origine, avec leurs variantes adaptées à l’écran.

La balise Google fournie est intégrée. L’indexation est autorisée : aucune balise `noindex` et un fichier `robots.txt` ouvert à tous les robots, y compris les robots IA. Cette ouverture concerne uniquement la page d’attente et ne garantit pas le maintien du référencement des anciennes pages.

## GitHub Pages

Dépôt prévu : `jeanlome-dotcom/jeanlaumet-attente`. Le workflow `.github/workflows/pages.yml` construit et publie le site à chaque push sur `main`.

URL par défaut : https://jeanlome-dotcom.github.io/jeanlaumet-attente/.

Les chemins du logo et de la fonte utilisent le préfixe du site. Le workflow récupère automatiquement `SITE_URL` et `BASE_PATH` depuis GitHub Pages, y compris si un domaine personnalisé est ajouté ensuite.

Le projet final n’est pas modifié.
