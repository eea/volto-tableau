import React from 'react';
import { Popup, Tab, Button, Menu, Input } from 'semantic-ui-react';
import { Icon } from '@plone/volto/components';
import useCopyToClipboard from '../downloadHelpers/downloadHelpers';

import shareSVG from '@plone/volto/icons/share.svg';
import linkSVG from '@plone/volto/icons/link.svg';

import cx from 'classnames';

const TableauShare = (props) => {
  const tableau_url = props.data.url;

  const CopyUrlButton = ({ url, buttonText }) => {
    const [copyUrlStatus, copyUrl] = useCopyToClipboard(url);

    if (copyUrlStatus === 'copied') {
      buttonText = 'Copied!';
    } else if (copyUrlStatus === 'failed') {
      buttonText = 'Copy failed. Please try again.';
    }

    return (
      <Button
        primary
        onClick={copyUrl}
        className={cx('copy-button', {
          'green-button': copyUrlStatus === 'copied',
        })}
      >
        {buttonText}
      </Button>
    );
  };

  const panes = [
    {
      menuItem: (
        <Menu.Item key="location">
          <span className="nav-dot">
            <Icon name={linkSVG} size="24px" />
          </span>
          <span className="nav-dot-title">URL</span>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane>
          <Input defaultValue={tableau_url} />
          <CopyUrlButton url={tableau_url} buttonText="Copy sharing URL" />
        </Tab.Pane>
      ),
    },
  ];

  return (
    <Popup
      basic
      className="tableau-share-dialog"
      position="top center"
      on="click"
      trigger={
        <div className="toolbar-button-wrapper">
          <Button className="toolbar-button" title="Share">
            <Icon name={shareSVG} size="26px" />
          </Button>
          <span className="btn-text">Share</span>
        </div>
      }
    >
      <Popup.Header>Share Visualization</Popup.Header>
      <Popup.Content>
        <Tab
          menu={{ secondary: true, pointing: true, fluid: true }}
          panes={panes}
        />
      </Popup.Content>
    </Popup>
  );
};

export default TableauShare;
