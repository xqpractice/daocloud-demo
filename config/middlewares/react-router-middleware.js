import React from 'react';
import ReactDOMServer from 'react-dom/server'
import { match, RouterContext } from 'react-router';
import routes from '../../lib/js/routes';

module.exports = (req, res) => {
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if(error) {
      res.status(500).send(error.message);
    } else if(redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if(renderProps) {
      res.status(200).send('<!DOCTYPE html>' + ReactDOMServer.renderToString(<RouterContext {...renderProps} />));
    } else {
      res.status(404).send('Not Found');
    }
  });
};
