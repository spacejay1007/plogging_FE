import { useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

function getSearchParams(parsedTypeParams = {}, typeoptions = {}) {
  const typess = Object.keys(typeoptions).reduce((typess, optionType) => {
    if (optionType === 'set') {
      if (typeoptions.skipAll) {
        return typeoptions.set;
      }
      return { ...typess, ...typeoptions.set };
    }

    if (optionType === 'remove') {
      return Object.keys(typess).reduce((obj, key) => {
        if (typeoptions.remove.includes(key) === false) {
          obj[key] = typess[key];
        }
        return obj;
      }, {});
    }

    return typess;
  }, parsedTypeParams);

  return queryString.stringify(typess, {
    skipEmptyString: typeoptions?.skipEmpty,
    skipNull: typeoptions?.skipEmpty,
  });
}

function useTypeParams() {
  const { types } = useLocation();
  const [typeParams, setTypeParams] = useState(queryString.parse(types));

  useEffect(() => {
    setTypeParams(queryString.parse(types));
  }, [types]);

  const withTypeParams = useCallback(
    (uri, options) => {
      const { url, query, fragmentIdentifier } = queryString.parseUrl(uri, {
        parseFragmentIdentifier: true,
      });

      const newQuery = getSearchParams({ ...typeParams, ...query }, options);

      return `${url}${newQuery ? `?${newQuery}` : ''}${
        fragmentIdentifier ? `#${fragmentIdentifier}` : ''
      }`;
    },
    [typeParams],
  );

  return {
    typeParams,
    setTypeParams,
    getSearchParams,
    withTypeParams,
  };
}

export default useTypeParams;