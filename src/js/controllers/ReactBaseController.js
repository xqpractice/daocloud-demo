import path from 'path';
import ReactDOMServer from 'react-dom/server';
import SimpleTemplate from 'simple-string-template';
import { BaseController } from 'express-common-controller';

class ReactBaseController extends BaseController {
  constructor() { super(); }

  set title(title) { this._title = title; }
  get title() { return this._title; }

  renderPage(pageElement, pageName) {
    let data = {
      title: this.title,
      pageContent: ReactDOMServer.renderToString(pageElement),
      pageFile: pageName,
      pageType: pageName + '.default'
    };
    this.render(SimpleTemplate.render(path.resolve(__dirname, '../../templates/index.html'), data));
  }
}

export default ReactBaseController;
