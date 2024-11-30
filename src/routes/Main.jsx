/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { usePipefyApp } from '../hooks/usePipefyApp';

export function Main() {
  const { pipefyApp } = usePipefyApp();

  useEffect(() => {
    if (pipefyApp) {
      pipefyApp.initCall({
        /**
         * This object defines all of the features your app will create inside Pipefy.
         * Check the documentation for more details on which features are available:
         * https://developers.pipefy.com/docs/features
         */
        'card-tab': function () {
          return {
            title: 'G-GED',
            icon: 'https://raul-lemelle.github.io/test_app_iframe_pipefy/public/logo_glp.ico',
            url: 'card-tab', //this is the route alias you created inside the src/index.jsx file
            buttons: [],
          };
        },
        'pipe-buttons': function () {
          return [
            {
              text: 'PIPE_BTN', //This is the title of the button that will appear in the header
              callback: function (p) {
                /**
                 * This method opens a sidebar in the Pipe, and renders the contents
                 * of the route `sidebar`, defined inside the src/index.js file.
                 */
                p.sidebar({
                  title: 'Hello Sidebar',
                  url: 'sidebar', //this is the route alias you created inside the src/index.jsx file
                });
              },
            },
          ];
        },
        'pipe-view': function () {
          return {
            icon: 'https://raul-lemelle.github.io/test_app_iframe_pipefy/public/logo_glp.ico',
            text: 'G-GED',
            url: 'pipe-view',
          };
        },
        'card-buttons': function () {
          return [
            {
              icon: 'https://raul-lemelle.github.io/test_app_iframe_pipefy/public/logo_glp.ico',
              text: 'BTN_DROP',
              callback: (p) => {
                /**
                 * Opens a dropdown when the button is clicked.
                 */
                p.dropdown({
                  title: 'BTN_DROP',
                  items: [
                    /**
                     * The list of items that will be shown when the button is clicked
                     */
                    {
                      title: 'Option 1 - Modal',
                      callback: function () {
                        p.modal({
                          url: './card-button-modal', //this is the route alias you created inside the src/index.jsx file
                          height: '70%',
                          width: '70%',
                        });
                      },
                    },
                    {
                      title: 'Option 2 - Sidebar',
                      callback: function () {
                        p.sidebar({
                          title: 'Sidebar opened from a card button',
                          url: './card-button-sidebar', //this is the route alias you created inside the src/index.jsx file
                        });
                        /**
                         * We need to close the modal so we can see the sidebar that has just opened.
                         */
                        p.closeCard();
                      },
                    },
                  ],
                });
              },
            },
          ];
        },
      });
    }
  }, [pipefyApp]);

  return <div />;
}
