import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getLatestTableauVersion } from './tableau-api';
import loadTableauApi from './tableau-api';
import { setTableauApi } from '@eeacms/volto-tableau/actions';
import cx from 'classnames';

const Tableau = (props) => {
  const ref = React.useRef(null);
  const [viz, setViz] = React.useState(null);
  const { data = {}, version = getLatestTableauVersion() } = props;
  const { url = null } = data;
  const tableau = props.tableau[version];

  const initTableau = () => {
    if (viz) {
      viz.dispose();
    }
    return setViz(
      new tableau.Viz(ref.current, url, {
        hideTabs: false,
        hideToolbar: false,
      }),
    );
  };

  React.useEffect(() => {
    // Load new tableau api
    if (__CLIENT__ && !props.tableau[version]) {
      loadTableauApi(version, !!Object.keys(props.tableau).length)
        .then((response) => {
          props.setTableauApi(version, response);
        })
        .catch((errors) => {});
    }
    /* eslint-disable-next-line */
  }, [version]);

  React.useEffect(() => {
    if (__CLIENT__ && tableau && url) {
      initTableau();
    } else if (viz) {
      viz.dispose();
    }
    /* eslint-disable-next-line */
  }, [tableau, url]);

  return <div className={cx('tableau', version)} ref={ref} />;
};

export default compose(
  connect(
    (state, props) => ({
      tableau: state.tableau,
    }),
    { setTableauApi },
  ),
)(Tableau);
