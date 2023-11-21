import React from 'react';
import BlockDataForm from '@plone/volto/components/manage/Form/BlockDataForm';
import { SidebarPortal } from '@plone/volto/components';
import getSchema from './schema';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Message } from 'semantic-ui-react';
import { PrivacyProtection } from '@eeacms/volto-embed';
import Tableau from '@eeacms/volto-tableau/Tableau/Tableau';
const Edit = (props) => {
  const data = props.data;
  const {
    with_notes = true,
    with_sources = true,
    with_more_info = true,
    with_download = true,
    with_share = true,
    with_enlarge = true,
    tableau_height = 700,
  } = data;
  const schema = React.useMemo(() => getSchema(props), [props]);
  const { tableau_visualization } = props.tableau_content || {};
  const { figure_note = [], data_provenance = {} } =
    tableau_visualization || {};
  const tableau_vis_url = flattenToAppURL(data.tableau_vis_url || '');
  React.useEffect(() => {
    if (tableau_vis_url !== flattenToAppURL(props.tableau_content?.['@id'])) {
      props.getContent(tableau_vis_url, null, props.id);
    }
  }, [props, tableau_vis_url]);

  return (
    <React.Fragment>
      {!tableau_vis_url ? (
        <Message>
          Please select a tableau visualization from block editor.
        </Message>
      ) : (
        <div className="embed-tableau">
          <PrivacyProtection
            {...props}
            data={{ ...data, url: props.tableau_content?.url }}
          >
            <Tableau
              data={{
                ...tableau_visualization,
                with_notes,
                with_sources,
                with_more_info,
                with_download,
                with_share,
                with_enlarge,
                tableau_height,
                tableau_vis_url,
              }}
              figure_note={figure_note}
              sources={data_provenance?.data || []}
            />
          </PrivacyProtection>
        </div>
      )}

      <SidebarPortal selected={props.selected}>
        <BlockDataForm
          block={props.block}
          schema={schema}
          title={schema.title}
          onChangeField={(id, value) => {
            props.onChangeBlock(props.block, {
              ...props.data,
              [id]: value,
            });
          }}
          formData={props.data}
        />
      </SidebarPortal>
    </React.Fragment>
  );
};

export default compose(
  connect(
    (state, props) => ({
      tableau_content: state.content.subrequests?.[props.id]?.data,
    }),
    {
      getContent,
    },
  ),
)(React.memo(Edit));
