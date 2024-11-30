import { useEffect, useState } from 'react';
import { usePipefyApp } from '../hooks/usePipefyApp';
import { useResize } from '../hooks/useResize';

export function CardTab() {
  /**
   * You'll always need to call the following functions in order for your app to work properly.
   */
  const { pipefyApp, pipefyAppInstance } = usePipefyApp();
  useResize(pipefyApp);

  const [cardId, setCardId] = useState('loading...');
  const [cardTitle, setCardTitle] = useState('loading...');
  const [userData, setUserData] = useState();

  useEffect(() => {
    const getCardData = async () => {
      /**
       * Here we're using Pipefy Client function to get the current card data
       * See https://developers.pipefy.com/docs/get-pipefy-data for more details and other functions
       */
      const cardData = await pipefyAppInstance.card();
      setCardId(cardData.id);
      setCardTitle(cardData.title);

      /**
       * Here we're using the Functions API syntax to make requests directly to Pipefy's GraphQL
       * See https://developers.pipefy.com/docs/make-api-calls for more details and other functions
       */
      const meDataResponse = await pipefyAppInstance.query('{ me { name, avatarUrl } }');
      setUserData(meDataResponse.data.me);
    };

    if (pipefyApp && pipefyAppInstance) {
      /**
       * You'll always need to call `pipefyApp.render` to use the client functions
       */
      pipefyApp.render(() => {
        getCardData();
      });
    }
  }, [pipefyAppInstance, pipefyApp, cardId]);

  return (
    <>
      <iframe
        src="https://portal-galapagoscapital-dev.sydle.com/listagem-de-arquivos-com-busca"
        width="100%"
        height="600px"
        style={{ border: 'none', marginTop: '0px' }}
        title="Embedded Site"
      ></iframe>
      <br></br><br></br>
      <ul>
        <li>
          This card ID: <strong>{cardId}</strong>
        </li>
        <li>
          This card Title: <strong>{cardTitle}</strong>
        </li>
      </ul>
      <p>Current logged in user data:</p>
      {userData && (
        <>
          <p>
            The current logged in user is:
            <img width="20px" height="20px" src={userData.avatarUrl} alt={`${userData.name} avatar`} />
            <strong>{userData.name}</strong>
          </p>
        </>
      )}
    </>
  );
}
