import fs from 'fs';
import path from 'path';
import { BaseController } from 'express-common-controller';

class DiagnosticController extends BaseController {
  index() {
    const result = [
      {
        rel: 'index',
        path: '/diagnostic/'
      },
      {
        rel: 'version',
        path: '/diagnostic/version'
      }
    ];
    this.render(result);
  }

  version() {
    fs.readFile(path.join(__dirname, '../../../VERSION'), 'utf8', (err, data) => {
      if (err) this.render('0.0.0');
      this.render(data);
    });
  }
}

export default DiagnosticController;
