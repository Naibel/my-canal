## My Canal

Dans le cadre d'un entretien technique visant à rejoindre Canal+, j'ai été amené à réaliser ce site qui permet à la fois de consulter les séries et les films du moment, selon la base de données TheMovieDB, ainsi qu'à chercher n'importe quelle série ou film référencée dans cette base de données grâce au moteur de recherche présent sur la barre de navigation.

## Choix techniques

## NextJS

J'ai souhaité mettre en place un projet se basant sur le couple React/[Next.js](https://nextjs.org/), bootstrapé avec [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), car il me permet de gérer plus facilement le SSR, d'implémenter facilement des fonts customs (comme notre chère Futura), et surtout me permet de déployer ce projet très facilement sur la plateforme [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

[Lien du site sur Vercel](https://my-canal.vercel.app/)

### Du React Query pour la Single Source Of Truth

Pas besoin dans un projet comme celui-ci de se compliquer la vie en intégrant Redux, des reducers, ou même un gestionnaire de stores léger comme Zustand (aussi excellent puisse t-il être), les hooks proposés par React Query sont amplement suffisants pour fetcher et stocker toutes les données que l'on souhaite au niveau de la homepage et des résultats de recherche, tandis qu'un simple state local suffit pour stocker toutes les données liées à la fenêtre modale apparaissant au clic d'une Card.

### Du Tailwind... et c'est tout !

Quant à la partie graphique, je n'ai utilisé que Tailwind CSS, que l'équipe en charge de l'appli Canal utilise déjà il me semble (n'hésitez pas à me le confirmer !)
J'ai aussi utilisé de temps en temps quelques fichiers CSS modules destinés à contourner le comportement parfois récalcitrant de Tailwind, avec notamment des classes CSS qui n'étaient pas reconnus au niveau du navigateur.

J'avoue, je le confesse, pour m'éviter le syndrome de la page blanche, j'ai souhaité trouvé quelques sources d'inspirations, notamment sur ce que réalise déjà Canal sur leur propre plateforme vidéo.

Si j'ai voulu garder quelques idées qui me semblaient très pertinentes, j'ai tout de même souhaité m'en écarter pour ne pas donner l'impression d'un projet plagié. J'ai aussi voulu utiliser autant que possible les diverses déclinaisons de la célèbre police Futura (Etienne Robial ftw!), afin d'habiller mon projet et de lui donner un air distinctement "Canal +".

Il est important de préciser qu'aucune librairie graphique autre que les classes CSS Tailwind (qui ne sont que des classes) n'ont été utilisés. C'est du fait main de bout en bout !

### Un composant = un fichier !

Je n'aime pas voir dans les projets sur lesquels j'ai travaillé, des sous-composants se balader à l'intérieur de fichier de plus gros composants. Certes, ils ne sont utilisées qu'une fois au sein de ce même gros composant, mais à la fin le fichier ne lui-même devient énorme, confus, et on doit scroller pour retrouver le composant parent derrière une pile de composant enfants.

Quand je souhaite modifier un composant, je souhaite immédiatement le retrouver en faisant _Command + P_ sur mon IDE. Par conséquent chaque composant, même le plus petit, dispose de son propre fichier. S'il n'est utilisé que par un seul composant parent, et n'a pas vocation à être réutilisé ailleurs, il se retrouve au sein du dossier comprenant le composant , tout simplement. Ce n'est pas la pratique la plus employée, mais c'est la mienne (;-p), car c'est celle où je m'y retrouve le plus facilement.

### Allez, quelques tests unitaires en plus !

Parce que c'est un projet qui fait appel à pas mal de traitement de données en amont de son afifchage dans le DOM, j'ai souhaité tester les fonctions présentes dans le fichier "format.ts" avec des tests unitaires, en utilisant Jest et des mocks de résultats d'API.

Si le temps me le permet, j'écrirai des tests pour les fonctions de fetching, ainsi que des tests d'intégrations pour les différents composants crées. Mais là, il me faudrait un peu plus de temps pour ça :-p

## Lancer le projet

Pour lancer le serveur de developpement, c'est très simple

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Et vous ouvrez [http://localhost:3000](http://localhost:3000) sur votre navigateur pour voir le résultat.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## TODO

- Plus d'infos affichées sur chaque fiche (casting, réalisateur)

- Un moteur de recherche plus élaboré avec plus de critères de recherches (pays, année, acteurs présents, genre, etc.)

- Un système d'authentification afin de noter les films ou les séries, de sélectionner des films ou des séries en favoris, ou encore d'ajouter soi-même ses propres entrées.

- Plus de tests unitaires et d'intégration !
