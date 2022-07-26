import React, { useState, useCallback, useEffect, useMemo } from 'react';
import QlikConnector from './qlikConnector';
import qlikConfig from './qlikConfig';
import nebulaConfig from './nebulaConfig';

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
      const res = await QlikConnector(qlikConfig(appId));
      qGlobal = res.qGlobal;
      qDoc = res.qDoc;
    } catch (e) {
      setError(e);
    }
    setGlobal(qGlobal);
    setDoc(qDoc);
    setLoading(false);
  }, [setDoc, setError, setGlobal, setLoading]);

  const getNebula = useCallback(async () => {
    const nebula = nebulaConfig(doc);
    setNebula(nebula);
  }, [doc]);

  useEffect(() => {
    if ((global === undefined || doc === undefined) && !loading) {
      getQlik();
    }
  }, [global, doc, getQlik, loading]);

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
