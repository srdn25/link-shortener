module.export = {
  logger: {
    serializers: {
      res(res) {
        // The default
        return {
          statusCode: res.statusCode
        }
      },
      req(req) {
        return {
          method: req.method,
          url: req.url,
          path: req.path,
          parameters: req.parameters,
        };
      }
    }
  }
};