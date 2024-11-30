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
      <iframe
        src="https://portal-galapagoscapital-dev.sydle.com/listagem-de-arquivos-com-busca"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          border: 'none',
          margin: 0,
          zIndex: 1000 // para garantir que o iframe esteja acima de outros elementos
        }}
        title="Embedded Site"
      />
    </div>
  );
}
