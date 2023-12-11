import React from 'react';
import { FormFieldWrapper } from '@plone/volto/components';
import { List } from 'semantic-ui-react';

const TableauQueryWidget = (props) => {
  const { value } = props;

  return (
    <div>
      <FormFieldWrapper {...props}>
        <List>
          {value && value.length > 0 ? (
            value.map((param, index) => (
              <List.Item key={index}>
                <p>
                  {param.i}:{' '}
                  <span>
                    {param.v.map((p, i) => (
                      <>
                        {p} {i < param.v.length - 1 ? ', ' : ''}
                      </>
                    ))}
                  </span>
                </p>
              </List.Item>
            ))
          ) : (
            <p>No parameters set.</p>
          )}
        </List>
      </FormFieldWrapper>
    </div>
  );
};

export default TableauQueryWidget;
