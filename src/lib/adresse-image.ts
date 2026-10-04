// L'adresse d'une photo à une largeur donnée. Une photo est désignée par sa
// `base` : l'adresse de l'image dans le CDN de Sanity (contenu par défaut, voir
// source.ts), ou le chemin d'un dérivé local sans largeur ni extension
// (CONTENU=local, dérivés de `npm run images`). Tout ce qui fabrique une adresse
// d'image passe par ici : Photo, les galeries, l'aperçu de partage, le carnet.
// Le carnet s'en sert aussi dans le navigateur : ce module n'importe rien.
//
// Le CDN de Sanity ne sert pas d'AVIF (jpg, png, webp, gif seulement) : ses
// photos partent en WebP, jamais agrandies au-delà de l'original (fit=max).
// La qualité monte avec la taille (FH, 27/09 : « garder un max de qualité
// pour les grands formats ») : 77 pour les vignettes (480, 960), 85 au-delà.
// Depuis que les photos du shoot sont dans Sanity à 3600 px de large (27/09),
// chaque taille part d'une source plus fine et pèse un peu plus. Poids
// mesurés sur une vue de chevron, la plus chargée : 960 → 210 Ko ; 1440 →
// 650 Ko ; 2160 → 1,2 Mo ; 2880 → 1,7 Mo ; 3600 → 2,3 Mo (3,1 Mo à 90).

export const CDN = 'https://cdn.sanity.io/images/';

/** Les largeurs servies pour une vue de pièce ; une image d'archive s'arrête à 1440. */
export const LARGEURS = [480, 960, 1440, 2160];
export const LARGEURS_ARCHIVE = [480, 960, 1440];
/**
 * En plus, pour la seule galerie plein écran de la fiche, qui montre la photo
 * sur toute la largeur de l'écran (FH, 27/09) : 2880 pour un écran Retina de
 * 1440 px, 3600 au-delà. Jamais dans le srcset des pages. Les photos du shoot
 * sont dans Sanity à 3600 px de large depuis le 27/09.
 */
export const LARGEURS_GRANDES = [2880, 3600];

const qualite = (largeur: number) => (largeur >= 1440 ? 85 : 77);

export type Format = 'avif' | 'webp' | 'jpg';

export const surSanity = (base: string) => base.startsWith(CDN);

/** L'AVIF n'existe que pour les dérivés locaux. */
export const avecAvif = (base: string) => !surSanity(base);

/**
 * `jpg` sert aux usages hors navigateur (aperçu de partage, lien dans le mail du
 * carnet) ; les dérivés locaux n'en ont pas et répondent en WebP.
 */
export function adresseImage(base: string, largeur: number, format: Format = 'webp'): string {
  if (surSanity(base)) {
    return `${base}${base.includes('?') ? '&' : '?'}w=${largeur}&fm=${format}&q=${qualite(largeur)}&fit=max`;
  }
  return `${base}-${largeur}.${format === 'jpg' ? 'webp' : format}`;
}

export function jeu(base: string, largeurs: number[], format: Format): string {
  return largeurs.map((w) => `${adresseImage(base, w, format)} ${w}w`).join(', ');
}

/** La plus grande version d'une photo, pour l'agrandissement. */
export function plusGrande(image: { base: string; largeurs?: number[] }): string {
  return adresseImage(image.base, Math.max(...(image.largeurs ?? LARGEURS)));
}
