import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the tst-widget-extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'tst-widget-extension:plugin',
  description: 'A JupyterLab extension.',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension tst-widget-extension is activated!');
  }
};

export default plugin;
