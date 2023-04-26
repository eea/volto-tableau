import installTableauBlock from './TableauBlock';
import installEEATableauBlock from './EmbedEEATableauBlock';

export default (config) => {
  return [installTableauBlock, installEEATableauBlock].reduce(
    (acc, apply) => apply(acc),
    config,
  );
};
