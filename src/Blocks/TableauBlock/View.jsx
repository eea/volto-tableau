import React from 'react';
import { connect } from 'react-redux';
import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';
import qs from 'query-string';
import config from '@plone/volto/registry';
import '@eeacms/volto-tableau/less/tableau.less';

const View = React.forwardRef((props, ref) => {
  const viz = React.useRef();
  const [vizState, setVizState] = React.useState({
    loaded: false,
    loading: false,
    error: null,
  });
  const [extraFilters, setExtraFilters] = React.useState({});
  const { block, data = {}, query = {}, onChangeBlock, mode } = props;
  const {
    urlParameters = [],
    staticParameters = [],
    title = null,
    description = null,
    with_sources = true,
    with_download = true,
    with_share = true,
    with_enlarge = true,
    sources,
  } = data;

  const extraOptions = React.useMemo(() => {
    const options = {};
    staticParameters.forEach((parameter) => {
      if (parameter.field && parameter.value) {
        options[parameter.field] = parameter.value;
      }
    });
    return options;
  }, [staticParameters]);

  React.useEffect(() => {
    const newFilters = { ...extraFilters };
    urlParameters.forEach((element) => {
      if (element.field && typeof query[element.urlParam] !== 'undefined') {
        newFilters[element.field] = query[element.urlParam];
      } else if (newFilters[element.field]) {
        delete newFilters[element.field];
      }
    });
    setExtraFilters(newFilters);
    /* eslint-disable-next-line */
  }, [JSON.stringify(query), JSON.stringify(urlParameters)]);

  React.useImperativeHandle(ref, () => {
    return viz.current;
  });

  React.useEffect(() => {
    if (props.setVizState) {
      props.setVizState(vizState);
    }
    /* eslint-disable-next-line */
  }, [vizState]);

  return (
    <div className="tableau-block">
      {vizState.loaded && title ? (
        <h3 className="tableau-title">{title}</h3>
      ) : (
        ''
      )}
      {vizState.loaded && description ? (
        <p className="tableau-description">{description}</p>
      ) : (
        ''
      )}
      <Tableau
        ref={viz}
        mode={mode}
        block={block}
        data={{
          ...data,
          with_sources,
          with_download,
          with_share,
          with_enlarge,
        }}
        sources={sources}
        extraFilters={extraFilters}
        extraOptions={extraOptions}
        breakpoints={config.blocks.blocksConfig.tableau_block.breakpoints}
        setVizState={setVizState}
        onChangeBlock={onChangeBlock}
      />
    </div>
  );
});

export default connect(
  (state) => ({
    query: {
      ...(qs.parse(state.router.location?.search?.replace('?', '')) || {}),
      ...(state.discodata_query?.search || {}),
    },
    screen: state.screen,
  }),
  null,
  null,
  { forwardRef: true },
)(View);
