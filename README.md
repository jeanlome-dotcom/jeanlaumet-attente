# Jean Laumet · Page d’attente

Une page autonome, basée sur le logo, la typographie et le contenu du projet `../jeanlaumet`.

## Prévisualiser

`npm ci` puis `npm run dev`. Adresse : http://127.0.0.1:4342/jeanlaumet-attente/.

`npm run build` génère le site statique dans `dist/`.

Le contenu sélectionné est un instantané du Sanity publié au 4 octobre 2026 dans `src/data/contenu.json`. Les trois photos passent par `Photo.astro` et le générateur d’adresses du projet d’origine, avec leurs variantes adaptées à l’écran.

La balise Google fournie est intégrée. L’indexation reste fermée conformément à la décision du projet source. Pour une ouverture publique aux moteurs, retirer la balise `robots` de `src/pages/index.astro` et remplacer `Disallow: /` par `Allow: /` dans `public/robots.txt`.

## GitHub Pages

Dépôt prévu : `jeanlome-dotcom/jeanlaumet-attente`. Le workflow `.github/workflows/pages.yml` construit et publie le site à chaque push sur `main`.

URL par défaut : https://jeanlome-dotcom.github.io/jeanlaumet-attente/.

Les chemins du logo et de la fonte utilisent le préfixe du site. Le workflow récupère automatiquement `SITE_URL` et `BASE_PATH` depuis GitHub Pages, y compris si un domaine personnalisé est ajouté ensuite.

Le projet final n’est pas modifié.
