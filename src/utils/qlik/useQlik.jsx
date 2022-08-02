import React, { useState, useCallback, useEffect, useMemo } from 'react';
import QlikConnector from './qlikConnector';
import qlikConfig from './qlikConfig';
import nebulaConfig from './nebulaConfig';

// Custom hook used to retrieve the qGlobal and qDoc objects associated with an enigma session created based on the provided appId, as well as return the nebula embed instance associated with the relevant qDoc
const useQlik = (appId) => {
  const [global, setGlobal] = useState(undefined);
  const [doc, setDoc] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const [nebula, setNebula] = useState(null);

  const getQlik = useCallback(async () => {
    let qGlobal;
    let qDoc;

    setLoading(true);

    try {
      const res = await QlikConnector(qlikConfig(appId)); // Creates an enigma session based on the provided appId and returns the qGlobal and qDoc objects associated with that session
      qGlobal = res.qGlobal;
      qDoc = res.qDoc;
    } catch (e) {
      setError(e);
    }
    setGlobal(qGlobal);
    setDoc(qDoc);
    setLoading(false);
  }, [setDoc, setError, setGlobal, setLoading, appId]);

  const getNebula = useCallback(async () => {
    const nebula = nebulaConfig(doc); // Creates a nebula embed instance associated with the specified qDoc (utilising the configuration details provided in nebulaConfig.js)
    setNebula(nebula);
  }, [doc]);

  useEffect(() => {
    if ((global === undefined /* || doc === undefined */) && !loading) {
      getQlik();
    }
  }, [global, /* doc, */ getQlik, loading]);

  useEffect(() => {
    if (doc && !nebula) {
      getNebula();
    }
  }, [doc, nebula, getNebula]);

  const value = useMemo(
    () => ({
      global: global,
      doc: doc,
      error: error,
      loading: loading,
      nebula: nebula,
    }),
    [global, doc, error, loading, nebula]
  );

  return value;
};

export default useQlik;
