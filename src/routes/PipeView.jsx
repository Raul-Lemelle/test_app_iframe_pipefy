import { useEffect } from 'react';
import { usePipefyApp } from '../hooks/usePipefyApp';

import '../styles/pipe-view.css';

export function PipeView() {
  const { pipefyApp, pipefyAppInstance } = usePipefyApp();

  useEffect(() => {
    if (pipefyApp && pipefyAppInstance) {
      /**
       * Pipefy's main application requires that Pipe Views call this method when the page load is complete
       * before rendering the tab where your application will be shown.
       * Without this, you'll be redirected to the Kanban main view.
       */
      pipefyApp.render(() => {});
    }
  }, [pipefyApp, pipefyAppInstance]);

  return (
    <div className="pipe-view-content">
      <h1>TEST_IFRAME_ON_PIPE</h1>
      <iframe src="https://portal-galapagoscapital-dev.sydle.com/listagem-de-arquivos-com-busca" />
    </div>
  );
}
