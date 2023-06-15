import React from 'react';
import isObject from 'lodash/isObject';
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import isBoolean from 'lodash/isBoolean';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';

const JsonCodeSnippet = ({ obj, depth = 1 }) => {
  const keys = Object.keys(obj);
  return (
    <>
      <span className="left-curly-brace">&#123;</span>
      {!!keys.length && <br />}
      {keys.map((key) => {
        const value = obj[key];

        return (
          <React.Fragment key={`${key}-depth`}>
            <span className="key" style={{ marginLeft: `${depth}rem` }}>
              "{key}":
            </span>
            <span className="value">
              &nbsp;
              {isObject(value) && !isArray(value) && (
                <JsonCodeSnippet obj={value} depth={depth + 1} />
              )}
              {isArray(value) && JSON.stringify(value)}
              {isString(value) && <>"{value}"</>}
              {isBoolean(value) && <>{value}</>}
              {isNull(value) && <>null</>}
              {isUndefined(value) && <>undefined</>}
            </span>
            <br />
          </React.Fragment>
        );
      })}
      <span
        className="right-curly-brace"
        style={{ marginLeft: !!keys.length ? `${depth - 1}rem` : 0 }}
      >
        &#125;
      </span>
    </>
  );
};

export default JsonCodeSnippet;
