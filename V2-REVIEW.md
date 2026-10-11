# V2 à valider avant publication

La version de référence correspond au commit `0ad6ec0280e4deb9af292c0c890010173944a524`, conservé sur `codex/v1-reference-2026-10-11`. Cette branche sert de référence et ne doit pas être modifiée. Le commit identifié par son SHA et l'archive locale permettent de retrouver exactement cette version.

La proposition se trouve sur `codex/v2-preview`. Elle ne doit être fusionnée et publiée qu'après validation du propriétaire du site.

## Changements à examiner

- Accueil français et anglais : promesse plus précise, trois parcours selon le besoin, fondateur et méthode de travail.
- Prix : distinction entre Search à 299 $ CAD et Search avec suivi à 749 $ CAD, budget publicitaire distinct, gestion facultative.
- Tarifs : vue d'ensemble visible et premier groupe ouvert.
- Confiance : nouveau service indépendant présenté honnêtement, exemples explicitement identifiés comme démonstrations. Aucun témoignage, client, chiffre de résultat ou logo d'employeur ajouté.
- Navigation : état accessible des menus, fermeture au clavier, actions flottantes masquées lorsqu'inactives, liens de langue corrigés, lien pour accéder au contenu et réduction des animations.
- Contenu : précision sur les produits nautiques admissibles, annonce Search et notoriété; page 404 bilingue.
- Métadonnées : descriptions et x-default cohérents; pages de fondation et article encore en brouillon restent en noindex.

## Vérifications locales

Le rendu local utilise LiquidJS en mode d'inclusion Jekyll et les métadonnées YAML. Les 40 pages de V2 ont été compilées. Les liens internes, ancres, identifiants uniques et les 29 blocs JSON-LD ont été vérifiés sans erreur. Le menu mobile, les actions rapides avec Échap, l'absence de débordement mobile et le blocage des envois dans l'aperçu ont été contrôlés dans un navigateur.

Cet aperçu local n'est pas une compilation de production avec Jekyll. Les scripts Analytics, paiements et envois y sont désactivés; ces protections appartiennent à l'outil d'aperçu et ne modifient pas les intégrations du site source.

## Avant mise en ligne

1. Valider les textes, les tarifs, le périmètre des forfaits et les engagements de délai.
2. Confirmer le branchement de l'hébergement et la commande réelle de compilation; aucune fusion ou publication n'est autorisée par la préparation de cette proposition.
3. Tester la compilation réelle, la page 404, les redirections, les formulaires et paiements, ainsi que les balises et mesures Analytics sur un environnement de prévisualisation.
4. Après accord, fusionner les changements retenus, publier, puis contrôler le français, l'anglais et les principaux parcours.
5. Conserver le déploiement précédent et le SHA de référence pour pouvoir restaurer la version antérieure.
